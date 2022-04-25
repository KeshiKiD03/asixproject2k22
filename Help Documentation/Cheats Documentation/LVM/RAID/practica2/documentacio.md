# Rubén Rodríguez García - ASIX M11
# raid21

## Enunciat (Pràctica 2):
* Pràctica amb particions reals

  Crear sda2: 10G, sda3: 4G, sda4: 4G

  Crear un raid1 amb sda3 i sda4

  Generar un VG anomenat diskedt amb sda3 i sda4

  Generar LV 'sistema' de 3G i 'dades' de 1G

  Muntar i posar-hi xixa.

  Automatitzar el muntatge (/mnt/dades, /mnt/sistema)

  Reboot i verificar que dades i sistema estan disponibles.

### Documentació Pràctica 2 (Real):
* fdisk /dev/nvme0n1--> Entrem al disc i creem les particions especificades a l'enunciat
* n + p + enter + 10G = sda2
* n + p + enter + 4G = sda3
* n + p + enter + 4G = sda4
* p --> Comrpovem taula de particions
* w --> Guardem
* partprobe /dev/nvme0n1 --> Comrpovem que s'hagin creat bé
* mdadm --create /dev/md/myraid --level=1 --raid-devices=2 /dev/nvme0n1p3 /dev/nvme0n1p4 --> Creem el RAID 1 amb 'sda3' i 'sda4'
* vgcreate diskedt /dev/md/myraid --> Assignem 'sda3' i 'sda4' (que estàn dins del RAID 1) al 'volume group' 'diskedt'
* lvcreate -L 3G -n sistema /dev/diskedt --> Creem 'logical volume' de 3G anomentat 'sistema' a 'diskedt'
* lvcreate -L 1G -n dades /dev/diskedt --> Ídem a l'anterior però d'1G i anomenat 'dades'
* mkdir /mnt/sistmea /mnt/dades --> Creem aquestes carpetes per muntar 'sistema' i 'dades'
* mkfs -t ext4 /dev/diskedt/sistema
* mkfs -t ext4 /dev/diskedt/dades
* mount /dev/diskedt/sistema /mnt/sistema --> Muntem la partició 'sistema' on correspon
* mount /dev/diskedt/dades /mnt/dades --> Ídem a l'anterior però amb la partició 'dades'
* cp -r /bin/x\* /mnt/sistema
* cp -r /bin/x\* /mnt/dades
* vim /etc/fstab
* /dev/diskedt/sistema /mnt/sistema ext4 errors=remount-ro 0 0
* /dev/diskedt/dades /mnt/dades ext4 errors=remount-ro 0 0
* mount -a --> Comprovem
* mdadm --examine --scan > /etc/mdadm/mdadm.conf

### Desmuntar:
* Comentem les línees del fstab
* mount -a --> Comprovem
* umount /mnt/sistema
* umount /mnt/dades
* vgremove diskedt
* echo "" > /etc/mdadm/mdadm.conf
* mdadm --stop /dev/md/myraid
* fdisk /dev/nvme0n1 --> Esborrem les particions
