## CHEATSHEET RAID

**Redundant Array of Inexpensive Disks** --> Combinar discos para tener redundancia, rendimiento, baja latencia, incremento de ancho de banda y maximizar la habilidad de recuperación en caso de fail.

* Dividir y replicar la información en diferentes discos duros e incrementar la fiabilidad y transferencia.

*Tipos RAID*:

*   RAID 0 = **`DISK STRIPING`** / **VOLUMEN DIVIDIDO** / NO REDUNDANCIA

    * Distribución por bandas.
    
    * Discos con el mismo tamaño o uno mayor que otro.

    * Sin información de PARIDAD. Distribución equitativa.

    * Si falla un disco = Pierde información.

*   RAID 1 = **`DISK MIRRORING`** / **VOLUMEN ESPEJO**

    * Distribución por igual.

    * Tiene REDUNDANCIA.

    * Es una copia a uno o maś discos.

    * Si uno falla, los datos permanecerán intactos.

    * RAID1 sólo puede ser tan grande como el más pequeño de sus discos.

    * Si tenemos 3 discos de 1TB en RAID1, todos tendrán 1TB.

    * Para perder los datos, tienen que fallar todos los discos.

    * Es costoso. 

*   RAID 5 = **`DISK STRIPING WITH PARITY`** 

    * Raid4 + Paridad repartida (Striping con paridad) - Min 3 discos.

    * Tiene redundancia.

    * La capacidad es la suma de todos los discos menos UNO.

    * Sólamente puede sobrevivir a un fallo de disco. Permanecerán los datos gracias a la paridad.

    * Elimina el cuello de botella.

    * Si tengo 3 discos de 1TB a RAID5 cuanta capacidad de almacenamiento tengo?

        * 2TB / La paridad está repartida en los 3 discos y se pierde 1TB.

**SOFTWARE RAID** --> MD Multi Disc.

* Otros RAID

* RAID 2 = RAID0 + RAID1 / Paridad Hamming

* RAID 3 = RAID0 + PARIDAD (Bytes) --> Data striping + un disco de paridad - Min 3 discos (2 ern RAID0 + 1 paridad). If 1 disk fail --> Se recupera con bit de paridad.

* RAID 4 = **``Block Striped (Dedicated Parity Disk)``** --> RAID3 + PARIDAD (Bloques) --> Toda la paridad en un MISMO DISCO --> Genera cuello de botella. Almacenamiento de RAID4 es lo mismo que el más pequeño.

* RAID 6 = **`Striping con Paridad Doble`** --> Lo mismo que el RAID5

* RAID 0 + 1 = **STRIPING Y ESPEJO AL MISMO TIEMPO** --> Se dividen 2 discos y están duplicadas en 2 discos para la velocidad. 

    * Se hace un RAID1 sobre dos RAID0 (Si tenemos 4 discso de 1TB - Útiles solo 2TB ya que 2TB son **COPIA**)

    * Solo pueden fallar 2 discos máximo (Del mismo lado) - No pueden fallar 1 disco para cada lado.

* RAID 1 + 0:

    * Hace un RAID0 sobre dos discos RAID1. Lo mismo que el anterior.

**``Paridad``** --> Es la suma de todos los dispositivos utilizados en una MATRIZ --> Sirve Para recuperarse del fallo del dispositivo. Lee los datos buenos que quedan y los compara con el dato de paridad del almacenamiento conjunto.
Es usada en los niveles 2, 3, 4 y 5.

RAID1 no utiliza paridad.

**IMPORTANTE**

dm - device mapper - dispositivo que hace asignación.

md - multi disk = RAID

* Margin : number --> Identifica la partición.




## PRÁCTICA 1

* EJEMPLO CREAR RAID1: mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2

ORDEN PARA CREAR RAID1 --> **mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2**

mdadm ``--create`` [/dev/md0] ``--chunk=4`` ``--level=1`` [RAID1] ``--raid-devices=3`` [/dev/loopX] x3



PRÁCTICA 1: REVISAR: 

https://github.com/KeshiKiD03/lvm/tree/main/RAID/Pr%C3%A1ctica%201%20(HOWTO)%20-%20Trabajo%20B%C3%A1sico%20con%20RAID



## CREACIÓN RAID

1. DD --> dd if=/dev/zero of=disk01.img bs=1k count=100K ..

dd if=[/dev/zero] of=[name.img] bs=1k count=100k --> `[100k]`

2. LOOPBACK --> losetup /dev/loop0 /opt/lvm/disk01.img...

losetup [/dev/loopX] [path_img]

3. VERIFICAR LOSETUP

losetup -a

4. CREAR RAID1 --> mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2

mdadm --create [/dev/md0] --chunk=4 --level=1 [RAID1] --raid-devices=3 [/dev/loopX] x3

5. Verificar --> tree /dev/disk 

tree [/dev/disk]

6. Formatear --> mkfs -t ext4 /dev/md0

mkfs -t [ext4] [/dev/md0]

7. Montar --> mount /dev/md0 /mnt/

mount [/dev/md0] [/mnt/]

8. Populate --> cp -r /boot/ /mnt/ 

9. Verificar DISK FREE --> df -h



## Examinar el RAID

mdadm ``--detail`` ``--scan`` --> **Vemos el ``ARRAY`` creado por el RAID1**

mdadm ``--detail`` [/dev/md0] --> **Vemos con ``detalle`` el RAID1**

mdadm ``--query`` [/dev/loop0] --> **Examina si es de ``tipo 'md``' (Si no lo es, ``da ERROR``)**

mdadm ``--examine`` [/dev/loop0] --> **``Da información`` de la partición VIRTUAL**

cat [/proc/mdstat] ---> **Observamos los ``diferentes tipos`` de RAID y vemos ``cuales tenemos creadas``.También que particiones virtuales tiene asociadas**



## ERRADA Y RECUPERACIÓN RAID

mdadm /dev/md0 ``--fail`` [/dev/loop1] --> **``Simula un ERROR del LOOP1`` (AL SER RAID1 NO PASA NADA YA QUE SON MIRRORS!!!)**

mdadm /dev/md0 ``--remove`` [/dev/loop1] --> **Ahora que ha fallado, se`` retira del RAID ``(SE HACE EN CALIENTE)**

mdadm ``--manage`` [/dev/md0] ``--add`` [/dev/loop3] --> **Afegim el ``nou loopback al RAID`` --> ``'manage'`` opcional``**






10. PROVOCAR EL FAIL

`mdadm /dev/md0 --fail /dev/loop1 # --> Simula un ERROR del LOOP1 (AL SER RAID1 NO PASA NADA YA QUE SON MIRRORS!!!)`

mdadm [/dev/md0] ``--fail`` [/dev/loopX] --> Indicar disco del RAID

mdadm: set /dev/loop1 faulty in /dev/md0



11. COMPROBAR EL ESTADO EN /PROC/MDSTAT AFTER FAIL

`cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.`
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER FAIL

md0 : active raid1 loop2[2] loop1[1](F) loop0[0]



12. DETAIL /DEV/MD0 (DETALLES RAID1) AFTER FAIL

``mdadm --detail /dev/md0 # --> Vemos los DETALLES creados por el RAID1.``
# Comprobamos AFTER FAIL

mdadm ``--detail`` [/dev/md0]

             State : clean, degraded 


State: clean, degraded --> clean perquè hi ha 2 funcionant i hi ha redundancia de dades (o s'han perdut) i degraded per la partició que s'ha espatllat



13. REMOVE DE /DEV/MD0 EL DISCO FALLADO /DEV/LOOP1 (AFTER FAIL)`

``mdadm /dev/md0 --remove /dev/loop1 # --> Ahora que ha fallado, se retira del RAID (SE HACE EN CALIENTE)``
# Comprobamos AFTER FAIL

mdadm [/dev/md0] ``--remove`` [/dev/loop1]

mdadm: hot removed /dev/loop1 from /dev/md0



14. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER RETIRO

``cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.``
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER FAIL

md0 : active raid1 loop2[2] loop0[0]



15. SE VUELVE A GENERAR OTRO DISCO VIRTUAL

``dd if=/dev/zero of=disk04.img bs=1k count=100k # --> Creem un altre imatge per afegir-la al RAID``



16. SE AÑADE LA IMAGEN AL LOOPBACK

``losetup /dev/loop3 disk04.img # --> Afegim la nova imatge al loopback``



17. AÑADIR EL NUEVO LOOPBACK (/DEV/LOOP3) A RAID

``* mdadm --manage /dev/md0 --add /dev/loop3 # --> Afegim el nou loopback al RAID --> 'manage' opcional``

mdadm ``--manage`` [/dev/md0] ``--add`` [/dev/loopX] --> Añade



18. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER ADD DE /DEV/LOOP3

``cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.``
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER ADD /DEV/LOOP3`

cat [/proc/mdstat]

md0 : active raid1 loop3[3] loop2[2] loop0[0]



19. DETAIL /DEV/MD0 (DETALLES RAID1) AFTER ADD DE /DEV/LOOP3

``mdadm --detail /dev/md0 # --> Vemos los DETALLES creados por el RAID1.``
# Comprobamos AFTER ADD /DEV/LOOP3

mdadm ``--detail`` [/dev/md0]

3       7        3        1      active sync   /dev/loop3


## PARAR Y ENCENDER RAID

mdadm ``--stop`` [/dev/md0]

mdadm ``--assemble`` ``--scan``

mdadmin ``--assemble`` [/dev/md0] ``--run`` [/dev/loop0] [/dev/loop1] [/dev/loop2]

mdadm ``--detail`` ``--scan`` > [/etc/mdadm.conf]

20. PARAR EL RAID (NO DEJARÁ, ANTES UN UMOUNT)

mdadm ``--stop`` [/dev/md0] # --> NO ENS DEIXARÀ PERQUÈ ELS LOOPBACKS ESTAN MUNTATS A /mnt

21. UMOUNT FIRST

``umount /mnt`` # --> Desmuntem el directori /mnt PRIMER per poder parar el RAID


22. PARAR EL RAID (¡AHORA SI!)

mdadm ``--stop`` [/dev/md0] --> Ara SI podrem parar el RAID

-----------------------------------------------------------
Hem d'eliminar la ``marca del RAID`` un cop desmuntat per quan engegui l'ordinador no intenti muntar-lo. Ordre: ``mdadm -v --zero-superblock /dev/loop[]``
-----------------------------------------------------------


23. CANTIDAD DE DISCOS ACTIVOS (ASSEMBLE)

mdadm ``--assemble`` ``--scan`` 

* --> Ens informa de amb quants dicos ha iniciat el RAID i ens informa de que l'array de md0 enacara està actiu ja que l'hem aturat, NO ELIMINAT!

#  Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID

mdadm: /dev/md/0 has been started with **3 drives**.

mdadm: Found some drive for an array that is already active: ``/dev/md/0``

mdadm: giving up

``--assemble`` (engega el RAID) | ``--scan`` (escaneja particions de RAID e intenta juntar).

Examina el discos e intenta *deduir les coses*, està trobant *4 particions* i las *assigna* al */dev/md0* quan aquest té assignades realment *3*, i les engega amb les últimes 3 trobades (ho enten igualment amb aquestes 3), encara que haguessin 2, ho hauria engegat igualment.

24. ESCOGER DISPOSITIVOS A UTILIZAR (ASSEMBLE)

mdadm ``--assemble`` [/dev/md0] ``--run`` [/dev/loop0] [/dev/loop2] [/dev/loop3] # --> Triem els dispositius que volem que utilitzi, si possem per exemple /dev/loop1, iniciara 2 en compte de 3

mdadm: /dev/md0 has been started with 3 drives.


25.  AÑADIR INFORMACIÓN DEL SCAN AL FICHERO EN CUESTIÓN (ASSEMBLE) (AUTOMÁTICO)

mdadm ``--detail`` ``--scan`` > [/etc/mdadmin.conf] # --> Fiquem l'info del 'scan' al fitxer en questió (sabrà quin RAID ha d'arrancar, explicació + endevant)


26. PARAR EL RAID

mdadm --stop /dev/md0 # --> Aturem el RAID


27. GENERAR EL ASSEMBLE Y EL SCAN DE NUEVO / CANTIDAD DE DISCOS ACTIVOS (MANUAL)

mdadm ``--assemble`` ``--scan`` # --> Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID.


[busca_fichero_mdadm.conf-SCAN]

mdadm: /dev/md/0 has been started with 3 drives.
mdadm: Found some drive for an array that is already active: /dev/md/0
mdadm: giving up.



28. ELIMINAR LA MARCA (TAG) DEL RAID

mdadm ``-v`` ``--zero-superblock`` [/dev/loop1] /dev/loop2 /dev/loop3 /dev/loop4 # --> Els hi treiem la marca (netejem)



## AUTOMATIZAR EL ARRANNQUE

Se genera un fichero de configuración mdadm-conf --> Se guarda en el **/etc/fstab**


29. GENERAR EL ASSEMBLE Y EL SCAN DE NUEVO / CANTIDAD DE DISCOS ACTIVOS + AÑADIR INFO EN /ETC/MDADM.CONF (AUTOMÁTICO)

mdadm ``--assemble`` ``--scan`` # --> Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID + AÑADE LA INFO DEL 'SCAN' AL FICHERO (SABRÁ QUE RAID TIENE QUE ARRANCAR).

30. MODIFICAR EL /ETC/FSTAB

cat /etc/fstab

/dev/md0 /mnt ext4 default 0 0





## PRÁCTICA PROPOSADA RAID + SPARE

* Crear un RAID1 con 2 particiones (loop0 y loop1) y dos discos de SPARE.

**LA CREACIÓN DEL RAID**

mdadm ``--create`` /dev/md0 ``--level=1`` ``--raid-devices=2`` /dev/loop0 /dev/loop1 ``--spare-devices=2`` /dev/loop2 /dev/loop3 --> Afegim 2 devices al RAID1 i 2 discos spare

cat ``/proc/mdstat``

**OBSERVAR LOS DATOS**

mdadm ``--detail`` /dev/md0 --> Working Devices: 4 (Però la redundància és en 2 dispositius)


    Number   Major   Minor   RaidDevice State
       0       7        0        0      active sync   /dev/loop0
       1       7        1        1      active sync   /dev/loop1

       2       7        2        -      spare   /dev/loop2
       3       7        3        -      spare   /dev/loop3


**FAIL DE UN DISCO (SPARE ENTRA EN ACCIÓN)**

mdadm /dev/md0 ``--fail`` /dev/loop1 --> Esptallem el 1

``mdadm: set /dev/loop1 faulty in /dev/md0``


mdadm --detail /dev/md0 --> Entra a treballar el 3 directament


    Number   Major   Minor   RaidDevice State
       0       7        0        0      active sync   /dev/loop0
       3       7        3        1      active sync   /dev/loop3

       1       7        1        -      faulty   /dev/loop1
       2       7        2        -      spare   /dev/loop2





**FAIL DE UN OTRO DISCO (SPARE ENTRA EN ACCIÓN)**

mdadm /dev/md0 --fail /dev/loop3 --> Esptallem el 3

``mdadm: set /dev/loop3 faulty in /dev/md0``


mdadm ``--detail`` /dev/md0 --> **Segueix 'clean' perquè hi ha 2 discos treballant**

       0       7        0        0      active sync   /dev/loop0
       2       7        2        1      active sync   /dev/loop2

       1       7        1        -      faulty   /dev/loop1
       3       7        3        -      faulty   /dev/loop3



mdadm /dev/md0 ``--fail`` /dev/loop2 --> Espatllem el 2

mdadm: set /dev/loop2 faulty in /dev/md0

mdadm --detail /dev/md0

       0       7        0        0      active sync   /dev/loop0
       -       0        0        1      removed

       1       7        1        -      faulty   /dev/loop1
       2       7        2        -      faulty   /dev/loop2
       3       7        3        -      faulty   /dev/loop3


dd if=/dev/zero of=disk05.img bs=1k count=100K --> Creem la nova imatge

losetup /dev/loop4 disk05.img --> L'afegim al loopback

mdadm /dev/md0 --add /dev/loop4 --> Afegim al RAID la nova imatge.

mdadm --detail /dev/md0 --> Tornem a tenir 2 discos treballant

       0       7        0        0      active sync   /dev/loop0
       4       7        4        1      active sync   /dev/loop4

       1       7        1        -      faulty   /dev/loop1
       2       7        2        -      faulty   /dev/loop2
       3       7        3        -      faulty   /dev/loop3




**ELIMINAR LOS DOS DISCOS FAIL**

mdadm /dev/md0 ``--remove`` /dev/loop1 /dev/loop2 /dev/loop3 --> Els esborrem en 'calent'
AÑADIR DE NUEVO LOS DOS DISCOS (ROL DE SPARE)

mdadm: hot removed /dev/loop1 from /dev/md0
mdadm: hot removed /dev/loop2 from /dev/md0
mdadm: hot removed /dev/loop3 from /dev/md0


mdadm /dev/md0 --add /dev/loop1 --> Afegim el 1 al 'banquillo' (spare)

mdadm /dev/md0 --fail /dev/loop1 /dev/loop4 --> Treiem el 1 i 4´

mdadm: set /dev/loop1 faulty in /dev/md0
mdadm: set /dev/loop4 faulty in /dev/md0


mdadm /dev/md0 --fail /dev/loop0 --> FRACÀS!

mdadm -v --zero-superblock /dev/loop1 /dev/loop2 /dev/loop3 /dev/loop4 /dev/loop5





## PRACTICA 2: RAID5

mdadm ``--create`` /dev/md0 ``--level=5`` ``--raid-devices=3`` /dev/loop1 /dev/loop2 /dev/loop3 --spare-devices 1 /dev/loop4 --> Creem el RAID 5

cat /proc/mdstat

mdadm ``--detail`` /dev/md0

rm -rf /mnt/* --> Esborrem la xixa que hi havia abans

mkfs -t ``ext4`` /dev/md0 --> Li fiquem format

cp /bin/?? /mnt --> Copiem xixa

mdadm /dev/md0 ``--fail`` /dev/loop2 --> Generem un error

mdadm /dev/md0 ``--remove`` /dev/loop2

cat /proc/mdstat

umount /mnt

mdadm ``--stop`` /dev/md0 --> Aturem el RAID

mdadm ``--assemble`` ``--scan`` --> Li diem que ens monti automàticament

mdadm ``--detail`` /dev/md0

mdadm /dev/md0 ``--fail`` /dev/loop4 --> Generem un altra errada (fail de loop4Ç)

mdadm /dev/md0 ``--remove`` /dev/loop4 --> L'esborrem (Perdem la paritat encara que està repartida per els 3 discos)

mdadm /dev/md0 ``--add`` /dev/loop2 --> Tornem a afegir el 2
cat /proc/mdstat

mdadm ``--examine`` ``--scan`` > ``/etc/mdadmin.conf`` --> Grabem el resultat al fitxer


cat /etc/mdadmin.conf

cat /proc/mdstat --> 512k chunk (loop1, 3 i 4)

mdadm ``--stop`` /dev/md0 --> L'aturem

cp /etc/mdadmin.conf /etc/mdadm/mdadm.conf


mdadm ``--assemble`` /dev/md0 --> Agafarem l'arxiu que hem generat abans



Observar que en tractar-se d’un RAID5 format per tres unitats de 100M més una de spare de 100M, l’espai utilitzable d’emmagatzemament és proper als 200M.

Dels tres discos de RAID dos emmagatzemem dades i un tercer paritat, però no tal qual (seria raid 4) sinó que entre els tres discos es barregen dades i paritat.

Així doncs, si falla un dels tres discos el sistema deixa de funcionar. Si hi ha un disc de spare, aquest s’hauria d’activar automàticament per solventar el problema. Si un altre disc falla, llavors el RAID deixa de funcionar.


---






## PRÁCTICA 4: (start/stop/assemble/md127):

**man mdadm** --> mdadmin --> *Administración de discos RAID*.

* **Opciones:**

    * **`ASSEMBLE:`** --> Ensambla un **`ARRAY creado previamente`** a un **`ARRAY activo`**.

    * **`BUILD`** --> Construye un ARRAY-

    * **`CREATE`** --> Crea un **ARRAY por superblocks** con varios dispositivos.

    * **`FOLLOW OR MONITOR`** --> MONITORIZA 

    * **`GROW`** --> **INCREMENTA O DECREMENTA UN ARRAY**

    * **`INCREMENTAL ASSEMBLY`** --> Añade un único dispositivo a un ARRAY

    * **`MANAGE`** --> Específicos componentes de un array - añadir **nuevos spares** o **remover fails**. 

    ***` MISC:`**

------------------------------------

**`FICHEROS IMPORTANTES`**

**`/proc/mdstat`** --> Lista los activos MD devices con **información acerca de ellos**. MDADM lo usa para buscar ARRAYS con --scan.

**`/etc/mdadm.conf`** --> Configuración donde indica dónde los dispositivos pueden ser buscados, si contienen MD superblock --> **UUID**

------------------------------------

**COMANDOS MDADM**

**`mdadm --query /dev/name-of-dev`** --> Información acerca de una RAID

**`mdadm --assemble --scan`** --> Ensambla ARRAY, listado en un **config file**

**`mdadm --stop --scan`** --> Para el ARRAY.

**`mdadm --follow --scan --delay=120`** --> Solo si hay un Email programado en el config file.


**`mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/hd[ac]1`** --> Crea una RAID1 de /dev/hda1 y /dev/hdc1

**`echo 'DEVICE /dev/hd*[0-9] /dev/sd*[0-9]' > mdadm.conf`** 
**`mdadm --detail --scan >> mdadm.conf`**
-->  Crea un prototipo de CONFIG FILE que describe que hay ARRAYS ACTIVOS que se conocen como IDE o SCSI. El fichero debe ser revisado antes de usarlo.

**`mdadm --create --help`** --> HELP CREATE

**`mdadm --config --help`** --> HELP CONFIG

**`mdadm --help`** --> HELP GENERAL

------------------------------------

**`IMPORTANTE`**

Usando el fichero **/etc/mdadm.conf** --> Se puede guardar la configuración del ARRAY para que se pueda **AUTOMATIZAR EL ARRANQUE DEL ARRAY**.

En encender el sistema automáticamente, pondrá en marcha los **ARRAYS** que se indiquen.

El fichero también permite hacer **ASSEMBLE del RAID** por el **NOMBRE DEL RAID**


------------------------------------

* **`RECUERDA`**

1. CREARLO

2. **`mdadm --assemble --scan`** --> Examina las particiones e intenta poner el marcha lo que cree conveniente, busca los ARRAYS y los va creando.

3. **`mdadm --assemble nom-raid`** --> Este raid debe estar definido en **/etc/mdadm.conf**

4. Automáticamente en encender el sistema si hay el fichero de **`/etc/mdadm.conf`**

5. Manualmente con la orden **`"mdadm --assemble nomraid device1 device2"`**

------------------------------------

### EJEMPLO 1: REGENERACIÓN AUTOMÁTICA / REGENERACIÓN POR NOMBRE DE RAID

* dd if=/dev/zero of=disk01.img bs=1k count=100k --> Creem 5

* losetup /dev/loop1 disk01.img --> Assignem al loopback (les 5)

* mdadm --create /dev/md/backup --level=1 --raid-devices=2 /dev/loop1 /dev/loop2 --spare-devices=1 /dev/loop3 --> Creem el RAID

* cat /proc/mdstat

* tree /dev/disk --> Li assigna el md127 com a nom

* mdadm --examine --scan --> Ens mostra el nom de l'array, la metadata que utilitzem (firma) i el UUID de l'array i els discs de spare

* mdadm --examine --scan > /etc/mdadm/mdadm.conf --> ÉS DIFERENT DEL HOW TO!!!!!!!

* mdadm --stop /dev/md/backup --> El parem

* mdadm --assemble --scan --> L'engeguem (engega el que troba, anirà partició per partició=

* mdadm --stop /dev/md/backup --> El tornem a parar

* mdadm --assemble /dev/md/backup --> El torne a engegar però possant-li el nom (sap el nom perquè ho hem possat al fitxer de configuració!)

* mdadm --stop /dev/md/backup

* mv /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf.no --> Canviem el nom per comprobar el que hem dit abans

* mdadm --assemble /dev/md/backup --> No deixa perquè no ho troba al fitxer de configuració

mdadm: /dev/md/backup not identified in config file.

* mdadm --assemble /dev/md/backup /dev/loop1 /dev/loop2 --> Li assignem els loops a engegar

* mdadm --stop /dev/md/backup

* mdadm --assemble /dev/md/backup /dev/loop1 /dev/loop2 /dev/loop3 --> Li afegim el 3 com a spare (ho detecta ell sol)

* mdadm --create /dev/md/live --level=1 --raid-devices=2 /dev/loop4 /dev/loop5 --> Creem un altra

* cat /proc/mdstat --> Ara tindrem 2 RAIDS (md127 (abans) i md126 (el d'ara))

* tree /dev/disk

* mdadm --examine --scan --> Ara ens genera la informació dels 2 RAIDS (amb el contingut previament nombrat)

* mdadm --examine --scan > /etc/mdadm/mdadm.conf --> Ho guardem al fitxer de configuració

* mdadm --stop /dev/md/\* --> Aturem els dos

mdadm: stopped /dev/md/backup

mdadm: stopped /dev/md/live

* mdadm --assemble --scan --> Encara que li diem que faci l'assemble i l'scan, si existeix el fitxer de configuració PRIMER MIRARÀ EL FITXER DE CONFIGURACIÓ!!!!

* mdadm --stop /dev/md/\* --> Els asturem

* mdadm --stop --scan --> Busca que hi ha i ho para tot

* mdadm --assemble /dev/md/backup --> Només engeguem el seleccionat

* mdadm --stop --scan --> Ho aturem tot

* cp /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf.no --> Fem una copia de seguretat

* vim /etc/mdadm/mdadm.conf --> Editem el fitxer i ens carreguem el segon RAID

* mdadm --assemble --scan --> Només enega 1 ja que el fitxer encara te contingut

* rm /etc/mdadm/mdadm.conf --> Ens ho carreguem

* mdadm --stop --scan --> Ho aturem

* mdadm --assemble --scan --> Ara, com no hi ha fitxer de configuració, engegarà mitjançant el que vagi trobant

* mdadm --stop --scan --> Ho aturem tot

-------------------------------------------------------------------------------------

**`UNDER CONSTRUCTION - USE BEFORE`**

**1. CREAR RAID5**
```bash
mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/loop1 /dev/loop2 /dev/loop3 --spare-devices 1 /dev/loop4 # --> Creem el RAID 5
```

**2. VER PROC MDSTAT**
```bash
cat /proc/mdstat
```

**3. VERIFICAR EL RAID**
```bash
mdadm --detail /dev/md0
```

**4. CREAR RAID1 Y FORMATAR**
```bash
rm -rf /mnt/\* ; # --> Esborrem la xixa que hi havia abans
mkfs -t ext4 /dev/md0 # --> Li fiquem format
```

**5. POPULATE A MNT**
```bash
cp /bin/x\* /mnt --> Copiem xixa
```

**6. PROVOCAR UN FAIL EN EL LOOP 2**

```bash
mdadm /dev/md0 --fail /dev/loop2 #  --> Generem un error
```
**7. QUITAR EL DISCO FAIL LOOP 2**
```bash
mdadm /dev/md0 --remove /dev/loop2
```

**8. VER EL STATUS DEL RAID**
```bash
cat /proc/mdstat
```
**9. DESMONTAR EL RAID**
```bash
umount /mnt
```

**10. PARAR RAID**
```bash
mdadm --stop /dev/md0 --> Aturem el RAID
```

**11. ENSAMBLAR RAID - LO MONTA AUTOMÁTICAMENTE**
```bash
mdadm --assemble --scan # --> Li diem que ens monti automàticament
```

**12. OBSERVAMOS DETALLES DE LA RAID**
```bash
mdadm --detail /dev/md0
```

**13. GENERAR FAIL EN LOOP 4**
```bash
mdadm /dev/md0 --fail /dev/loop4 # --> Generem un altra errada (fail de loop4Ç)
```

**14. EXAMINAR - DA INFORMACIÓN DE LA PARTICIÓN VIRTUAL LOOP 0**
```bash
mdadm --examine /dev/loop0 # --> Da información de la partición VIRTUAL
```

**15. BORRAMOS EL LOOP 4 DEL RAID - PERDEMOS PARIDAD**
```bash
mdadm /dev/md0 --remove /dev/loop4 # --> Lesborrem (Perdem la paritat encara que està repartida per els 3 discos)
```

**14. VOLVER A AÑADIR EL LOOP 2**
```bash
mdadm /dev/md0 --add /dev/loop2 # --> Tornem a afegir el 2
```

**15. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER FAIL**
```bash
cat /proc/mdstat # --> 512k chunk (loop1, 3 i 4)
```

**16. PARAR EL RAID5 AFTER `FAIL`**
```bash
mdadm --stop /dev/md0 # --> L aturem
```

**17. MOVER LA CONFIGURACIÓN DE MDADM (RAID5) /DEV/MD0**
```bash
mv /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf.hisx2
```

**18. SE COPIA DE NUEVO**
```bash
mv /etc/mdadm/mdadm.conf /etc/mdadm/.
```

**19. SE MUEVE MDADM.CONF A LA CARPETA /ETC/MDADM/MDADM.CONF**
```bash
mv /etc/mdadm.conf /etc/mdadm/mdadm.conf
```

**20. SE VUELVE A ENSAMBLAR EL DISCO RAID**
```bash
mdadm --assemble /dev/md0 # --> Agafarem l arxiu que hem generat abans
```




31. 

32. 

33. 

34. 

35. 

36. 

37. 

38. 

39. 

40. 

41. 

42. 

43. 

44. 

45. 

46. 

47. 

48. 

49. 

50. 

51. 

52. 

53. 

54. 

55. 

56. 

57. 

58. 

59. 

60. 

61. 

62. 

63. 

64. 

65. 

66. 

67. 

68. 

69. 

70. 

71. 

72. 

73. 

74. 

75. 

76. 

77. 

78. 

79. 

80. 

81. 

82. 

83. 

84. 

85. 

86. 

87. 

88. 

89. 

90. 

91. 

92. 

93. 

94. 

95. 

96. 

97. 

98. 

99. 

100. 

101. 

102. 

103. 

104. 

105. 

106. 

107. 

108. 

109. 

110. 

111. 

112. 

113. 

114. 

115. 

116. 

117. 

118. 

119. 

120. 

121. 

122. 

123. 

124. 

125. 

126. 

127. 

128. 

129. 

130. 

131. 

132. 

133. 

134. 

135. 

136. 

137. 

138. 

139. 
