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




<br>
<br>
<br>




# __Index__

+ **Objectius "Projecte ASIX - Ciberseguretat: _Careful where you step in_**: [--> readME <--](#objectius-"projecte-asix---ciberseguretat-careful-where-you-step-in")

+ **Arquitectura CryptoSEC**: [--> readME <--](#arquitectura-cryptosec)

+ **Conceptes i aspectes generals _"mindset"_ del projecte**: [--> readME <--](#conceptes-i-aspectes-generals-"mindset"-del-projecte)

+ **La proposta final**: [--> readME <--](#la-proposta-final)

    + **El deployment**: [--> readME <--](#el-deployment)

+ **Ciberseguretat a CryptoSEC**: [--> readME <--](#ciberseguretat-a-cryptosec)

+ **Els objectius dels serveis de CryptoSEC**: [--> readME <--](#els-objectius-dels-serveis-de-cryptosec)

    + **DHCP**: [--> readME <--](#dhcp)

    + **Iptables**: [--> readME <--](#iptables)

    + **OpenVAS (Host Intrusion Detect)**: [--> readME <--](#openvas-host-intrusion-detect)

    + **OpenSSL**: [--> readME <--](#openssl)

    + **DNS + DNSSEC (Asymmetric Cryptography)**: [--> readME <--](#dns--dnssec-asymmetric-cryptography)

    + **Vulnerabilitats**: [--> readME <--](#vulnerabilitats)

    + **COM PROTEGIR-SE?**: [--> readME <--](#com-protegir-se)
    


# __Objectius "Projecte ASIX - Ciberseguretat:__ _Careful where you step in_"

L'objectiu principal d'aquest projecte de Ciberseguretat, és la creació d'una empresa de __"Ciberseguretat"__ anomenamada _"CryptoSEC"_. Aquesta empresa implementarà una serie de serveis de __seguretat__ i __prevenció__ davant d'atacs maliciosos que tindràn la finalitat de _comprometre_ la empresa i obtenir informació delicada i confidencial. Aaron i Cristian, son els caps d'aquesta empresa i portaràn a terme aquest magnífic repte de protegir-se davant de _hackers_ com les de la Organització __"Anonymous"__, __" The Shadow Brokers"__, __"Elliott Gunton"__... entre altres.

La empresa de ciberseguretat en tot moment s'hi faràn auditoríes per detectar intrusos (__Wazuh__) en la xarxa de __"CryptoSEC"__, entre altres eines de prevenció i detecció. 

<br>
<br>
<br>

## __Arquitectura CryptoSEC__



__CryptoSEC.NET__ és una xarxa interna local en algun lloc remot del planeta on hi treballen els millors tècnics en __ciberseguretat__, però hi hà un __"intrús"__ que tindrà un _host maliciós_ que intentarà fer la vida impossible als altres clients.

Aquest host maliciós serà un __Kali Linux__ on hi dispondrà d'eines de seguretat, de _"hackeig"_ o _"crackeig"_, de _pentesting_, _accés a la xarxa_... entre altres. Aquest host maliciós farà atacs com el _"DNS Caché Poisoning - DNS Spoofing"_, juntament amb l'"_ARP Cache Poisoning - Spoofing _" (enverinament de la caché dels servidors de _DNS SOA_ i _DNS Forwarder_ de CryptoSEC, amb posteriori suplantació i redirecció a una pàgina web _"fake"_ que serà reenviada com a resposta a la petició dels clients). També farà un atac de __Brute Force__ on _crackejarà_ contrasenyes amb encriptació SHA512 (UNIX) per poder entrar al servidor _router_: __ForwardSEC__.

Aquest host maliciós interferirà en la connexió entra el DNS autoritari SOA i el DNS Recursor que es qui farà de _resolver/forwarder_ dels __clients DNS__ que hi pertenèixen a la xarxa interna __"CryptoSEC"__. Serà un __DNS Forwarder (ForwardSEC)__ més.

A __CryptoSEC__ implementarà, serveis com un DNS autoritari amb una zona anomenada __"cryptosec.net"__ que tindrà DNSSEC per assegurar les consultes DNS que hi facin els clients de la seva _"zona"_ o _"domini"_.

Al __DNS Forwarder (ForwardSEC)__ tindrà serveis com __DHCP__ que brindarà una configuració automàtica de IPs i DNS als seus clients. Serà com un __router__. Tindrà politiques per defecte ACCEPT, i també permetrà que els seus clients tinguin NAT a l'exterior, és a dir, que puguin navegar per Internet. Tot amb __iptables__.

El __servidor principal autoritari__ anomenat com a hostname __"SOACryptosec"__ que serà un __Ubuntu Server 20.04__, tindrà només el _BIND9_ amb la zona __"cryptosec.NET"__, estarà ubicada en la xarxa de la classe _10.200.243.164/24_.

Tindrà un __servidor secundari forwarder__ anomenat com a hostname __"ForwardSEC"__ que serà també un __Ubuntu Server 20.04__ que tindrà el paper fonamental de fer de _resolver_ als clients DNS ja que ell mateix serà un forwarder i reenviarà les peticions de DNS a __"SOACryptosec"__ per a que resolgui peticions de DNS tant de __"cryptosec.net"__ com d'Internet, si no el sap el preguntarà als __ROOT SERVERS__, _a.k.a._ __Internet__. També tindrà aplicacions per monitoritzar la xarxa i detectar intrusos que intentin sacsejar la nostra xarxa __"cryptosec.net"__.

Com hi haviem comentat, a __CryptoSEC__ hi englobem diferents serveis en funcionament, com __detecció d'intrusions (OpenVAS)__ o algunes de __prevenció d'atacs__, tot explicant breument cada cascuna dels diferents serveis que hi componen la nostra organització: __"CryptoSEC"__.

<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/EsquemaFinal_Non-1.png?raw=true)

<br>

Durant aquest projecte, ens trobarem diferents _reptes_ tant en l'àmbit _tècnic_ com en l'àmbit _sistemàtic_. Haurem de ser capaços de resoldre aquests reptes amb l'ajuda bé de diferents companys de classe, o de la informació investigada per Internet.

En la recerca d'informació de tota la documentació, independentment de les seves funcionalitats, les bateries de proves, el control de versions fins a arribar a l'últim "_stage_" del projecte. Es farà un seguiment de tot el que es fa, es farà i el que s'està fent en hores de projecte.

![](https://www.infinitiaresearch.com/wp-content/uploads/2021/09/design-research.png)


<br>
<br>
<br>

# __Conceptes i aspectes generals _"mindset"_ del projecte__

Tenim una idea clara, _primer_ la recerca d'informació i recapitulació de tots els _serveis_ que utilitzarem, _segon_ un petit exemple de funcionament del servei en qüestió i finalment, l'assemblació al cos del projecte.

Tot això després de verificar que compleixen aspectes tant de la informàtica o concretament a la __ciberseguretat__ que un __auditor o defensor de ciberseguretat__ ha de conèixer: 

+ La __identificació__: 

    + És necessari identificar els __processos__ i __actius__ crítics d'alguna. 
    
    + S'ha de mantenir __actualizat__ l'__inventari__ tant de __hardware__ o __software__. 
    
    + Conèixer les __característiques__, ja que amb freqüència son punts d'entrada de programes i aplicatius __maliciosos__. 
    
    + Cal identificar __amenaçes__, __vulnerabilitats__ i __riscos__ per als actius. 
    
    + Cal assegurar-se que s'estableixin i administrin processos de gestió de __riscos__ per garantir que __s'identifiquin__, avaluïn i administrin les amenaces internes i externes, cosa que s'ha de documentar degudament en registres de riscos.

+ La __protecció__: 

    + Convé __administrar__ l'accés als __actius__ i la __informació__. 
    
    + La companyia ha de crear comptes únics per a cada empleat i assegurar-se que els usuaris només tinguin accés a la informació, els ordinadors i les aplicacions que necessiten per als seus treballs. 
    
    + Cal __administrar__ i __rastrejar__ estrictament l'accés __físic__ als dispositius.

    + Realitzar __còpies de seguretat__ periòdiques és útil. Una bona pràctica és mantenir un conjunt de dades de còpia de seguretat freqüent fora de línia per protegir contra el ransomware.

    + S'han d'implementar __polítiques formals__ per a l'eliminació segura de fitxers electrònics i dispositius en desús.


+ Els __backups__: És important assegurar la informació abans i després de que s'hagin provocat _"desastres informàtics"_. Una bona recuperació o _cleaning_ d'avant d'aquest escenari és clau per retomar una activitat d'una empresa.

+ La __detecció__: 

    + És important desenvolupar i provar processos i procediments per detectar accions no autoritzades a les xarxes ia l'entorn físic, inclosa l'activitat del personal.

    + Cal comprendre l'impacte dels esdeveniments de ciberseguretat. Cal treballar ràpidament i exhaustivament per comprendre l'amplitud i la profunditat de l'impacte. Així com comunicar informació sobre l'esdeveniment amb les parts interessades apropiades.
    
    + Cal monitoritzar els ordinadors per controlar si es detecta accés de personal no autoritzat als ordinadors, dispositius (suports demmagatzematge de dades de tipus USB) i programari. Heu de revisar la xarxa per controlar si es detecten usuaris o connexions no autoritzats.

+ La __resposta__: 

    + Els plans de __resposta__ s'han de provar per assegurar-se que cadascú conegui les seves __responsabilitats__ en la seva execució.

    + Coordinar amb les parts interessades internes i externes és vital davant el desastre. 
    
    + Cal assegurar-se que els plans de resposta i les actualitzacions incloguin totes les parts interessades clau i proveïdors de serveis externs. Poden contribuir a millores en la planificació i execució.

+ La __recuperació__: 

    + Cal comunicar-se amb usuaris afectats, tant de dins con de fora davant d'aquests desastres, per fer un plà de recuperació.

    + La comunicació és clau per protegir-se.

    + Cal assegurar-se que els plans de recuperació estiguin __actualitzats__.

    + S'han de reparar i restaurar els equips i les parts de la xarxa que van resultar afectats.

<br>

![](https://directortic.es/wp-content/uploads/2020/04/desaf%C3%ADos-de-ciberseguridad.jpg)

<br>



<br>
<br>
<br>

# __La proposta final__

## __El deployment__

Hem decidit utilitzar __VirtualBox__ per al _deployment_ d'aquest projecte simplement amb la facilitat d'utilització, la compatibilitat tant de __Linux__, __Windows__ o __MAC__ i la versatilitat alhora de clonar, encendre, interactuar amb la virtualització de les màquines virtuals. 

<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/VirtualBox.PNG?raw=true)

<br>

A més de que tenim un control avançat alhora de _"toquetejar"_ l'emulador de VirtualBox tant a nivell de __hardware__ com a nivell de __software__.

El servidor __"ForwardSEC"__ farà de router on hi tindrà 2 interfícies (__enp0s3__) i (__enp0s8__), la primera serà un __"bridge"__ amb configuració _netplan_ estàtica __10.200.243.168/24__ i en la segona serà una __xarxa interna__ que tindrà la ip __192.168.3.1/24__. Aquesta tindrà la xarxa interna __"cryptosec.net"__ _192.168.3.0/24_.

El servidor __"SOACryptosec"__ serà un servidor autoritari on hi tindrà la zona __"cryptosec.net"__ hi tindrà 1 interfícies (__enp0s3__) i (__enp0s8__), serà un només un __"bridge"__ que tindrà una configuració _netplan_ estàtica __10.200.243.164/24__. 

Tots els clients de la xarxa de __"cryptosec"__ han de passar per el router per poder navegar a l'exterior o fer peticions _DNS_ (En aquest cas han de preguntar al __resolver__ __ForwardSEC__).

El servidor __"SOACryptosec"__ farà de router emetrà IPs automàticament gràcies a DHCP i donarà els nameservers adequats a les seves xarxes internes per a que puguin navegar a Internet. També s'hi farà NAT a l'exterior on hi navegaràn _enmascarats_.

<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/EsquemaFinal_Non-1.png?raw=true)

<br>

## __Ciberseguretat a CryptoSEC__

+ L'__aïllament en la xarxa interna__: Mecanisme de seguretat que permetrà separar els programes en execució, per tal de mitigar errors del sistema o vulnerabilitats de software. Gracies a la nostra xarxa interna __"cryptosec"__.

+ __Xifratge de dades__: Comunicació xifrada en tot moment a CryptoSEC. Els clients podràn fer resolucions al seu _resolver_ de forma segura utilitzant "__criptografía asimétrica__". D'aquesta forma l'atacant hacker no podrà dur a terme el seu atac __man in the middle__ amb __spoofing__. L'accés a la pàgina de __cryptosec.net__ estarà xifrada en tot moment gràcies als certificats generats i signats per __Veritat Absoluta__. Permeten que actui el SSL, així no podràn interceptar-nos.

+ __Protegirse davant la vulnerabilitat__: Davant d'un atac maliciós, d'una denegació de servei DOS, d'un metaexploit, d'un phishing, d' un spoofing... etc. Hem de saber com actuar davant d'aquests escenaris. Millor prevenir que lamentar-nos! 

+ __Detecció i actuació davant el desastre__: Verificació amb eines com __Nmap__, __Arp__, __Wireshark__... 

+ Durant l'assemblatge final, es faràn diversos atacs a l'empresa __CryptoSEC__, i l'empresa es protegirà davant d'aquestes amenaçes on es posaràn en perill la integritat de l'empresa.

+ L'atacant farà els atacs des d'un Kali Linux.

> Exemple d'atac d'Enginyeria Social: "_Phishing + Credential Harvester_"

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/ZPISHER2.PNG?raw=true)

# __Els objectius dels serveis de CryptoSEC__

## __DHCP__

+ S'hi brindarà una configuració automàtica al seus clients de la xarxa interna __CryptoSEC.net__

## __Iptables__

+ Els usuaris podràn fer NAT a l'exterior, enmascarats.

## __OpenVAS (Host Intrusion Detect)__

+ __Detectar__ i __monitoritzar__ la infraestructura, les amenaçes i l'intent d'intrusió. 

+ També detectarà anomalies del sistema o aplicacions mal configurades o accions d'usuari no autoritzats.

## __OpenSSL__

+ Asseguració de la connexió mitjançant la __criptografía__. Utilitzant TLS com a protocol de _transport_ i _SSL_.

+ Ens servirà per un certificat a la nostra zona "cryptosec.net", on hi tindrem un Apache2.

+ Amb el parell de claus privades - publiques, la nostra conexió estarà xifrada. Ja que Apache2 utilitzarà la _keys_ i el _cert_ de __CryptoSEC__, aquest certificat ha sigut firmat per __Veritat Absoluta__.

## __DNS + DNSSEC (Asymmetric Cryptography)__

+ Implementació de BIND9.

+ Entendre conceptes de DNS, zones i registre de recursos.

+ Entendre DNSSEC:

    + Claus firmades,

    + DNSKEY, RRSIG, NSEC, NSEC3...

+ Creació i administració de claus per a la zona "CryptoSEC".

+ Resoldre problemes de servidor de noms autoritzats que atén zones segures com DNSSEC de "CryptoSEC".

+ Configuració BIND com un servidor recursiu que realitza la validació DNSSEC en nom dels seus clients.

+ TSIG per a una comunicació segura amb BIND.


## __Vulnerabilitats__

Alguns exemples de:

_Les que veurem:_

+ __Brute Force - Password Cracker__: Els atacs de força bruta desxifren dades en provar totes les combinacions possibles, com quan un lladre intenta obrir una caixa forta en intentar tots els números al pany.

+ __MITM - ARP Cache Poisoning / Spoofing__: Injecta registres o enverina a la taula ARP dels dispositius implicats i fa una redirecció a l'atacant, suplantant la MAC dels dispositius implicats.

+ __MITM - DNS Cache Poisoning / Spoofing + Phishing__: Injecta registres o enverina el registre DNS d'un servidor DNS o varis implicats. L'atacant fa una redirecció a la víctima a una web falsa, suplanta un registre DNS fent-lo creure que està anant al lloc adequat.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Diagrams/DIAGRAM2.PNG?raw=true)

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Diagrams/DIAGRAM4.PNG?raw=true)

+ __MITM - Eavesdropping (SNIFFER)__: Permet veure l'activitat de la victima d'incògnits. Com veure a quines pàgines està entrant. O agafar-li les credencials (HTTP).

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Diagrams/DIAGRAM3.PNG?raw=true)

+ __Social Engineering: Fake Page + Mail Phishing__: Enviament de correu amb una suplantació de DNS, aquest correu s'enviarà desde una eina de Kali a una víctima perque accedeixi al enllaç.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Diagrams/DIAGRAM5.png?raw=true)

_Altres:_

+ Keylogger

+ Rootkits

+ Rogue Access Points

+ Phishing

+ Metaexploits

... entre altres

## __COM PROTEGIR-SE?__

<UNDER CONSTRUCTION>

+ __VPN__

+ __IPSEC__

+ __HTTPS__

# Bibliografia

### CIBERSECURITY

- https://www.lpi.org/our-certifications/exam-303-objectives 
- https://nordvpn.com/es/blog/protocolo-ipsec/ - IPSEC
- https://www.auditool.org/blog/auditoria-de-ti/8200-5-aspectos-de-ciberseguridad-que-todo-auditor-debe-conocer-para-evaluar-y-recomendar 
- https://www.rosario3.com/ecos365/noticias/Cuales-son-los-aspectos-clave-en-ciberseguridad-20190722-0011.html 

### BETTERCAP

- https://www.bettercap.org/installation/ - BETTERCAP
- https://www.youtube.com/watch?v=7Bvdprvzvko - BETTERCAP
- https://www.youtube.com/watch?v=AoUB2MAnMJA - BETTERCAP
- https://hackpuntes.com/obtener-credenciales-https-con-bettercap-y-sslstrip/ - BETTERCAP SSLSTRIP
- https://jaymonsecurity.com/mitm-credenciales-sslstrip-mitmf-delorean/ - BETTERCAP SSLSTRIP


### WAZUH

- https://documentation.wazuh.com/current/user-manual/overview.html - WAZUH

### SSLSTRIP

- https://www.youtube.com/watch?v=F5m9cXVJZ18 - SSLSTRIP
- https://www.youtube.com/watch?v=jFWd_nN0DXU - BREAK HTTPS USING KALI
- https://www.youtube.com/watch?v=OtO92bL6pYE&list=LL&index=4 - SSLSTRIP ON KALI LINUX

### ETTERCAP

- https://programmerclick.com/article/2815493326/ - ETTERCAP 
- https://esgeeks.com/tutorial-ettercap-ejemplos/ - ETTERCAP EXEMPLES
- https://esgeeks.com/tutorial-ettercap-ejemplos/ - ETTERCAP EXEMPLES


### ARP CACHE POISONING / ARP SPOOF

- https://www.redeszone.net/tutoriales/seguridad/que-es-ataque-arp-poisoning/ - ARP POISONING
- https://es.acervolima.com/ataque-mitm-man-in-the-middle-usando-arp-poisoning/ - ARP POISONING 




### DNS CACHE POISONING / DNS SPOOF

- https://www.varonis.com/blog/dns-cache-poisoning - DNSSPOOF
- https://programmerclick.com/article/2815493326/ - DNSSPOOF
- https://www.boomernix.com/2018/03/realizando-un-dns-spoofing.html - DNSSPOOF
- https://www.keyfactor.com/blog/what-is-dns-poisoning-and-dns-spoofing/ - DNSSPOOFING
- https://www.varonis.com/blog/dns-cache-poisoning - CACHE POISON
- https://www.cloudflare.com/learning/dns/dns-cache-poisoning/ - DNSSPOOF
- https://www.okta.com/identity-101/dns-poisoning/ - DNSCACHE POISON
- https://www.youtube.com/watch?v=uQrmKhW35mQ&t=765s - DNSSPOOFING ETTERCAP BACKBOX
- https://www.varonis.com/blog/dns-cache-poisoning - SPOOF DNS CACHE POISONING
- https://www.keyfactor.com/blog/what-is-dns-poisoning-and-dns-spoofing/#:~:text=DNS%20poisoning%2C%20also%20known%20as,web%20servers%20and%20phishing%20websites.https://www.varonis.com/blog/dns-cache-poisoning - CACHE POISONING
- https://www.imperva.com/learn/application-security/dns-spoofing/ - DNSSPOOFING
- https://www.amirootyet.com/post/how-to-spoof-dns-in-kali-linux/ - DNSSPOOFING
- https://www.keyfactor.com/blog/what-is-dns-poisoning-and-dns-spoofing/#:~:text=DNS%20poisoning%2C%20also%20known%20as,web%20servers%20and%20phishing%20websites. - DNSSPOOFING


### SOCIAL ENGINEERING TOOL

- https://www.youtube.com/watch?v=Jjulz-xHwEo&t=2s - SITE CLONER
- https://www.youtube.com/watch?v=GC4wtfMr3t8 - SITE CLONER
- https://www.youtube.com/watch?v=sP_PDnXTX7A&t=9s - SET TOOLKIT
- https://www.youtube.com/watch?v=1TsCybFNrM0&t=315s - SITE CLONER
- https://www.youtube.com/watch?v=jXy9ewmDVBE - SITE CLONER
- https://www.youtube.com/watch?v=u9dBGWVwMMA - PHISHING ATTACKS SCARY


### MITM

- https://www.youtube.com/watch?v=LEPEk5pFffw - MITM ETTERCAP
- https://www.youtube.com/watch?v=bEMwES6TQUw - MITM SSLSTRIP
- https://www.youtube.com/watch?v=GkexkyUbUd4 - MITM
- https://www.youtube.com/watch?v=-AMd5mxgpX8&t=443s - INTERCEPT SSL TRAFFIC USING MTM SSL STRIP
- https://www.youtube.com/watch?v=-rSqbgI7oZM - SNIFF NETWORK TRAFFIC MITM ATTACK
- https://es.acervolima.com/ataque-mitm-man-in-the-middle-usando-arp-poisoning/ - MITM


### OTHER

- https://www.youtube.com/watch?v=sqaie9YNtpQ - PHISHING
- https://www.youtube.com/watch?v=rhd-bqE91bY - DRIFTNET
- https://www.youtube.com/watch?v=rhd-bqE91bY - DRIFTNET
- https://www.youtube.com/watch?v=Jitm4DtT2_8&t=670s - PHISHING
- https://www.youtube.com/watch?v=wsXMicWMlQI - PHISHING
- https://www.youtube.com/watch?v=MkEet3Akvyo -- SET CURS OFENSIU
- https://www.youtube.com/watch?v=gKykLr59LW8 - BASIC ATTACK WITH METASPLOIT
- https://www.youtube.com/watch?v=MkEet3Akvyo - SET BASIC HACKING







