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


# Que es el DNS?

El sistema de noms de domini (DNS) és l'agenda telefònica d'Internet. 

Els humans accedeixen a la informació en línia mitjançant noms de domini , com ara nytimes.com o espn.com. 

Els navegadors web interactuen mitjançant adreces de protocol d'Internet (IP). 

DNS tradueix els noms de domini a adreces IP perquè els navegadors puguin carregar recursos d'Internet. 

Cada dispositiu connectat a Internet té una adreça IP única que altres màquines utilitzen per trobar el dispositiu. 

Els servidors DNS eliminen la necessitat que els humans memoritzin adreces IP com ara 192.168.1.1 (en IPv4) o adreces IP alfanumèriques més complexes, com ara 2400:cb00:2048:1::c629:d7a2 (en IPv6). 

<div style="align: center; width: 100%">
    <img src="https://www.cloudflare.com/img/learning/dns/what-is-dns/theinternet-dns.svg" />
</div>

# Com funciona el DNS

El procés de resolució de DNS implica convertir un nom d'amfitrió (com ara www.example.com) en una adreça IP compatible amb l'ordinador (com ara 192.168.1.1). Es dóna una adreça IP a cada dispositiu a Internet, i aquesta adreça és necessària per trobar el dispositiu d'Internet adequat, com si s'utilitza una adreça de carrer per trobar una casa determinada. 

Quan un usuari vol carregar una pàgina web, s'ha de produir una traducció entre el que un usuari escriu al seu navegador web (example.com) i l'adreça adaptada a la màquina necessària per localitzar la pàgina web example.com.

Per entendre el procés darrere de la resolució DNS, és important conèixer els diferents components de maquinari entre els quals ha de passar una consulta DNS. Per al navegador web, la cerca de DNS es produeix "darrere de l'escenari" i no requereix cap interacció de l'ordinador de l'usuari a part de la sol·licitud inicial. 

https://www.cloudflare.com/learning/dns/what-is-dns/

![](https://d1.awsstatic.com/Route53/how-route-53-routes-traffic.8d313c7da075c3c7303aaef32e89b5d0b7885e7c.png)

# 4 servidors DNS implicats en la càrrega d'una pàgina web:

* __Recurs DNS__ : el recurs es pot considerar com un bibliotecari a qui se li demana que vagi a buscar un llibre determinat en algun lloc d'una biblioteca. El recurs DNS és un servidor dissenyat per rebre consultes de les màquines client mitjançant aplicacions com ara navegadors web. Normalment, el recurs és responsable de fer peticions addicionals per satisfer la consulta DNS del client.

* __Noms__ : el servidor arrel és el primer pas per traduir (resolució) noms d'amfitrió llegibles per humans a adreces IP. Es pot pensar com un índex en una biblioteca que apunta a diferents bastidors de llibres; normalment serveix com a referència a altres ubicacions més específiques.

* __Noms TLD__ : el servidor de domini de primer nivell ( TLD ) es pot considerar com un bastidor específic de llibres d'una biblioteca. Aquest servidor de noms és el següent pas en la cerca d'una adreça IP específica i allotja l'última part d'un nom d'amfitrió (a example.com, el servidor TLD és "com").

* __Servidor de noms autoritzat__ : aquest servidor de noms final es pot considerar com un diccionari en un bastidor de llibres, en el qual es pot traduir un nom específic a la seva definició. El servidor de noms autoritzat és l'última parada de la consulta del servidor de noms. Si el servidor de noms autoritzat té accés al registre sol·licitat, retornarà l'adreça IP del nom d'amfitrió sol·licitat al recurs DNS (el bibliotecari) que va fer la sol·licitud inicial.

# Diferencia entre "Authoritative DNS Server" i "Recursive DNS Resolver"

Els dos conceptes es refereixen a servidors (O grups de servidors) que estàn _"integrals"_ a la infraestructura DNS, però cadascun realitza un paper diferent. Es troba en diferents ubicacions dins del trajecte d'una consulta de DNS. Una manera d'entendre la diferència és que el _"Recursive Resolver"_ és a l'inici de la consulta DNS i el _"Athoritative Nameserver"_ (servidor de noms autoritatiu) al final. 

## Recursive DNS Resolver

El _"Recursive DNS Resolver"_ és el servidor que respon a una solicitud recursiva del client i dedica temps a detectar el __registre DNS__.

Ho fa mitjançant una __sèrie de sol·licituds__ fins que arriba al servidor de noms DNS autoritatiu _(Authoritative DNS Server)_ per al registre DNS sol·licitat (o es torna inactiu o torna un error si no es troba cap registre).

Amb altres paraules, el client que fa una petició per anar a _www.exemple.com_, el _"Recursive DNS Resolver"_ respon la petició i va preguntant a altres _servidors_ quina IP es la _www.exemple.com_ fins que arriba al servidor DNS autoriratiu _(Authoritative DNS Server)_ que conté la zona _www.exemple.com_ en els seus registres.

Afortunadament, els _"Recursive DNS Resolver"_  __no__ sempre han de fer diverses sol·licituds per inspeccionar els registres necessaris per respondre a un client. 

L' emmagatzematge en __memòria cau__ és un procés d'agilització de procés en la _busca_ del registre DNS que ajuda a __saltar-se__ les sol·licituds _necessàries_ servint abans el registre del recurs sol·licitat a la cerca DNS. 

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-1.png)


## Authoritative DNS Server

Un servidor DNS autoritatiu _(Authoritative DNS Server)_ és un servidor que allotja realment registres de recursos DNS i n'és responsable.

Aquest és el __servidor al final__ de la cadena de cerca de DNS que respondrà amb el registre DNS del recurs consultat, permetent finalment que el __navegador web__ faci la sol·licitud per arribar a __l'adreça IP__ necessària per accedir a un __lloc web__ o altres __recursos web__.

Un servidor DNS autoritatiu  _(Authoritative DNS Server)_ pot oferir sol·licituds a partir de les seves pròpies dades sense necessitat de consultar altres recursos _(recursive)_, ja que és la font final de veritat per a __certs registres DNS__.

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-2.png)

Convé indicar que en els casos de _consultes relatives_ a __subdominis__, com ara _foo.exemple.com_ o _blog.cloudflare.com_ , s'afegirà un servidor de noms addicional a la seqüència després del servidor de noms autoritatiu, que és el responsable d'emmagatzemar el registre __CNAME__ del subdomini. 

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-3.png)

Hi ha una diferencia fundamental entre molts serveis de DNS i el que ofereix Cloudfare per exemple. Hi han diferents _"Recursive DNS Resolver"_ com Google DNS, OpenDNS o proveïdors com Comcast mantenen instal·lacions de centre de dades de _"Recursive DNS Resolver"_.

Aquests _"Resolvers"_ permeten consultes rapides i senzilles mitjaçant clusters optimitzats de sistemes informàtics optimitzats per a DNS. Però son bàsicament diferents servidors de noms allotjats en servidors com per exemple Cloudflare.

# Procediment per fer un "lookup" de DNS

En la majoria de situacions, DNS fa referència a un __nom de domini__ que s'està traduint a l'adreça IP. 

Sovint, la informació de cerca de DNS s'emmagatzemarà a la memòria __cau local__ dins del servidor que realitzi la __consulta__ o en __remot__ a la _infraestructura_ de DNS. 

Generalment, hi ha 8 passos en una cerca DNS. 

Quan la informació de DNS s'emmagatzema en memòria cau, s'ometen els passos del procés de cerca DNS, cosa que ho fa més ràpid. L'exemple descriu els 8 passos necessaris quan no s'ha emmagatzemat res a la memòria cau. 

## Els 8 passos d'un "lookup" de DNS

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

# Què és un _"resolver"_ de DNS

El __resolver de DNS__ és la __primera parada__ de la recerca de DNS i s'encarrega de tractar amb el __client__ que va fer la __sol·licitud inicial__.

El solucionador inicia la seqüència de consultes que porten en última instància que l'URL es tradueixi a l'adreça IP necessària.

Nota: una cerca de DNS no emmagatzemada a la memòria cau inclourà consultes recursives i iteratives. 

És important diferencia entre una _consulta_ de _DNS recursiu_ i un _resolver_ de _DNS recursiu_.

La __consulta__ fa referència a la sol·licitud feta a un solucionador de DNS que requereix la resolució de la consulta.

Un __resolver__ de DNS recursiu és el servidor que accepta una __solució recursiva__ i procesa la resposta fent les __sol·licituds necessàries__.

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-recursive-query.png)



Review: 
https://www.cloudflare.com/es-es/learning/dns/what-is-dns/
https://www.cloudflare.com/learning/dns/what-is-dns/
https://www.cloudflare.com/learning/cdn/what-is-caching/
https://www.cloudflare.com/learning/dns/dns-records/dns-cname-record/
https://www.cloudflare.com/learning/dns/what-is-recursive-dns/
https://www.cloudflare.com/learning/dns/dns-records/
https://www.cloudflare.com/es-es/learning/dns/dns-records/
https://moodle.escoladeltreball.org/mod/assign/view.php?id=128321
https://moodle.escoladeltreball.org/mod/quiz/review.php?attempt=82234&cmid=132610
https://elpuig.xeill.net/Members/vcarceler/c1/didactica/apuntes/ud4/na8
https://aws.amazon.com/es/route53/what-is-dns/


# Que es un regsitre DNS?

# Tipus de registres DNS






# DNS per TLS vs DNS per HTTPS --> DNS Sergur

Link: https://www.cloudflare.com/learning/dns/dns-over-tls/

https://www.cloudflare.com/learning/dns/dns-over-tls/


# Glossari de termes de les configuracions de BIND9

`A` = stableix la correspondència d'un nom a una adreça IP.

`CNAME` = Estableix un àlies per a un nom.

`MX` = Especifica un servidor d'intercanvi de correu.

`NS` = Especifica un servidor de noms per al domini.

`PTR` = Estableix la correspondència d'una adreça IP a un nom.

`SOA` = Declara el servidor de noms que té més autoritat per a la zona.

# Glossari de termes de tipus de servidors de BIND9

`Recursive` = El servidor que realitza diverses consultes fins a obtenir una resposta completa.

`Secondary` = El servidor DNS que rep la base de dades de zona d’un altre servidor.

`Forward` = El servidor que reenvia les consultes a altres servidors.

`Authoritative` = El servidor que proporciona respostes sobre les zones que té configurades.

`Primary` = El servidor DNS que conté els fitxers de zona (la base de dades original).

# Glossari de termes seongs cada camp del SOA amb la seva funció (Bind9)

`time-to-retry` = Temps que un servidor secundari deixa passar abans de tornar a intentar una transferència de zona.

`serial-number` = Utilitzat pels servidors secundaris per a detectar els canvis a la base de dades.

`nxdomain-ttl` = El temps que els solucionadors han de guardar a la memòria cau una resposta de domini o host inexistent..

`time-to-expire` = Si passat aquest temps, un servidor secundari no aconsegueix realitzar la transferència de zona, ha de deixar de considerar-la vàlida.



# Exemples BIND9 (Configuracions)

## GLUE RECORD

```
# /etc/bind/named.conf.default-zones

zone "zone1.com" {
    type primary;
    file "/etc/bind/db.zone1.com";
};
```
```
# /etc/bind/db.zone1.com

@	SOA	ns	admin	1700010100 20m 3m 2w 1h
	NS	ns
	A	1.1.1.1

```

Què respondra el servidor a la següent consulta?

```bash
user@debian:~$ host zone1.com
```

No es pot carregar la Zona ja que falta el GLUE RECORD:

ns    A    2.2.2.2

La resposta correcta és: `SERVFAIL`

## $GENERATE

```
# /etc/bind/named.conf.default-zones

zone "server.tld" {
    type primary;
    file "/etc/bind/db.server.tld";
};

```

```
# /etc/bind/db.server.tld

@        SOA    ns    admin    1700010100 20m 3m 2w 1h
         NS     ns
ns       A      192.168.122.1
$GENERATE 1-4 database$ A 1.1.$.1

```


```
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

## Resolució inversa

```
# /etc/bind/named.conf.default-zones

zone "5.43.IN-ADDR.ARPA" {
	type primary;
	file "/etc/bind/db.5.43.IN-ADDR.ARPA";
};
```

```
# /etc/bind/db.5.43.IN-ADDR.ARPA

@		SOA	ns	admin	1700010100 20m 3m 2w 1h
		NS	ns
ns		A	192.168.122.1
78.202		PTR	host.tld.

```

Quina adreça IP es resoldrà inversament al nom host.tld? `43.5.202.78`


# Pràctica DNS, exemple feta a classe:



# Bibliografia
- https://www.cloudflare.com/learning/dns/dns-over-tls/
- https://www.cloudflare.com/es-es/learning/dns/what-is-dns/
- https://elpuig.xeill.net/Members/vcarceler/c1/didactica/apuntes/ud4/na8