# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<br>
<br>

# __Ciberseguretat__: "_Careful where you step_" 🕵️ 🔎

<div style="align: center; width: 50%">
    <img src="https://tec.mx/sites/default/files/styles/header_full/public/2021-08/ciberseguridad-tec-de-monterrey.jpg?itok=H3ibmb8t" />
</div>



# Objectius "Projecte ASIX - Ciberseguretat: _Careful where you step_ 🕵️ 🔎"

L'objectiu principal d'aquest projecte de Ciberseguretat, és la creació d'una empresa de __"Ciberseguretat"__ anomenamada _"CryptoSEC"_. Aquesta empresa implementarà una serie de serveis de seguretat i prevenció davant d'atacs maliciosos que tindràn la finalitat de tumbar l'empresa i obtenir informació delicada. Aaron i Cristian, son els caps d'aquesta empresa i portaràn a terme aquest magnífic repte de protegir-se davant de _hackers_ com les de la Organització __"Anonymous"__, __" The Shadow Brokers"__, __"Elliott Gunton"__... entre altres.

La empresa de ciberseguretat en tot moment s'hi faràn auditoríes per detectar intrusos en la xarxa de __"CryptoSEC"__, entre altres eines de prevenció i detecció. 

S'implementarà serveis com una VPN - Virtual Private Network, on interconectarem mitjançant un túnel VPN diferents clients de CryptoSEC ubicades en diferents parts del món. 

A CryptoSEC hi englobem diferents serveis en funcionament, com detecció d'intrusions o algunes de prevenció d'atacs, tot explicant breument cada cascuna dels diferents serveis que hi componen la nostra organització: __"CryptoSEC"__.

<div style="align: center">
    <img src="https://serversideup.net/wp-content/uploads/2020/05/Wireguard-Ubuntu20.04-ServerConfiguration-1024x911.png" />
</div>

Durant aquest projecte, ens trobarem diferents reptes tant en l'àmbit tècnic com en l'àmbit sistemàtic. Haurem de ser capaços de resoldre aquests reptes amb l'ajuda bé de diferents companys de classe, o de la informació investigada per Internet.

<div style="align: center">
    <img src="https://www.infinitiaresearch.com/wp-content/uploads/2021/09/design-research.png" />
</div>

En la recerca d'informació de tota la documentació, independentment de les seves funcionalitats, les bateries de proves, el control de versions fins a arribar a l'últim "_stage_" del projecte. Es farà un seguiment de tot el que es fa, es farà i el que s'està fent en hores de projecte.

<br>

Tenim una idea clara, _primer_ la recerca d'informació i recapitulació de tots els _serveis_ que utilitzarem, _segon_ un petit exemple de funcionament del servei en qüestió i finalment, l'assemblació al cos del projecte després de verificar que compleix tant de la informàtica o concretament a la ciberseguretat: 

+ __L'atomicitat__: Verificar que una operació s'ha realitzat o no, , no es pot quedar a mitjes.

+ El __control d'errors__: És imprescincible detectar on ens hem equivocat per poder corregir l'error o idear altres plans i proseguir amb el projecte.

+ L'__aïllament__: Mecanisme de seguretat que permetrà separar els programes en execució, per tal de mitigar errors del sistema o vulnerabilitats de software.

+ La __durabilitat__: Garantir la integritat de les dades i que no s'esborrin accidentalment.

+ L'__integritat & compatibilitat__: És important que hi hagi una compatibilitat en els serveis que s'instal·laràn a la 

<br>

## Ciberseguretat

+ La __VPN__: Xifrar sempre la navegació de l'usuari, aïllar la xarxa habitual per una més segura. Accés mitjançant claus o certificats. Vetllar per la seguretat de la xarxa davant vulneravilitats o atacs maliciosos.

+ __Xifratge de dades__: Comunicació xifrada en tot moment a CryptoSEC. Mitjançant el servidor VPN, es crearà un túnel VPN on s'establirà "Claus de Sessió (Híbrids)" en la comunicació.

+ __Protegirse davant la vulnerabilitat__: Davant d'un atac maliciós, d'una denegació de servei DDOS, d'un metaexploit, d'un phishing... etc. Hem de saber com actuar davant d'aquests escenaris. Millor prevenir que lamentar-nos! 

<br>

# La proposta final

+ Un deployment a VirtualBox d'un servidor Ubuntu Server 20.04 en bridge i xarxa interna _"cryptosec"_ i els clients estaràn en la xarxa interna _"cryptosec"_ on hi faràn NAT a l'exterior mitjançant IPTABLES per poguer navegar a Internet. Hi hauràn 2 clients també en diferents xarxes simulant connectar-se per VPN (WireGuard).

+ Durant l'assemblatge final, es faràn diversos atacs a l'empresa __CryptoSEC__, i l'empresa es protegirà davant d'aquestes amenaçes on es posaràn en perill la integritat de l'empresa.

+ L'atacant farà els atacs des d'un Kali Linux.

<div style="align: center">
    <img src="https://serversideup.net/wp-content/uploads/2020/05/Wireguard-Ubuntu20.04-ServerConfiguration-1024x911.png" />
</div>


# __Els objectius dels serveis de CryptoSEC__

### Wireguard VPN

+ __Aïllar__ la xarxa de CryptoSEC a una __VPN__ on es permetrà la navegació a l'exterior i l'accés a la __VPN__ sempre i quan siguin clients de CryptoSEC i tinguin accés a la nostra VPN amb Wireguard.

+ Configurar i operar amb WireGuard server & clients.

### Wazuh (Host Intrusion Detect)

+ Detectar i monitoritzar la infraestructura, les amenaçes i l'intent d'intrusió. 

+ També detectarà anomalies del sistema o aplicacions mal configurades o accions d'usuari no autoritzats.

### OpenSSL

+ Asseguració de la connexió mitjançant la __criptografía__. Utilitzant TLS com a protocol de _transport_ i _SSL_

### DNS Criptogràfic

+ Implementació de BIND9.7

+ Entendre conceptes de DNS, zones i registre de recursos.

+ Entendre DNSSEC:

    + Claus firmades,

    + DNSKEY, RRSIG, NSEC, NSEC3...

+ Creació i administració de claus per a la zona "CryptoSEC".

+ Resoldre problemes de servidor de noms autoritzats que atén zones segures com DNSSEC de "CryptoSEC".

+ Configuració BIND com un servidor recursiu que realitza la validació DNSSEC en nom dels seus clients.

+ TSIG per a una comunicació segura amb BIND.


### Let's Encrypt ACME - Certbot

### Encrypted File Systems

### SSH

### RADIUS

+ Mecanisme d'autenticació d'accés a la xarxa. 

+ Verificarà les credencials si som "__allowed__" d'accedir a la xarxa.


### Vulnerabilitats

Alguns exemples de:

+ DDOS

+ Keylogger

+ Rootkit

+ Man in the Middle

+ Rogue Access Points

+ Phishing

+ Address Spoofing

+ Metaexploits

### Deploymant xarxa CryptoSEC via VirtualBOX + Clients dins de la xarxa CryptoSEC (VBox Clients) + Clients Wireguard (VBox Clients) i un de Maliciós

+ Deployment de tot l'assemblatge a Virtual Box.

+ Verificació del funcionament.

+ Oferiment de tots els serveis als clients de WireGuard.

https://www.lpi.org/our-certifications/exam-303-objectives 
