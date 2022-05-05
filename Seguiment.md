# Seguiment
Aquest arxiu es documentarà els passos dins del projecte que tenim al cap.
---
Document els nostres moviments a petició dels professors que van sol·licitar que ens documentéssim a nosaltres mateixos fent el projecte final.
---

---

---

## 19/04/2022

( **Cristian**= 08:45-13:55 (2h) )

Busca informació sobre el sistema de detecció d'intrusió, Wazuh i les seves característiques a diversos llocs per Internet. Mirant diversos exemples de presentacions de projectes relacionats amb el nostre, per agafar idees dels nostres objectius.

---

---
## 20/04/2022

( **Cristian & Aaron** = 19:45-21:50 (3h) )

Planificant els seus objectius de treball pel projecte, organitzant les ideés i començant a les preparacions. I fent un esborrany d'un esquema improvisat sobre la nostra idea.

Comencen per muntar Docker: un implementat amb WireGuard VPN i l'altre amb DNS. A manera de prova, testegem amb el Packet Tracer l'esquema improvisat.

Continuant ampliant les nostres idees, ajuntant WireGuard amb Wazuh (o Radius) i iptables. Al DNS criptogràfic l'hi afegirem Open SSL amb un parell de claus privades. Hem decidit afegir un Docker més: aquest tindrà dins ...

Passen omplir la introducció del nostre projecte, buscant informació sobre la ciberseguretat. Ficant múltiples definicions i imatges.

---

---
## 25/04/2022

( **Aaron**=8:55-10:45 (2h) )

Organitza els documents/arxius/directoris dins del git del nostre projecte (asixprojecte2k22).

Decideixo a començar a indagar sobre el DNS Criptography, entendre millor el que és, com funciona, quines capacitats ofereix el DNS.

Posa en pràctica un DNS Criptography a una màquina virtual (VirtualBox).

---
( **Cristian**=8:00-13:10 (3h) )

Continua buscant dades sobre el Wazuh i sobre les seves capacitats que ofereix com a sistema de detecció d'intrusions.

Busca una pràctica amb què intenta posar en marxa per aprendre més sobre Wazuh.

---
( **Cristian & Aaron** = 16:00-19:45 (3h) )

Segueixen omplin els Objetius, el Seguiment i despres segueixen buscant informacion sobre DNS Criptography i començant una practica de Wazuh.

---

---
## 26/04/2022

( **Cristian & Aaron** = 12:10 - 14:00 )

Monten un tant un Linux Lite i un Ubuntu Server dins de VirtualBox.

Com Aaron i en Cristian tenen Windows a casa han optat per una full virtualization d'un o varies Ubuntu Servers a VirtualBox. Per aquest motiu el format del fitxer vdi (virtualbox disk) és portable i podem avançar a casa. L'accés i configuració es farà per ssh amb un parell de claus pub/priv.

La instal·lació es farà des de zero amb un disk iso de ubuntu server 20.04 i allà instal·larem els serveis quan ens hagi funcionat.

<p><a href="https://github.com/KeshiKiD03/asixproject2k22/blob/main/UbuntuServer/README.md">Llegir aqui.</a></p>

---

---
## 27/04/2022

( **Cristian & Aaron** = 9:00 - 12:00)
---

Research d'esquemes i tipus d'atacs per al projecte. Ordenació del GIT del projecte. Instal·lació i pre configuració d'Ubuntu Server a Virtual Box. 
Tenir una idea definitiva i separar diferents pràctiques per a la posterior assemblatge.

---
## 28/04/2022 

( **Aaron** = 18:00 - 20:00)
---

Configuració de les màquines virtuals Ubuntu Server i clients Ubuntu i Debian 10 a VirtualBox.

Bases de proves de diferents atacs informàtics com ARP Spoofing o DNS Poisoning. També KeyLoggers i atacs d'Enginyeria Social.

Muntatge sobre Kali Linux (Atacant) i un servidor d'Ubuntu Server 20.04 i un client Debian Minimal.

---
## 02/05/2022 

( **Aaron & Cristian** = 09:00 - 14:00 // 15:00 - 19:00)
---

Research d'informació dels diferents atacs informàtics. I bases de proves en les nostres màquines.

Proves a Kali Linux de les diferents atacs informàtics.

Proves de Man in The Middle Attack, DNS Spoofing, atac d'Enginyeria Social, ARP Spoofing.

---
## 03/05/2022

( **Aaron & Cristian** = 09:00 - 14:00 )
---
Proves finalitzades: atac d'Enginyeria Social amb imatge QR
Research d'informació dels diferents atacs informàtics. I bases de proves en les nostres màquines.

Continuació de les proves de Man in The Middle Attack, ARP Spoofing i Keylogger
Aaron fa proves de DNS Cache Poisoning amb Kali Linux i Cristian fa un esquema del projecte mentres prova un KeyLogger a Windows desde Kali Linux. 

Aaron fa proves de DNS Cache Poisoning.
Cristian reserca sobre mes prove practica de keyloggers.

---
## 04/05/2022

( **Aaron & Cristian** = 08:00 - 12:00 )
---

Cristian estaba fent una última prova de Windows 10 amb el KeyLogger. Pero per raons que desconèixem i per part de Windows no ha funcionat. Pero ho ha documentat tot correctament a la carpeta de KeyLogger.

Aaron, estaba revisant i documentat DNS Cache Poisoning / DNS Spoofing i ARP Spoofing també fent proves amb el Kali Linux. A l'hora del Gerard, va sortir correctament el Toolkit que vam provar per fer l'atac per "robar" les credencials de una víctima host.

La victima host posa www.twitter.com i es redirigeix a una web falsa que hem clonejat anteriorment, igual que twitter. Un cop posa l'usuari i password, tenim un programa anomenat Ettercap que esnifarà el resultat d'aquest atac.

Proves finalitzades: atac d'Enginyeria Social amb imatge QR
Research d'informació dels diferents atacs informàtics. I bases de proves en les nostres màquines. DNS Spoofing + ARP Spoofing --> Accés a Twitter.

Després Cristian va estar buscant informació de DNSSEC.

Copies de seguretat de les màquines VDI.
---

## 05/05/2022

( **Aaron & Cristian** = 09:00 - 12:00 )
---
Proves finalitzades: atac d'Enginyeria Social amb imatge QR
Research d'informació dels diferents atacs informàtics. I bases de proves en les nostres màquines.

Continuació de les proves de Man in The Middle Attack, ARP Spoofing i Keylogger
Aaron fa proves de DNS Cache Poisoning amb Kali Linux i Cristian fa un esquema del projecte mentres prova un KeyLogger a Windows desde Kali Linux. 

Aaron fa proves de DNS Cache Poisoning.
Cristian reserca sobre mes prove practica de keyloggers.
---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
---

---
## 

()
