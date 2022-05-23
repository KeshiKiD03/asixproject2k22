# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__


<br>
<br>
<br>
<br>

# __CryptoSEC__: "_Careful where you step in_"


![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/CryptoSECLogo.png?raw=true)
> __Img Source__: *@Aaron i @Cristian GitHub*




<br>
<br>
<br>




# __Index__

+ **DHCP**: [--> readME <--](#dhcp)

+ **Que és i per a què serveix aquest protocol**: [--> readME <--](#que-és-i-per-a-què-serveix-aquest-protocol)

+ **Instal·lació i configuració**: [--> readME <--](#installació-i-configuració)

+ **Bibliografia**: [--> readME <--](#bibliografia)

# __DHCP__

El protocol DHCP és un dels més utilitzats pels routers, tant domèstics com també professionals, a més, per defecte qualsevol client cablejat o WiFi està configurat per obtenir una adreça IP per DHCP.
Encara que contínuament estem utilitzant el DHCP, segurament no conegueu per a què serveix exactament, les seves funcionalitats i també com funciona i quins missatges s'intercanvien entre el servidor i els clients. Avui a RedesZone us explicarem tot el que has de saber sobre el protocol DHCP.

## __Que és i per a què serveix aquest protocol__

El protocol DHCP (Protocol de configuració dinàmica de host) o també conegut com a __Dynamic Host Configuration Protocol__, és un protocol de xarxa que utilitza una arquitectura client-servidor. Per tant, tindrem un o més servidors DHCP i també un o més clients, que s'hauran de comunicar entre ells correctament perquè el servidor DHCP brindi informació als diferents clients connectats. 

Aquest protocol s'encarrega d'assignar de manera dinàmica i automàtica una adreça IP, ja sigui una adreça IP privada des del router cap als equips de la xarxa local, o també una IP pública per part d'un operador que utilitzi aquest tipus de protocol per al establiment de la connexió.

## __Instal·lació i configuració__

* apt-get update

* apt-get install isc-dhcp-server

* sudo nano /etc/default/isc-dhcp-server

* sudo nano /etc/default/isc-dhcp-server

```bash
INTERFACESv4="enp0s8"
INTERFACESv6=""
```

* sudo nano /etc/dhcp/dhcpd.conf

````bash

option domain-name "cryptosec.net";
option domain-name-servers 192.168.3.1;

default-lease-time 60000;
max-lease-time 72000;

# The ddns-updates-style parameter controls whether or not the server will
# attempt to do a DNS update when a lease is confirmed. We default to the
# behavior of the version 2 packages ('none', since DHCP v2 didn't
# have support for DDNS.)
ddns-update-style none;

# If this DHCP server is the official DHCP server for the local
# network, the authoritative directive should be uncommented.
authoritative;

subnet 192.168.3.0 netmask 255.255.255.0 {
        option routers 192.168.3.1;
        option subnet-mask 255.255.255.0;
        range dynamic-bootp 192.168.3.100 192.168.3.200;
#       option domain-nameservers 192.168.3.1;
#       option domain-name "cryptosec.net";
}
````

* reiniciar el servidor __DHCP__ ``sudo systemctl restart isc-dhcp-server``

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%208.46.12%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron i @Cristian GitHub*
<br>

* Obrir el client _Linux Lite_ o el _Debian Minimal 10_ i probar-ho: ``dhclient -v``. Probar també la conectivitat amb un host a la nostra zona __"cryptosec.net"__

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%208.35.19%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron i @Cristian GitHub*
<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%209.01.16%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron i @Cristian GitHub*
<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%208.45.44%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron i @Cristian GitHub*
<br>

## --> [ [Tornar a Ciberseguretat](https://github.com/KeshiKiD03/asixproject2k22/blob/main/README.md) ] <--

# __Bibliografia__

- https://www.redeszone.net/tutoriales/internet/que-es-protocolo-dhcp/
- https://www.fpgenred.es/DHCP/
- https://www.fpgenred.es/DHCP/descripcin_del_protocolo.html
- https://docs.microsoft.com/es-es/windows-server/networking/technologies/dhcp/dhcp-top
- https://www.webservertalk.com/dhcp-tutorial
- https://www.howtoforge.com/tutorial/install-and-configure-isc-dhcp-server-in-debian-9/
- https://www.fpgenred.es/DHCP/instalacin_del_isc_dhcp.html
- https://www.linuxsc.net/instalacion-y-configuracion-del-isc-dhcp-server-en-ubuntu/
- https://es.linux-console.net/?p=1033