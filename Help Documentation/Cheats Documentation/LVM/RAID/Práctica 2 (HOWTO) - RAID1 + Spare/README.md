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

## PROPUESTA: RAID1 + SPARE

**Crear un raid de Level1 amb dues particions (loop0 i loop1) i dos discs d’spare. I practicar:**

**LA CREACIÓN DEL RAID**

* mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/loop0 /dev/loop1 --spare-devices=2 /dev/loop2 /dev/loop3 --> Afegim 2 devices al RAID1 i 2 discos spare

* cat /proc/mdstat

**OBSERVAR LOS DATOS**

* mdadm --detail /dev/md0 --> Working Devices: 4 (Però la redundància és en 2 dispositius)

**FAIL DE UN DISCO (SPARE ENTRA EN ACCIÓN)**

* mdadm /dev/md0 --fail /dev/loop1 --> Esptallem el 1

* mdadm --detail /dev/md0 --> Entra a treballar el 3 directament

**FAIL DE UN OTRO DISCO (SPARE ENTRA EN ACCIÓN)**

* mdadm /dev/md0 --fail /dev/loop3 --> Esptallem el 3

* mdadm --detail /dev/md0 --> Segueix 'clean' perquè hi ha 2 discos treballant

* mdadm /dev/md0 --fail /dev/loop2

* mdadm --detail /dev/md0 

* dd if=/dev/zero of=disk05.img bs=1k count=100K --> Creem la nova imatge

* losetup /dev/loop4 disk05.img --> L'afegim al loopback

* mdadm /dev/md0 --add /dev/loop4 --> Afegim al RAID la nova imatge.

* mdadm --detail /dev/md0 --> Tornem a tenir 2 discos treballant

**ELIMINAR LOS DOS DISCOS FAIL**

* mdadm /dev/md0 --remove /dev/loop1 /dev/loop2 /dev/loop3 --> Els esborrem en 'calent'

**AÑADIR DE NUEVO LOS DOS DISCOS (ROL DE SPARE)**

* mdadm /dev/md0 --add /dev/loop1 --> Afegim el 1 al 'banquillo' (spare)

* mdadm /dev/md0 --fail /dev/loop1 /dev/loop4 --> Treiem el 1 i 4

* mdadm /dev/md0 --fail /dev/loop1 --> FRACÀS!

* mdadm -v --zero-superblock /dev/loop1 /dev/loop2 /dev/loop3 /dev/loop4 /dev/loop5
