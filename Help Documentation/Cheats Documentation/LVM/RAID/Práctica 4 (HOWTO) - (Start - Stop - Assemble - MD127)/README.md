# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

## INDEX

* **PRÁCTICA 1**: [PRÁCTICA 1](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)

    * **RAID**: [RAID](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)

    * **RAID**: [RAID](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)

    * **RAID**: [RAID](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)

    * **RAID**: [RAID](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)

    * **RAID**: [RAID](https://github.com/KeshiKiD03/samba21#pr%C3%A1ctica-pam---ldap---samba-en-aws-educate)


# Pràctiques RAID:

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