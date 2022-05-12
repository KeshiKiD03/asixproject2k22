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



# DHCP


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