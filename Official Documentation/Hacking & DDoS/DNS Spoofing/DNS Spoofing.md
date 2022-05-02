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



# DNS Spoofing

La falsificació del servidor de noms de domini (DNS) (també conegut com a enverinament de la memòria cau DNS) és un atac en què s'utilitzen registres DNS alterats per redirigir el trànsit en línia a un lloc web fraudulent que s'assembla a la destinació prevista.

<div style="align: center; width: 100%">
    <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/DNS-spoofing.jpg" />
</div>

És una situació creada o no intencionalment que proporciona dades a un servidor de noms emmagatzemat en memoria cau que no es va originar en fonts autoritzades del Sistema de noms de domini (DNS). 

Quan un servidor DNS ha rebut dades no autèntiques i les emmagatzema en memòria cau per augmentar el rendiment en el futur, es considera enverinat, proporcionant les dades no autèntiques als clients del servidor.

Un cop allà, se'ls demana als usuaris que iniciïn sessió al seu compte (el que creuen que és), donant a l'autor l'oportunitat de robar les seves credencials d'accés i altres tipus d'informació sensible. A més, el lloc web maliciós s'utilitza sovint per instal·lar cucs o virus a l'ordinador d'un usuari, donant-li a l'autor accés a llarg termini i a les dades que emmagatzema.

### Métodes d'execució per a realitzar DNS Spoofing:

* __Man in the middle (MITM):__ la intercepció de les comunicacions entre usuaris i un servidor DNS per tal d'encaminar els usuaris a una adreça IP diferent/maliciosa.

* __Compromís del servidor DNS:__ el segrest directe d'un servidor DNS, que està configurat per retornar una adreça IP maliciosa.

<div style="align: center; width: 100%">
    <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/DNS-spoofing.jpg" />
</div>

### Explicació DNS Cache Poisoning Exemple

L'exemple anterior il·lustra un atac d'enverinament de memòria cau DNS, en què un __atacant__ (__IP 192.168.3.300__) intercepta un canal de comunicació entre un _client_ (__IP 192.168.1.100__) i un ordinador _servidor_ pertanyent al lloc web _www.estores.com_ (__IP 192.168.168. 2.200__).

En aquest escenari, s'utilitza una eina (per exemple, __arpspoof__) per enganyar el _client_ perquè pensi que la IP del servidor és __192.168.3.300__. 

Al mateix temps, es fa pensar al servidor que la IP del client també és __192.168.3.300__.

Un escenari així procediria de la següent manera:

1. __L'atacant__ utilitza _arpspoof_ per emetre l'ordre: ``arpspoof 192.168.1.100 192.168.2.200``. Això modifica les _adreces MAC_ a la taula _ARP del servidor_, fent-lo pensar que l'ordinador de __l'atacant__ pertany al __client__.

2. __L'atacant__ torna a utilitzar arpspoof per emetre l'ordre: ``arpspoof 192.168.2.200 192.168.1.100``, que indica al client que l'ordinador de l'autor és el servidor.

3. L'atacant emet l'ordre Linux: ``echo 1> /proc/sys/net/ipv4/ip_forward``. Com a resultat, els paquets IP enviats entre el _client_ i el _servidor_ es reenvien a l'ordinador de __l'autor atacant__.

4. El fitxer amfitrió, __192.168.3.300__ _estores.com_ es crea a l'ordinador local de __l'atacant__, que associa el lloc web _www.estores.com_ a la seva __IP local__.

5. __L'autor atacant__ configura un _servidor web_ a la IP de _l'ordinador local_ i crea un _lloc web fals_ fet per semblar a _www.estores.com_.

6. Finalment, s'utilitza una eina (per exemple, _dnsspoof_) per dirigir totes les _sol·licituds_ de DNS al fitxer __amfitrió__ local de __l'autor__. Com a resultat, el lloc __web fals__ es mostra als usuaris i, només en interactuar amb el lloc, s'instal·la programari maliciós als seus ordinadors.

<div style="align: center; width: 100%">
    <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/DNS-spoofing.jpg" />
</div>


# Com prevenir DNS Spoofing?

Si bé hi ha diverses eines disponibles per trobar i fer front als DNS Spoofing.

## Implantació de DNSSEC

DNS és un __protocol sense xifrar__, que facilita la interceptació del trànsit amb falsificació. A més, els servidors DNS no validen les adreces IP a les quals estan redirigint el trànsit.

__DNSSEC__ és un protocol dissenyat per protegir el vostre DNS afegint mètodes addicionals de verificació. El protocol crea una signatura criptogràfica única emmagatzemada al costat dels altres registres DNS, per exemple, un registre i CNAME. Aquesta signatura l'utilitza el vostre solucionador de DNS per autenticar una resposta de DNS, assegurant-vos que el registre no s'hagi manipulat.

Tot i que DNSSEC pot ajudar a protegir contra la falsificació de DNS, té una sèrie de possibles desavantatges, com ara:

Manca de confidencialitat de les dades: DNSSEC s'autentica, però no codifica les respostes DNS. Com a resultat, els autors encara poden escoltar el trànsit i utilitzar les dades per a atacs més sofisticats.
Desplegament complex: DNSSEC sovint es configura malament, cosa que pot fer que els servidors perdin els avantatges de seguretat o fins i tot denegar l'accés a un lloc web.
Enumeració de zones: DNSSEC utilitza registres de recursos addicionals per habilitar la validació de la signatura. Un d'aquests registres, NSEC, és capaç de verificar la inexistència d'una zona DNS. També es pot utilitzar per caminar per una zona DNS per reunir tots els registres DNS existents, una vulnerabilitat anomenada enumeració de zones. Les versions més noves de NSEC, anomenades NSEC3 i NSEC5, publiquen registres hash dels noms d'amfitrió, xifrant-los i evitant l'enumeració de zones.

# Exemple DNS Spoofing

En la xarxa de CryptoSEC, s'implementa un DNS (Bind9) a Ubuntu Server 20.04 que hi donarà peticions de resolució de noms a Debian Minimal.

La estructura de la xarxa serà la següent:

+ Ubuntu Server 20.04: 

    + enp0s3 (Bridge): DHCP o STATIC amb conexió a Internet.

    + enp0s8 (CryptoSEC): Xarxa interna de CryptoSEC amb la resolució de noms __cryptosec.net__.

    + Iptables: NAT a l'exterior.

+ Kali Linux (Atacant) (DNS Spoofing atacker): També pertany a la Xarxa de CryptoSEC (L'atacant és un dels treballadors, té la connexió encryptada i ningú sap de la seva existència). Farà el poisoning del DNS i farà creure que tant el servidor com el client Debian Minimal, fan la connexió entre ells 2 (Però la veritat es que ho fà al Kali Linux tota l'estona).

+ Debian Minimal: Pertany a la Xarxa de CryptoSEC. Rebrà la petició de DNS i conexió a Internet surtint per la Gateway del Servidor.

### 1. Configuració de XARXA:

1. Obrim les 3 màquines virtuals Ubuntu Server, Debian i Kali Linux.

2. Al servidor, li obrim dos ports un de Bridge i l'altre de Xarxa Interna.

```
# Servidor Ubuntu 20.04

ip a

ip a show enp0s8

ip address add 192.168.3.1/24 dev enp0s8

ip r

# Debian Minimal

ip a show enp0s3

ip address add 192.168.3.2/24 dev enp0s3

ip r



# Kali Linux

ip a show enp0s3

ip address add 192.168.3.3/24 dev enp0s3

ip r

# Test de conectivitat

ping x.x.3.1

ping x.x.3.2

ping x.x.3.3

```

3. Tant Kali Linux com Debian Minimal pertanyen a la Xarxa de CryptoSEC. Se li posen les IP manualment (De moment, més endavant DHCP).

4. El servidor inicia el servei de noms de DNS. El client Debian fa peticions de resolució normal.

```
# DNS "cryptosec.net"

```


5. Kali Linux, intercepta la conexió (MITMA), suplanta el reenviament de paquets entre el "servidor Ubuntu" i el client "Debian Minimal".

6. Canvia la taula ARP del servidor i del client.

7. Un cop té accés al DNS, pot implantar una pàgina nova falsa.

8. El client cau en la pàgina falsa i es infectat.