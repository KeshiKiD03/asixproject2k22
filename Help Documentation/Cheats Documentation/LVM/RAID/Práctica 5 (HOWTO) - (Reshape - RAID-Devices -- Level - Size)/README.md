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

## PRÁCTICA 5: (Reshape: raid-devices / Level / size):

**`GROW MODE`** --> Cambia el tamaño del SHAPE de un ACTIVE ARRAY.

* mdadm --create /dev/md/myraid --level=1 --raid-devices=2 /dev/loop1 /dev/loop2 --> Creem un nou RAID 1
* cat /proc/mdstat --> Tenim un RAID 1 amb 2 discos
* mdadm --grow /dev/md/myraid --raid-devices=3 --add /dev/loop3 --> Li afegim (grow) al nostre RAID un nou dispositiu (AMB GROW NO DEIXARÀ AFEGIR SPARE!!)

mdadm: added /dev/loop3

raid_disks for /dev/md/myraid set to 3

* mdadm --detail /dev/md/myraid

* mdadm /dev/md/myraid --add /dev/loop4 --> Afegim un altre disc però com a spare (fent 'add' del que sigui ja ho relaciona com a spare)

* cat /proc/mdstat

* mdadm /dev/md/myraid --fail /dev/loop3 --> Simulem un error al tercer disk (loop3)

* mdadm /dev/md/myraid --remove /dev/loop3 --> Ho esborrem

* mdadm /dev/md/myraid --fail /dev/loop4

* mdadm /dev/md/myraid --remove /dev/loop4 --> Eliminem el quart disk

* cat /proc/mdstat

* mdadm --grow /dev/md/myraid --level=1 --raid-devices=2 --> Disminuim el RAID (hem de treure els discs com hem fet per poder fer això)

* dd if=/dev/zero of=disk06.img bs=1k count=100k --> Creem un altra imatge

* losetup /dev/loop6 disk06.img --> L'assignem al loopback

**Volem passar d'un RAID 5 amb 3 discos i 1 amb spare (200MB) a ... --> un RAID 5 amb 5 discos més 1 d'spare (400MB)**

* mdadm --create /dev/md/myraid --level=5 --raid-devices=3 /dev/loop1 /dev/loop2 /dev/loop3 --spare-devices=1 /dev/loop4

* mdadm --grow /dev/md/myraid --raid-devices=5 --add /dev/loop5 /dev/loop6 --> Afegim 2 discos nou

* cat /proc/mdstat

* mdadm --stop --scan

* cat /proc/mdstat --> Comprovem

* mdadm --create /dev/md/myraid --level=1 --raid-devices=2 /dev/loop1 /dev/loop2 --spare-devices=1 /dev/loop3 --> Ara tenim un RAID 1 de 2 discos (però resulta que tenim més discos i volem pasar a RAID 5 (necesistem 3 discos que ja els tenim))

* mdadm --grow /dev/md/myraid --level=5 --> Ho passem a RAID 5

mdadm: level of /dev/md/myraid changed to raid5
 
* cat /proc/mdstat --> Ens diu que és RAID 5, però ens surt que només funciona amb 2 discos quan necessita mínim 3...

* mdadm --grow /dev/md/myraid --raid-devices=3 --> Posem l'spare a funcionar

* cat /proc/mdstat --> Comprovem

* mdadm --stop --scan --> Ho aturem

* mdadm --create /dev/md/myraid --level=1 --raid-devices=3 /dev/loop1 /dev/loop2 /dev/loop3 --> Creem un RAID 1 amb 3 discos (al tenir més de 2 discos no deixa canviar a RAID 5)

* mdadm --grow /dev/md/myraid --level=5 --> NO DEIXA PERQUÈ HO VAN FER MALAMENT

* dd if=/dev/zero of=disk[500/600].img bs=1k count=500k --> Creem 2 discos de 500MB

* tree /sys/block --> Llistem particions (virtuals i físiques)

* losetup /dev/loop[11/12] disk[500/600].img --> L'assignem al loopback

* mdadm --create /dev/md/myraid --level=1 --raid-devices=2 /dev/loop1 /dev/loop2 --spare-devices=1 /dev/loop11 --> Creem un altre disc però ens diu que estem afegint un disc de 500 quant només utiltizarem 100MB

* mkfs -t ext4 /dev/md/myraid --> Li donem format ext4

* mount /dev/md/myraid /mnt --> Ho muntem

* cp -r /bin/x\* /mnt --> Afegim xixa

* cp -r /bin/b\* /mnt

* cp -r /bin/c\* /mnt

* df -h --> Comprovem l'espai

* mdadm /dev/md/myraid --fail /dev/loop1

* mdadm /dev/md/myraid --remove /dev/loop1

* cat /proc/mdstat 

* mdadm --detail /dev/md/myraid

* mdadm /dev/md/myraid --add /dev/loop12 --> Li afegim la imatge (2) de 500M com a spare

* mdadm /dev/md/myraid --fail /dev/loop2 --> Provoquem error

* mdadm /dev/md/myraid --remove /dev/loop2

* mdadm --detail /dev/md/myraid --> Capacitat de 100MB ja que el disc quan ho hem creat era de 100MB, encara que fiquem discos més grans, aquests només tindràn 100MB

* mdadm --grow /dev/md/myraid --size=max --> Li possem que s'agrandi al màxim size possible (500MB) per tal d'aprofitar l'espai

* mdadm --detail /dev/md/myraid --> Comprovem que EL RAID SÍ és de 500MB

* df -h --> Encara segueix sen de 100MB perquè no ho hem formatejat (HEM FORMATEJAT EL RAID!!!!)

* resize2fs /dev/md/myraid --> Ho agrandem el màxim possible

* df -h --> Comprovem que ara sí és de 500MB