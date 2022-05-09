# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<br>

# __Ciberseguretat__: "_Careful where you step_" 🕵️ 🔎

<div style="align: center; width: 100%">
    <img src="https://tec.mx/sites/default/files/styles/header_full/public/2021-08/ciberseguridad-tec-de-monterrey.jpg?itok=H3ibmb8t" />
</div>

# Index

* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)

# Kali Linux

1. Descarregar-nos la ISO de Ubuntu Server 20.04 LTS: [downloadISO](https://releases.ubuntu.com/20.04/)

1. Obrir VirtualBOX --> New --> Name --> Memoria 1024M --> Create virtual Hard Disk Now --> VDI 70GB    --> Dynamic size.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub1.png" />
</div>

<div style="align: center; width: 100%">
    <img src="./Photos/Ub3.png" />
</div>

2. Afegim el disk ISO manualment.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub4.png" />
</div>

3. Canviar l'ordre d'arrencada.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub5.png" />
</div>

4. Seleccionem English com a idioma del sistema i teclat en Català.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub8.png" />
</div>

5. De moment la configuració de xarxa la deixem tal qual amb NAT, després la canviarem.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub7.png" />
</div>

6. Ubuntu Server es farà l'automatització de les particions per a que sigui adequat per a UB Server. Utilitzarà LVM pel que veiem.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub9.png" />
</div>

7. Posem les nostres dades de Servidor.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub10.png" />
</div>


8. Seleccionem alguns repositoris que ens interessen com _docker_ o _aws-cli_.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub11.png" />
</div>

9. Esperem a que s'instal·li correctament.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub12.png" />
</div>

10. Rebotar i treure la disc ISO. Canviar l'arrencada.

<div style="align: center; width: 100%">
    <img src="./Photos/Ub13.png" />
</div>

# Quick configuration

1. Update repository: `apt-get update`

2. Canviar el _keyboard-configuration_: 

* `apt install -y keyboard-configuration console-setup netcat`

3. Configurar el _keyboard-configuration_: `dpkg-reconfigure keyboard-configuration`

    + Teclat genèric.

    + Spanish --> Spanish - Catalan (Spain, with middle-dot L)

<div style="align: center; width: 100%">
    <img src="./Photos/Ub14.png" />
</div>

https://www.redeszone.net/noticias/seguridad/error-usar-mismo-nombre-credenciales/

4. Instal·lar __Guest Additions i SSH__: