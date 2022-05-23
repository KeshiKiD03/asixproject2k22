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

+ **Setoolkit**: [--> readME <--](#setoolkit)

    + **Com funciona SET?**: [--> readME <--](#com-funciona-set)

+ **Exemple pràctic amb Bettercap i Setoolkit (fake webpage) & Credential Harvester**: [--> readME <--](#exemple-pràctic-amb-bettercap-i-setoolkit-fake-webpage--credential-harvester)

    + **Cleanest DNS Spoof with Bettercap & Setoolkit**: [--> readME <--](#cleanest-dns-spoof-with-bettercap--setoolkit)

        + **(ARP Spoof + DNS Spoof) amb Setoolkit (Mail Phishing + Site Cloner + Credential Harvester)**: [--> readME <--](#arp-spoof--dns-spoof-amb-setoolkit-mail-phishing--site-cloner--credential-harvester)

+ **Bibliografia**: [--> readME <--](#bibliografia)

    

<br>
<br>
<br>

# __Setoolkit__

__Social-Engineer Toolki (SET)__ és un framework de codi obert per fer __pentesting__ de __sistemes i xarxes__, enfocat específicament a __atacs d'enginyeria social__ per aconseguir el seu objectiu. SET té una sèrie d'eines per fer atacs personalitzats que ens permetran fer un atac de manera ràpida i efectiva. Aquesta eina ha estat desenvolupada per la signatura de seguretat TrustedSec i està disponible de manera lliure per a tots nosaltres.

__L'enginyeria social__ és una de les portes d'accés més utilitzades pels __delinqüents__ per __robar__ la teva __informació personal__ o __infiltrar-se__ en una empresa. 

Per aquest motiu cada pentest que fem a una organització, sempre s'han d'incloure tècniques __d'enginyeria social__, per veure que l'empresa és tan vulnerable a aquest tipus d'atacs i prendre les mesures corresponents.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/BETTERCA-CRYPTOSEC0.PNG?raw=true)

> Img src: @Aaron & Cristian's Github (Exemple de Setoolkit)

## __Com funciona SET?__

Amb SET podem efectuar atacs com:

+ __Site cloning:__ Clona qualsevol pàgina web.

+ __Credential harvest:__ Roba les credencials HTTP.

+ __Mail Attack:__ Atac del tipus DOS contra servidors de correu.

+ __DOS Attack:__ H3ping, slowhttp entre altres atacs de DOS.

+ __Metasploits:__ Proporciona informació sobre vulnerabilitats de seguretat.

... _entre altres_.


# __Exemple pràctic amb Bettercap i Setoolkit (fake webpage) & Credential Harvester__

## __Cleanest DNS Spoof with Bettercap & Setoolkit__

### __(ARP Spoof + DNS Spoof) amb Setoolkit (Mail Phishing + Site Cloner + Credential Harvester)__ 

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




## __Attacking SOA and Forward DNS Servers with DOS (SlowHTTP - Attack cryptosec.net web Apache2)__

Ídem que l'anterior però els targets son el __SOA__ i el __Forwarding__, els clients interns de CryptoSEC quan hagin d'anar a la pàgina web __cryptosec.net__, entraràn a __cryptos3c.net__ ja que el hacker ha avisat que hi ha una urgència a la pàgina principal i han d'entrar a la pàgina web dada pel hacker i les seves credencials seran __robades sense que se'n adoni__!

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


# __Bibliografia__: 

- https://github.com/trustedsec/social-engineer-toolkit
- https://www.nubetia.com/que-es-setoolkit/
- https://www.hackplayers.com/2012/10/social-engineering-toolkit-set.html
- https://www.dragonjar.org/video-tutorial-set-social-engineering-toolkit.xhtml
- https://programmerclick.com/article/72081442265/
- https://infosecwriteups.com/sending-emails-using-social-engineering-toolkit-setoolkit-97427712c809
- https://deepsec.com.mx/blog/f/social-engineer-toolkit-%7C-como-usarla
- https://www.tutorialspoint.com/kali_linux/kali_linux_social_engineering.htm
- https://www.nubetia.com/ngrok-setoolkit-kali-linux-2020-ataque-phishing/
- https://www.hacking-tutorial.com/hacking-tutorial/15-step-to-hacking-windows-using-social-engineering-toolkit-and-backtrack-5/#sthash.zDxf6lK5.dpbs
- https://www.youtube.com/watch?v=MkEet3Akvyo&t=206s
- https://www.youtube.com/watch?v=jmXT-c6dcOk
- https://www.youtube.com/watch?v=Jjulz-xHwEo&t=9s
- https://www.youtube.com/watch?v=aM5yjJ8JUME
- https://www.youtube.com/watch?v=u9dBGWVwMMA&t=594s
