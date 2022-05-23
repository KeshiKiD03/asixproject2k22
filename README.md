# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<p align="left">
<a href="#"><img title="Made in CAT" src="./Photos/logo.png"></a>
</p>
<p align="center">
<a href="#"><img title="blackeye-im" src="https://i.imgur.com/5N5Kdjw.png"></a>
</p>
<p align="center">
<a href="https://github.com/KeshiKiD03/asixproject2k22"><img title="Author" src="https://img.shields.io/badge/AUTHOR-AARON%20%26%20CRISTIAN-orange"></a>
<a href="#"><img title="Open Source" src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-green?style=for-the-badge"></a>
<a href="#"><img title="License" src="https://img.shields.io/github/license/KeshiKiD03/asixproject2k22"></a>
</p>
<p align="center">
<a href="#"><img title="Version" src="https://img.shields.io/badge/Version-2.5-green.svg?style=flat-square"></a>
<a href="https://github.com/KeshiKiD03/asixproject2k22/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/KeshiKiD03/asixproject2k22"></a>
<a href="https://github.com/KeshiKiD03/asixproject2k22/network/members"><img title="Forks" src="https://img.shields.io/github/forks/KeshiKiD03/asixproject2k22"></a>
<a href="https://github.com/KeshiKiD03/asixproject2k22/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/thewickedkarma/blackeye-im?label=Watchers&color=blue&style=flat-square"></a>
</p>


<br>
<br>
<br>
<br>

# __CryptoSEC__: "_Careful where you step in_"


![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/CryptoSECLogo.png?raw=true)




<br>
<br>
<br>




# __Index__

+ **Objectius**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/DNS%20Criptography/DNS/%5BCryptoSEC%5D_HowTo_DNS.md)

    + **Proposta final (LAN CryptoSEC)**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Objectiu.md#la-proposta-final)

+ **DNS**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/tree/main/Official%20Documentation/DNS%20Criptography/DNS)

    + **DNSSEC**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/DNS%20Criptography/DNSSEC%20%26%20Cripto/%5BCryptoSEC%5D_HowTo_DNSSEC.md)

+ **DHCP**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/DHCP/%5BCryptoSEC%5D_HowTo_DHCP.md)

+ **FIREWALL (IPTABLES)**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/IPTABLES-FORWARD.PNG) [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/IPTABLES-FORWARD.PNG)

+ **APACHE2**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/Apache2/%5BCryptoSEC%5D_HowTo_Apache2.md)

    + **OPENSSL**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/Apache2/%5BCryptoSEC%5D_HowTo_Apache2.md#openssl)

+ **OPENVAS**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Official%20Documentation/OpenVAS/%5BCryptoSEC%5D_HowTo_OpenVAS.md)

+ **HACKING & PENTESTING**: [--> readME <--]()

    + **BRUTE FORCE ATTACK - PASSWORD CRACKING (JOHN)**: [--> readME <--]()

    + **MITM - ARP POISONING / SPOOFING**: [--> readME <--]()

    + **MITM - DNS POISONING / SPOOFING**: [--> readME <--]()

    + **MITM - ARP SPOOFING + SNIFFING**: [--> readME <--]()

    + **EMAIL PHISHING**: [--> readME <--]()

+ **KALI LINUX**: [--> readME <--]()

    + **ETTERCAP**: [--> readME <--]()

    + **SETOOLKIT**: [--> readME <--]()

    + **BETTERCAP**: [--> readME <--]()

    + **WIRESHARK**: [--> readME <--]()

+ **PREVENCIÓ I PROTECCIÓ**: [--> readME <--]()

+ **CONCLUSIÓ**: [--> readME <--]()

<br>
<br>
<br>

## __La ciberseguretat__

En la societat d'avui en dia, l'ús de les tecnologies de la informació, ens faciliten intercanviar informació des de qualsevol part del món.

<br>

![](https://www.infodefensa.com/images/showid2/5311974?w=900&mh=700)
> __Img Source__: *https://www.infodefensa.com/images/showid2/5311974?w=900&mh=700*
<br>

Milions de dades, viatgen per la "_xarxa_" anomenada "_Internet_", que bàsicament són un conjunt de dispositius interconnectats entre si.

Internet, abasta una rutina quotidiana d'ús de _xarxes socials_, _entreteniment_, _educació_, _formació_, _medis de comunicació_, _televisió_, etc.

Tota aquesta informació viatja en una xarxa on hi ha "__de tot__".

![](https://elordenmundial.com/wp-content/uploads/2019/03/800px-Deepweb_graphical_representation.svg.png)
> __Img Source__: *https://elordenmundial.com/wp-content/uploads/2019/03/800px-Deepweb_graphical_representation.svg.png*
<br>

Molta de la informació que viatja per Internet, pot ser que sigui confidencial i delicada, n'hi ha que viatja _segur_ i d'altre _insegur_, si viatja insegur... és un problema __greu...__.

Un dels principals problemes de l'ús de les tecnologies de la informació, és la _incapacitat_ de prevenir aquests _atacs_ quan ja es produeixen. És a dir, el desconeixement de la seguretat d'avant d'aquestes tecnologies d'ús quotidià.

Com ja diu el refrany: "__Millor prevenir que lamentar__", la solució davant d'aquests problemes a usuaris inexperts, és la 'ciberseguretat'.
<br>

![](https://www.lasrozas.es/sites/default/files/inline-images/Ciber.jpg)
> __Img Source__: *https://www.lasrozas.es/sites/default/files/inline-images/Ciber.jpg*


<br>
<br>
<br>

## __Que és la ciberseguretat?__

La ciberseguretat és la pràctica d'establir *"zones de defensa"* a diferents dispositius com ordinadors, servidors, dispositius mòbils, xarxes, etc., d'atacs maliciosos (Com virus o exploits) o de denegació de servei (DoS).

També es coneix com a __seguretat de tecnologia__ __de la informació__ o __seguretat__ de la __informació electrònica__.

El terme s'aplica en diferents contextos, des dels negocis fins a la __informàtica mòbil__, i es pot dividir en algunes categories comunes.

El seu funcionament es basa a implantar tècniques i eines de __maquinari__ / __programari__ perquè elaborin __barreres__ que impedeixin l'accés desconegut a la informació delicada. La protegeix i treu a l'enemic si es tracta d'una **vulneració**.

Un ciberatac no només consisteix en la **pèrdua i destrucció de dades** confidencials, sinó que també **afecta** el nivell de **productivitat i rendibilitat**, portant com a conseqüència la pèrdua del capital, de la confiança per part dels clients i de la competitivitat davant del mercat legal.

![](https://static.vecteezy.com/system/resources/previews/001/406/100/non_2x/types-of-cyber-security-to-keep-in-mind-free-vector.jpg)
> __Img Source__: *https://static.vecteezy.com/system/resources/previews/001/406/100/non_2x/types-of-cyber-security-to-keep-in-mind-free-vector.jpg*
<br>

La __ciberseguretat__ s'ha tornat un assumpte de vital importància per a tota mena d'empreses, sense importar la mida.

Gràcies a les diferents eines que disposa aquesta matèria, el teu sistema pot estar protegit de **atacs**, d'**hackers** o qualsevol classe de **delicte informàtic**.

La ciberseguretat es dedica a complir tres objectius la prevenció, la detecció i la recuperació.

Entre els principals **tipus de ciberseguretat** es troben els següents:

- __Seguretat informàtica en àmbit de xarxa__: és la pràctica de protegir una xarxa informàtica dels intrusos, siguin atacants dirigits o codi maliciós oportunista.

- __Seguretat informàtica en àmbit de software__: s'enfoca a mantenir el programari i els dispositius d'amenaces lliures. Una aplicació afectada podria oferir accés a les dades que està destinada a protegir.

- __Assegurar la informació__: La seguretat de la informació protegeix la integritat i la privadesa de les dades, tant en l'emmagatzematge com en el trànsit.

- __Seguretat operativa__: inclou els processos i decisions per manejar i protegir els recursos de dades.

- La __recuperació davant de desastres__ i la __continuïtat del negoci__ defineixen la manera com una organització respon a un incident de ciberseguretat de qualsevol altre esdeveniment que causi que s'aturin les seves operacions o es perdin dades.

La capacitació de l'usuari final és fonamental en el factor de més impredictible: __les persones__.

Si s'incompleixen les bones pràctiques de seguretat, qualsevol persona pot introduir accidentalment un virus en un sistema que altament seria segur.

Ensenyar-los als usuaris a eliminar els __fitxers adjunts__ de correus __electrònics sospitosos__, a no connectar unitats __USB no identificades__ i altres lliçons importants és crucial per a la seguretat de qualsevol __organització__. 
<br>
<br>
<br>

## __Tipus d'amenaces davant la "Ciberseguretat"__

![](https://pbs.twimg.com/media/E3nXigSXwAANyGi.jpg:large)
> __Img Source__: *https://pbs.twimg.com/media/E3nXigSXwAANyGi.jpg:large*
<br>

# __Bibliografia__

## Ciberseguretat

+ https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security
+ https://www.santaluciaimpulsa.es/ciberseguridad-en-la-actualidad/ 
+ https://madridpress.com/art/297262/la-ciberseguridad-en-la-actualidad 
+ https://www.cisco.com/c/es_mx/products/security/what-is-cybersecurity.html
+ https://www.infosecuritymexico.com/es/ciberseguridad.html
+ https://www.hiberus.com/crecemos-contigo/que-es-la-ciberseguridad/