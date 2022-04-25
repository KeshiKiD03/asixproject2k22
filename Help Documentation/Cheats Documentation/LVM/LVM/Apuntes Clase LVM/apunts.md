# Apunts LVM:

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

### Ordres:

* apropos lvm --> Ens dona informació dels diferents manuals de LVM disponibles.
* system-config-lvm [&] --> Ordre per entrar al entorn gràfic (Debian no ho enté)

### Definicios dels Disc Durs:
PV Phisical Volumen

VG Volume Group

LV Logical Volume

### Utilitzar LVM (ordres):
* dd if=/dev/zero of=[disk01].img bs=1k count=100K --> Creació d'una imatge de 105M = 100MiB
* losetup /dev/loop[0] /opt/lvm/disk01.img --> Assignem la imatge al loopback. (/dev/loop --> emmul·lació de hardware)
* losetup -a --> Llistem l'stauts de tots els dispositius loop

**Primer pas:** Trasnformar-los en volums físics...

* pvcreate /dev/loop0 /dev/loop1 /dev/loop2 --> No ens deixarà ja que els teniem assignats anteriorment al 'Volume Group' de 'diskedt', llavors hem de fer el següent:
* root@i24:/tmp# vgremove diskedt

Do you really want to remove volume group "diskedt" containing 3 logical volumes? [y/n]: y

Do you really want to remove active logical volume diskedt/sistema? [y/n]: y

  Logical volume "sistema" successfully removed

Do you really want to remove active logical volume diskedt/dades? [y/n]: y

  Logical volume "dades" successfully removed

Do you really want to remove active logical volume diskedt/services? [y/n]: y

  Logical volume "services" successfully removed

  Volume group "diskedt" successfully removed

**Un cop fet això, ja podrem fer el pas anterior :)**

* pvdisplay /dev/loop0 --> Llistar característiques del D.D físic.

  "/dev/loop0" is a new physical volume of "100.00 MiB"

  --- NEW Physical volume ---

  PV Name               /dev/loop0

  VG Name               

  PV Size               100.00 MiB

  Allocatable           NO

  PE Size               0   

  Total PE              0

  Free PE               0

  Allocated PE          0

  PV UUID               MynLwF-7rNC-3CjW-6HVy-ulE3-cUAH-nnqVq7

* vgcreate diskedt /dev/loop0 /dev/loop1 --> Agrupem dos D.D físics en un 'Volume Group' amb el tag 'diskedt'.
* vgdisplay diskedt --> Llistem el 'Volume Group' de 'diskedt', ens hem de fixar que al crear un grup amb dos D.D, l'espai d'emmagatzematge d'aquests és suma menys 8 MiB (4MiB * 2) per el format LVM.

**PE:** Physical Extents (blocs de dades)

* pvdisplay /dev/loop0 --> Comprobem com ha quedat hara el D.D 'loop0'.

  --- Physical volume ---

  PV Name               /dev/loop0

  VG Name               diskedt

  PV Size               100.00 MiB / not usable 4.00 MiB

  Allocatable           yes 

  PE Size               4.00 MiB

  Total PE              24

  Free PE               24

  Allocated PE          0

  PV UUID               MynLwF-7rNC-3CjW-6HVy-ulE3-cUAH-nnqVq7

**Ara pasem del 'Volume Group' al Logical Volume' ja que volem fer particions lògiques d'aquest 'Volume Group'...**

* lvcreate -L 50M -n sistema /dev/diskedt --> Creem partició 'sistema' de 50M
* lvcreate -L 150M -n dades /dev/diskedt --> Creem partició 'dades' de 150M
* lvcreate -l100%FREE -n dades /dev/diskedt --> Assignem l'espai restant a la partició 'dades', que en aquest cas és 0
* lvdisplay /dev/diskedt/[sistema/dades] --> Llistem els 'Logical Volumes' (podem veure que si ocupa 2 'Segments' la unitat lògica està conformada per 2 unitats físiques.
* tree /dev/disk | ll /dev/diskedt
* mkfs -t ext4 /dev/diskedt/dades --> Li donem format 'ext4' al 'Logical Volume' de 'dades'
* mkfs -t ext4 /dev/diskedt/sistema --> Ídem

**Creem els punts de muntatges i els muntem:**

* mkdir /mnt/dades /mnt/sistema
* mount /dev/diskedt/dades /mnt/dades
* mount /dev/diskedt/sistema /mnt/sistema

**Copiem dades a cada directori:**

* cp /bin/?? /mnt/dades/
* mkdir /mnt/dades/backup
* cp /bin/?? /mnt/dades/backup
* cp /bin/?? /mnt/sistema/
* df -h --> Veiem l'espai disponible en 'human redeable'

/dev/mapper/diskedt-dades    131M   65M   56M  54% /mnt/dades

/dev/mapper/diskedt-sistema   46M   45M     0 100% /mnt/sistema

* blkid --> Veiem els atributs de block d'un dispositiu (han d'estar muntats)

**Ara simularem que afegim un nou D.D:**

* vgextend diskedt /dev/loop2 --> Afegim el D.D al 'VOlume Group' de 'diskedt'
* vgdisplay diskedt --> Llistem el 'Volume Group'
* lvextend -L +30 /dev/diskedt/sistema /dev/loop2 --> Ara repartirem aquest espai lliure per assignar ampliant en 30M la partició 'sistema'
* lvdisplay /dev/diskedt/sistema --> Llistem el 'Logical Volume' de 'sistema', ara ocupa 1 segment més (2) i ocupa 21 unitats d'assignació 'PE' de 4M (21 * 4 = 84 MiB)
* df -h --> Llistem l'espai disponible.
* umount /mnt/dades --> Desmuntem el directori de 'dades'... (no cal ja que farem un grow amb resize)
* umount /mnt/sistema --> Desmuntem el directori de 'sistema'... (ídem)
* e2fsck -f /dev/diskedt/sistema --> Comprovem i reparem el sistema d'arxius de 'sistema'
* resize2fs /dev/diskedt/sistema --> Agrandem el tamany de les dades fins el màxim que és pugui.
* mount /dev/diskedt/dades /mnt/dades
* mount /dev/diskedt/sistema /mnt/sistema

**Ara, comprobem i veiem que tenim espai utilitzable quan abans no teníem res (hem agrandat l'espai utilitzable)**

* df -h

/dev/mapper/diskedt-dades    131M   65M   56M  54% /mnt/dades

/dev/mapper/diskedt-sistema   78M   46M   26M  65% /mnt/sistema

* lvcreate -L 60 -n services /dev/diskedt --> Creem una nova partició lògica anomenada 'services'
* lvdisplay /dev/diskedt/services --> La llistem..

**Ara el volum 'diskedt' disposa de 300M repartits a 80M per a sistema (50 + 30), 150M per a dades i 60M per al nou volum lògic 'services'**

* vgdisplay /dev/diskedt --> Llistem el volum lògic 'diskedt'

**Volem traspassar tot l'espai a la partició de 'dades':**

* umount /mnt/dades
* umount /mnt/sistema

**Primer reduïm la partició 'sistema' i després el volum lògic 'sistema':**

* e2fsck -f /dev/diskedt/sistema
* resize2fs /dev/diskedt/sistema [85M] --> Reduïm fins a 85M (important fixar-se en la mida mínima a la que s'ha de reduïr)
* lvreduce -L 85M -r /dev/diskedt/sistema --> Ara reduïrem el volum lògic
* lvdisplay /dev/diskedt/sistema --> Comprobem
* mount /dev/diskedt/sistema /mnt/sistema/
* mount /dev/diskedt/dades /mnt/dades/
* df -h --> Comprobem l'espai disponible

**Assignem al volum 'dades' tot l'espai sobrant:**

* vgdisplay diskedt --> Llistem el 'Volume Group' 'diskedt' (important fixar-se en 'Free PE' per veure quan agrandarà)
* lvdisplay /dev/diskedt/dades --> Llistem el 'Logical Volume' 'dades'
* umount /mnt/sistema
* umount /mnt/dades
* lvextend -l +100%FREE /dev/diskedt/dades --> Extendrà de 140MiB a 144MiB.

**Coses a mirar per l'exàmen:**
* man LV (-l, -L)
* sudo lvreduce -L 25M -r /dev/diskedt/sistema --> -r (fa el resize2fs)

**Pràctica:**
* dd if=/dev/zero of=disk04.img bs=1k count=500k
* sudo losetup /dev/loop4 disk04.img
* sudo losetup -a
* sudo pvcreate /dev/loop4
* sudo vgextend diskedt /dev/loop4
* sudo lvdisplay /dev/diskedt/dades
* sudo lvdisplay /dev/diskedt/sistema
* sudo pvdisplay /dev/loop1
* sudo pvmove /dev/loop1 /dev/loop2 /dev/loop3 --> Ho mou on troba 'PE' lliures, ho mourà on sigui.
* sudo vgreduce diskedt /dev/loop1 /dev/loop2 /dev/loop3 --> Primer treiem el 'PV' de 'loop1' del grup ja que encara que no tingui capespai ocupat, segueix estant conectat amb el 'VG'.
* sudo pvremove /dev/loop1 /dev/loop2 /dev/loop3
* sudo lvextend -L +200M -r /dev/diskedt/dades --> Extenem 200M i fem el resize (-r)
* df -h --> Comprovem
