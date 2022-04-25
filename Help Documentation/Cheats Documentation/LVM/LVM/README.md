# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

## INDEX

* **LVM**: [LVM](https://github.com/KeshiKiD03/lvm/tree/main/LVM#lvm)

    * **LVM: Resumen**: [Resumen](https://github.com/KeshiKiD03/lvm/tree/main/LVM#resumen)

    * **LVM: Ejercicio 1**: [EJ1](https://github.com/KeshiKiD03/lvm/tree/main/LVM#ejercicio-pr%C3%A1ctico-1-usar-lvm)

    * **LVM: Ejercicio 1: PV**: [PV](https://github.com/KeshiKiD03/lvm/tree/main/LVM#pv-physical-volumes----crea-vol%C3%BAmenes-f%C3%ADsicos)

    * **LVM: Ejercicio 1: VG**: [VG](https://github.com/KeshiKiD03/lvm/tree/main/LVM#vg-volume-groups----agrupa-vol%C3%BAmenes-f%C3%ADsicos)

    * **LVM: Ejercicio 1: LV**: [LV](https://github.com/KeshiKiD03/lvm/tree/main/LVM#lv-logical-volume----crea-vol%C3%BAmenes-l%C3%B3gicos)

    * **LVM: Ejercicio 1: Mount**: [Mount](https://github.com/KeshiKiD03/lvm/tree/main/LVM#mfks-mkfs--montarlo-mount---etcfstab--poner-datos)

    * **LVM: Ejercicio 2: Modificaciones en Caliente**: [Hot Swap](https://github.com/KeshiKiD03/lvm/tree/main/LVM#ejercicio-pr%C3%A1ctico-2-modificaciones-en-caliente)

    * **LVM: Ejercicio 2: Modificaciones en Caliente PART1**: [Hot Swap 1](https://github.com/KeshiKiD03/lvm/tree/main/LVM#primera-part)

    * **LVM: Ejercicio 2: Modificaciones en Caliente PART2**: [Hot Swap 2](https://github.com/KeshiKiD03/lvm/tree/main/LVM#segona-part)

    * **LVM: Ejercicio 2: Modificaciones en Caliente PART3**: [Hot Swap 3](https://github.com/KeshiKiD03/lvm/tree/main/LVM#tercera-part)

    * **LVM: Ejercicio 2: Modificaciones en Caliente PART3**: [Hot Swap 4](https://github.com/KeshiKiD03/lvm/tree/main/LVM#cuarta-part)

## LVM

### LOGICAL VOLUME MANAGER

* Las particiones **LVM** tienen **`ciertas ventajas`** sobre las particiones estándares.

* LVM son formateados como **`Volúmenes físicos`**.

* 1 o más **LVM** son combinados en **`Grupos de Volumen`**.

    * Cada **`almacenamiento grupal`** está dividido en uno o más **`volúmenes lógicos`**.

        * Los **volúmenes lógicos** son como **particiones estándar**.

            * Tienen el `FILESYSTEM`, `ext4` y el `mountpoint`.


### Resumen: 

* LVM son una `pila de bloques`.

    * Un bloque es un `almacenamiento` que se usa para almacenar datos.

    * Los bloques pueden ser agrupados en un grupo (`stack`).

        * Los discos físicos son combinados en un *`volumen grupal`*.

        * El `stack resultante`, puede subdividirse en varios **`volúmenes de tamaño variable`.**.


* Un administrador puede hacer crecer o decrecer los **`volúmenes lógicos`** sin tener que **`destruir datos`**, en lugar de **`standard partitions`**. En caliente.


### ÓRDENES A UTILIZAR:

* apropos lvm `[Busca el MAN de LVM]` 

```
lvm (8)              - LVM2 tools
lvmconfig (8)        - Display and manipulate configuration information
lvmdiskscan (8)      - List devices that may be used as physical volumes
lvmdump (8)          - create lvm2 information dumps for diagnostic purposes
lvmraid (7)          - LVM RAID
lvmvdo (7)           - Support for Virtual Data Optimizer in LVM
pvcreate (8)         - Initialize physical volume(s) for use by LVM
pvremove (8)         - Remove LVM label(s) from physical volume(s)
...
```

* Ordres de gestió de Volums Lògics:

* pv [TAB]

```
       pvchange      Change attributes of a Physical Volume.
       pvck          Check Physical Volume metadata.
       pvcreate      Initialize a disk or partition for use by LVM.
       pvdisplay     Display attributes of a Physical Volume.
       pvmove        Move Physical Extents.
       pvremove      Remove a Physical Volume.
       pvresize      Resize a disk or partition in use by LVM2.
       pvs           Report information about Physical Volumes.
       pvscan        Scan all disks for Physical Volumes.
```

* vg [TAB]

```
       vgcfgbackup   Backup Volume Group descriptor area.
       vgcfgrestore  Restore Volume Group descriptor area.
       vgchange      Change attributes of a Volume Group.
       vgck          Check Volume Group metadata.
       vgconvert     Convert Volume Group metadata format.
       vgcreate      Create a Volume Group.
       vgdisplay     Display attributes of Volume Groups.
       vgexport      Make volume Groups unknown to the system.
       vgextend      Add Physical Volumes to a Volume Group.
       vgimport      Make exported Volume Groups known to the system.
       vgimportclone Import and rename duplicated Volume Group (e.g. a hardware snapshot).
       vgmerge       Merge two Volume Groups.
       vgmknodes     Recreate Volume Group directory and Logical Volume special files
       vgreduce      Reduce a Volume Group by removing one or more Physical Volumes.
       vgremove      Remove a Volume Group.
       vgrename      Rename a Volume Group.
       vgs           Report information about Volume Groups.
       vgscan        Scan all disks for Volume Groups.
       vgsplit       Split  a  Volume Group into two, moving any logical volumes from one Volume Group
                     to another by moving entire Physical Volumes.

```

* lv [TAB]

```
       lvchange      Change attributes of a Logical Volume.
       lvconvert     Convert a Logical Volume from linear to mirror or snapshot.
       lvcreate      Create a Logical Volume in an existing Volume Group.
       lvdisplay     Display attributes of a Logical Volume.
       lvextend      Extend the size of a Logical Volume.
       lvmconfig     Display the configuration information after loading  lvm.conf(5)  and  any  other
                     configuration files.
       lvmdiskscan   Scan for all devices visible to LVM2.
       lvmdump       Create lvm2 information dumps for diagnostic purposes.
       lvreduce      Reduce the size of a Logical Volume.
       lvremove      Remove a Logical Volume.
       lvrename      Rename a Logical Volume.
       lvresize      Resize a Logical Volume.
       lvs           Report information about Logical Volumes.
       lvscan        Scan (all disks) for Logical Volumes.

```


### Ejercicio Práctico 1: `Usar LVM`

* Se crean **`tres unidades físicas imaginarias`** usando **`dd`** para generar espacio de disco virtual.

* Se asignan ficheros a un **`dispositivo`** de disco físico de **`loopback`**. 

* Se crean **`3 particiones`** **`/dev/loop0`**, **`/dev/loop1`**, **`/dev/loop2`**.

1. Crear los 3 **`ficheros de imagen`**

#### DD (`Convert and COPY a FILE`) --> /dev/zero (Imaginario)

```
root@i11:/opt/lvm# dd if=/dev/zero of=disk01.img bs=1k count=100K

512000+0 records in
512000+0 records out
524288000 bytes (124 MB, 100 MiB) copied, 0.533952 s, 982 MB/s
```
```
root@i11:/opt/lvm# dd if=/dev/zero of=disk02.img bs=1k count=100K

512000+0 records in
512000+0 records out
524288000 bytes (124 MB, 100 MiB) copied, 0.540251 s, 970 MB/s

```
```
# dd if=/dev/zero of=disk03.img bs=1k count=100K
102400+0 records in
102400+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.146417 s, 716 MB/s
```

* Se crea una carpeta en `/opt` 

* mkdir `lvm`

* Se los asigna al `LOOPBACK` como `ROOT` Del 0-2 | (Se empieza del 2 al 3) # En la CLASE.

    * **`Troubleshoot`**

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

#### **Asignarlos a un dispositivo LOSETUP (/dev/loop0 /dev/loop2 /dev/loop3)**

* Añadimos a un **`DISPOSITIVO LOSETUP`**
```
root@i11:/opt/lvm# losetup -a
/dev/loop0: ...
/dev/loop1: ...
/dev/loop2: ...

```
```
root@i11:/opt/lvm# losetup /dev/loop0 disk01.img 
root@i11:/opt/lvm# losetup /dev/loop1 disk02.img
root@i11:/opt/lvm# losetup /dev/loop2 disk03.img 

```

* `Verificamos`

```
root@i11:/opt/lvm# losetup -a

/dev/loop0: [66306]:4365633 (/opt/lvm/disk01.img)

/dev/loop1: [65406]:4333612 (/opt/lvm/disk02.img)

/dev/loop2: [66806]:4398633 (/opt/lvm/disk03.img)

root@i11:/opt/lvm# 
```

#### PV (PHYSICAL VOLUMES) --> `Crea volúmenes físicos`.

2. Disponemos de **`3 trozos`** de almacenamiento para crear un **`volumen físico`** para cada uno de ellos.

    * Es decir, adaptados para ser utilizados como almacenamiento **`LVM`**.

    * Primero se realiza el **`Physical Volume`**.

```
root@i11:/opt/lvm# pvcreate /dev/loop0 /dev/loop1 /dev/loop2

  Physical volume "/dev/loop0" successfully created.
  Physical volume "/dev/loop1" successfully created.
  Physical volume "/dev/loop2" successfully created.
```

* Con la orden **`pvdisplay`**, observamos a fondo el **`volumen fisico`**.


```
root@i11:/opt/lvm# pvdisplay /dev/loop2
  "/dev/loop2" is a new physical volume of "100.00 MiB"
  --- NEW Physical volume ---
  PV Name               /dev/loop2
  VG Name               
  PV Size               100.00 MiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               lCiF9w-V0Wh-2xC8-u04t-cHCT-zaQw-AlCP8k
```   



#### VG (VOLUME GROUPS) --> `Agrupa volúmenes físicos`.

* Los espacios de almacenamiento **`LVM`**, se agrupan en **`UNIDADES DE ALMACENAMIENTO GRUPALES`** llamados **`VOLUME GROUPS`**.

* El `VOLUME GROUP` a que crearemos se llamará **`diskedt`**.

----------------------------------------------

1. `Creamos` el VOLUME GROUP
```
root@i11:/opt/lvm# vgcreate diskedt /dev/loop0 /dev/loop1
  Volume group "diskedt" successfully created
```
2. `Visualizamos` el VOLUME GROUP
```
root@i11:/opt/lvm# vgdisplay diskedt
  --- Volume group ---
  VG Name               diskedt
  System ID             
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               192.00 MiB
  PE Size               4.00 MiB
  Total PE              48
  Alloc PE / Size       0 / 0   
  Free  PE / Size       48 / 192.00 MiB
  VG UUID               z3Upz9-EN42-4JDC-dcse-2W2q-VOkd-rr4D6L

```

### `NOTA`

* Los espacios de **`100M`** de **`loop0`** y **`loop1`** se juntan para crear un **`dispositivo físico de 200M`** llamado **`/dev/diskedt`** 

    * (`No aparece hasta particionarlo`) (Aprox de `192M`).

        * Se `pierde espacio` de almacenamiento debido a crear estructuras para la `gestión LVM`.

* Observamos el antes y después de asignar **`PHYSICAL VOLUMES`** al **`VOLUME GROUP`**

```
# ANTES

root@i11:/opt/lvm# pvdisplay /dev/loop0
  "/dev/loop2" is a new physical volume of "100.00 MiB"
  --- NEW Physical volume ---
  PV Name               /dev/loop0
  VG Name               
  PV Size               100.00 MiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               lCiF9w-V0Wh-2xC8-u04t-cHCT-zaQw-AlCP8k
```
```
# DESPUES

root@i11:/opt/lvm# pvdisplay /dev/loop0
  --- Physical volume ---
  PV Name               /dev/loop0
  VG Name               diskedt
  PV Size               100.00 MiB / not usable 4.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              24
  Free PE               24
  Allocated PE          0
  PV UUID               lCiF9w-V0Wh-2xC8-u04t-cHCT-zaQw-AlCP8k


```

#### LV (LOGICAL VOLUME) --> `Crea volúmenes lógicos`.

* Cuando ya tengamos los **`VOLUME GROUP`** podemos hacer particiones llamadas **`Logical Volume`**.

    * Creamos **`2 PARTICIÓNES LÓGICAS`**: **`50M`** llamado **`sistema`** y **`150M`** llamado **`dades`**.

    * **`Resumen`**: Fijarse que de de `DOS PV (Physical Volume de 100M)` --> Se ha generado un `VM (Volume Group) = diskedt de 200M` --> Ahora se **`subdividirá`** en 2 particiones **`Logical Volume`**.

1. **`LV: Sistema`**

```
root@i11:/opt/lvm# lvcreate -L 50M -n sistema /dev/diskedt

  Rounding up size to full physical extent 52.00 MiB
  Logical volume "sistema" created.
```

2. **`LV: Dades`**
```
root@i11:/opt/lvm# lvcreate -L 150M -n dades /dev/diskedt

  Rounding up size to full physical extent 152.00 MiB
  Logical volume "sistema" created.
```

**`IMPORTANTE`**

* Dará error en la **segunda**.

* Para solucionarlo usaremos el **`-l100%FREE`**.

```
root@i11:/opt/lvm# lvcreate -l100%FREE -n dades /dev/diskedt
  Logical volume "dades" created.
```

* Significa que usará el **`100% del DISCO`**, es decir lo que le **`RESTA`** en este caso.

    * Si fuera al 50% --> **`-l50%FREE.`**.



3. **`MOSTRAMOS LOS RESULTADOS con un "LVDISPLAY"`**

```
root@i11:/opt/lvm# lvdisplay
  --- Logical volume ---
  LV Path                /dev/diskedt/sistema
  LV Name                sistema
  VG Name                diskedt
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
  LV Path                /dev/diskedt/dades
  LV Name                dades
  VG Name                diskedt
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

### `VERIFICACIÓN - CREACIÓN`

4. Hacemos un **`TREE`** para verificar los datos --> Nos debería aparecer correctamente. **Vemos que sale VG / LVM / PV**
```
root@i11:/opt/lvm# tree /dev/disk

# Vemos que sale

# VG

│   ├── dm-name-diskedt-dades -> ../../dm-1
│   ├── dm-name-diskedt-sistema -> ../../dm-0


# LVM

│   ├── dm-uuid-LVM-z3Upz9EN424JDCdcse2W2qVOkdrr4D6LKamHDKLQGCg0B8VZ3avxd8sYkZnBc6Oc -> ../../dm-0
│   ├── dm-uuid-LVM-z3Upz9EN424JDCdcse2W2qVOkdrr4D6LZEEOn6uidryzQ3jZ8AYfsdORy2EitpXm -> ../../dm-1


# PV

│   ├── lvm-pv-uuid-HK5Cgu-sp8y-aVWK-RAoL-G2Ok-xs5f-jbqGI3 -> ../../loop2
│   ├── lvm-pv-uuid-lCiF9w-V0Wh-2xC8-u04t-cHCT-zaQw-AlCP8k -> ../../loop1
│   ├── lvm-pv-uuid-SQmPdK-RXTc-s7Uk-fXM9-MuiP-ghw7-yQkrXz -> ../../loop0

```

5. Hacemos un ls -l.

```
root@i11:/opt/lvm# ls -l /dev/diskedt/


lrwxrwxrwx 1 root root 7 Feb  9 09:31 dades -> ../dm-1
lrwxrwxrwx 1 root root 7 Feb  9 09:30 sistema -> ../dm-0
```


#### **`MFKS (mkfs) / MONTARLO (mount) - (/etc/fstab) / PONER DATOS`**

* Al observar la cantidad de PE (**`BLOQUES = UNIDADES DE ASIGNACION`**) que utiliza cada **`Logical Volume`**:

    * **`SISTEMA`**: 13 **UNIDADES de ASIGNACIÓN** (**`PE`**) de 4MB = 52MB de almacenamiento.

        * Todo en un **mismo segmento** (Physical Volume)

    * **`DADES`**: 35 de 4MB que proporciona 140MB de almacenamiento.

        * Ocupa *`2 segmentos`* - Es decir usa 2 **`Physical Volumes`**


* **`RESUMEN`:** Cada bloque **`PE`** se tiene que multiplicar por 4MB que está reservado para **`LV`**. Ahí saldrá el almacenamiento que tendrá **`asignado`**.

1. **SISTEMA**

```
root@i11:/opt/lvm# mkfs -t ext4 /dev/diskedt/sistema
```

2. **DADES**

```
root@i11:/opt/lvm# mkfs -t ext4 /dev/diskedt/dades
```

#### **`MOUNT POINT`**

* **`Montaje Manual`**

```
root@i11:/opt/lvm# mkdir /mnt/dades
root@i11:/opt/lvm# mkdir /mnt/sistema
```

```
root@i11:/opt/lvm# mount /dev/diskedt/dades /mnt/dades/
root@i11:/opt/lvm# mount /dev/diskedt/sistema /mnt/sistema/

```

* **`Montaje Automático`**

*OPCIONAL*

* Hay que editar el **`/etc/fstab`**:


```
# vim /etc/fstab
```

```
/dev/diskedt/sistema  /mnt/sistema  ext4  errors=remount-ro 0 0
/dev/diskedt/dades  /mnt/dades  ext4  errores=remount-ro  0 0
```



#### **`COPY DATA ON IT`**

```
root@i11:/opt/lvm# cp -R /boot/* /mnt/dades
```
```
root@i11:/opt/lvm# cp /boot/* /mnt/sistema/
```

O

```
sudo cp /bin/?? /mnt/sistema/
sudo cp /bin/?? /mnt/DADES/
```


#### **`USAMOS DF PARA REPORTAR EL ESPACIO DE DISCO USADO`**.


```
root@i11:/opt/lvm# df -h
Filesystem                                                            Size  Used Avail Use% Mounted on
udev                                                                  7.8G     0  7.8G   0% /dev
tmpfs                                                                 1.6G  1.9M  1.6G   1% /run
/dev/nvme0n1p5                                                        183G   52G  122G  30% /
tmpfs                                                                 7.8G   52M  7.8G   1% /dev/shm
tmpfs                                                                 5.0M  4.0K  5.0M   1% /run/lock
/dev/loop0                                                            100M  100M     0 100% /snap/core/11993
/dev/loop1                                                            128K  128K     0 100% /snap/msnake/10
tmpfs                                                                 1.6G  916K  1.6G   1% /run/user/103033
gandhi.informatica.escoladeltreball.org:/users/inf/hisx2/isx36579183  931G  319G  613G  35% /home/users/inf/hisx2/isx36579183/isx36579183
/dev/sda1                                                             932G  501G  432G  54% /media/isx36579183/ChaseKiD03 My Passport
/dev/mapper/diskedt-dades                                             131M   61M   60M  51% /mnt/dades
/dev/mapper/diskedt-sistema                                            46M   45M     0 100% /mnt/sistema
root@i11:/opt/lvm# 


```




#### **`CON LA ORDEN BLKID VEMOS BLOCK DEVICE ATTRIBUTES`**.

```
root@i11:/opt/lvm# blkid

...
/dev/mapper/diskedt-sistema: UUID="0ef8d932-4dfa-449d-9385-89f6fbc8e5fb" BLOCK_SIZE="1024" TYPE="ext4"
/dev/mapper/diskedt-dades: UUID="18b81e3e-49c5-419f-80ca-8c1b74130b60" BLOCK_SIZE="1024" TYPE="ext4"
root@i11:/opt/lvm# 

```

#### **`OTROS COMANDOS`**

* **`LSBLK`**

```
root@i11:/mnt/dades# lsblk
NAME              MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0               7:0    0  99.4M  1 loop /snap/core/11993
loop1               7:1    0    16K  1 loop /snap/msnake/10
loop2               7:2    0   100M  0 loop 
├─diskedt-sistema 254:0    0    52M  0 lvm  /mnt/sistema
└─diskedt-dades   254:1    0   140M  0 lvm  
loop3               7:3    0   100M  0 loop 
└─diskedt-dades   254:1    0   140M  0 lvm  
loop4               7:4    0   100M  0 loop 
nvme0n1           259:0    0 465.8G  0 disk 
├─nvme0n1p1       259:1    0     1K  0 part 
├─nvme0n1p5       259:2    0 186.3G  0 part /
├─nvme0n1p6       259:3    0 186.3G  0 part 
└─nvme0n1p7       259:4    0   4.7G  0 part 
root@i11:/mnt/dades# 

```

### Ejercicio Práctico 2: `Modificaciones en Caliente`

* La principal ventaja de utilización de LVM es que se puede modificar en **`caliente`**.

    * Se pueden modificar las composiciones de los **`grupos de volúmenes`**.

    * Se pueden hacer un *`resize`* de los volúmenes lógicos.

    * Esto es lo que se puede hacer:

        * Ampliar el Volume Group **`diskedt`** añadiendo **`100M`** procedente de /dev/loop2.

        * Si el Volume Group diskedt dispone de más espacio libre, se puede **`asignar`** ese espacio a los volúmenes lógicos --> **`datos`**, **`sistema`** o crear un **`nuevo vol lógico`**.

        * Si no se añade espacio nuevo a **`diskedt`**, se puede **`redistribuir`** su espacio libre.

            * Se puede **`repartir su espacio`** entre sus **`2`** particiones lógicas de forma diferente. 

                * Sin tener que **`borrar`** y **`crear de nuevo`**.

        * En todo momento, los LV se pueden **`redimensionar`**:

            * **`ampliandolos`**.

            * **`reduciendolos (shrink)`**, 
            
            * **`siempre y que los datos quepan`**


#### **`IMPORTANTE`**

* Es importante remarcar que si queremos **`redimensionar`** una **`LV`**, hay que redimensionar también su **`SISTEMA DE FICHEROS`**


#### **``Modificaciones en Caliente``**

1. Asignar **`100M`** de **`/dev/loop2`** al grupo **`/dev/diskedt`**

    2. Añadir 30M de este nuevo espacio al volúmen lógico: *`sistema`*.

2. Crear una nueva partición lógica llamada *`services`* de 60M con el **`espacio sobrante`** del VG **`diskedt`**.

3. Redimensionar un LV:

    * Haciéndolo más pequeño (**`shrink`**) el LV *`sistema`*.

4. Con el espacio liberado de *`sistema`*, y el espacio libre sobrante del volúmen *`diskedt`*, *`ampliar`* el espacio del volúmen lógico *`datos`*.


#### **``PRIMERA PART``**

**Ara simularem que afegim un nou D.D:**

* **`vgextend diskedt /dev/loop2`**

    * Afegim el D.D al 'VOlume Group' de 'diskedt'

* **`vgdisplay diskedt`**

    * Llistem el 'Volume Group'

* **`lvextend -L +30 /dev/diskedt/sistema /dev/loop2`**

    * Ara repartirem aquest espai lliure per assignar ampliant en 30M la partició 'sistema'

* **`lvdisplay /dev/diskedt/sistema`** 

    * Llistem el 'Logical Volume' de 'sistema', ara ocupa 1 segment més (2) i ocupa 21 unitats d'assignació 'PE' de 4M (21 * 4 = 84 MiB)

* **`df -h`** 

    * Llistem l'espai disponible.

<opcional>

* **`umount /mnt/dades`**

    * Desmuntem el directori de 'dades'... (no cal ja que farem un grow amb resize)

* **`umount /mnt/sistema`**

    * Desmuntem el directori de 'sistema'... (ídem)

-------

* **`e2fsck -f /dev/diskedt/sistema`**

    * Comprovem i reparem el sistema d'arxius de 'sistema'

* **`resize2fs /dev/diskedt/sistema`**

    * Agrandem el tamany de les dades fins el màxim que és pugui.

* **`df -h`**

* **`mount /dev/diskedt/dades /mnt/dades`**

* **`mount /dev/diskedt/sistema /mnt/sistema`**

**Ara, comprobem i veiem que tenim espai utilitzable quan abans no teníem res (hem agrandat l'espai utilitzable)**

#### **``SEGONA PART``**

* df -h

/dev/mapper/diskedt-dades    131M   65M   56M  54% /mnt/dades

/dev/mapper/diskedt-sistema   78M   46M   26M  65% /mnt/sistema

* **`lvcreate -L 60 -n services /dev/diskedt`** --> Creem una nova partició lògica anomenada 'services'

* **`lvdisplay /dev/diskedt/services `**--> La llistem..

**Ara el volum 'diskedt' disposa de 300M repartits a 80M per a sistema (50 + 30), 150M per a dades i 60M per al nou volum lògic 'services'**

* **`vgdisplay /dev/diskedt`** --> Llistem el volum lògic 'diskedt'


#### **``TERCERA PART``**

**Volem traspassar tot l'espai a la partició de 'dades':**

* **`umount /mnt/dades`**

* **`umount /mnt/sistema`**

**Primer reduïm la partició 'sistema' i després el volum lògic 'sistema':**

* **`e2fsck -f /dev/diskedt/sistema`**

* **`resize2fs /dev/diskedt/sistema [85M]`** --> Reduïm fins a 85M (important fixar-se en la mida mínima a la que s'ha de reduïr)

* **`lvreduce -L 85M -r /dev/diskedt/sistema`** --> Ara reduïrem el volum lògic

* **`lvdisplay /dev/diskedt/sistema`** --> Comprobem

* **`mount /dev/diskedt/sistema /mnt/sistema/`**

* **`mount /dev/diskedt/dades /mnt/dades/`**

* **`df -h`** --> Comprobem l'espai disponible

#### **``CUARTA PART``**

**Assignem al volum 'dades' tot l'espai sobrant:**

* **`vgdisplay diskedt`** --> Llistem el 'Volume Group' 'diskedt' (important fixar-se en 'Free PE' per veure quan agrandarà)

* **`lvdisplay /dev/diskedt/dades`** --> Llistem el 'Logical Volume' 'dades'

* **`umount /mnt/sistema`**

* **`umount /mnt/dades`**

* **`lvextend -l +100%FREE /dev/diskedt/dades`** --> Extendrà de 140MiB a 144MiB.

**Coses a mirar per l'exàmen:**

* **`man LV (-l, -L)`**

* **`sudo lvreduce -L 25M -r /dev/diskedt/sistema --> -r (fa el resize2fs)`**

**Pràctica:**

* **`dd if=/dev/zero of=disk04.img bs=1k count=500k`**

* **`sudo losetup /dev/loop4 disk04.img`**

* **`sudo losetup -a`**

* **`sudo pvcreate /dev/loop4`**

* **`sudo vgextend diskedt /dev/loop4`**

* **`sudo lvdisplay /dev/diskedt/dades`**

* **`sudo lvdisplay /dev/diskedt/sistema`**

* **`sudo pvdisplay /dev/loop1`**

* **`sudo pvmove /dev/loop1 /dev/loop2 /dev/loop3`** --> Ho mou on troba 'PE' lliures, ho mourà on sigui.

* **`sudo vgreduce diskedt /dev/loop1 /dev/loop2 /dev/loop3`** --> Primer treiem el 'PV' de 'loop1' del grup ja que encara que no tingui capespai ocupat, segueix estant conectat amb el 'VG'.

* **`sudo pvremove /dev/loop1 /dev/loop2 /dev/loop3`**

* **`sudo lvextend -L +200M -r /dev/diskedt/dades`** --> Extenem 200M i fem el resize (-r)

* **`df -h`** --> Comprovem


