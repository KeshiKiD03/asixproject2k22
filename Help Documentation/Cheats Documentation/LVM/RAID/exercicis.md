# Pràctiques RAID:

### Exemples d'ordres RAID:
* mdadm --create /dev/md0 --chunk=4 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2

**Examinar el RAID:**

* mdadm --detail --scan
* mdadm --detail /dev/md0
* mdadm --query /dev/loop0
* mdadm --examine /dev/loop0
* cat /proc/mdstat

**Errada i recuperació:**

* mdadm /dev/md0 --fail /dev/loop1
* mdadm /dev/md0 --remove /dev/loop1
* mdadm --manage /dev/md0 --add /dev/loop3

**Aturar / Engegar el RAID:**

* mdadm --stop /dev/md0
* mdadm --assemble --scan
* mdadmin --assemble /dev/md0 --run /dev/loop0 /dev/loop1/dev/loop2
* mdadm --detail --scan > /etc/mdadm.conf

### Pràctica 1 (RAID 1):
* dd if=/dev/zero of=disk01.img bs=1k count=100K --> \*3 (disc02 + disc03) --> Creem les imatges
* losetup /dev/loop0 /opt/lvm/disk01.img --> \*3 (loop1 + loop2) --> Les assignem al loopback
* losetup -a --> Comprobem que s'hagin assignat correctament.
* mdadm --create /dev/md0 --level=1 --raid-devices=3 /dev/loop0 /dev/loop1 /dev/loop2 --> Integrem les particions virtuals al RAID (3 devices al RAID 1 (level=1), chunk=4 li especifiquem el size de kilobytes, per RAID 1 no serveix) --> Ens avisarà que no podrà posar-la com 'array' ja que hi haurà metadates, ens demana asegurar-nos de que el nostre carregador (GRUB2) tingui per poder arrancar, si en té, però el GRUB1 no pot entendre-ho.
* mkfs -t ext4 /dev/md0 --> Li donem format ext4 al RAID
* blkid --> Ens diu l'id de cada element de hardware encara que sigui virtual ja que ell ho crea (block device atributes)
* mount /dev/md0 /mnt/ --> Muntem el RAID a /mnt
* cp -r /boot/ /mnt/ --> Copiem dades al directori que hem muntat.
* df -h --> Comprobem el 'disk free'


* mdadm --detail --scan --> Veiem l'array creada per el RAID
* mdadm --detail /dev/md0 --> Veiem els details del RAID
* mdadm --query /dev/loop0 --> Examinem el device /loop0 i comprobem si és de tipus 'md' (No ho és, llavors donarà error)
* mdadm --examine /dev/loop0 --> Ens dona informació de la partició virtual
* cat /proc/mdstat --> Veiem els diferents tipus de RAIDs i veiem quins tenim creats i quines particions virtuals té associades




* mdadm /dev/md0 --fail /dev/loop1 --> Simularem una errada del loop1 (Al ser RAID1 no passarà res ja que són còpies de si mateixos)
* cat /proc/mdstat --> Comprovem l'status
* mdadm --detail /dev/md0 --> Veiem els details del RAID

**State: clean, degraded --> clean perquè hi ha 2 funcionant i hi ha redundancia de dades (o s'han perdut) i degraded per la partició que s'ha espatllat**

---

* mdadm /dev/md0 --remove /dev/loop1 --> Ara que ja ha fallta, l'eliminem del RAID (ho fa en calent)

mdadm: hot removed /dev/loop1 from /dev/md0

* cat /proc/mdstat
* dd if=/dev/zero of=disk04.img bs=1k count=100k --> Creem un altre imatge per afegir-la al RAID

**00 és el valor NULL**

* losetup /dev/loop3 disk04.img --> Afegim la nova imatge al loopback
* mdadm --manage /dev/md0 --add /dev/loop3 --> Afegim el nou loopback al RAID --> 'manage' opcional

**Quan afegim un disc nou, en background va fent tota la 'pesca' de sincronització (va volcant les dades del mirror)**

* mdadm --detail /dev/md0 --> Veiem els details del RAID


* mdadm --stop /dev/md0 --> NO ENS DEIXARÀ PERQUÈ ELS LOOPBACKS ESTAN MUNTATS A /mnt

* umount /mnt --> Desmuntem el directori /mnt per poder parar el RAID
* mdadm --stop /dev/md0 --> Ara podrem parar el RAID

**Les particions existeixen, però el RAID no apareix per exemple a 'tree /dev/disk'**

**Hem d'eliminar la marca del RAID un cop desmuntat per quan engegui l'ordinador no intenti muntar-lo. Ordre: mdadm -v  --zero-superblock /dev/loop[]**

* mdadm --assemble --scan --> Ens informa de amb quants dicos ha iniciat el RAID i ens informa de que l'array de md0 enacara està actiu ja que l'hem aturat, NO ELIMINAT!
mdadm: giving up.

**--assemble (engega el RAID) | --scan (escaneja particions de RAID e intenta juntar)**

**Examina el discos e intenta deduir les coses, està trobant 4 particions i las assigna al /dev/md0 quan aquest té assignades realment 3, i les engega amb les últimes 3 trobades (ho enten igualment amb aquestes 3), encara que haguessin 2, ho hauria engegat igualment.**

* mdadm --assemble /dev/md0 --run /dev/loop2 /dev/loop3 /dev/loop4 --> Triem els dispositius que volem que utilitzi, si possem per exemple /dev/loop1, iniciara 2 en compte de 3

* mdadm --detail --scan > /etc/mdadmin.conf --> Fiquem l'info del 'scan' al fitxer en questió (sabrà quin RAID ha d'arrancar, explicació + endevant)

* mdadm --stop /dev/md0 --> Aturem el RAID

* mdadm --assemble --scan

* mdadm -v --zero-superblock /dev/loop1 /dev/loop2 /dev/loop3 /dev/loop4 --> Els hi treiem la marca (netejem)

### Pràctica 2 (RAID 1 + SPARE):
* mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/loop1 /dev/loop2 --spare-devices=2 /dev/loop3 /dev/loop4 --> Afegim 2 devices al RAID1 i 2 discos spare
* cat /proc/mdstat
* mdadm --detail /dev/md0 --> Working Devices: 4 (Però la redundància és en 2 dispositius)
* mdadm /dev/md0 --fail /dev/loop2 --> Esptallem el 2
* mdadm --detail /dev/md0 --> Entra a treballar el 4 directament
* mdadm /dev/md0 --fail /dev/loop4 --> Esptallem el 4
* mdadm --detail /dev/md0 --> Segueix 'clean' perquè hi ha 2 discos treballant
* mdadm /dev/md0 --fail /dev/loop3
* mdadm --detail /dev/md0 
* dd if=/dev/zero of=disk05.img bs=1k count=100K --> Creem la nova imatge
* losetup /dev/loop5 disk05.img --> L'afegim al loopback
* mdadm /dev/md0 --add /dev/loop5 --> Afegim al RAID la nova imatge.
* mdadm --detail /dev/md0 --> Tornem a tenir 2 discos treballant
* mdadm /dev/md0 --remove /dev/loop2 /dev/loop3 /dev/loop4 --> Els esborrem en 'calent'
* mdadm /dev/md0 --add /dev/loop2 --> Afegim el 2 al 'banquillo' (spare)
* mdadm /dev/md0 --fail /dev/loop2 /dev/loop5 --> Treiem el 2 i 5
* mdadm /dev/md0 --fail /dev/loop1 --> FRACÀS!
* mdadm -v --zero-superblock /dev/loop1 /dev/loop2 /dev/loop3 /dev/loop4 /dev/loop5

### Pràctica 3 (RAID 5):
* mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/loop1 /dev/loop2 /dev/loop3 --spare-devices 1 /dev/loop4 --> Creem el RAID 5
* cat /proc/mdstat
* mdadm --detail /dev/md0
* rm -rf /mnt/\* --> Esborrem la xixa que hi havia abans
* mkfs -t ext4 /dev/md0 --> Li fiquem format
* cp /bin/x\* /mnt --> Copiem xixa
* mdadm /dev/md0 --fail /dev/loop2 --> Generem un error
* mdadm /dev/md0 --remove /dev/loop2
* cat /proc/mdstat
* umount /mnt
* mdadm --stop /dev/md0 --> Aturem el RAID
* mdadm --assemble --scan --> Li diem que ens monti automàticament
* mdadm --detail /dev/md0
* mdadm /dev/md0 --fail /dev/loop4 --> Generem un altra errada (fail de loop4Ç)
* mdadm /dev/md0 --remove /dev/loop4 --> L'esborrem (Perdem la paritat encara que està repartida per els 3 discos)
* mdadm /dev/md0 --add /dev/loop2 --> Tornem a afegir el 2
* cat /proc/mdstat
* mdadm --examine --scan > /etc/mdadm.conf --> Grabem el resultat al fitxer
* cat /etc/mdadm.conf
* cat /proc/mdstat --> 512k chunk (loop1, 3 i 4)
* mdadm --stop /dev/md0 --> L'aturem
* mv /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf.hisx2
* mv /etc/mdadm/mdadm.conf /etc/mdadm/.
* mv /etc/mdadm.conf /etc/mdadm/mdadm.conf
* mdadm --assemble /dev/md0 --> Agafarem l'arxiu que hem generat abans

### Pràctica 4 (start/stop/assemble/md127):
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

### Pràctica 5 (Reshape: raid-devices / Level / size):
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
