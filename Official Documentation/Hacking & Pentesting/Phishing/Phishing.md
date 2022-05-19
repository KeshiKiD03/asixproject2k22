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



# Atac Man in The Middle

Un atac MITM passa quan una comunicació entre dos sistemes és interceptada per una entitat externa. 

Això pot passar en qualsevol forma de comunicació en línia, com ara correu electrònic, xarxes socials, navegació web, etc. 

No només estan tractant descoltar les nostres converses privades, sinó que també poden dirigir tota la informació dins dels dispositius.

Treient tots els detalls tècnics, el concepte d'un atac MITM es pot descriure en un escenari simple. Si imaginem que tornem als temps antics quan el correu de cargol abundava. 

Jerry escriu una carta a Jackie en què li expressa el seu amor després d'anys d'amagar els seus sentiments. Ell envia la carta a l'oficina de correus i és recollit per un carter ficat. 

L'obre i, per pur gust, decideix reescriure la carta abans de lliurar el correu a Jackie. Això pot fer que Jackie odiï Jerry per la resta de la seva vida.

Un exemple més modern seria un hacker entre nosaltres (i el nostre navegador) i el lloc web que esteu visitant per interceptar i capturar qualsevol informació que enviem al lloc, com credencials d'inici de sessió o informació financera.

<div style="align: center; width: 100%">
    <img src="https://wallstreetinv.com/wp-content/uploads/2021/03/how-man-in-middle-works-min.png" />
</div>


# Com prevenir atacs Man in The Middle?

Els atacs de MITM realment poden __"incomodar"__ simplement en escoltar el seu concepte bàsic, però això no vol dir que siguin impossibles d'evitar. 

La tecnologia __PKI__ us pot ajudar a protegir-vos d'alguns dels tipus d'atacs que discutim anteriorment.

## 1. S/MIME

Extensions de correu d'Internet segures/multipropòsit, o S/MIME abreuja, encripta els correus electrònics en repòs o en trànsit, assegurant que només els destinataris puguin llegir-los i sense deixar marge perquè els pirates informàtics s'introdueixin i alterin els nostres missatges. 

A més, S/MIME permet signar digitalment els correu electrònic amb un Certificat digital únic per a cada persona. 

Això vincula la identitat virtual al nostre correu electrònic i brinda als destinataris la garantia que el correu electrònic que van rebre realment prové de nosaltres (a diferència d'un hacker que accedeix al nostre servidor de correu). 

Si bé els pirates informàtics poguessin tenir accés als servidors de correu de les empreses per signar digitalment els missatges, també necessitarien accedir a les claus privades dels empleats, que generalment s'emmagatzemen de manera segura en un altre lloc. 

Estandarditzar la signatura digital de missatges i educar els destinataris perquè només confiï en els missatges de l'empresa que s'han signat pot ajudar a diferenciar els correus electrònics legítims dels falsificats.

<div style="align: center; width: 100%">
    <img src="https://www.zohowebstatic.com/sites/default/files/u1590/050.5x-100.jpg" />
</div>

## 2. Certificats d'autenticació / OpenSSL

Els pirates informàtics mai no desapareixeran, però una cosa que podem fer és que sigui pràcticament impossible penetrar en els sistemes (per exemple, xarxes Wi-Fi, sistemes de correu electrònic, xarxes internes) mitjançant la implementació __d'autenticació basada__ en __certificats__ per a totes les màquines i dispositius dels empleats. 

Això vol dir que només els punts finals amb certificats configurats correctament poden accedir als seus sistemes i xarxes. 

Els certificats són fàcils d'usar (no cal maquinari addicional per administrar o es necessita molta capacitació de l'usuari) i les implementacions es poden automatitzar per simplificar les coses i fer que els hackers tinguin més difícil un atac.