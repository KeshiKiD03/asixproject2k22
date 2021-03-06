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
> __Img Source__: *@Aaron & @Cristian 's GitHub*



<br>
<br>
<br>




# __Index__

+ **Que es el DNS?**: [--> readME <--](#que-es-el-dns)

+ **Com funciona el DNS**: [--> readME <--](#com-funciona-el-dns)

+ **Tipus de DNS "4 servidors DNS implicats en la càrrega d'una pàgina web"**: [--> readME <--](#tipus-de-dns-"4-servidors-dns-implicats-en-la-càrrega-duna-pàgina-web")

    + **Resolver de DNS Recursiu**: [--> readME <--](#resolver-de-dns-recursiu)

    + **Root Servers**: [--> readME <--](#root-servers)

    + **Servidor DNS - TLD**: [--> readME <--](#servidor-dns---tld)

    + **Servidor DNS Authoritative**: [--> readME <--](#servidor-dns-authoritative)

    + **Diferencia entre "Authoritative DNS Server" i "Recursive DNS Resolver"**: [--> readME <--](#diferencia-entre-"authoritative-dns-server"-i-"recursive-dns-resolver")

    + **Recursive DNS Resolver**: [--> readME <--](#recursive-dns-resolver)

    + **Authoritative DNS Server**: [--> readME <--](#authoritative-dns-server)

+ **Procediment per fer un "lookup" de DNS**: [--> readME <--](#procediment-per-fer-un-"lookup"-de-dns)

   + **Els 8 passos d'un "lookup" de DNS**: [--> readME <--](#els-8-passos-dun-"lookup"-de-dns)

+ **Què és un _"resolver"_ de DNS**: [--> readME <--](#què-és-un-"resolver"-de-dns)

+ **Tipus de consultes DNS**: [--> readME <--](#tipus-de-consultes-dns)

   + **3 tipus de consultes DNS**: [--> readME <--](#3-tipus-de-consultes-dns)

+ **Que es el emmagatzematge en caché de DNS?**: [--> readME <--](#que-es-el-emmagatzematge-en-caché-de-dns)

+ **Que es un registre DNS?**: [--> readME <--](#que-es-un-registre-dns)

+ **Tipus de registres DNS**: [--> readME <--](#tipus-de-registres-dns)

+ **Que es un DNS recursiu?**: [--> readME <--](#que-es-un-dns-recursiu)

+ **Exemple resumit de DNS**: [--> readME <--](#exemple-resumit-de-dns)

   + **Diferencia entre recursió i iteració**: [--> readME <--](#diferencia-entre-recursió-i-iteració)     
   
       + **Iteració - Recursió / Resum**: [--> readME <--](#iteració---recursió--resum)

   + **Advantatges del DNS recursiu**: [--> readME <--](#advantatges-del-dns-recursiu) 

   + **Desaventatges del DNS recursiu**: [--> readME <--](#desaventatges-del-dns-recursiu)      

   + **Servidors DNS recursius i atacs d'amplificació de DNS**: [--> readME <--](#servidors-dns-recursius-i-atacs-damplificació-de-dns)   

   + **Servidors DNS recursius i atacs d'enverinament de caché de DNS**: [--> readME <--](#servidors-dns-recursius-i-atacs-denvergament-de-caché-de-dns)   

+ **Configuració DNS CryptoSEC**: [--> readME <--](#configuració-dns-cryptosec)   

   + **Instal·lació**: [--> readME <--](#installació)  

   + **El servidor DNS Autoritatiu**: [--> readME <--](#el-servidor-dns-autoritatiu)  

      + **Arxiu de d'opcions de les zones**: [--> readME <--](#arxiu-de-dopcions-de-les-zones)  

      + **Arxiu de dades per a una zona directa "_cryptosec.net_**: [--> readME <--](#arxiu-de-dades-per-a-una-zona-directa-"cryptosecnet")  

   + **El servidor DNS Forwarder**: [--> readME <--](#el-servidor-dns-forwarder)  

      + **Arxiu de d'opcions de les zones**: [--> readME <--](#arxiu-de-dopcions-de-les-zones-1)  

      + **Arxiu de dades per especificar el forwarding a la zona "_cryptosec.net_**: [--> readME <--](#arxiu-de-dades-per-especificar-el-forwarding-a-la-zona-"cryptosecnet")  

   + **Comandes de verificació**: [--> readME <--](#comandes-de-verificació)  

   + **El client DNS**: [--> readME <--](#el-client-dns)  

   + **Resolució de noms al client**: [--> readME <--](#resolució-de-noms-al-client)  

      + **Exemple de /etc/hosts**: [--> readME <--](#exemple-de-etchosts)  

      + **Exemple de /etc/resolv.conf**: [--> readME <--](#exemple-de-etcresolvconf) 

+ **El servei systemd-resolved i la comanda resolvectl**: [--> readME <--](#el-servei-systemd-resolved-i-la-comanda-resolvectl) 

+ **Com donar suport a consultes de DNS ràpides i segures**: [--> readME <--](#com-donar-suport-a-consultes-de-dns-ràpides-i-segures) 

+ **Glossari de termes de les configuracions de BIND9**: [--> readME <--](#glossari-de-termes-de-les-configuracions-de-bind9) 

+ **Glossari de termes de tipus de servidors de BIND9**: [--> readME <--](#glossari-de-termes-de-tipus-de-servidors-de-bind9) 

+ **Glossari de termes seongs cada camp del SOA amb la seva funció (Bind9)**: [--> readME <--](#glossari-de-termes-seongs-cada-camp-del-soa-amb-la-seva-funció-bind9) 

+ **Exemples BIND9 (Configuracions)**: [--> readME <--](#exemples-bind9-configuracions) 

   + **GLUE RECORD**: [--> readME <--](#glue-record)  

   + **$GENERATE**: [--> readME <--](#generate)  

   + **Resolució inversa**: [--> readME <--](#resolució-inversa)  

+ **Bibliografia**: [--> readME <--](#bibliografia) 

<br>
<br>
<br>

# __Que es el DNS?__

El sistema de noms de __domini (DNS)__ és l'agenda telefònica d'Internet. Permet associar noms de domini amb direccions IP per facilitar en gran mesura l'accés als hosts de la xarxa.

Els humans accedeixen a la informació en línia mitjançant __noms de domini__, com ara __nytimes.com__ o __espn.com__. 

Els navegadors web interactuen mitjançant adreces de __Protocol d'Internet (IP)__. 

DNS _tradueix_ els __noms de domini__ a __adreces IP__ perquè els navegadors puguin _carregar recursos d'Internet_. 

Cada dispositiu connectat a __Internet__ té una __adreça IP única__ que altres màquines utilitzen per trobar el dispositiu. 

Els servidors DNS eliminen la necessitat que els h__umans memoritzin__ adreces IP com ara __192.168.1.1__ (en IPv4) o adreces IP alfanumèriques més complexes, com ara 2400:cb00:2048:1::c629:d7a2 (en IPv6). 

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/theinternet-dns.png?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

# __Com funciona el DNS__

El procés de resolució de DNS implica convertir un nom d'__amfitrió__ (com ara www.example.com) en una adreça IP compatible amb l'ordinador (com ara 192.168.1.1). Es dóna una adreça IP a cada dispositiu a __Internet__, i aquesta adreça és necessària per trobar el dispositiu d'Internet adequat, com si s'utilitza una __adreça__ de carrer per trobar una casa determinada. 

Quan un usuari vol __carregar__ una __pàgina web__, s'ha de produir una traducció entre el que un usuari escriu al seu navegador web (__example.com__) i l'adreça adaptada a la màquina necessària per localitzar la pàgina web __example.com__.

Per entendre el procés darrere de la _resolució DNS_, és important conèixer els diferents components de maquinari entre els quals ha de passar una consulta DNS. Per al navegador web, la cerca de DNS es produeix "darrere de l'escenari" i no requereix cap interacció de l'ordinador de l'usuari a part de la sol·licitud inicial. 

![](https://d1.awsstatic.com/Route53/how-route-53-routes-traffic.8d313c7da075c3c7303aaef32e89b5d0b7885e7c.png)
> __Img Source__: *https://d1.awsstatic.com/Route53/how-route-53-routes-traffic.8d313c7da075c3c7303aaef32e89b5d0b7885e7c.png*

<br>
<br>
<br>

# __Tipus de DNS "4 servidors DNS implicats en la càrrega d'una pàgina web":__

Tots els __servidors DNS__ es divideixen en una d'aquestes quatre categories: __Resolvers recursius__, __Root Servers__ , __Servidor de noms TLD__ i __State Of Authority__. 

En una cerca DNS típica (quan no hi ha __memòria cau__ en joc), aquests quatre servidors DNS treballen junts en harmonia per completar la tasca de lliurar l' adreça IP d'un domini especificat al client (el client sol ser un solucionador de talons, un senzill resolutor integrat en un sistema operatiu).

<br>
<br>
<br>

## __Resolver de DNS Recursiu__

1. __DNS Recursor (Servidor DNS Recursiu)__ : És com un __bibliotecari__ a la qual se li demana que busqui un llibre determinar a la biblioteca. El __recurs DNS__ és un __servidor__ dissenyat per rebre consultes de les màquines client mitjançant aplicacions com ara navegadors __web__. Normalment, el recurs és responsable de fer __peticions__ addicionals per satisfer la __consulta DNS del client__.

És la _primera parada_ d'una __consulta DNS__. 

El _resolver_ recursiu actua com a intermediari entre un client i un servidor de noms DNS. 

Després de rebre una consulta DNS d'un client web, un _resolver_ recursiu respondrà amb dades emmagatzemades a la __memoria CAU__ o enviarà una sol·licitud a un servidor de __noms arrel__ __(Root Servers)__, seguida d'una altra sol·licitud a un servidor de noms TLD i després d'una úlima sol·licitud a un servidor de noms autoritzat.

Després de rebre una resposta del servidor de noms autoritzat que conté l'adreça IP sol·licitada, el resolutor recursiu envia una resposta al client.

Durant aquest procés, el solucionador recursiu guardarà a la __memòria cau__ la informació rebuda dels servidors de noms autoritzats.

Quan un client nou sol·liciti l'adreça IP d'un nom de domini que ha estat sol·licitat recentment per un altre client, el _resolver_ pot eludir el procés de comunicació amb els servidors de noms i només lliurar al client el registre sol·licitat de la seva memòria cau.

La majoria dels usuaris d'Internet utilitzen un solucionador recursiu proporcionat pel seu ISP, però hi ha altres opcions disponibles; per exemple , l'1.1.1.1 de Cloudflare .

![](https://www.cloudflare.com/img/learning/dns/dns-server-types/root-nameserver.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/dns-server-types/root-nameserver.png*

<br>
<br>
<br>

## __Root Servers__

* __Root Servers__ : El __servidor arrel__ és el primer pas per traduir (resolució) noms d'amfitrió llegibles per humans a __adreces IP__. Es pot pensar com un __índex__ en una __biblioteca__ que apunta a __diferents bastidors__ de llibres; normalment serveix com a referència a altres ubicacions més específiques.

Hi han 13 servidors de noms d'arrel DNS, són coneguts per tots els _resolvers recursius_ i són la primera parada en la recera de registres DNS d'un _resolver recursiu_.

Un servidor arrel accepta la consulta d'un resolutor recursiu que inclou un nom de domini, i el servidor de noms arrel respon dirigint el resolutor recursiu a un __servidor de noms TLD__, en funció de l'extensió d'aquest domini __(.com, .net, .org, etc.)__.

![](https://www.cloudflare.com/img/learning/dns/dns-server-types/root-nameserver.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/dns-server-types/root-nameserver.png*

<br>
<br>
<br>

## __Servidor DNS - TLD__

* __Servidor DNS - TLD__ : El servidor de domini de __primer nivell__ ( TLD = Top Layer Domain ) es pot considerar com un _lloc específic_ de llibres d'una biblioteca. Aquest servidor de noms és el següent pas en la cerca d'una adreça IP específica i allotja l'última part d'un nom d'amfitrió (a example.com, el servidor TLD és "com").

Un __servidor de noms TLD__ manté la informació de tots els noms de domini que comparteixen una extensió de domini comuna, com ara .com, .net o qualsevol que vingui després de l'últim punt d'una URL.

Per exemple, un servidor de noms TLD __.com__ conté informació per a cada lloc web que acabi en __".com"__.

Si un usuari estava cercant __google.com__, després de rebre una resposta d'un servidor de noms arrel, el solucionador recursiu enviaria una consulta a un servidor de noms TLD .com, que respondria apuntant al servidor de noms autoritzat (vegeu més avall) per a aquest domini.

+ Dominis genèrics de __primer nivell__: són dominis que no són específics d'un país, alguns dels TLD genèrics més coneguts inclouen __.com, .org, .net, .edu i .gov.__

+ Dominis de __nivell superior__ de codi de país: inclouen tots els dominis específics d'un país o estat. Alguns exemples inclouen __.uk, .us, .ru i .jp__.

![](https://www.cloudflare.com/img/learning/dns/dns-server-types/tld-nameserver.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/dns-server-types/tld-nameserver.png*

<br>
<br>
<br>

## __Servidor DNS Authoritative__

* __Servidor de noms autoritzat (Authoritative DNS Server)__ : Es pot interpretar com un diccionari en una __prestatgeria de llibres__, on es pot consultar la __definició__ d'un __nom específic__. Aquest servidor de noms autoritzat és __l'última parada__ de la consulta del servidor de noms. Si el servidor de noms autoritzat té accés al registre sol·licitat, retornarà l'adreça IP del nom d'amfitrió sol·licitat al recurs DNS __(el bibliotecari)__ que va fer la sol·licitud inicial.

Quan un _resolver recursiu_ rep una resposta d'un servidor de noms TLD, aquesta resposta es dirigirà directament a un servidor DNS autoritatiu _(Authoritative DNS Server)_.

El servidor de noms autoritatiu conté la informació específica del nom de domini a la qual serveix.

Pot proporcionar una __solució recursiva__ amb l'adreça IP d'aquest servidor que es troba al registra __DNS A__ o si té un alias registre __CNAME__, que proporcionarà al _resolver recursiu_ un domini d'àlies. 

![](https://www.cloudflare.com/img/learning/dns/dns-server-types/authoritative-nameserver.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/dns-server-types/authoritative-nameserver.png*

<br>
<br>
<br>

# __Diferencia entre "Authoritative DNS Server" i "Recursive DNS Resolver"__

Els dos conceptes es refereixen a servidors (O grups de servidors) que estàn _"integrals"_ a la infraestructura DNS, però cadascun realitza un paper diferent. Es troba en diferents ubicacions dins del trajecte d'una consulta de DNS. Una manera d'entendre la diferència és que el _"Recursive Resolver"_ és a l'inici de la consulta DNS i el _"Athoritative Nameserver"_ (servidor de noms autoritatiu) al final. 

<br>
<br>
<br>

## __Recursive DNS Resolver__

El _"Recursive DNS Resolver"_ és el servidor que respon a una solicitud recursiva del client i dedica temps a detectar el __registre DNS__.

Ho fa mitjançant una __sèrie de sol·licituds__ fins que arriba al servidor de noms DNS autoritatiu _(Authoritative DNS Server)_ per al registre DNS sol·licitat (o es torna inactiu o torna un error si no es troba cap registre).

Amb altres paraules, el client que fa una petició per anar a _www.exemple.com_, el _"Recursive DNS Resolver"_ respon la petició i va preguntant a altres _servidors_ quina IP es la _www.exemple.com_ fins que arriba al servidor DNS autoriratiu _(Authoritative DNS Server)_ que conté la zona _www.exemple.com_ en els seus registres.

Afortunadament, els _"Recursive DNS Resolver"_  __no__ sempre han de fer diverses sol·licituds per inspeccionar els registres necessaris per respondre a un client. 

L' emmagatzematge en __memòria cau__ és un procés d'agilització de procés en la _busca_ del registre DNS que ajuda a __saltar-se__ les sol·licituds _necessàries_ servint abans el registre del recurs sol·licitat a la cerca DNS. 

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-1.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-1.png*

<br>
<br>
<br>

## __Authoritative DNS Server__

Un servidor DNS autoritatiu _(Authoritative DNS Server)_ és un servidor que allotja realment registres de recursos DNS i n'és responsable.

Aquest és el __servidor al final__ de la cadena de cerca de DNS que respondrà amb el registre DNS del recurs consultat, permetent finalment que el __navegador web__ faci la sol·licitud per arribar a __l'adreça IP__ necessària per accedir a un __lloc web__ o altres __recursos web__.

Un servidor DNS autoritatiu  _(Authoritative DNS Server)_ pot oferir sol·licituds a partir de les seves pròpies dades sense necessitat de consultar altres recursos _(recursive)_, ja que és la font final de veritat per a __certs registres DNS__.

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-2.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-2.png*
<br>

Convé indicar que en els casos de _consultes relatives_ a __subdominis__, com ara _foo.exemple.com_ o _blog.cloudflare.com_ , s'afegirà un servidor de noms addicional a la seqüència després del servidor de noms autoritatiu, que és el responsable d'emmagatzemar el registre __CNAME__ del subdomini. 

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-3.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-3.png*
<br>

Hi ha una diferencia fundamental entre molts serveis de DNS i el que ofereix Cloudfare per exemple. Hi han diferents _"Recursive DNS Resolver"_ com Google DNS, OpenDNS o proveïdors com Comcast mantenen instal·lacions de centre de dades de _"Recursive DNS Resolver"_.

Aquests _"Resolvers"_ permeten consultes rapides i senzilles mitjaçant clusters optimitzats de sistemes informàtics optimitzats per a DNS. Però son bàsicament diferents servidors de noms allotjats en servidors com per exemple Cloudflare.

<br>
<br>
<br>

# __Procediment per fer un "lookup" de DNS__

En la majoria de situacions, DNS fa referència a un __nom de domini__ que s'està traduint a l'adreça IP. 

Sovint, la informació de cerca de DNS s'emmagatzemarà a la memòria __cau local__ dins del servidor que realitzi la __consulta__ o en __remot__ a la _infraestructura_ de DNS. 

Generalment, hi ha 8 passos en una cerca DNS. 

Quan la informació de DNS s'emmagatzema en memòria cau, s'ometen els passos del procés de cerca DNS, cosa que ho fa més ràpid. L'exemple descriu els 8 passos necessaris quan no s'ha emmagatzemat res a la memòria cau. 

<br>
<br>
<br>

## __Els 8 passos d'un "lookup" de DNS__

1. Un usuari escriu "exemple.com" en un navegador web i la consulta recorre Internet i és rebuda per un _"resolutor recursiu de DNS (Recursive DNS Resolver)"_.

2. El _resolver_ consulta a continuació un servidor de _noms d'arrel de DNS_ _(Root Servers) (.)_ = Internet.

3. El servidor arrel _(Root Servers)_ respon a continuació al _resolver_ amb l'adreça d'un servidor de _DNS de domini_ de __primer nivell__ (TLD = Top Level Domain) (p.ex. .com o .net), que emmagatzema la informació per als vostres dominis. En cercar "_exemple.com_", la nostra sol·licitud es dirigeix al TLD __.com__.

4. El _resolver_ farà a continuació una sol·licitud al domini de __primer nivell__ .__com__.

5. El __servidor TLD__ respondrà a continuació amb l'adreça IP del servidor de noms del domini autoriratiu _(Authoritative DNS Server)_: __exemple.com__.

6. Finalment, el _resolver recursiu_ envia una consulta al _servidor de noms del domini autoritatiu_ __(Authoritative DNS Server)__.

7. Per exemple, l'adreça IP es retornarà al _resolver_ desde del _servidor de noms_.

8. El _resolver de DNS_ respondrà a continuació al _navegador web_ amb __l'adreça IP del domini__ sol·licitat inicialment.

Un cop els 8 passos de la cerca del DNS han tornat l'adreça IP per exemple.com, el navegador podrà fer la sol·licitud per a la _pàgina web_: 

9. El navegador farà una sol·licitud __d'HTTP__ a l'adreça IP.

10. El servidor en aquesta adreça IP torna la __pàgina web__ perquè es processi al navegador (pas 10). 

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png*

<br>
<br>
<br>

# __Què és un _"resolver"_ de DNS__

El __resolver de DNS__ és la __primera parada__ de la recerca de DNS i s'encarrega de tractar amb el __client__ que va fer la __sol·licitud inicial__.

El solucionador inicia la seqüència de consultes que porten en última instància que l'URL es tradueixi a l'adreça IP necessària.

Nota: una cerca de DNS no emmagatzemada a la memòria cau inclourà consultes recursives i iteratives. 

És important diferencia entre una _consulta_ de _DNS recursiu_ i un _resolver_ de _DNS recursiu_.

La __consulta__ fa referència a la sol·licitud feta a un solucionador de DNS que requereix la resolució de la consulta.

Un __resolver__ de DNS recursiu és el servidor que accepta una __solució recursiva__ i procesa la resposta fent les __sol·licituds necessàries__.

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-recursive-query.png)
> __Img Source__: *https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-recursive-query.png*

<br>
<br>
<br>

# __Tipus de consultes DNS__

En una busca DNS habitual es produeixen 3 tipus de consultes.

En utilitzar una combinació d'aquestes consultes, un procés optimitzat per la resolució de DNS es pot comportar una reducció de "salts". En una situació ideal, les dades de registra emmagatzemades a la memòria CAU estaran disponibles, la qual cosa permetrà que un servidor de noms DNS torni a una consulta no _recursiva_.

<br>
<br>
<br>

## __3 tipus de consultes DNS:__ 

1. __Consulta recursiva__: En una consulta recursiva, un client DNS requereix que un servidor DNS (generalment un _resolver_ de __DNS recursiu__) respongui al __client__ amb el registre del recurs sol·licitat o un missatge d'error si el solucionador no pot trobar el registre.

2. __Consulta iterativa__: En aquesta situació, el _client DNS_ permetrà que un __servidor DNS__ retorni la __millor resposta__ possible. Si el servidor DNS consultat no té el __nom__ que ha demanat el client en la s eva consulta, el servidor DNS retornarà una referencia a un servidor DNS autoritatiu. El __client DNS__ farà a continuació una consulta a __l'adreça de referència__. Aquest procés continua amb servidors DNS addicionals que segueixen a la cadena de consulta fins que es produeixi un error o se superi el temps despera.

3. __Consulta no recursiva__: Generalment es produeix quan un __client solucionador de DNS__ consulta un __servidor DNS__ per un registre al qual té __accés__ perquè o bé __és autoritatiu__ per al __registre__ o el registre __existeix__ dins de la seva memòria cau. Generalment, el servidor DNS emmagatzemarà a la memòria cau registres DNS per prevenir el consum d'amplada de banda addicional i la càrrega als servidors que precedeixen a la cadena.

<br>
<br>
<br>

# __Que es el emmagatzematge en caché de DNS?__

L'objectiu de l'emmagatzematge a la memòria cau és guardar dades en una ubicació temporalment per aconseguir millores en el rendiment i fiabilitat en les sol·licituds de dades.

L'emmagatzematge en memòria cau de DNS guarda dades més a prop del client sol·licitant perquè la consulta DNS es pugui resoldre abans i les consultes addicionals que segueixen a la cadena de cerca DNS es puguin evitar, millorant així els temps de càrrega i reduint el consum d'amplada de banda/CPU. 

Les dades de DNS es poden emmagatzemar en memòria cau en diverses ubicacions. Cadascuna guardarà els registres DNS durant una quantitat de temps establerta, determinada pel temps de vida (TTL) .

<br>
<br>
<br>

# __Que es un registre DNS?__

Els registres DNS o també conegut con _arxius de zona_ son instruccions radicades en servidors DNS autoritatius que proporcionen informacó sobre un domini, com l'adreça IP associada amb aquest i com gestionar sol·licituds dirigides a aquest domini.

Aquests registres consisteixen en una sèrie de fitxers de text escrits en el que es coneix com a sintaxi DNS. La sintaxi DNS és simplement una cadena de caràcters utilitzats com a ordres que diuen al servidor DNS què fer.

Exemple: __db.cryptosec.net__ que es troba a __/etc/bind/__

Tots els registres DNS tenen també un " TTL ", que vol dir "time-to-live" i indica amb quina freqüència el servidor DNS actualitzarà aquest registre.

<br>
<br>
<br>

# __Tipus de registres DNS__

_MÉS COMUNS_

+ A: Conté l'adreça IP d'un domini.

+ AAAA: Lo mateix que l'anterior pero per a Ipv6

+ CNAME: Reenvia un domini o subdominis, es un alias, no proporciona una adreça IP.

+ MX: Es dirigeix a un servidor de correu electrònic.

+ TXT: Permet que un administrador pugui emmagatzemar notes de text al registre. Aquests registres se solen utilitzar per a la seguretat del correu electrònic. 

+ NS: Emmagatzema el servidor de noms per a una entrada DNS. [Més info](https://www.cloudflare.com/es-es/learning/dns/dns-records/dns-soa-record/)

+ SOA: State of Authority. Emmagatzema la informació de l'administrador sobre un domini o zona. [Més info](https://www.cloudflare.com/es-es/learning/dns/dns-records/dns-ns-record/)

+ SRV: Especifica un port per a serveis específics

+ PTR: Proporciona un nom de domini a cerques inverses. Resolució inversa.

_MÉNYS COMUNS_

+ SSHFP: Aquest registre emmagatzema les "empremtes digitals de la clau pública SSH"; SSH fa referència a “Secure Shell” i és un protocol de xarxa xifrat que permet la comunicació segura a una xarxa insegura.

+ RP: Aquest és el registre de la "persona responsable" i emmagatzema l'adreça de correu electrònic de la persona responsable del domini.

+ DCHID : el "identificador DHCP" emmagatzema informació per al protocol de configuració dinàmica de host (DHCP), un protocol de xarxa estandarditzat utilitzat a les xarxes IP.


__DNSSEC__

+ CAA: És el registre d'"autorització d'autoritat de certificació"; permet que els propietaris d'un domini especifiquin quines autoritats de certificació poden emetre certificats per a aquest domini. Si no existeix cap registre CAA, aleshores qualsevol podrà emetre un certificat per a aquest domini. Aquests registres també els hereten els subdominis.

+ DNSKEY: El ' Registre de Clau DNS ' conté una clau pública que es fa servir per verificar les signatures de l' Extensió de seguretat del sistema de noms de domini (DNSSEC) .
 
+ CDNSKEY: És una còpia fill del registre DNSKEY destinada a transferir-se a un pare.

+ CERT: El "registre de certificats" emmagatzema certificats de claus públiques.

+ NSEC: El "següent registre segur" és part del DNSSEC i s'usa per demostrar que un registre de recursos DNS sol·licitat no existeix.

+ RRSIG : el "registre de recursos de signatura" emmagatzema signatures digitals utilitzades per autenticar registres de conformitat amb el DNSSEC.

<br>
<br>
<br>

# __Que es un DNS recursiu?__

Una cerca de DNS recursiu és quan un servidor DNS es comunica amb altres servidors DNS per "trobar" una direcció IP i retornarla al client. Això es diferencia d'una consulta de DNS iterativa, en la que el client es comunica directament amb cada servidor DNS implicat en la cerca.

<br>
<br>
<br> 

# __Exemple resumit de DNS__

1. Un usuari escriu un nom de domini: __"cryptosec.net"__ en el seu navegador, s'activa una __cerca de DNS__. 

2. Una serie d'ordinadors en __remot coneguts__ com __servidors DNS__ troben la __direcció IP__ d'aquell __domini__ i la retornen a l'ordinador de l'usuari per a que pugui accedir al lloc __web correcte__.

3. Diferents tipus de __servidors DNS__ han de treballar conjuntament per poder completar aquesta cerca de DNS. 

4. Actuén: 

    * Un solucionador o __resolver DNS__.

    * Un servidor __Root Server__ (1.1.1.1 o 8.8.8.8 per exemple).

    * Un __servidor TLD__ de DNS (de primer nivell, exemple: .net, .com...). 

    * Un servidor de noms __autoritatiu__ de DNS. Conté el __registre DNS__.

5. Pot haber un cas de __"caching"__ que algun d'aquests servidors pot haber emmagatzemat la respostas de la consulta durant una cerca anterior, llavors el client, en lloc de recorrer i esperar molt, tindrà un temps de resposta menor.

## __Diferencia entre recursió i iteració__

La __recursió__ i la __iteració__ son termes informàtics que descriuen dos mètodes diferents per resoldre un problema.

En la __recursió__, un programa es truca a __si mateix__ fins a que __cumpleixi__ una __condició__. Mentes que la iteració es repeteix un conjunt d'instruccions fins que es cumpleixi la condició.

Exemple: Jim ha perdut les seves claus de casa i les està buscant-la d'una forma sistemàtica. 

    Una solució recursiva seria que Jim no pararia de buscar les claus. Jim començarà a buscar, i si no el troba, tornarà al punt de partida per tornar a buscar-les.

    Una solució iterativa seria que Jim faci una cerca en una habitació durant 5 minuts i després tornaria a l'origen de les instruccions i buscaria en una altra habitació durant 5 minuts, repetiria aquest procés fins a ttrobar les claus o fins que hagi acabat la llista d'habiacions.

En un servidor DNS que faci la __recursió__ segurià consultant a altres servidors DNS fins que obtingui la direcció IP a la qual pugui retornar al client.

En un servidor DNS que faci una consulta __iterativa__, cada consulta DNS respon __directament al client__ amb una direcció per a que un altre servidor DNS pregunti, i el client __seguirà preguntant__ a altres servidors DNS fins que algú d'ells responda amb la IP i el domini correcte.

<br>
<br>
<br>

### __Iteració - Recursió / Resum:__

El client delega una consulta a un DNS recursiu:

__Recursiva__: "Necessito la direcció IP d'aquest domini, per favor, trobala i no tornis a trucar-me fins que la trobis".

El client li diu al solucionador o _"resolver"_ de DNS:

__Iterativa__: "Necessito la direcció IP d'aquest domini. Per favor, dona'm la direcció següent del servidor DNS en el procés de la recerca per a que jo mateix la pugui trobar".

<br>
<br>
<br>

## __Advantatges del DNS recursiu__

Les consultes DNS recursives solen resoldre's més ràpid que les consultes iteratives. Això es degut al emmagatzematge __cache__. Un servidor DNs recursiu almacena en __caché__ la resposta a cada consulta que realitza i guarda aquesta resposta final durant un temps determinar (TTL = Time to Live).

Quan un solucionador o _resolver_ recursiu rep una consulta per a una adreça IP que tingui al seu caché, pot proporcionar ràpidament la resposta al caché al client sense comunicar-se amb cap altre servidor DNS. Servir ràpidament respostes des del caché és molt probable si a) el servidor DNS serveix a molts clients ob) el lloc web sol·licitat és molt popular.

<br>
<br>
<br>

## __Desaventatges del DNS recursiu__

Desafortunadament, permetrà consultes de DNS recursives en servidors DNS oberts creant una vulnerabilitat de seguretat, ja que aquesta configuració pot permetre que els atacants portin a terme atacs d'amplificació de DNS i d'envergament de caché de DNS .

<br>
<br>
<br>


## __Servidors DNS recursius i atacs d'amplificació de DNS__

En un atac d'amplificació de DNS, un atacant sol utilitzar un grup de màquines (que coneix com a botnet ) per enviar un gran volum de consultes DNS mitjançant l'ús d'una adreça IP falsificada . Una direcció IP falsificada és com una direcció de retorn falsa; l'atacant envia sol·licituds des de la seva pròpia IP, però pide que les respostes van a la víctima. 

Per agravar l'atac, l'atacant també utilitza una tècnica trucada amplificació, en la que la sol·licitud falsificada pide una resposta molt llarga. El servei víctima rebrà una allau de respostes de DNS llargues i no desitjades que poden interrompre o fins i tot fer els seus servidors. Aquest és un tipus d' atac DDoS.

És com si un grup d'adolescents bromistas llamara a una pizzeria i pidiera cada un una docena de pizzes. Al lloc de la seva pròpia direcció per a la entrega, a la direcció d'un veí despres. A la víctima, que rep una enorme quantitat de pizzes familiars que no ha fet cap comanda, probablement li pertorbirà el dia.

Necessiteu un servidor DNS que accepteu consultes recursives per dur a terme un tipus d'atac, ja que els paquets de DNS amplificats són respostes a consultes de DNS recursius.

## __Servidors DNS recursius i atacs d'envergament de caché de DNS__

En un atac d'enverinament de caché de DNS, quan un servidor DNS recursiu sol·licita una adreça IP a un altre servidor DNS, un atacant intercepta la sol·licitud i una resposta falsa, que sol·liciteu la direcció IP d'un lloc web maliciós. 

El servidor DNS recursiu no només enviava al client original aquesta adreça IP, sinó que el servidor també guarda la resposta al seu caché. 

Cal demanar usuari que sol·liciti una IP per al mateix nom de domini serà enviat al lloc web maliciós. 

Si es tracta d'un nom de domini i un solucionador de DNS famosos, aquest atac podria arribar a afectar a milles d'usuaris.

En una consulta de DNS iterativa, el client pide directament la resposta a cada servidor DNS. 

Inclós si un atacant és capaç d'enviar una resposta falsificada a la consulta, només afectarà a un únic client, el que no mereixi el temps de l'atacant.

<br>
<br>
<br>

# __Configuració DNS CryptoSEC__
<br>
<br>


<br>

## __Instal·lació__

S'instal·la amb la comanda `apt-get install bind9`, el fitxer de configuració es troba a `/etc/bind`.

<br>
<br>
<br>

## __El servidor DNS Autoritatiu__

Tindrà els registres de la zona __"cryptosec.net"__. És un servidor autoritari que rebrà les peticions DNS d'un forwarder.

<br>
<br>
<br>

### __Arxiu de d'opcions de les zones__

El fitxer `/etc/bind/named.conf.options`.

```bash
        // forwarders {
        //      0.0.0.0;
        // };

        //========================================================================
        // If BIND logs error messages about the root key being expired,
        // you will need to update your keys.  See https://www.isc.org/bind-keys
        //========================================================================

        dnssec-enable yes;
        dnssec-validation yes;
        dnssec-lookaside auto;

        listen-on-v6 { any; };
};
```

Conté:

1. La declaració del directori on es guardaran els arxius de zona: __/etc/bind__

2. La declaració, per defecte desactivada, dels servidors de reenviament: secció forwarders {...}

Si no s'utilitzen forwarders, el servidor DNS anirà als servidors arrel per iniciar les resolucions de les consultes que no estiguin en memòria cau ni a cap de les seves zones. Quan s'utilitzen servidors de reenviament es consultarà aquests servidors. 

<br>
<br>
<br>

### __Arxiu de dades per especificar la zona__

__És un servidor SOA, State of Authority__

El fitxer `/etc/bind/named.conf.default-zones`:

```bash
zone "cryptosec.net" {
        type master;
        file "/etc/bind/db.cryptosec.net";
};
```

Cada zona (directa o inversa) tindrà:

1. La declaració amb la directiva zoneon s'indica el domini o l'adreça de xarxa a les zones inverses.

2. Una directiva typeindicant si és una zona mestra (escrita per l'administrador) o esclava (descarregada automàticament d'un servidor mestre).

3. Una directiva fileindicant el fitxer de respatller (que es trobarà a /var/cache/bind)

<br>
<br>
<br>

### __Arxiu de dades per a una zona directa "_cryptosec.net_"__

Cada zona necessita un fitxer de dades on desar els registres de la zona. Per a una zona directa com `cryptosec.net` el fitxer de zona pot ser `/etc/bind/db.cryptosec.net`  i contenir: 

```bash
$TTL    604800
@       IN      SOA     cryptosec.net. mail.cryptosec.net. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL

@       IN      NS      cryptosec.net.
@       IN      A       192.168.0.164
www     IN      CNAME   cryptosec.net.
;@      IN      A       10.200.243.164
;@      IN      A       192.168.31.164
$INCLUDE "/etc/bind/keys/zsk/Kcryptosec.net.+007+53495.key"
$INCLUDE "/etc/bind/keys/ksk/Kcryptosec.net.+007+07353.key"
```

> NOTE: $INCLUDE "/etc/bind/keys/zsk/Kcryptosec.net.+007+53495.key" / $INCLUDE "/etc/bind/keys/ksk/Kcryptosec.net.+007+07353.key" son lés claus de __DNSSEC__. Vegeu la documentació de __DNSSEC__.

En aquest arxiu de zona cal notar:

* El caràcter @equival al domini que estigui definint acabat en punt. Aquí `cryptosec.net.`
    
* El camp `mail.cryptosec.net.` correspon al correu de contacte per indicar errors a la zona i s'interpreta com `cryptosec.net.`
    
* És important incrementar el valor Serial cada cop que es fa una modificació.

<br>
<br>
<br>

## __El servidor DNS Forwarder__

És un servidor DNS que s'encarregarà d'encaminar les peticions DNS dels seus clients al SOA.

<br>
<br>
<br>

### __Arxiu de d'opcions de les zones__

El fitxer `/etc/bind/named.conf.options`.

```bash
        forwarders {
        // CLASE
                10.200.243.164;
        };
        dnssec-validation no;
        querylog yes;
        recursion yes;
```

Conté:

1. La declaració del directori on es guardaran els arxius de zona: __/etc/bind__

2. La declaració, està activada, reenviarà els paquets al __SOA__: secció forwarders {...}

<br>
<br>
<br>

### __Arxiu de dades per especificar el forwarding a la zona "_cryptosec.net_"__

__És un servidor SOA, State of Authority__

El fitxer `/etc/bind/named.conf.default-zones`:

```bash
zone "cryptosec.net" {
        type forward;
// CLASSE
        forwarders { 10.200.243.164; };
};
```

Cada zona (directa o inversa) tindrà:

1. La declaració amb la directiva zoneon s'indica el domini o l'adreça de xarxa a les zones inverses.

2. Una directiva typeindicant si és una zona mestra (escrita per l'administrador) o esclava (descarregada automàticament d'un servidor mestre).

3. Una directiva fileindicant el fitxer de respatller (que es trobarà a /var/cache/bind)

<br>
<br>
<br>

## __Comandes de verificació__

+ ``journalctl -u named -f &``: Mostra els logs del servei Bind9 en temps real

+ ``systemctl restart bind9``: Reinicia el Bind9.

+ ``host cryptosec.net``: Petició per resoldre la zona, __cryptosec.net__, obtindrem la IP.

+ ``nslookup cryptosec.net``: Petició per resoldre la zona, __cryptosec.net__, obtindrem la IP

+ ``dig cryptosec.net``: Petició per resoldre la zona, __cryptosec.net__, obtindrem la IP

+ ``systemd-resolve --status``: Verificació del status actual del DNS.

+ ``resolvectl query cryptosec.net``: Petició per resoldre la zona, __cryptosec.net__, obtindrem la IP

<br>
<br>
<br>

## __El client DNS__

És el component que delega una consulta o consulta directament a servidors DNS, en la cerca d'un registre DNS a la qual vol accedir.

Utilitza el fitxer /etc/resolv.conf com a configuració del _resolver_.

La seva funció és millorar el rendiment de les resolucions mitjançant memòria cau. Quan una resolució provoca una fallada de memòria cau s'utilitzarà el DNS extern del qual probablement s'haurà obtingut la IP mitjançant una concessió DHCP. 

![](https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/images/dns_process.jpg)
> __Img Source__: *https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/images/dns_process.jpg*
 
<br>
<br>
<br>

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%208.45.44%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

## __Resolució de noms al client__

Quan un client vol comunicarśe amb una altra de la que només conéix el FQDN (_Fully Qualified Domain Name_ = www.cryptosec.net), primer seria obtenir l'adreça IP amb el nom de domini. Després fa el request HTTP per poder accedir-hi.

Podem utilitzar el fitxer __/etc/hosts__ com a resolver local o be als servidors DNS establertes en __/etc/resolv.conf__

<br>
<br>
<br>

### __Exemple de /etc/hosts__

```bash
127.0.0.1 localhost 
82.151.203.129 iespuigcastellar.xeill.net 
145.97.39.155 es.wikipedia.org 
192.168.3.1 cryptosec.net
```

<br>
<br>
<br>

### __Exemple de /etc/resolv.conf__

Quan s'utilitza el client DNS per obtenir l'adreça IP d'un nom de domini, cal examinar el fitxer de configuració __/etc/resolv.conf__ per obtenir: 

* La llista de servidors DNS a utilitzar (un per línia precedit per la directiva nameserver)

* El domini a utilitzar per a les consultes que no són un FQDN indicat per la directiva search

```bash
# Recerca de cryptosec.net 
nameserver 192.168.3.1
nameserver 10.200.244.10
search cryptosec.net
```

<br>
<br>
<br>

# __El servei systemd-resolved i la comanda resolvectl__

La majoria de les distribucions actuals de GNU/Linux utilitzen systemdaixí que solen executar el servei systemd-resolvedcom a stub DNS local de la màquina. L'avantatge dutilitzar __systemd-resolved__ és que les aplicacions trobaran un millor rendiment gràcies a la seva memòria cau. 

El fitxer __/etc/resolv.conf__ pot ser:

```bash
# See man:systemd-resolved.service(8) for details about the supported modes of
# operation for /etc/resolv.conf.

nameserver 127.0.0.53
options edns0 trust-ad
search cryptosec.net
```

Aquí es pot observar:

+    El comentari adverteix que és un fitxer generat per __systemd-resolved__.

+    Com a servidor DNS s'ha configurat l'adreça 127.0.0.53 que només és accessible des del propi equip.

L'ordre `resolvectl` permet:

+    Mostrar informació sobre la configuració: __resolvectl status__

+    Mostra estadístiques sobre els encerts de memòria cau: __resolvectl statistics__

+    Mostra els DNS utilitzats: __resolvectl dns__

+    Fer resolucions DNS: resolvectl query __cryptosec.net__

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%205.19.09%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

# __Com donar suport a consultes de DNS ràpides i segures__

La solució es DNSSEC.

Consulteu la documentació més extensa i adherida de __DNSSEC__.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/WhatsApp%20Image%202022-05-12%20at%205.10.43%20PM.jpeg?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

# __Glossari de termes de les configuracions de BIND9__

`A` = stableix la correspondència d'un nom a una adreça IP.

`CNAME` = Estableix un àlies per a un nom.

`MX` = Especifica un servidor d'intercanvi de correu.

`NS` = Especifica un servidor de noms per al domini.

`PTR` = Estableix la correspondència d'una adreça IP a un nom.

`SOA` = Declara el servidor de noms que té més autoritat per a la zona.

# __Glossari de termes de tipus de servidors de BIND9__

`Recursive` = El servidor que realitza diverses consultes fins a obtenir una resposta completa.

`Secondary` = El servidor DNS que rep la base de dades de zona d’un altre servidor.

`Forward` = El servidor que reenvia les consultes a altres servidors.

`Authoritative` = El servidor que proporciona respostes sobre les zones que té configurades.

`Primary` = El servidor DNS que conté els fitxers de zona (la base de dades original).

# __Glossari de termes seongs cada camp del SOA amb la seva funció (Bind9)__

`time-to-retry` = Temps que un servidor secundari deixa passar abans de tornar a intentar una transferència de zona.

`serial-number` = Utilitzat pels servidors secundaris per a detectar els canvis a la base de dades.

`nxdomain-ttl` = El temps que els solucionadors han de guardar a la memòria cau una resposta de domini o host inexistent..

`time-to-expire` = Si passat aquest temps, un servidor secundari no aconsegueix realitzar la transferència de zona, ha de deixar de considerar-la vàlida.



# __Exemples BIND9 (Configuracions)__

## __GLUE RECORD__

```bash
# /etc/bind/named.conf.default-zones

zone "zone1.com" {
    type primary;
    file "/etc/bind/db.zone1.com";
};
```

```bash
# /etc/bind/db.zone1.com

@	SOA	ns	admin	1700010100 20m 3m 2w 1h
	NS	ns
	A	1.1.1.1

```

Què respondrà el servidor a la següent consulta?

```bash
user@debian:~$ host zone1.com
```

No es pot carregar la Zona ja que falta el GLUE RECORD:

ns    A    2.2.2.2

La resposta correcta és: `SERVFAIL`

## __$GENERATE__

```bash
# /etc/bind/named.conf.default-zones

zone "server.tld" {
    type primary;
    file "/etc/bind/db.server.tld";
};

```

```bash
# /etc/bind/db.server.tld

@        SOA    ns    admin    1700010100 20m 3m 2w 1h
         NS     ns
ns       A      192.168.122.1
$GENERATE 1-4 database$ A 1.1.$.1

```


```bash
user@debian:~$ host database1.server.tld
database1.server.tld has address 1.1.1.1
user@debian:~$ host database2.server.tld
database2.server.tld has address 1.1.2.1
user@debian:~$ host database3.server.tld
database3.server.tld has address 1.1.3.1
user@debian:~$ host database4.server.tld
database4.server.tld has address 1.1.4.1
user@debian:~$ host database5.server.tld
Host database5.server.tld not found: 3(NXDOMAIN)
```

## __Resolució inversa__

```bash
# /etc/bind/named.conf.default-zones

zone "5.43.IN-ADDR.ARPA" {
	type primary;
	file "/etc/bind/db.5.43.IN-ADDR.ARPA";
};
```

```bash
# /etc/bind/db.5.43.IN-ADDR.ARPA

@		SOA	ns	admin	1700010100 20m 3m 2w 1h
		NS	ns
ns		A	192.168.122.1
78.202		PTR	host.tld.

```

Quina adreça IP es resoldrà inversament al nom host.tld? `43.5.202.78`

## --> [ [Tornar a Ciberseguretat](https://github.com/KeshiKiD03/asixproject2k22/blob/main/README.md) ] <--

# __Bibliografia__
- https://www.cloudflare.com/learning/dns/dns-over-tls/
- https://www.cloudflare.com/es-es/learning/dns/what-is-dns/
- https://elpuig.xeill.net/Members/vcarceler/c1/didactica/apuntes/ud4/na8
- https://www.cloudflare.com/learning/dns/what-is-dns/
- https://www.digival.es/blog/que-son-las-dns-y-para-que-sirven/
- https://www.hostinger.es/tutoriales/que-es-dns
- https://www.webempresa.com/hosting/que-son-dns.html
- https://dinahosting.com/ayuda/que-es-un-servidor-dns/
- https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio
- https://www.csuc.cat/ca/serveis/secundaris-i-repliques-de-dns
- https://ca.eyewated.com/que-es-dns-domain-name-system/
- https://ca.theastrologypage.com/dns-record
- http://acacha.org/mediawiki/Servidor_DNS#.Yoj9sKjP1PY