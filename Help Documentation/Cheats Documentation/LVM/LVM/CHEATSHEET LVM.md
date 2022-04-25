# CHEATSHEET LVM + Teoria

### Descripció:
* LVM: Logical Volume Manager

\------------------    \-----------------
|   S.O  |  Dades | --> | Nou Hard Disk |
\------------------    \-----------------

**Explicació:** Volem afegir un nou Disc Dur per ampliar la partició dades.

*Creació de D.D lògic:*
\-----------------
| Disc Dur lògic |
\-----------------

**Explicació:** Convertim tot el disc en un nou Disc Dur lògic i ara podem fer canvis (resize) en calent, per tant podrem afegir el nostre D.D sense necessitat d'apagar l'ordinador.

* Data at rest --> Data que està parada (seguretat a ñes dades que estàn 'parades', emmagatzemades)
  		   EX: GPG (mail)
* Data in motion --> Data que està en transti (seguretat a les dades que estàn en 'moviment')
		     EX: Kerberos (autenticació)

* PV --> VG --> LV

* LV --> MKFS / Mount (FSTAB)

* LV --> E2RESIZE

### Ordres:

* apropos lvm --> Ens dona informació dels diferents manuals de LVM disponibles.
* system-config-lvm [&] --> Ordre per entrar al entorn gràfic (Debian no ho enté)

* COMANDOS Physical Volume:

    * pvcreate [particion1] [part2] --> Crea PV a partir de un disco

    * pvdisplay [part] --> Muestra PV

    * pvmove [part] --> Mueve los datos de un lado a otro PV

    * pvremove [part] --> Remueve el PV

    * pvresize [part] --> Cambia de tamaño.

    * pvscan [part] --> Escanea todos los discos PV.

* COMANDOS VG:

    * vgcreate [nombreVG] [pv1] [pv2] --> Crea un VG a partir de un PV o varios.

    * vgdisplay [nombreVG] --> Muestra VG

    * vgextend [nombreVG] [pv1] [pv2] --> Añade más PV al Volume Group.

    * vgreduce [nombreVG] [pv1] [pv2] --> Reduce el VG quitando uno o más PV.

    * vremove [nombreVG] [pv1] --> Elimina el VG.

    * vgrename --> Cambia nombre VG.

    * vgscan --> Escanea todos los discos para VG.

    * vgsplit --> Se divide en dos.

* COMANDOS LV:

    * lvcreate [-L] [50M] [-n] [nombre] [nombreVG] --> Crea un LV a partir de un VG

    * lvdisplay [rutaLV] --> Muestra LV

    * lvextend --> Extiende LV (-r extiende también Sistema de Ficheros)

    * lvmconfig --> 

    * lvmdiskscan --> Escanea LV

    * lvmreduce --> Reduce LV (-r reduce también el Sistema de Ficheros)

    * lvmremove --> Borra LV

    * lvmrename --> Cambia nombre LV

    * lvresize --> Cambia el tamaño de LV

    * lvscan --> Escanea LV

* COMANDOS GROW / SHRINK (LV + SISTEMA FICHEROS)

    * e2fsck -f /dev/diskedt/sistema

    * resize2fs /dev/diskedt/sistema

    * sudo lvreduce -L 25M -r /dev/diskedt/sistema --> -r (fa el resize2fs)

    * sudo lvextend -L +200M -r /dev/diskedt/dades

    * 

* COMANDOS DD (Conver and Copy a File) --> /dev/zero (Imaginario)

    * dd if=/dev/zero of=disk01.img bs=1k count=500k --> inputFile /dev/zero - outputFile disk01 tamaño de **500M**

* COMANDOS losetup --> /dev/zero (Imaginario)

    * losetup -a --> Enseña los losetups

    * losetup /dev/loopX diskX.img --> Asigna

    * losetup -d --> Delete

**DD + LOSETUP**

    * losetup -a --> Enseña los losetups

    * losetup /dev/loopX diskX.img --> Asigna

    * losetup -d --> Delete

PE = UNIDAD BÁSICA DE ASIGNACIÓN --> * A la hora de hacer los Volúmenes Físicos se pierde un porcentaje de información. Se pierde espacio de almacenamiento debido a crear estructuras para la gestión LVM.

## APUNTES DE LVDISPLAY

Segments = 1 [COGE EL ESPACIO NECESARIO de una PV] --> El sistema redirige en uno, mientras que DADES redirige en 2 VOLUMENES LÓGICOS.

    SISTEMA = SEGMENT 1 (1 DISCO PV)

    DADES = SEGMENT 2 (2 DISCOS PV)
    
## APUNTES DE LVDISPLAY

La cantidad de PE que utiliza cada Logical Volume, sistema utiliza 13 de 4MB que proporciona 52MB de almacenamiento, todos ellos en un mismo segmento (Physical Volume).

En cambio dades utiliza 35 unidades de asignación PE de 4MB, proporcionando 140MB de almacenamiento y ocupa 2 segmentos.

 * Es decir 2 **Volúmenes FÍSICOS.**.

# PRÁCTICA INICIAL LVM

**PV**

1. pvcreate /dev/loop0 /dev/loop1 /dev/loop2

2. pvdisplay /dev/loop2

**VG**

3. vgcreate diskedt /dev/loop0 /dev/loop1

4. vgdisplay diskedt

* Se pierde espacio --> Para la GESTIÓN de LVM --> Aprox Bloques x 4M = **Espacio FINAL**.

**LV**

5. lvcreate -L 50M -n sistema /dev/diskedt

6. lvcreate -L 150M -n dades /dev/diskedt

* **` -l100%FREE --> OCUPA todo el ESPACIO.`**

* **`-l50%FREE --> La mitad.`**

* **`l50%VG --> Añadirá la mitad del DISCO`** 

**REVISAR**

7. lvdisplay

8. tree /dev/disk

9. ls -l /dev/diskedt/

**MKFS + MOUNT MANUAL**

10. mkfs -t ext4 /dev/diskedt/sistema

11. mkfs -t ext4 /dev/diskedt/dades

12. mkdir /mnt/dades

13. mkdir /mnt/sistema

14. mount /dev/diskedt/dades /mnt/dades/

15. mount /dev/diskedt/sistema /mnt/sistema/
 
**MOUNT AUTOMÁTICO**

16. vim/etc/fstab

/dev/diskedt/sistema  /mnt/sistema  ext4  errors=remount-ro 0 0
/dev/diskedt/dades  /mnt/dades  ext4  errores=remount-ro  0 0

**POPULATE DATA /MNT/DADES /MNT/SISTEMA**

17. cp -R /boot/* /mnt/dades/

18. cp /boot/* /mnt/sistema/

O

sudo cp /bin/?? /mnt/sistema/
sudo cp /bin/?? /mnt/dades/

**COMPROBAR**

19. df -h

20. blkid

21. lsblk

----------------------------------------------------------------------------------

# PRÁCTICA 2 Modificaciones en Caliente



La principal ventaja de utilización de LVM es que se puede **`modificar en caliente`**.

*   Se pueden modificar las composiciones de los **`grupos de volúmenes`**.

*   Se pueden hacer un **`resize`** de los volúmenes lógicos.

*   Esto es lo que se puede hacer:

*   Ampliar el **`Volume Group diskedt`** añadiendo **100M** procedente de **`/dev/loop2`**.

    *   Si el **`Volume Group diskedt`** dispone de **`más espacio libre`**, se puede **asignar ese espacio** a los **volúmenes lógicos** --> `datos, sistema o crear un nuevo vol lógico`.

        *   Si no se **añade espacio** nuevo a **`diskedt`**, se puede **`redistribuir`** su **espacio libre**.

            *   Se puede repartir su espacio entre sus **2 particiones lógicas** de forma diferente.

                *   Sin tener que **`borrar y crear de nuevo`**.

            *   En todo momento, los LV se pueden **`redimensionar`**:

                *   **`ampliandolos`**.

                *   **`reduciendolos (shrink)`**,

                *   **`siempre y que los datos quepan`**


**`IMPORTANTE`**

* `Es importante remarcar que si queremos **redimensionar una LV**, hay que redimensionar también su **SISTEMA DE FICHEROS**`

**`RECUERDA`**

* resize2fs /dev/diskedt/sistema 30M --> **REDIMENSIONA EL SISTEMA DE FICHEROS EXT4 DE /DEV/DISKEDT/SISTEMA A 30M**.

* e2fsck -f /dev/diskedt/sistema --> **VERIFICA SISTEMA DE FICHEROS**

Modificación:

* Más grande --> Hacer más grande la PARTICIÓN (**LVEXTEND**) y luego los DATOS (Sistema de FICHEROS) (Resize2fs o lvextend -r)

* Más pequeño --> BORRAR parte de DATOS o MOVER (pvmove) (Resize2fs) y luego hacer mças pequeña la CARPETA (lvreduce).

lvreduce -L 32M /dev/diskedt/sistema --> YES / This May...

mount /dev/diskedt/sistema /mnt/sistema

ls /mnt/sistema

df -h

blkid

lsblk

vgdisplay


journalctl -f > /mnt/sistema ----> **OBSERVAMOS EN TIEMPO REAL**

pvmove /dev/loop2 --> **IMPORTANTE MOVER ANTES DE HACER UN VGREDUCE --> SE ASIGNAN PE LIBRES A OTROS PV**.

root@i11:/opt/lvm# pvmove /dev/loop2
  /dev/loop2: Moved: 29.17%
  /dev/loop2: Moved: 54.17%
  /dev/loop2: Moved: 100.00%
  
  
  RESUMEN: 1. Desvincular primero (**pvmove**) --> Quitar PV del grupo (**vgreduce**) --> Borrar el PV (**pvremove**)

**`Modificaciones en Caliente`**

1.  Asignar **100M** de **/dev/loop2** al grupo **/dev/diskedt**

    Añadir 30M de este nuevo espacio al volúmen lógico: sistema.

2.  Crear una nueva **partición lógica** llamada **`services`** de **`60M`** con el **`espacio sobrante del VG diskedt`**.

3.  Redimensionar un **`LV`**:

    Haciéndolo más **`pequeño (shrink) el LV sistema`**.

4.  Con el espacio liberado de sistema, y el espacio libre sobrante del volúmen diskedt, **`ampliar el espacio`** del **`volúmen lógico`** **`datos`**.


**PRIMERA PARTE ASIGNAR 100M DE /DEV/LOOP2 A DISKEDT Y AMPLIAR SISTEMA +30M**

22. `vgextend diskedt /dev/loop2` --> Añade el DD al VG DiskEDT
 
23. `vgdisplay diskedt` --> Mostramos el VG

24. `lvextend -L +30 /dev/diskedt/sistema /dev/loop2` --> Se reparte el espacio de la LVM para asignar +30M de la partición /dev/loop2 para la LVM de '`SISTEMA`'

25. `lvdisplay /dev/diskedt/sistema` --> Llistem el 'Logical Volume' de 'sistema', ara ocupa 1 segment més (2) i ocupa 21 unitats d'assignació 'PE' de 4M (21 * 4 = 84 MiB)
 
26. df -h --> Llistem l'espai disponible.

27. umount /mnt/dades --> Desmuntem el directori de 'dades'... (no cal ja que farem un grow amb resize)

28. umount /mnt/sistema --> Desmuntem el directori de 'sistema'... (ídem)

29. e2fsck -f /dev/diskedt/sistema --> Comprovem i reparem el sistema d'arxius de 'sistema'

30. resize2fs /dev/diskedt/sistema  --> Agrandem el tamany de les dades fins el màxim que és pugui.


31. df -h --> Mostramos que no están
 
33. mount /dev/diskedt/dades /mnt/dades

34. mount /dev/diskedt/sistema /mnt/sistema

**SEGUNDA PARTE CREAR NUEVO LV SERVICES CON EL ESPACIO SOBRANTE DE VG - DISKEDT**

35. df -h
 
36. lvcreate -L 60 -n services /dev/diskedt

37. lvdisplay /dev/diskedt/services

38. vgdisplay /dev/diskedt

**TERCERA PARTE HACER PEQUEÑO /DEV/DISKEDT/SISTEMA**

39. umount /mnt/dades

40. umount /mnt/sistema

Primer reduïm la partició '**sistema**' i després el volum lògic '**sistema**':

41. e2fsck -f /dev/diskedt/sistema --> Comprobar el sistema de ficheros de LV SISTEMA.

42. resize2fs /dev/diskedt/sistema 85M --> Reducir el tañamo del sistema de ficheros a 85. Importante fijarse en la medida mínima.
 
43. lvreduce -L 85M -r /dev/diskedt/sistema --> REDUCE A 85M SISTEMA

44. lvdisplay /dev/diskedt/sistema --> Muestra LV

45. mount /dev/diskedt/sistema /mnt/sistema/ --> Monta 
 
46. mount /dev/diskedt/dades /mnt/dades/ --> Monta

47. df -h

**CUARTA PARTE**

48. vgdisplay diskedt --> visualiza VG

49. lvdisplay /dev/diskedt/dades  --> Visualiza LV

50. umount /mnt/sistema

51. umount /mnt/dades

52. lvextend -l +100%FREE /dev/diskedt/dades --> Añade el **SOBRANTE**
 
**`IMPORTANTE EXAMEN`**

**`man LV (-l, -L)`**

**`sudo lvreduce -L 25M -r /dev/diskedt/sistema --> -r (fa el resize2fs)`**

**Pràctica ADICIONAL**: (REVISAR MAÑANA)

53. dd if=/dev/zero of=disk04.img bs=1k count=500k

54. sudo losetup /dev/loop4 disk04.img

55. sudo losetup -a
 
56. sudo pvcreate /dev/loop4

57. sudo vgextend diskedt /dev/loop4

58. sudo lvdisplay /dev/diskedt/dades

59. sudo lvdisplay /dev/diskedt/sistema

60. sudo pvdisplay /dev/loop1

61. sudo pvmove /dev/loop1 /dev/loop2 /dev/loop3 --> **`Lo mueve - Encuentra PE libres y lo moverá donde sea.`**

NOTA: Se hace de uno en uno

62. sudo vgreduce diskedt /dev/loop1 /dev/loop2 /dev/loop3 --> **`PRIMERO QUITAMOS EL PV de loop1 - luego el vgreduce.`**

63. sudo pvremove /dev/loop1 /dev/loop2 /dev/loop3

64. sudo lvextend -L +200M -r /dev/diskedt/dades

65. df -h
