# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<br>

# __Ciberseguretat__: "_Careful where you step_"


![](https://tec.mx/sites/default/files/styles/header_full/public/2021-08/ciberseguridad-tec-de-monterrey.jpg?itok=H3ibmb8t)




<br>
<br>
<br>




# __Index__

+ **Objectius**: [--> readME <--](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Objectiu.md)

+ **Proposta final**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#subject-alternative-name)

+ **DNS**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **DNSSEC**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **DHCP**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **FIREWALL (IPTABLES)**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **HACKING & DOS**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **DNS SPOOF**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **ARP SPOOF**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **BRUTE FORCE - PASSWORD CRACKING**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **SSLSTRIP**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **KALI LINUX**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **ETTERCAP**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **SETOOLKIT**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

    + **PROVA**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **WAZUH**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **Let's Encrypt ACME - Certbot HTTPS**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

+ **Encrypted File Systems**: [--> readME <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)

<br>
<br>
<br>

## __La ciberseguretat__

En la societat d'avui en dia, l'ús de les tecnologies de la informació, ens faciliten intercanviar informació des de qualsevol part del món.

<br>

![](https://www.infodefensa.com/images/showid2/5311974?w=900&mh=700)


Millons de dades, viatgen per la "_xarxa_" anomenada "_Internet_", que bàsicament son un conjunt de dispositius interconnectats entre sí.


Internet, abarca una rutina cotidiana d’ús de _xarxes socials_, _entreteniment_, _educació_, _formació_, _medis de comunicació_, _televisió_… etc.

Tota aquesta informació viatja en un xarxa on hi hà “__de tot__”.

![](https://elordenmundial.com/wp-content/uploads/2019/03/800px-Deepweb_graphical_representation.svg.png)


Molta de la informació que viatja per Internet, pot ser que sigui confidencial i delicada, n’hi hà que viatja _segur_ i d’altre _insegur_, si viatja insegur… és un problema __greu…__.

Un dels principals problemes de l’ús de les tecnologies de la informació, es la _incapacitat_ de prevenir aquests _atacs_ quant ja es produeixen. És a dir, el desconeixement de la seguretat d’avant d’aquestes tecnologies d’ús cotidià. 

Com ja diu el refrà: “__Millor prevenir que lamentar__”, la solució davant d’aquests problemes a usuaris inexperts, és la `ciberseguretat`. 

<br>

![](https://www.lasrozas.es/sites/default/files/inline-images/Ciber.jpg)


<br>
<br>
<br>

## __Qué es la ciberseguretat?__

La ciberseguretat és la pràctica d’establir *“zones de defensa”* a diferents dispositius com ordinadors, servidors, dispositius mòbils, xarxes …etc, d’atacs maliciosos (Com virus o exploits) o de denegació de servei (DoS).

També es coneix com a __seguretat de tecnologia__ __de la informació__ o __seguretat__ de la __informació electrònica__. 

El terme s'aplica en diferents contextos, des dels negocis fins a la __informàtica mòbil__, i es pot dividir en algunes categories comunes.

El seu funcionament es basa en implantar tècniques i eines de __maquinari__ / __programari__ perquè elaborin __barreres__ que impedeixin l’accés desconegut a la informació delicada. La protegeix i treu a l’enemic si es tracta d’una **vulneració**.

Un ciberatac no nomes consisteix en la **pèrdua i destruccio de dades** confidencials, si no que tambe **afecta** el nivell de **productivitat i rentabilitat**, portant com a conseqüencia la perdua del capital, de la confiança per part dels clients y de la competivitat davant del mercat legal.

![](https://static.vecteezy.com/system/resources/previews/001/406/100/non_2x/types-of-cyber-security-to-keep-in-mind-free-vector.jpg)




La __ciberseguretat__ s’ha tornat un assumpte de vital importancia per a tot tipus d’empreses, sense importar el tamany.

Gràcies a les diferents eines que disposa aquesta materia, el teu sistema pot esta protegit de **atacs**, d’**hackers** o qualsevol tipos de **delicte informàtic**.

La ciberseguretat es dedica a cumplir tres objectius la prevenció, la detecció i la recuperació.

Entre els principals **tipus de ciberseguretat** es troben els següents:
    
- __Seguretat informatica en àmbit de xarxa__: és la pràctica de protegir una xarxa informàtica dels intrusos, ja siguin atacants dirigits o codi maliciós oportunista.
    
- __Seguretat informatica en àmbit de software__:  s'enfoca a mantenir el programari i els dispositius d'amenaces lliures. Una aplicació afectada podria oferir accés a les dades que està destinada a protegir.
    
- __Assegurar la informació__: La seguretat de la informació protegeix la integritat i la privadesa de les dades, tant en l'emmagatzematge com en el trànsit.
    
- __Seguretat operativa__: inclou els processos i decisions per manejar i protegir els recursos de dades.

- La __recuperació davant de desastres__ i la __continuïtat del negoci__ defineixen la manera com una organització respon a un incident de ciberseguretat oa qualsevol altre esdeveniment que causi que s'aturin les seves operacions o es perdin dades.

La capacitació de l'usuari final és fonamental en el factor de més impredictible: __les persones__. 

Si s'incompleixen les bones pràctiques de seguretat, qualsevol persona pot introduir accidentalment un virus en un sistema que altament seria segur.

Ensenyar-los als usuaris a eliminar els __fitxers adjunts__ de correus __electrònics sospitosos__, a no connectar unitats __USB no identificades__ i altres lliçons importants és fonamental per a la seguretat de qualsevol __organització__.

<br>
<br>
<br>

## __Tipus d'amenaçes davant la "Ciberseguretat"__


![](https://pbs.twimg.com/media/E3nXigSXwAANyGi.jpg:large)



# Bibliografia

## Ciberseguretat

+ https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security
+ https://www.santaluciaimpulsa.es/ciberseguridad-en-la-actualidad/ 
+ https://madridpress.com/art/297262/la-ciberseguridad-en-la-actualidad 