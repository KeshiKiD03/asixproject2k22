-----------
-- PLANTILLA --
-----------

<!---
# Plantilla H1
## Plantilla H2
### Plantilla H3
-->
<!--- <img src="https://phoneky.co.uk/thumbs/screensavers/down/original/linux_3rj131p8.gif" />
-->

⭐️ **PLANTILLA** ⭐️

| 🔥PLANTILLA TALBA❗🔥 | 
| ------------- |
| *Plantilla* |


--------------------------------------------------------------------------------

# **Aaron Andal**

# **UF1 - DATA AT REST**

## **LVM**

## **Práctica (1) RAID + LVM en LOOPS**

### **RAID 1 DOS DISCS de 500.**

* Se crean **2 unidades físicas imaginarias** usando **dd** para generar espacio de disco virtual.

* Se asignan ficheros a un **dispositivo** de disco físico de **loopback**. 

* Se crean **2 particiones** **/dev/loop2**, **/dev/loop3**.

* Crear los 2 **ficheros de imagen**

#### **DD (Conver and COPY a FILE) --> /dev/zero (Imaginario)**

```
root@i11:/opt/lvm# dd if=/dev/zero of=disk01.img bs=1k count=500K
512000+0 records in
512000+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.533952 s, 982 MB/s
```
```
root@i11:/opt/lvm# dd if=/dev/zero of=disk02.img bs=1k count=500K
512000+0 records in
512000+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.540251 s, 970 MB/s

```

* Se crea una carpeta en /opt 

* mkdir lvm

* Se los asigna al LOOPBACK como ROOT (Se empieza del 2 al 3) # En la CLASE

```
## ¡¡ YA ESTÁ OCUPADO !!
root@i11:/opt/lvm# losetup /dev/loop0 disk01.img 
losetup: disk01.img: failed to set up loop device: Device or resource busy
```

* Si ya tuvieramos los LOOPS ocupados con el comando --> **losetup -d /dev/loopX** --> **Podemos eliminar el LOOP**.
```
root@i11:/opt/lvm# losetup -d /dev/loop2
root@i11:/opt/lvm# losetup -d /dev/loop3

root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
root@i11:/opt/lvm# 
```


#### **Asignarlos a un dispositivo LOSETUP (/dev/loop2 /dev/loop3)**

* Añadimos a un DISPOSITIVO LOSETUP
```
root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
```
```
root@i11:/opt/lvm# losetup /dev/loop2 disk01.img 
root@i11:/opt/lvm# losetup /dev/loop3 disk02.img 
```
* Verificamos
```
root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop2: [66306]:5245283 (/opt/lvm/disk01.img)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
/dev/loop3: [66306]:5245290 (/opt/lvm/disk02.img)

root@i11:/opt/lvm# 
```


#### **Crear la RAID1 con los DOS DISCOS (/dev/loop2 /dev/loop3)**

* Creamos el RAID 1
```
root@i11:/opt/lvm# mdadm --create /dev/md/raid_lvm0 --level=1 --raid-devices=2 /dev/loop2 /dev/loop3

mdadm: Note: this array has metadata at the start and
    may not be suitable as a boot device.  If you plan to
    store '/boot' on this device please ensure that
    your boot-loader understands md/v1.x metadata, or use
    --metadata=0.90
Continue creating array? yes

mdadm: Defaulting to version 1.2 metadata
mdadm: array /dev/md/raid_lvm0 started.

```
* Comprobamos que está bien creada // **IMPORTANTE MD127: active raid1 loop3[1] loop2[0]**
```
root@i11:/opt/lvm# cat /proc/mdstat

Personalities : [linear] [multipath] [raid0] [raid1] [raid6] [raid5] [raid4] [raid10] 

md127 : active raid1 loop3[1] loop2[0]
      510976 blocks super 1.2 [2/2] [UU]
      
unused devices: <none>
```
```
root@i11:/opt/lvm# mdadm --detail /dev/md/raid_lvm0

/dev/md/raid_lvm0:
           Version : 1.2
     Creation Time : Fri Feb 18 10:26:24 2022
        Raid Level : raid1
        Array Size : 510976 (499.00 MiB 523.24 MB)
     Used Dev Size : 510976 (499.00 MiB 523.24 MB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

       Update Time : Fri Feb 18 10:26:26 2022
             State : clean 
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : resync

              Name : i11:raid_lvm0  (local to host i11)
              UUID : 342cdb30:85f0d347:c5215212:31d4f70c
            Events : 17

    Number   Major   Minor   RaidDevice State
       0       7        2        0      active sync   /dev/loop2
       1       7        3        1      active sync   /dev/loop3
root@i11:/opt/lvm# 

```


### **Un segon RAID1 (Dos discs de 500M). (/dev/loop4 /dev/loop5)**

* Se crean **2 unidades físicas imaginarias** usando **dd** para generar espacio de disco virtual.

* Se asignan ficheros a un **dispositivo** de disco físico de **loopback**. 

* Se crean **2 particiones** **/dev/loop4**, **/dev/loop5**.

* Crear los 2 **ficheros de imagen**

#### **DD (Conver and COPY a FILE) --> /dev/zero (Imaginario)**

```
root@i11:/opt/lvm# dd if=/dev/zero of=disk03.img bs=1k count=500K
512000+0 records in
512000+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.533952 s, 982 MB/s
```
```
root@i11:/opt/lvm# dd if=/dev/zero of=disk04.img bs=1k count=500K
512000+0 records in
512000+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.540251 s, 970 MB/s

```

* Se guardan en /opt/lvm

* Se los asigna al LOOPBACK como ROOT (Se empieza del 4 al 5) # En la CLASE

```
## ¡¡ YA ESTÁ OCUPADO !!
root@i11:/opt/lvm# losetup /dev/loop0 disk01.img 
losetup: disk01.img: failed to set up loop device: Device or resource busy
```

* Si ya tuvieramos los LOOPS ocupados con el comando --> **losetup -d /dev/loopX** --> **Podemos eliminar el LOOP**.
```
root@i11:/opt/lvm# losetup -d /dev/loop2
root@i11:/opt/lvm# losetup -d /dev/loop3

root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
root@i11:/opt/lvm# 
```


#### **Asignarlos a un dispositivo LOSETUP (/dev/loop4 /dev/loop5)**

* Añadimos a un DISPOSITIVO LOSETUP
```
root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop2: [66306]:5245283 (/opt/lvm/disk01.img)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
/dev/loop3: [66306]:5245290 (/opt/lvm/disk02.img)
```
```
root@i11:/opt/lvm# losetup /dev/loop4 disk03.img 
root@i11:/opt/lvm# losetup /dev/loop5 disk04.img 

```
* Verificamos
```
root@i11:/opt/lvm# losetup -a
/dev/loop1: [66306]:4333633 (/var/lib/snapd/snaps/core_11993.snap)
/dev/loop4: [66306]:5245290 (/opt/lvm/disk03.img)
/dev/loop2: [66306]:5245294 (/opt/lvm/disk01.img)
/dev/loop0: [66306]:4333635 (/var/lib/snapd/snaps/msnake_10.snap)
/dev/loop5: [66306]:5245283 (/opt/lvm/disk04.img)
/dev/loop3: [66306]:5245301 (/opt/lvm/disk02.img)


root@i11:/opt/lvm# 
```

#### **Crear la RAID1 con los DOS DISCOS (/dev/loop4 y /dev/loop5)**

* Creamos el RAID 1
```
root@i11:/opt/lvm# mdadm --create /dev/md/raid_lvm1 --level=1 --raid-devices=2 /dev/loop4 /dev/loop5

mdadm: Note: this array has metadata at the start and
    may not be suitable as a boot device.  If you plan to
    store '/boot' on this device please ensure that
    your boot-loader understands md/v1.x metadata, or use
    --metadata=0.90
Continue creating array? yes

mdadm: Defaulting to version 1.2 metadata
mdadm: array /dev/md/raid_lvm1 started.


```
* Comprobamos que está bien creada // **IMPORTANTE MD127: active raid1 loop4[1] loop5[0]**
```
root@i11:/opt/lvm# cat /proc/mdstat

Personalities : [linear] [multipath] [raid0] [raid1] [raid6] [raid5] [raid4] [raid10] 
md126 : active raid1 loop5[1] loop4[0]
      510976 blocks super 1.2 [2/2] [UU]
      
md127 : active raid1 loop3[1] loop2[0]
      510976 blocks super 1.2 [2/2] [UU]
      
unused devices: <none>

```
```
root@i11:/opt/lvm# mdadm --detail /dev/md/raid_lvm1

/dev/md/raid_lvm1:
           Version : 1.2
     Creation Time : Fri Feb 18 10:36:40 2022
        Raid Level : raid1
        Array Size : 510976 (499.00 MiB 523.24 MB)
     Used Dev Size : 510976 (499.00 MiB 523.24 MB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

       Update Time : Fri Feb 18 10:36:43 2022
             State : clean 
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : resync

              Name : i11:raid_lvm1  (local to host i11)
              UUID : 4eedf0a9:7ac5bb5d:6560fbd5:065d7b57
            Events : 17

    Number   Major   Minor   RaidDevice State
       0       7        4        0      active sync   /dev/loop4
       1       7        5        1      active sync   /dev/loop5


```

### **Primer RAID, crear PV y VG mydisk.**

#### **PV (PHYSICAL VOLUMES) --> Crea volúmenes físicos.**

* Disponemos de un RAID **/dev/md/raid_lvm0** *Viene de 2 discos imaginarios /dev/loop2 y /dev/loop3*.

  * Es decir, adaptados para ser utilizados como almacenamientl LVM.

  * Primero se realiza el **Physical Volume**.

```
root@i11:/opt/lvm# pvcreate /dev/md/raid_lvm0
  Physical volume "/dev/md/raid_lvm0" successfully created.

```

* Con la orden pvdisplay, observamos a fondo el volumen físico.
```
root@i11:/opt/lvm# pvdisplay /dev/md/raid_lvm0
  "/dev/md127" is a new physical volume of "499.00 MiB"
  --- NEW Physical volume ---
  PV Name               /dev/md127
  VG Name               
  PV Size               499.00 MiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4

```

#### VG (VOLUME GROUPS) --> Agrupa volúmenes físicos.

* Los espacios de almacenamiento **LVM**, se agrupan en **UNIDADES DE ALMACENAMIENTO GRUPALES** llamados **VOLUME GROUPS**.

* El VOLUME GROUP a que crearemos se llamará **mydisk**.


* Creamos el VOLUME GROUP
```
root@i11:/opt/lvm# vgcreate mydisk /dev/md/raid_lvm0
  Volume group "mydisk" successfully created
```

* Visualizamos el VOLUMEGROUP "mydisk"
```
root@i11:/opt/lvm# vgdisplay mydisk
  --- Volume group ---
  VG Name               mydisk
  System ID             
  Format                lvm2
  Metadata Areas        1
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                1
  Act PV                1
  VG Size               496.00 MiB
  PE Size               4.00 MiB
  Total PE              124
  Alloc PE / Size       0 / 0   
  Free  PE / Size       124 / 496.00 MiB
  VG UUID               kuF4aK-Sq4n-6vMh-GIlG-cMIP-YcmF-4bNO1a


```

* Como tenemos un DISCO RAID ya AGRUPADO, usamos todo el RAID y lo juntamos en un **GRUPO FÍSICO de 500M** llamado **/dev/mydisk** (No aparece hasta particionarlo) (Aprox de 496M).

  * Se pierde espacio de almacenamiento debido a crear estructuras para la gestión LVM.

* Observamos el antes y después de asignar **PHYSICAL VOLUMES** al **VOLUME GROUP**

```
# ANTES

root@i11:/opt/lvm# pvdisplay /dev/md/raid_lvm0
  "/dev/md127" is a new physical volume of "499.00 MiB"
  --- NEW Physical volume ---
  PV Name               /dev/md127
  VG Name               
  PV Size               499.00 MiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4
   
# DESPUES

root@i11:/opt/lvm# pvdisplay /dev/md/raid_lvm0
  --- Physical volume ---
  PV Name               /dev/md127
  VG Name               mydisk
  PV Size               499.00 MiB / not usable 3.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              124
  Free PE               124
  Allocated PE          0
  PV UUID               upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4


```

* Visualizamos el VOLUMEGROUP "mydisk"
```
root@i11:/opt/lvm# vgdisplay mydisk
  --- Volume group ---
  VG Name               mydisk
  System ID             
  Format                lvm2
  Metadata Areas        1
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                1
  Act PV                1
  VG Size               496.00 MiB
  PE Size               4.00 MiB
  Total PE              124
  Alloc PE / Size       0 / 0   
  Free  PE / Size       124 / 496.00 MiB
  VG UUID               kuF4aK-Sq4n-6vMh-GIlG-cMIP-YcmF-4bNO1a

```




### **LV de 200M sistema, LV de 100M addes.**

#### LV (LOGICAL VOLUME) --> Crea volúmenes lógicos.

* Cuando ya tengamos los **VOLUME GROUP** podemos hacer particiones llamadas **Logical Volume**.

  * Creamos **2 PARTICIÓNES LÓGICAS**: **200M** llamado **sistema** y **100M** llamado **dades**.

1. **LV: Sistema**

```
root@i11:/opt/lvm# lvcreate -L 200M -n sistema /dev/mydisk
  Logical volume "sistema" created.
```

2. **LV: Dades**
```
root@i11:/opt/lvm# lvcreate -L 100M -n dades /dev/mydisk
  Logical volume "dades" created.
```



3. **MOSTRAMOS LOS RESULTADOS con un "LVDISPLAY"**

```
root@i11:/opt/lvm# lvdisplay
  --- Logical volume ---
  LV Path                /dev/mydisk/sistema
  LV Name                sistema
  VG Name                mydisk
  LV UUID                sLtVEg-c2qJ-ayH2-z7WQ-DyYR-iyEo-wOxOje
  LV Write Access        read/write
  LV Creation host, time i11, 2022-02-18 11:28:27 +0100
  LV Status              available
  # open                 0
  LV Size                200.00 MiB
  Current LE             50
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:0
   
  --- Logical volume ---
  LV Path                /dev/mydisk/dades
  LV Name                dades
  VG Name                mydisk
  LV UUID                Mnhi4c-9Ia9-3VA6-DTyo-Dhcq-ESEB-0ez2fU
  LV Write Access        read/write
  LV Creation host, time i11, 2022-02-18 11:29:24 +0100
  LV Status              available
  # open                 0
  LV Size                100.00 MiB
  Current LE             25
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:1

```



4. Hacemos un TREE de /dev/disk

```
root@i11:/opt/lvm# tree /dev/disk
/dev/disk
├── by-id
│   ├── ata-WDC_WD10JMVW-59AJGS3_WD-WXJ1E65AUSRD -> ../../sda
│   ├── ata-WDC_WD10JMVW-59AJGS3_WD-WXJ1E65AUSRD-part1 -> ../../sda1

│   ├── dm-name-mydisk-dades -> ../../dm-1
│   ├── dm-name-mydisk-sistema -> ../../dm-0

│   ├── dm-uuid-LVM-kuF4aKSq4n6vMhGIlGcMIPYcmF4bNO1aMnhi4c9Ia93VA6DTyoDhcqESEB0ez2fU -> ../../dm-1
│   ├── dm-uuid-LVM-kuF4aKSq4n6vMhGIlGcMIPYcmF4bNO1asLtVEgc2qJayH2z7WQDyYRiyEowOxOje -> ../../dm-0

│   ├── lvm-pv-uuid-upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4 -> ../../md127
│   ├── md-name-i11:raid_lvm0 -> ../../md127
│   ├── md-name-i11:raid_lvm1 -> ../../md126

│   ├── md-uuid-342cdb30:85f0d347:c5215212:31d4f70c -> ../../md127
│   ├── md-uuid-4eedf0a9:7ac5bb5d:6560fbd5:065d7b57 -> ../../md126
```

5. **Vemos que sale VG / LVM / PV / RAID**

```
# VG

│   ├── dm-name-mydisk-dades -> ../../dm-1
│   ├── dm-name-mydisk-sistema -> ../../dm-0

# LVM

│   ├── dm-uuid-LVM-kuF4aKSq4n6vMhGIlGcMIPYcmF4bNO1aMnhi4c9Ia93VA6DTyoDhcqESEB0ez2fU -> ../../dm-1
│   ├── dm-uuid-LVM-kuF4aKSq4n6vMhGIlGcMIPYcmF4bNO1asLtVEgc2qJayH2z7WQDyYRiyEowOxOje -> ../../dm-0

# PV

│   ├── lvm-pv-uuid-upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4 -> ../../md127

# RAID

│   ├── md-name-i11:raid_lvm0 -> ../../md127
│   ├── md-name-i11:raid_lvm1 -> ../../md126

```


6. Hacemos un ls -l de /dev/mydisk
```
root@i11:/opt/lvm# ls -l /dev/mydisk
total 0

lrwxrwxrwx 1 root root 7 Feb 18 11:29 dades -> ../dm-1
lrwxrwxrwx 1 root root 7 Feb 18 11:28 sistema -> ../dm-0
root@i11:/opt/lvm# 

```


### **MKFS i MUNTAR i POSAR-HI DADES.**

* La **cantidad de PE** que utiliza cada **Logical Volume**, **sistema** utiliza **13** de **4MB** que proporciona **52MB** de almacenamiento, todos ellos en un mismo segmento (*Physical Volume*).

* En cambio **dades** *utiliza 35 unidades de asignación PE de 4MB, proporcionando 500MB de almacenamiento y ocupa 2 segmentos*. 

  * Es decir 2 **Volúmenes FÍSICOS.**.



1. **SISTEMA**

```
root@i11:/opt/lvm# mkfs -t ext4 /dev/mydisk/sistema

mke2fs 1.46.2 (28-Feb-2021)
Discarding device blocks: done                            
Creating filesystem with 204800 1k blocks and 51200 inodes
Filesystem UUID: 2d07a00b-197d-430f-a925-73d1a40211a1
Superblock backups stored on blocks: 
	8193, 24577, 40961, 57345, 73729

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (4096 blocks): done
Writing superblocks and filesystem accounting information: done 

```

2. **DADES**

```
root@i11:/opt/lvm# mkfs -t ext4 /dev/mydisk/dades

mke2fs 1.46.2 (28-Feb-2021)
Discarding device blocks: done                            
Creating filesystem with 102400 1k blocks and 25688 inodes
Filesystem UUID: 774bf0d3-c639-4b2c-b816-a5a0412b8e2c
Superblock backups stored on blocks: 
	8193, 24577, 40961, 57345, 73729

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (4096 blocks): done
Writing superblocks and filesystem accounting information: done 
```

* Ahora solamente queda:

  1. Crear los puntos de montaje y montarlos.

  2. Copiar datos a cada directorio.

-----------------------------------------------------------------------------------------

1. **MOUNT POINT**


* Crear primero el directorio si no existe. Montar el LVM al directorio.
```

root@i11:/opt/lvm# mkdir /mnt/dades
root@i11:/opt/lvm# mkdir /mnt/sistema

root@i11:/opt/lvm# mount /dev/mydisk/dades /mnt/dades
root@i11:/opt/lvm# mount /dev/mydisk/sistema /mnt/sistema
```


2. **COPY DATA ON IT**

* Copiamos todo lo que hay en /boot/* a DADES o a 

```
root@i11:/opt/lvm# cp -R /boot/* /mnt/dades/

root@i11:/opt/lvm# cp -R /boot/* /mnt/sistema/
```




3. **USAMOS DF -H PARA REPORTAR EL ESPACIO DE DISCO USADO**.
```
root@i11:/opt/lvm# df -h
Filesystem                                                            Size  Used Avail Use% Mounted on
udev                                                                  7.8G     0  7.8G   0% /dev
tmpfs                                                                 1.6G  1.9M  1.6G   1% /run
/dev/nvme0n1p5                                                        183G   41G  133G  24% /
tmpfs                                                                 7.8G   58M  7.7G   1% /dev/shm
tmpfs                                                                 5.0M  4.0K  5.0M   1% /run/lock
/dev/loop0                                                            128K  128K     0 100% /snap/msnake/10
/dev/loop1                                                            100M  100M     0 100% /snap/core/11993
tmpfs                                                                 1.6G  112K  1.6G   1% /run/user/103033
gandhi.informatica.escoladeltreball.org:/users/inf/hisx2/isx36579183  931G  327G  605G  36% /home/users/inf/hisx2/isx36579183/isx36579183
/dev/sda1                                                             932G  501G  432G  54% /media/isx36579183/ChaseKiD03 My Passport
/dev/mapper/mydisk-dades                                               92M   62M   23M  73% /mnt/dades
/dev/mapper/mydisk-sistema                                            189M   62M  113M  36% /mnt/sistema
```


4. **CON LA ORDEN BLKID VEMOS BLOCK DEVICE ATTRIBUTES.**
```
root@i11:/opt/lvm# blkid

/dev/nvme0n1p5: LABEL="DEBIAN_MATI" UUID="d9b75a7b-29ed-497b-8dbd-560d93b87373" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="2ece0663-05"

/dev/nvme0n1p6: LABEL="DEBIAN_TARDE" UUID="a711ebb9-d209-40ee-a619-17819cd2c616" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="2ece0663-06"

/dev/nvme0n1p7: UUID="c4c43f9c-8baa-4ea3-8f83-ea016f59fb0d" TYPE="swap" PARTUUID="2ece0663-07"

/dev/loop0: TYPE="squashfs"

/dev/loop1: TYPE="squashfs"

/dev/loop2: UUID="342cdb30-85f0-d347-c521-521231d4f70c" UUID_SUB="b56a830e-1e20-a020-0c49-65ba4bdbf099" LABEL="i11:raid_lvm0" TYPE="linux_raid_member"

/dev/loop3: UUID="342cdb30-85f0-d347-c521-521231d4f70c" UUID_SUB="1db77fb2-43e3-25dc-41aa-ae60d3586768" LABEL="i11:raid_lvm0" TYPE="linux_raid_member"

/dev/loop4: UUID="4eedf0a9-7ac5-bb5d-6560-fbd5065d7b57" UUID_SUB="5add4736-b73f-696d-5bd3-abb3f197df8c" LABEL="i11:raid_lvm1" TYPE="linux_raid_member"

/dev/loop5: UUID="4eedf0a9-7ac5-bb5d-6560-fbd5065d7b57" UUID_SUB="2680a1e4-190b-57c7-9f1c-aaa74fdec2a4" LABEL="i11:raid_lvm1" TYPE="linux_raid_member"

/dev/sda1: LABEL="ChaseKiD03 My Passport" BLOCK_SIZE="512" UUID="4E1AEA7B1AEA6007" TYPE="ntfs" PARTUUID="ba3b8294-01"

/dev/md127: UUID="upyjlE-eKqa-IsTP-p7nj-Rw8D-58RP-JsW1m4" TYPE="LVM2_member"

/dev/mapper/mydisk-sistema: UUID="2d07a00b-197d-430f-a925-73d1a40211a1" BLOCK_SIZE="1024" TYPE="ext4"

/dev/mapper/mydisk-dades: UUID="774bf0d3-c639-4b2c-b816-a5a0412b8e2c" BLOCK_SIZE="1024" TYPE="ext4"
root@i11:/opt/lvm# 
```

* **LSBLK**

```
root@i11:/opt/lvm# lsblk
NAME               MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
loop0                7:0    0    16K  1 loop  /snap/msnake/10
loop1                7:1    0  99.4M  1 loop  /snap/core/11993
loop2                7:2    0   500M  0 loop  
└─md127              9:127  0   499M  0 raid1 
  ├─mydisk-sistema 253:0    0   200M  0 lvm   /mnt/sistema
  └─mydisk-dades   253:1    0   100M  0 lvm   /mnt/dades
loop3                7:3    0   500M  0 loop  
└─md127              9:127  0   499M  0 raid1 
  ├─mydisk-sistema 253:0    0   200M  0 lvm   /mnt/sistema
  └─mydisk-dades   253:1    0   100M  0 lvm   /mnt/dades
loop4                7:4    0   500M  0 loop  
└─md126              9:126  0   499M  0 raid1 
loop5                7:5    0   500M  0 loop  
└─md126              9:126  0   499M  0 raid1 
sda                  8:0    0 931.5G  0 disk  
└─sda1               8:1    0 931.5G  0 part  /media/isx36579183/ChaseKiD03 My Passport
nvme0n1            259:0    0 465.8G  0 disk  
├─nvme0n1p1        259:1    0     1K  0 part  
├─nvme0n1p5        259:2    0 186.3G  0 part  /
├─nvme0n1p6        259:3    0 186.3G  0 part  
└─nvme0n1p7        259:4    0   4.7G  0 part 

```



### **Incorporar al VG el segon RAID.**

1. Incorporamos con **VGEXTEND MYDISK /dev/md/raid_lvm1** y visualizamos con **VGDISPLAY**
```
root@i11:/opt/lvm# vgextend mydisk /dev/md/raid_lvm1
  Physical volume "/dev/md/raid_lvm1" successfully created.
  Volume group "mydisk" successfully extended

```

2. Visualizamos.
```
root@i11:/opt/lvm# vgdisplay
  --- Volume group ---
  VG Name               mydisk
  System ID             
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  4
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               992.00 MiB
  PE Size               4.00 MiB
  Total PE              248
  Alloc PE / Size       75 / 300.00 MiB
  Free  PE / Size       173 / 692.00 MiB
  VG UUID               kuF4aK-Sq4n-6vMh-GIlG-cMIP-YcmF-4bNO1a
   

```

### **Incrementar SISTEMA +100M.**

1. Incrementamos con **LVEXTEND**.
```
root@i11:/opt/lvm# lvextend -L +100M /dev/mydisk/sistema
  Size of logical volume mydisk/sistema changed from 200.00 MiB (50 extents) to 300.00 MiB (75 extents).
  Logical volume mydisk/sistema successfully resized.

root@i11:/opt/lvm# 

```

2. Verificamos con **LVDISPLAY**. 

  * Observamos que tiene 300M
```
root@i11:/opt/lvm# lvdisplay /dev/mydisk/sistema
  --- Logical volume ---
  LV Path                /dev/mydisk/sistema
  LV Name                sistema
  VG Name                mydisk
  LV UUID                sLtVEg-c2qJ-ayH2-z7WQ-DyYR-iyEo-wOxOje
  LV Write Access        read/write
  LV Creation host, time i11, 2022-02-18 11:28:27 +0100
  LV Status              available
  # open                 1
  LV Size                300.00 MiB
  Current LE             75
  Segments               2
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:0

```

3. Visualizamos QUE DE MOMENTO NO SE HA INCREMENTADO con **DF -H** PORQUE NO SE HA INCREMENTADO EL SISTEMA DE FICHEROS.
```
root@i11:/opt/lvm# df -h
Filesystem                                                            Size  Used Avail Use% Mounted on
udev                                                                  7.8G     0  7.8G   0% /dev
tmpfs                                                                 1.6G  1.9M  1.6G   1% /run
/dev/nvme0n1p5                                                        183G   41G  133G  24% /
tmpfs                                                                 7.8G   64M  7.7G   1% /dev/shm
tmpfs                                                                 5.0M  4.0K  5.0M   1% /run/lock
/dev/loop0                                                            128K  128K     0 100% /snap/msnake/10
/dev/loop1                                                            100M  100M     0 100% /snap/core/11993
tmpfs                                                                 1.6G  112K  1.6G   1% /run/user/103033
gandhi.informatica.escoladeltreball.org:/users/inf/hisx2/isx36579183  931G  327G  605G  36% /home/users/inf/hisx2/isx36579183/isx36579183
/dev/sda1                                                             932G  501G  432G  54% /media/isx36579183/ChaseKiD03 My Passport
/dev/mapper/mydisk-dades                                               92M   62M   23M  73% /mnt/dades
/dev/mapper/mydisk-sistema                                            189M   62M  113M  36% /mnt/sistema

```

4. Incrementamos el **SISTEMA DE FICHEROS de SISTEMA** con **E2RESIZE**. 

  * **LO AUMENTA HASTA EL MÁXIMO**
```
root@i11:/opt/lvm# resize2fs /dev/mydisk/sistema
resize2fs 1.46.2 (28-Feb-2021)
Filesystem at /dev/mydisk/sistema is mounted on /mnt/sistema; on-line resizing required
old_desc_blocks = 2, new_desc_blocks = 3
The filesystem on /dev/mydisk/sistema is now 307200 (1k) blocks long.

root@i11:/opt/lvm# 
```

5. Visualizamos con un **DF -H**
```
root@i11:/opt/lvm# df -h
Filesystem                                                            Size  Used Avail Use% Mounted on
udev                                                                  7.8G     0  7.8G   0% /dev
tmpfs                                                                 1.6G  1.9M  1.6G   1% /run
/dev/nvme0n1p5                                                        183G   41G  133G  24% /
tmpfs                                                                 7.8G   58M  7.7G   1% /dev/shm
tmpfs                                                                 5.0M  4.0K  5.0M   1% /run/lock
/dev/loop0                                                            128K  128K     0 100% /snap/msnake/10
/dev/loop1                                                            100M  100M     0 100% /snap/core/11993
tmpfs                                                                 1.6G  112K  1.6G   1% /run/user/103033
gandhi.informatica.escoladeltreball.org:/users/inf/hisx2/isx36579183  931G  327G  605G  36% /home/users/inf/hisx2/isx36579183/isx36579183
/dev/sda1                                                             932G  501G  432G  54% /media/isx36579183/ChaseKiD03 My Passport
/dev/mapper/mydisk-dades                                               92M   62M   23M  73% /mnt/dades
/dev/mapper/mydisk-sistema                                            287M   64M  206M  24% /mnt/sistema
```

### **Provocar un FAIL a un DELS DISCOS del RAID1.**
```
# mdadm /dev/md/raid_lvm1 --fail /dev/loop1
```

### **Eliminar completament el RAID1 del VG.**
```
# vgremove mydisk /dev/md/raid_lvm1

```





## **Práctica 2 (REAL)

### **CREAR SDA2: 10G, sda3: 4G, SDA4: 4G**
```
```

### **Crear un RAID1 amb SDA3 i SDA4**
```
```

### **Generar un VG anomenat DISKEDT amb SDA3 i SDA4.**
```
```

### **Generar un LV Sistema de 3G, Dades de 1G.**
```
```

### **Muntar i posar-hi DADES.**
```
```

### Automatitzar el muntatge /mnt/dades, /mnt/sistema).
```
```

### Reboot i verificar que dades i sistema estan disponibles.
```
```