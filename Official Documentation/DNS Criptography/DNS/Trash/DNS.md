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

# 4 servidors DNS implicats en la càrrega d'una pàgina web:

* __Recurs DNS__ : el recurs es pot considerar com un bibliotecari a qui se li demana que vagi a buscar un llibre determinat en algun lloc d'una biblioteca. El recurs DNS és un servidor dissenyat per rebre consultes de les màquines client mitjançant aplicacions com ara navegadors web. Normalment, el recurs és responsable de fer peticions addicionals per satisfer la consulta DNS del client.

* __Noms__ : el servidor arrel és el primer pas per traduir (resolució) noms d'amfitrió llegibles per humans a adreces IP. Es pot pensar com un índex en una biblioteca que apunta a diferents bastidors de llibres; normalment serveix com a referència a altres ubicacions més específiques.

* __Noms TLD__ : el servidor de domini de primer nivell ( TLD ) es pot considerar com un bastidor específic de llibres d'una biblioteca. Aquest servidor de noms és el següent pas en la cerca d'una adreça IP específica i allotja l'última part d'un nom d'amfitrió (a example.com, el servidor TLD és "com").

* __Servidor de noms autoritzat__ : aquest servidor de noms final es pot considerar com un diccionari en un bastidor de llibres, en el qual es pot traduir un nom específic a la seva definició. El servidor de noms autoritzat és l'última parada de la consulta del servidor de noms. Si el servidor de noms autoritzat té accés al registre sol·licitat, retornarà l'adreça IP del nom d'amfitrió sol·licitat al recurs DNS (el bibliotecari) que va fer la sol·licitud inicial.

# DNS per TLS vs DNS per HTTPS --> DNS Sergur

Link: https://www.cloudflare.com/learning/dns/dns-over-tls/

https://www.cloudflare.com/learning/dns/dns-over-tls/