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

## PRÁCTICA 1: TRABAJO BÁSICO CON RAID

### 1. CREAR EL RAID

**`EJEMPLO DE CREACIÓN DE UN RAID1`**
```yaml
mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2
```

------------------------------------

**1. CREAR FICHEROS DE IMAGEN**
```bash
dd if=/dev/zero of=disk01.img bs=1k count=100K ; 
dd if=/dev/zero of=disk02.img bs=1k count=100K ; 
dd if=/dev/zero of=disk03.img bs=1k count=100K # --> Crear ficheros de IMAGEN de un DISCO VIRTUAL
```

**2. ASIGNAR A LOOPBACK**
```bash
losetup /dev/loop0 /opt/lvm/disk01.img ;
losetup /dev/loop1 /opt/lvm/disk02.img ;
losetup /dev/loop2 /opt/lvm/disk03.img # --> Asocia un /dev/loopX a un DISCO (Físico o Virtual)
```

**3. VERIFICAR**
```bash
losetup -a # --> Mostra els dispositius /dev/loopX
```

**4. CREAR RAID1**
```bash
mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2
```

**5. VERIFICAR**
```bash
tree /dev/disk # --> Árbol de los discos
```


`| |-- md-name-portatil.localdomain:0 -> ../../md0`

`| | -- md-uuid-b5fd01dc:53a820d3:190ae832:4f3144f8 -> ../../md0`

**7. FORMATEAR**

* Disponemos de un dispositivo **`/dev/md0`** --> **RAID1** formado por las 3 particiones **`LOOP0, LOOP1, LOOP2.`**

* Se trata de un RAID de NIVEL1 con 3 discos **`ESPEJO / MIRRORING`**

* Ahora hay que añadirle un **`SISTEMA de FICHEROS / FORMATEARLO`** y **`MONTARLO al FILESYSTEM`**

* Se monta a **`/mnt`** por ejemplo.

* Se copian los datos de **`/boot`** por ejemplo.

* Observar el almacenamiento con **`df`**.

```bash
mkfs -t ext4 /dev/md0 # --> Formatea el RAID1 del tipo EXT4
```
**7. OBSERVAR DISCOS**
```bash
blkid # --> Dice el ID de cada ELEMENTO de HARDWARE, aunque sea VIRTUAL (Crea Block Device Atributes).
```

`/dev/md0: UUID="005caef9-e1e0-429a-bc81-7fcb5ba290cb" TYPE="ext4"`

**8. MONTAR**
```bash
mount /dev/md0 /mnt/ # --> Montamos el RAID1 (Multiple Disk 0) a /mnt
```
**9. POPULATE RAID1**
```bash
cp -r /boot/ /mnt/ # --> Copiamos los datos recursivos de BOOT a /mnt
```

**10. DISK FREE**
```bash
df -h # --> Muestra el DISK FREE.
```


### 2. Examinar el RAID

**`EJEMPLO DE EXAMINACIÓN DE RAID`**

* mdadm --detail --scan
* mdadm --detail /dev/md0
* mdadm --query /dev/loop0
* mdadm --examine /dev/loop0
* cat /proc/mdstat

**1. DETAIL SCAN (VEMOS RAID1 CREADA)**
```bash
mdadm --detail --scan # --> Vemos el ARRAY creada por el RAID1.
```

**2. DETAIL /DEV/MD0 (DETALLES RAID1)**
```bash
mdadm --detail /dev/md0 # --> Vemos los DETALLES creados por el RAID
```

**3. QUERY (SI ES UN ARRAY (MD))**
```bash
mdadm --query /dev/loop0 # --> Examina si es de tipo 'md' (Si no lo es, da ERROR)
```

**4. EXAMINE /DEV/LOOP0 (INFORMACIÓN DISPO)**
```bash
mdadm --examine /dev/loop0 # --> Da información de la partición VIRTUAL
```

**5. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT**
```bash
cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.
# También que particiones virtuales tiene asociadas
```

### 3. Errada i recuperació

**`EJEMPLO DE FAIL Y RECUPERACIÓN RAID`**

* mdadm /dev/md0 --fail /dev/loop1
* mdadm /dev/md0 --remove /dev/loop1
* mdadm --manage /dev/md0 --add /dev/loop3

**1. PROVOCAR FAIL AL /DEV/LOOP1**
```bash
mdadm /dev/md0 --fail /dev/loop1 # --> Simula un ERROR del LOOP1 (AL SER RAID1 NO PASA NADA YA QUE SON MIRRORS!!!)
```

**2. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER FAIL**
```bash
cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER FAIL
```

**3. DETAIL /DEV/MD0 (DETALLES RAID1) AFTER `FAIL`**
```bash
mdadm --detail /dev/md0 # --> Vemos los DETALLES creados por el RAID1.
# Comprobamos AFTER FAIL
```

**State: `clean`,` degraded` --> `clean` perquè hi ha `2 funcionant` i hi ha `redundancia` de dades (o s'han perdut) i `degraded` per la partició que s'ha `espatllat`**

**4. REMOVE DE /DEV/MD0 EL DISCO FALLADO /DEV/LOOP1 (AFTER FAIL)**
```bash
mdadm /dev/md0 --remove /dev/loop1 # --> Ahora que ha fallado, se retira del RAID (SE HACE EN CALIENTE)
# Comprobamos AFTER FAIL
```

`mdadm: hot removed /dev/loop1 from /dev/md0`

**5. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER `RETIRO`**
```bash
cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER FAIL
```

**6. SE VUELVE A GENERAR OTRO DISCO VIRTUAL**
```bash
dd if=/dev/zero of=disk04.img bs=1k count=100k # --> Creem un altre imatge per afegir-la al RAID
```

**7. SE AÑADE LA IMAGEN AL LOOPBACK**
```bash
losetup /dev/loop3 disk04.img # --> Afegim la nova imatge al loopback
```

**8. AÑADIR EL NUEVO LOOPBACK (/DEV/LOOP3) A RAID**
```bash
mdadm --manage /dev/md0 --add /dev/loop3 # --> Afegim el nou loopback al RAID --> 'manage' opcional
```

**Quan afegim un disc nou, en `background` va fent tota la '`pesca`' de sincronització (va volcant les dades del mirror)**

**9. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER `ADD DE /DEV/LOOP3`**
```bash
cat /proc/mdstat # --> Observamos los diferentes tipos de RAID y vemos cuales tenemos creadas.
# También que particiones virtuales tiene asociadas
# Comprobamos AFTER ADD /DEV/LOOP3
```

`loop3[3]`

**3. DETAIL /DEV/MD0 (DETALLES RAID1) AFTER `ADD DE /DEV/LOOP3`**
```bash
mdadm --detail /dev/md0 # --> Vemos los DETALLES creados por el RAID1.
# Comprobamos AFTER ADD /DEV/LOOP3
```

`active sync /dev/loop3`



### 4. Aturar / Engegar el RAID

Para encender **UN RAID** hay **`3 MECANISMOS`**:

* Pedirle a MDADM que EXAMINE todas las **PARTICIONES DEL SISTEMA** (**`SCAN`**).

    * Las particiones tienen un superblock --> Indica si son parte de un Array y de cual.

* Indicar a **`MDADM`** que ajunte las particiones concretas que le indiquemos como *`ARGUMENTOS`*.

    * **`FORZAR QUE USE PARTICIONES INDICADAS`**

* Generar un fichero de configuración *`/etc/mdadm.conf`* donde hay la información necesaria para **`automatizar el RAID`**.

    * Opción para poder encender los RAID al encender el **SISTEMA**.

**`EJEMPLO DE PARAR Y ENCENDER RAID`**

* mdadm --stop /dev/md0
* mdadm --assemble --scan
* mdadmin --assemble /dev/md0 --run /dev/loop0 /dev/loop1/dev/loop2
* mdadm --detail --scan > /etc/mdadm.conf

**1. PARAR EL RAID (NO DEJARÁ, ANTES UN UMOUNT)**
```bash
mdadm --stop /dev/md0 # --> NO ENS DEIXARÀ PERQUÈ ELS LOOPBACKS ESTAN MUNTATS A /mnt
```

**2. UMOUNT FIRST**
```bash
umount /mnt # --> Desmuntem el directori /mnt PRIMER per poder parar el RAID
```

**3. PARAR EL RAID (¡AHORA SI!)**
```bash
mdadm --stop /dev/md0 # --> Ara SI podrem parar el RAID
```


**Les particions existeixen, però el RAID no apareix per exemple a 'tree /dev/disk'**

**Hem **`d'eliminar`** la **`marca del RAID`** un cop desmuntat per quan engegui l'ordinador no intenti muntar-lo. Ordre: `mdadm -v  --zero-superblock /dev/loop[]`**

**4. CANTIDAD DE DISCOS ACTIVOS (ASSEMBLE)**
```bash
mdadm --assemble --scan # --> Ens informa de amb quants dicos ha iniciat el RAID i ens informa de que l'array de md0 enacara està actiu ja que l'hem aturat, NO ELIMINAT!
#  Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID
```

`mdadm: giving up`

**`--assemble` (engega el RAID) | `--scan` (escaneja particions de RAID e intenta juntar)**

**`Examina` el discos e intenta `deduir` les coses, està `trobant 4 particions` i las `assigna` al `/dev/md0` quan aquest té assignades realment `3`, i les engega amb les últimes 3 trobades (ho enten igualment amb aquestes 3), encara que haguessin 2, ho hauria engegat igualment.**

**5. ESCOGER DISPOSITIVOS A UTILIZAR (ASSEMBLE)**
```bash
mdadm --assemble /dev/md0 --run /dev/loop0 /dev/loop2 /dev/loop3 # --> Triem els dispositius que volem que utilitzi, si possem per exemple /dev/loop1, iniciara 2 en compte de 3

```

mdadm: /dev/md0 has been started with 3 drives.


**6. AÑADIR INFORMACIÓN DEL SCAN AL FICHERO EN CUESTIÓN (ASSEMBLE) (AUTOMÁTICO)**
```bash
mdadm --detail --scan > /etc/mdadmin.conf # --> Fiquem l'info del 'scan' al fitxer en questió (sabrà quin RAID ha d'arrancar, explicació + endevant)

```


**7. PARAR EL RAID**
```bash
mdadm --stop /dev/md0 # --> Aturem el RAID

```

**8. GENERAR EL ASSEMBLE Y EL SCAN DE NUEVO / CANTIDAD DE DISCOS ACTIVOS (MANUAL)**
```bash
mdadm --assemble --scan # --> Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID.
```

**9. ELIMINAR LA MARCA (TAG) DEL RAID**
```bash
mdadm -v --zero-superblock /dev/loop1 /dev/loop2 /dev/loop3 /dev/loop4 # --> Els hi treiem la marca (netejem)

```

### 5. Automatitzar l'arrancada del RAID

Para automatizar el arranque, se genera un fichero de configuración llamado **`mdadm.conf`**. Hace falta guardarlo en **`/etc/fstab`**.

Para que monte el RAID automáticamente.

**1. GENERAR EL ASSEMBLE Y EL SCAN DE NUEVO / CANTIDAD DE DISCOS ACTIVOS + AÑADIR INFO EN /ETC/MDADM.CONF (AUTOMÁTICO)**
```bash
mdadm --assemble --scan # --> Examina TODAS LAS PARTICIONES DEL SISTEMA e INTENTA "ENSAMBLAR" TODAS AQUELLAS QUE CREE QUE FORMAN UN RAID + AÑADE LA INFO DEL 'SCAN' AL FICHERO (SABRÁ QUE RAID TIENE QUE ARRANCAR).
```

**2. MODIFICAR EL /ETC/FSTAB**
```bash
cat /etc/fstab

```

`/dev/md0 /mnt ext4 default 0 0`












