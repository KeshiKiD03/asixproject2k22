# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__


<br>
<br>
<br>
<br>

# __CryptoSEC__: "_Careful where you step in_"


![](./Photos/CryptoSECLogo.png)




<br>
<br>
<br>




# __Index__

+ **Objectius**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Objectiu.md)

+ **Proposta final (LAN CryptoSEC)**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#subject-alternative-name)

+ **DNS**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **DNSSEC**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

# __DHCP__

El protocol DHCP és un dels més utilitzats pels routers, tant domèstics com també professionals, a més, per defecte qualsevol client cablejat o WiFi està configurat per obtenir una adreça IP per DHCP.
Encara que contínuament estem utilitzant el DHCP, segurament no conegueu per a què serveix exactament, les seves funcionalitats i també com funciona i quins missatges s'intercanvien entre el servidor i els clients. Avui a RedesZone us explicarem tot el que has de saber sobre el protocol DHCP.

## __DHCP__

### __Què és i per a què serveix aquest protocol__

El protocol DHCP (Protocol de configuració dinàmica de host) o també conegut com a __Dynamic Host Configuration Protocol__, és un protocol de xarxa que utilitza una arquitectura client-servidor. Per tant, tindrem un o més servidors DHCP i també un o més clients, que s'hauran de comunicar entre ells correctament perquè el servidor DHCP brindi informació als diferents clients connectats. 

Aquest protocol s'encarrega d'assignar de manera dinàmica i automàtica una adreça IP, ja sigui una adreça IP privada des del router cap als equips de la xarxa local, o també una IP pública per part d'un operador que utilitzi aquest tipus de protocol per al establiment de la connexió.

### __Instal·lació i configuració__

* apt-get update

* apt-get install isc-dhcp-server

* sudo nano /etc/default/isc-dhcp-server

sudo nano /etc/default/isc-dhcp-server

INTERFACESv4="enp0s8"
INTERFACESv6=""


sudo nano /etc/dhcp/dhcpd.conf
````

option domain-name "cryptosec.net";
option domain-name-servers 192.168.3.250;

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
#       option domain-nameservers 192.168.3.250;
#       option domain-name "cryptosec.net";
}
````

REINICIAR sudo systemctl restart isc-dhcp-server

EN EL CLIENTE DEBIAN

dhclient -v

# __Bibliografia__

- https://www.redeszone.net/tutoriales/internet/que-es-protocolo-dhcp/
- 