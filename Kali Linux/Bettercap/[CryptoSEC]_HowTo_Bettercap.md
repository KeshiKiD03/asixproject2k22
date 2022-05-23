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

+ **Bettercap**: [--> readME <--](#bettercap)

+ **Carecterístiques de Bettercap**: [--> readME <--](#carecterístiques-de-bettercap)

  + **Eavesdropping (Escoltar atentament)**: [--> readME <--](#eavesdropping-escoltar-atentament)

  + **Falsificació de direccions IP (Address Spoofing o DNS Cache Poisoning + ARP Spoof)**: [--> readME <--](#falsificació-de-direccions-ip-address-spoofing-o-dns-cache-poisoning--arp-spoof)

  + **Atac de denegació de servei (DoS)**: [--> readME <--](#atac-de-denegació-de-servei-dos)

  + **Atac Man in the Middle**: [--> readME <--](#atac-man-in-the-middle)

+ **Exemple pràctic d'Ettercap**: [--> readME <--](#exemple-pràctic-dettercap)

  + **Exemple utilitzant __setoolkit__ a Kali Linux i ETTERCAP**: [--> readME <--](#exemple-1-utilitzant-setoolkit-a-kali-linux-i-ettercap)

  + **Explicació resumida**: [--> readME <--](#explicació-resumida)

+ **Bibliografia**: [--> readME <--](#bibliografia)

  

<br>
<br>
<br>


# __Bettercap__

__BetterCAP__ és una eina potent, flexible i portàtil creada per realitzar diversos tipus datacs MITM contra una xarxa, manipular HTTP, HTTPS i trànsit TCP en temps real, buscar credencials i molt més. Analitzador de xarxa via web; inclou BlueTooth, Wifi , Detecta atacs MITM , Spoof, network protocol fuzzer

![](https://2.bp.blogspot.com/-s4xzTlSLDmQ/V1fltOXR63I/AAAAAAAAh7I/0zGSCtkq_iopM3DTxSI4zN-vfFj-H50WACLcB/s640/better0.jpg)
> Img src: 2.bp.blogspot.com

Bettercap està escrit en codi Ruby i s'aprofita de la flexibilitat i el potencial d'aquest llenguatge. 

La instal·lació de Bettercap és realment senzilla. Té dependències, però executant gem install bettercap el procés es duu a terme completament. En cas que necessiteu alguna llibreria es pot utilitzar apt-get per completar el procés. Un cop instal·lat, disposarem d'un binari, el qual podrem executar.

# __Carecterístiques de Bettercap__

Bettercap és una eina molt potent que és compatible amb les principals distribucions basades en Linux, algunes de les seves característiques principals són les següents:

+ Escàner de xarxes WiFi , permet fer atacs de desautotenticació, també permet realitzar atacs sense clients a associacions PMKID, permet capturar handshakes de clients que usen protocol WPA i WPA2.

+ Escàner de dispositius BLE ( Bluetooth Low Energia) per llegir i escriure informació.

+ Escàner de dispositius sense fil que usin la banda de 2.4GHz, com els ratolins sense fil, també permet realitzar atacs MouseJacking amb injecció de dades.

+ Permet fer atacs passius i actius a xarxes IP

+ Permet fer atacs MitM basats en ARP, DNS i també DHCPv6, amb l'objectiu de capturar tota la informació.

+ Permet crear un servidor intermediari HTTP/HTTPS per aixecar el trànsit segur HTTPS, i facilita enormement l'ús de scripts.

+ Sniffer de xarxa molt potent per a recol·lecció de credencials dusuari.

+ Escàner de ports molt ràpid

+ Té una potent API REST per fer atacs fàcilment.

+ Incorpora una interfície gràfica d'usuari per facilitar els atacs, encara que el terminal de comandaments és molt potent.

+ Tenim una gran quantitat de mòduls de diferents categories per ampliar funcionalitats

# __Els atacs que es poden fer a Bettercap__

## __Eavesdropping (Escoltar atentament)__

Segur que et resulta familiar; és una cosa molt normal a la vida. Imagina't que vols trobar alguna informació sobre dos amics i la seva relació. Una manera molt senzilla és escoltar en secret les vostres paraules. Aquest tipus d'atac també es produeix a les comunicacions informàtiques, però es coneix com a __sniffing__.

![](https://www.consultantsreview.com/newstransfer/upload/r8so8rsz_data_sniffing.jpg)
> Img src: www.consultantsreview.com

Quan xateges amb el teu amic en mode “text clar”, és possible olorar el teu trànsit. Pot semblar antic, però pots estar segur que és un dels problemes de seguretat més grans en una xarxa que els administradors de xarxa no tenen en compte. 

## __Falsificació de direccions IP (Address Spoofing o DNS Cache Poisoning + ARP Spoof)__

Sé que saps què és una adreça IP (Protocol d'Internet). Com saps, per comunicar-se amb altres ordinadors, cada ordinador necessita una IP. En aquest atac, un atacant vol fer una adreça de destinació falsa i enganyar-te sobre això. Per exemple, el teu objectiu és mibanco.com i un atacant reenvia la teva petició a un fals mibanco.com. L'objectiu és suplantar el host víctima.
![](http://blockbit.com/wp-content/uploads/2019/11/2-1-1024x576.png)

> Img src: blockbit.com

## __Atac de denegació de servei (DoS)__

En aquest tipus d'atac, un atacant intenta fer que una màquina o un recurs de xarxa no estigui disponible per als usuaris. 

L'objectiu és interrompre o suspendre els serveis que es connecten a Internet. Aquest atac es dirigeix ​​a gateways i servidors web, com els dels bancs, i realitza alguns dels sabotatges següents.

+ Ús de recursos computacionals, com lample de banda, la memòria, lespai en disc o fins i tot la CPU. Com suposo, la teva ment podria divagar cap al codi maliciós. 

+ Destrueix la informació i les taules d'encaminament.

+ Interrompre els components físics de la xarxa, com els routers, els switches i els firewalls.

+ Envia dades no vàlides a aplicacions o serveis de xarxa. Podeu acabar anormalment els serveis.

+ Enviar molts paquets a les destinacions per inundar-los i finalment col·lapsar i apagar.

+ Bloquejar les destinacions i que els usuaris autoritzats no hi puguin accedir.

Al DDoS, un atacant pot utilitzar la tècnica del Zombie per capturar molts ordinadors i enviar moltes peticions a la víctima a través d'ells o de bots. Zombie vol dir que un ordinador connectat a Internet ha estat compromès per un hacker.


![](https://nextvision.com/wp-content/uploads/2018/05/Captura-de-pantalla-2018-05-29-a-las-3.52.42-p.m.-2.png)
> Img src: nextvision.com

## __Atac Man in the Middle__

L'atac man-in-the-middle (abreujat MITM, MitM, MIM, MiM, MITMA) és una forma d'atac actiu en què un atacant estableix una connexió entre les víctimes i envia missatges entre elles. 

Així, les víctimes creuen que estan parlant directament entre elles, però en realitat un atacant ho controla. 

En aquest escenari, un atacant ha tingut èxit quan es pot fer passar per un usuari. 

D'altra banda, hi ha una tercera persona entre tu i la persona amb qui et comuniques i pot controlar i vigilar el teu trànsit. 


![](https://cisomag.eccouncil.org/wp-content/uploads/2021/09/MicrosoftTeams-image-28.png)
> __Img Source__: *https://cisomag.eccouncil.org/wp-content/uploads/2021/09/MicrosoftTeams-image-28.png*
<br>

Afortunadament, alguns protocols poden impedir-ho, com el SSL. 

Un hacker pot utilitzar el següent programari per implementar aquest atac:

* Caín i Abel

* Subterfugi

* __Ettercap__: És el que utilitzarem
 
* AirJack

* __SSLStrip__: L'utilitzarem per trencar el SSL.

* __SSLSniff__

# __Exemple pràctic de BETTERCAP__

# __ARP Poisoning / Spoofing en acció__

## __ARP Poisoning / Spoofing (2 parts) (BETTERCAP)__: 

Envenenament de les taules ARP de les víctimes implicades i reenviament de paquets al hacker. Amb el Wireshark - ARP - Nmap, veurem com fa el duplicat de MAC.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/ARPSPOOF.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/ARP-SPOOF.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

<br>
<br>
<br>

### __MITM - Eavesdropping (Sniffing) (BETTERCAP)__ 

Amb l'ARP Poisoning d'abans activarem un _sniffer_ i estarem escoltant la màquina afectada i veient les pàgines on visita. Podem captar credencials de pàgines HTTP.

1. Obrir el Bettercap a Kali Linux.

2. Tenim una interfície senzilleta per començar a fer l'atac Man in the Middle. Si fem ``help` podrem veure tots els mòduls disponibles.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/HELP-BETTERCAP.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

<br>
<br>
<br>

2. Amb la comanda següent `net.show` ens mostrarà la IP - MAC - Nom local. Seguidament fem un `net.probe on` per observar de forma interactiva i per fer-ho més bonic, amb un `ticker on`

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BET0.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCAP-arspoofing.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/Bettercaps.png?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCAP-TICKER.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

<br>
<br>
<br>

3. A partir d'aquest moment, quan ja hem escollit la IP de la víctima. Ja podem començar amb el ARP.SPOOF

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BET3.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BET1.PNG?raw=true)
> Img src: @Aaron & Cristian's Github
![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BET2.PNG?raw=true)
> Img src: @Aaron & Cristian's Github


![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/MAN-IN-THE-MIDDLE-ATTACK.PNG?raw=true)


<br>
<br>
<br>
<br>
  
### __DNS Poisoning / Spoofing) (BETTERCAP)__ 

Amb l'ARP Spoof d'abans activarem un _dnsspoof_ i injectarem un registre de DNS fals on ens redirigirà a la nostra màquina on hi tindrem una _fake page: m0odle.escoladeltreball.org_ (__Moodle EDT__) i l'enviarem per correu utilitzant __SET__ dient que "_URGENT! L'Eduard ha posat les notes de M06, entra urgentment i mira la nota que tens!!!_" llavors l'usuari entrarà i no se n'adonarà i li robarem les credencials mostrades al __SET__.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/arps.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/arps0.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/arps1.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/arps2.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/arps3.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

<br>
<br>

### A partir d'aquí generem el __mail phishing__ desde un compte de gmail robat a __CryptoSEC__.

1. Seleccionem la opció 5: __Mass Mailer Attack__.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/PHISHING0.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

2. Seleccionem la opció 5: __Mass Mailer Attack__. Omplim les opcions: `1`, `email destination`, `1`, `our email address`, `our email password`, `priority`, `attach file`, `fake email subject`, `body of messeage with END`

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/phish0.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/phish1.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/phish2.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/phish3.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/PHISHING4.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/PHISHING2.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/PHISHING3.PNG?raw=true)
> Img src: @Aaron & Cristian's Github




<br>
<br>
<br>
<br>
<br>




## __Spoofing CryptoSEC.NET with DOS Attack (BETTERCAP) (SlowHTTP)__

Ídem que l'anterior però els targets son el __SOA__ i el __Forwarding__, els clients interns de CryptoSEC quan hagin d'anar a la pàgina web __cryptosec.net__, entraràn a __cryptos3c.net__ ja que el hacker ha avisat que hi hà una urgència a la pàgina principal i han d'entrar a la pàgina web dada pel hacker i les seves credencials seràn __robades sense que se'n adoni__!

1. El hacker activar el ARP Spoof amb targets del SOA i el Forwarder.

2. El hacker ha realitzat un DOS per tumbar l'apache2 (SOA): `hping3 --randsource -p80 -S --flood 10.200.243.164`

Ara explicaré què significa cada part de l'ordre:

- __p 80__ és el port que triem atacar

- S activa el flag Syn

– flood indica a hping que enviï els paquets a la màxima velocitat possible

- ip_victima és la __ip__ o __domini__ a atacar

Si volem que la nostra ip no sigui visible podem afegir-li l'opció –ai la ip que falsejarem o bé utilitzar –rand-source amb què es generen adreces d'origen ip a l'atzar:

``hping3 --randsource -p80 -S --flood 10.200.243.164``

o també podem utilitzar: `Slowhttptest`, nosaltres utilitzarem __slowhttptest__.

> _slowhttptest - Denial Of Service attacks simulator_

`slowhttptest -c 40000 -H -i 30 -r 500 -l 600 -u http://cryptosec.net`

``-c`` _number of connections
Specifies the target number of connections to establish during the test._

``-H'`` _Starts slowhttptest in SlowLoris mode, sending unfinished HTTP requests._

``-i`` _seconds
Specifies the interval between follow up data for slowrois and Slow POST tests._

``-r`` _connections per second
Specifies the connection rate._

``-l`` _seconds
Specifies test duration in seconds._

``-u`` _URL
Specifies the URL._

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/DOS-CRYPTOSEC.NET.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/PAGE-DOWN.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

2. El hacker activa la pàgina del __cryptos3c.net__ (fake) amb el SET (__Social Engineering Tool__).

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC0.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC1.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC2.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC3.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

3. El hacker emet un comunicat general a l'empresa dient que s'ha caigut temporalment la pàgina principal i que han d'entrar per la pàgina següent `cryptos3c.net`


4. Des d'un client de la xarxa interna de CryptoSEC 192.168.3.100 (_Linux Lite Client_) es vol conectar a la pàgina web de cryptosec.net, però han emès un comunicat que els redirecciona a __cryptos3c.net__ ja que la pàgina principal ha sigut hackejada amb DOS (denegació de servei).

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC4.PNG?raw=true)
> Img src: @Aaron & Cristian's Github

5. Les credencials del client han __sigut robades__!

<br>
<br>
<br>

## --> [ [Tornar a Ciberseguretat](https://github.com/KeshiKiD03/asixproject2k22/blob/main/README.md) ] <--

# __Bibliografia__: 

- https://www.redeszone.net/tutoriales/seguridad/descifrar-trafico-https-bettercap-linux/
- https://www.elladodelmal.com/2018/10/bettercap-2-la-evolucion-de-la-navaja.html
- https://repositorioinstitucional.ceu.es/bitstream/10637/10460/1/Descubre_VictorLopez%26TeodoroRojo_UnivSPCEU_2019.pdf
- https://www.redeszone.net/2015/08/08/analiza-todo-el-trafico-de-red-con-bettercap/
- https://ebuah.uah.es/dspace/bitstream/handle/10017/44807/TFM_Guillen_Santana_2020.pdf?sequence=1&isAllowed=y