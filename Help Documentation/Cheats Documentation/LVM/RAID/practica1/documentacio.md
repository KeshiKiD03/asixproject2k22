# Rubén Rodríguez García - ASIX M11
# raid21

## Enunciat (Pràctica 1):
* RAID+LVM en loops

  RAID 1 dos discs de 500MB

  Un segon RAID1 (dos discs de 500MB)

  Primer RAID crear PV I VG 'mydisc'

  LV de 200MB 'sistema', LV de 100MB 'dades'

  mkfs, mount i posar-hi dades

  Incorporar al VG el segon RAID

  Incrementar 'sistema' +100MB

  Provocar un fail a un dels discs del RAID 1

  Eliminar completament el RAID 1 del VG

### Documentació Pràctica 1 (RAID + LVM):
* dd if=/dev/zero of=disk[01/02/03/04].img bs=1k count=500k --> Creem quatre discos de 500MB
* losetup /dev/loop[1/2/3/4] disk[01/02/03/04].img --> Els assignem al loopback
* mdadm --create /dev/md[0/1] --level=1 --raid-devices=2 /dev/loop[1/3] /dev/loop[2/4] --> Creem 2 RAID 1
* pvcreate /dev/md0 --> Creem el 'phyisical volume'
* vgcreate mydisc /dev/md0 --> Creem el 'volume group' 'mydisc' i l'assignem al primer RAID
* lvcreate -L 200M -n sistema /dev/mydisc --> Creem un 'logical volume' de 200M anomenat 'sistema' al 'volume group' 'mydisc' (creem una 'partició' anomenada 'sistema' dins del grup 'mydisc')
* lvcreate -L 100M -n dades /dev/mydisc --> Ídem a l'anterior.
* mkfs -t ext4 /dev/mydisc/sistema --> Li donem format 'ext4'
* mkfs -t ext4 /dev/mydisc/dades --> Ídem a l'anterior
* mkdir /mnt/sistema /mnt/dades --> Creem aquestes carpetes per muntar 'sistema' i 'dades'
* mount /dev/mydisc/sistema /mnt/sistema --> Muntem la partició 'sistema' on correspon
* mount /dev/mydisc/dades /mnt/dades --> Ídem a l'anterior però amb la partició 'dades'
* cp -r /bin/x\* /mnt/sistema
* cp -r /bin/x\* /mnt/dades
* cp -r /bin/b\* /mnt/sistema
* cp -r /bin/b\* /mnt/dades
* cp -r /bin/c\* /mnt/sistema
* cp -r /bin/c\* /mnt/dades
* vgextend mydisc /dev/md1 --> Afegim el segon RAID 1 al 'volume group' 'mydisc'
* lvextend -L +100M /dev/mydisc/sistema --> Afegim 100M a la partició 'sistema'
* mdadm /dev/md0 --fail /dev/loop1 --> Simulem un 'fail' de la primera partició del primer RAID 1
* pvmove /dev/md0 /dev/md1 --> Movem les dades del primer RAID 1 al segon RAID 1
* vgreduce mydisc /dev/md0 --> Eliminem el primer RAID 1 del 'volume group' 'mydisc'
