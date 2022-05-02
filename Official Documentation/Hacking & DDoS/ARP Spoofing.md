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



# ARP Spoofing

ARP Poison Routing (APR), és una tècnica utilitzada per atacar una xarxa cablejada o sense fil d'Ethernet. 

ARP Spoofing pot permetre que un atacant detecti frameworks de dades en una xarxa d'àrea local (LAN),  modifiqui el trànsit o aturi el trànsit del tot. 

L'atac només es pot fer servir en xarxes que realment usen ARP i no en un altre mètode de resolució d'adreces.

La detecció la fem mitjançant ARP invers (RARP) que és un protocol utilitzat per consultar l'adreça IP associada amb una adreça MAC donada. Si es retorna més d'una adreça IP, el clonatge MAC és present.

## Tipus d'atacs ARP Spoofing:

### 1. Atacs d'inundació MAC:

En un atac típic d'inundació MAC, un switch s'inunda amb paquets, cadascun amb diferents adreces MAC d'origen. La intenció és consumir la memòria limitada reservada al switch per emmagatzemar la taula de traducció de port a físic de MAC.

El resultat d'aquest atac fa que el switch ingressi a un estat anomenat mode d'obertura fallida, en el qual tots els paquets entrants s'emeten a tots els ports (com amb un concentrador), en lloc de simplement cap avall del port correcte segons la operació normal. 

Un usuari malintencionat podria utilitzar un analitzador de paquets (com Wireshark) executant-se de manera promiscu per capturar dades confidencials d'altres ordinadors (com contrasenyes no encriptades, correu electrònic i converses de missatgeria instantània), que no serien accessibles si l'interruptor funcionés amb normalitat.

<div style="align: center; width: 100%">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210403123448/arpspoof2-660x426.png" />
</div>


## 2. Envenenament de la caché DNS:

Aquesta és una situació creada o no creada intencionalment que proporciona dades a un servidor de noms d'emmagatzematge en memòria cau que no es va originar en fonts autoritzades del Sistema de noms de domini (DNS). 

Això pot passar a través del disseny incorrecte del programari, la configuració dolenta dels servidors de noms i els escenaris dissenyats maliciosament que exploten l'arquitectura radicionalment oberta del sistema DNS. 

Quan un servidor DNS ha rebut dades no autèntiques i les emmagatzema en memòria cau per augmentar el rendiment en el futur, es considera enverinat, proporcionant les dades no autèntiques als clients del servidor.

<div style="align: center; width: 100%">
    <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/DNS-spoofing.jpg" />
</div>

## IP Spoofing:

La suplantació d'IP fa referència a la creació de paquets de Protocol d'Internet (IP) amb un forjat d'adreça IP d'origen, anomenada suplantació d'identitat, amb el propòsit d'ocultar la identitat del remitent o fer-se passar per un altre sistema informàtic.


# Com prevenir atacs ARP Spoofing?

+ Aplicació de filtratge d'encaminador

+ Bloquejar adreces IP sense utilitzar

+ Permetre l'accés a la xarxa només al trànsit desitjat

+ Deshabilitar serveis de xarxa innecessaris

+ Actualització d'antivirus regularment

+ Tenir una molt bona política de contrasenyes

+ Limitar la quantitat d'amplada de banda de la xarxa

+ Ús de la xarxa de filtratge d'accés