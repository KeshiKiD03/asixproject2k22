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

## PRÁCTICA 2: RAID LEVEL 5

### 1. EJEMPLO DE RAID LEVEN: Degradar y Failed

En este ejercicio práctico se aprenderá a:

* Crear un **RAID5** con **`3 discos`** y uno de **`SPARE`**.

* **Formatear, montar y** rellenar con datos el DISPOSITIVO **/dev/md0**.

* Generar un **`FAIL`** de los discos del **RAID** y observar como el disco **`SPARE`** entra en **`ACCIÓN`**.

    * Estado: **`3 RAID`**, **`1 FAIL`**, **`0 SPARE.`**

* Generar un nuevo **`FAIL`** a uno de los **`DISCOS`** y ahora el **`RAID`** se queda **`DEGRADADO`**. Mantiene los **`DATOS`** pero no hay **`REDUNDANCIA`**.

    * Estado: **`2 RAID, 2 FAIL, 0 SPARE`**.

* Con un nuevo **`FAIL`**, el **`RAID`** se quedará parado y se perderán todos los datos, que ya no serán **RECUPERABLES**. 

    * Estado: **`1 RAID, 3 FAIL, 0 SPARE`**.

* Aunque se quiten los discos **FAIL** se añadirán dos nuevos (Los mismos), el **RAID** ya no puede funcionar debido a una pérdida de **DATOS**.

* Tampoco aúnque se **PARE** y **ENCIENDA** de nuevo.

-------------------------------------------------------------

En este ejercicio práctico se **IMPLEMENTARÁ**:

1. Crear un RAID5 con 3 unidades (loop0, loop1, loop2, + disco spare).

2. Con la opción verbose se podrá observar que indica el layout (left-symmetric).

3. Uno de los discos es más grande que los otros --> Más de 1%.

-------------------------------------------------------------

### Pràctica 3 (RAID 5) / CHEATSHEET:
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


**1. CREAR RAID5**
```bash
mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/loop1 /dev/loop2 /dev/loop3 --spare-devices 1 /dev/loop4 # --> Creem el RAID 5
```

**2. VER PROC MDSTAT**
```bash
cat /proc/mdstat
```

**3. VERIFICAR EL RAID**
```bash
mdadm --detail /dev/md0
```

**4. CREAR RAID1 Y FORMATAR**
```bash
rm -rf /mnt/\* ; # --> Esborrem la xixa que hi havia abans
mkfs -t ext4 /dev/md0 # --> Li fiquem format
```

**5. POPULATE A MNT**
```bash
cp /bin/x\* /mnt --> Copiem xixa
```

**6. PROVOCAR UN FAIL EN EL LOOP 2**

```bash
mdadm /dev/md0 --fail /dev/loop2 #  --> Generem un error
```
**7. QUITAR EL DISCO FAIL LOOP 2**
```bash
mdadm /dev/md0 --remove /dev/loop2
```

**8. VER EL STATUS DEL RAID**
```bash
cat /proc/mdstat
```
**9. DESMONTAR EL RAID**
```bash
umount /mnt
```

**10. PARAR RAID**
```bash
mdadm --stop /dev/md0 --> Aturem el RAID
```

**11. ENSAMBLAR RAID - LO MONTA AUTOMÁTICAMENTE**
```bash
mdadm --assemble --scan # --> Li diem que ens monti automàticament
```

**12. OBSERVAMOS DETALLES DE LA RAID**
```bash
mdadm --detail /dev/md0
```

**13. GENERAR FAIL EN LOOP 4**
```bash
mdadm /dev/md0 --fail /dev/loop4 # --> Generem un altra errada (fail de loop4Ç)
```

**14. EXAMINAR - DA INFORMACIÓN DE LA PARTICIÓN VIRTUAL LOOP 0**
```bash
mdadm --examine /dev/loop0 # --> Da información de la partición VIRTUAL
```

**15. BORRAMOS EL LOOP 4 DEL RAID - PERDEMOS PARIDAD**
```bash
mdadm /dev/md0 --remove /dev/loop4 # --> Lesborrem (Perdem la paritat encara que està repartida per els 3 discos)
```

**14. VOLVER A AÑADIR EL LOOP 2**
```bash
mdadm /dev/md0 --add /dev/loop2 # --> Tornem a afegir el 2
```

**15. SE COMPRUEBA EL ESTADO EN /PROC/MDSTAT AFTER FAIL**
```bash
cat /proc/mdstat # --> 512k chunk (loop1, 3 i 4)
```

**16. PARAR EL RAID5 AFTER `FAIL`**
```bash
mdadm --stop /dev/md0 # --> L aturem
```

**17. MOVER LA CONFIGURACIÓN DE MDADM (RAID5) /DEV/MD0**
```bash
mv /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf.hisx2
```

**18. SE COPIA DE NUEVO**
```bash
mv /etc/mdadm/mdadm.conf /etc/mdadm/.
```

**19. SE MUEVE MDADM.CONF A LA CARPETA /ETC/MDADM/MDADM.CONF**
```bash
mv /etc/mdadm.conf /etc/mdadm/mdadm.conf
```

**20. SE VUELVE A ENSAMBLAR EL DISCO RAID**
```bash
mdadm --assemble /dev/md0 # --> Agafarem l arxiu que hem generat abans
```

Observar que en tractar-se d’un `RAID5` format per tres unitats de `100M` més una de spare de ``100M``, l’espai utilitzable **d’emmagatzemament** és proper als ``200M``. 

Dels tres discos de RAID dos emmagatzemem dades i un tercer paritat, però no tal qual (seria raid 4) sinó que entre els tres discos es barregen dades i paritat.


Així doncs, si falla un dels tres discos el sistema deixa de funcionar. Si hi ha un disc de spare, aquest s’hauria d’activar automàticament per solventar el problema. Si un altre disc falla, llavors el RAID deixa de funcionar.

### 2. EJEMPLO DE RAID LEVEL 5: Degradar y Recuperar

Aquest exemple és el mateix que l’anterior on d’un **RAID5** de tres unitats **més** una de **spare** i
se n’han **`espatllat dues`**.

Primer ha entrat en **funcionament** l’spare però en el **segon fail** el raid ha quedat **`degradat`** (**`sense redundància`**). 

A continuació **`s’han eliminat`** els **`dos discs fail`** i se n’han afegit dos de nous (els mateixos). 

El raid ha fet **`la sincronització`** en un dels discs i l’altre ha passat a ser spare.


**1. OBSERVAR STATUS DEL RAID**
```bash
cat /proc/mdstat
```

**2. VER DETALLES DE LA RAID5**
```bash
mdadm --detail /dev/md0
```

**3. AÑADIR A LA RAID5 EL LOOP1**
```bash
mdadm /dev/md0 --add /dev/loop1
```

**4. AÑADIR A LA RAID5 EL LOOP2**
```bash
mdadm /dev/md0 --add /dev/loop2
```

**5. OBSERVAR STATUS DEL RAID**
```bash
cat /proc/mdstat
```

**6. VER DETALLES DE LA RAID5 DE NUEVO**
```bash
mdadm --detail /dev/md0
```

**7. MIRAR EL DISK FILE (ALMACENAMIENTO DEL MONTAJE)**
```bash
df -h
```
