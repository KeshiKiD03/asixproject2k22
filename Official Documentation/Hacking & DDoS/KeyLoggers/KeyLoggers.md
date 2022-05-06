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



# KeyLoggers

Un keylogger pot ser un programa de programari o un maquinari que utilitza un atacant per registrar les pulsacions de tecles al teclat d'un usuari. Amb un Keylogger, un atacant pot conèixer remotament les contrasenyes, números de targetes de crèdit / dèbit, missatges, correus electrònics i tot el que escriviu.

És més probable que els registradors de pulsacions de tecles estiguin basats en programari que en maquinari, ja que aquests últims requeririen accés físic al dispositiu.

Els registradors de pulsacions basats en programari generalment infecten el sistema en forma d'un codi maliciós que un usuari podria haver descarregat fent clic en un enllaç maliciós, ja sigui en línia o enviant-lo per correu electrònic.
Un programari de captura de tecles sexecuta en segon pla sense notificar a lusuari i prendrà nota de cada cop de teclat i després lalimentarà a un servidor en línia al qual pot accedir latacant.

Revisar tot l'historial de registres de tecles pot brindar a qualsevol una idea dels llocs web que va visitar i la informació que va ingressar-hi, cosa que li dóna una manera fàcil d'accedir a la targeta de crèdit o credencials de banca per Internet. Els atacs de teclat són utilitzats pels atacants amb intenció maliciosa de monitoritzar les pulsacions de tecles, i és important protegir-se contra ells, perquè no siguem vulnerable a perdre informació d'identificació personal, incloses les credencials personals o corporatives.


<div style="align: center; width: 100%">
    <img src="https://hakin9.org/wp-content/uploads/2020/04/1.version_1.3.png" />
</div>


# Com prevenir atacs de KeyLogger?

Si bé hi ha diverses eïnes disponibles per trobar i fer front als keyloggers de programari, no hi ha un programari de seguretat per identificar un keylogger hardware.

Atès que els registradors de tecles són bàsicament malware, n'hi ha prou amb un programa antivirus que protegeixi el PC en temps real, però si desitgem protecció addicional, també es pot utilitzar programes com ara Zemana AntiLogger i SpyShelter Stop-Logger.
La versió gratuïta de Zemana només proporciona xifratge per a les pulsacions de tecles, la qual cosa significa que, encara que l'atacant podrà registrar les pulsacions de tecles, se li presentaran en un format codificat i il·legible.
La versió gratuïta de SpyShelter no només proporciona xifrat, sinó que també protegeix el PC contra captures de pantalla o porta-retalls.

Si no volem utilitzar un registrador de tecles, sempre es recomana utilitzar el teclat en línia disponible als llocs web bancaris, per exemple, que no deixa rastres de registre de tecles.
Si sospitem que les pulsacions de tecles estan sent registrades, i cap d'aquests programaris no pot identificar-lo o protegir-lo, llavors probablement algú va ingressar un keylogger hardware al PC.
Aquests registradors de tecles maquinari generalment vénen en forma de connectors USB. Un dels extrems està connectat al teclat i un altre a l'USB de PC, i encara que tot funciona sense problemes, el maquinari intercepta i transmet les pulsacions de les tecles a l'atacant, és revisar el nostre PC de tant en tant.

# Practica: Muntar un atac Keylogger a Windows
Dins d'una maquina Kali Linux (preferit entre el hackers); hi ha un munt d'eïnes que podem utilitzar per munstar un keylogger. En aquest exemple practic que hem trobat amb un Windows com Client Victima d'aquest atac.

Malgrat que Kali te moltes eïnes tant de muntatge o fabricacion de programes virus, no te l'eïna sAINT. Llavors també tenim que muntar l'eïna sAINT d'un repositori que hi ha GitHub.

Primer instal·len les depencies necessaries per el muntatge del keylogger:
- Instal·lar jdk
```
sudo apt update
sudo apt install maven default-jdk default-jre -y
```

- Instal·lar programes quen ens ajudaran a fabricar el ``.exe``
```
sudo apt install zlib1g-dev libncurses5-dev lib32z1 libncurses5 -y
```

> En cas de que no et dongui error al fer ``apt update`` o ``apt install``, segur es perque no tens activat el servei DNS. Per solucionar aquest problema nomes tens que reiniciar-ho i ja.
```
sudo systemct restart systemd-resolved.service

sudo systemct status systemd-resolved.service
```

Muntar el repositori git de l'eïna sAINT
```
git clone https://github.com/tiagorlamper/sAINT.git
```

Modifiquen els permissos per poder executar el bash configure.sh que 
```
cd sAINT/
chmod +x configure.sh
./configure.sh
```

Obrim el jar per poder començar a configurar el nostre keylogger:
- En pregunte a quina adreça mail volem que ens envii el passwords. Nosaltres hem creat una de proba per algun casos de practica.
  - correodp22@gmail.com
  - Cprueba2022

- Habil·litem algunes opcions que ens pregunten __com si volem que__ ... :
    - fagi captures de pantalla
    - envii un fitxer text
    - sigui persistent
    - ...

- Nombre de caracters per enviar al correo: 500

- Si volem generar un fitxer ``.exe``

Un cop acabat en mostrara un link als ajuste de gmail, on hem de habilita l'unica opcio que hi ha. Primer hem de entrar amb la nostra compte.

