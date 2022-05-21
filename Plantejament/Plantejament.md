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

+ **DNS**: [--> readME <--]()

+ **DNSSEC**: [--> readME <--]()

+ **DNS**: [--> readME <--]()

+ **DNSSEC**: [--> readME <--]()

# Deployment

## Requisits:

### __Virtualització__

- [ ] 1 SOA
- [ ] 1 Forwarder
- [ ] 2 Kali
- [ ] 3 Clients en Xarxa Interna

### __Programari CryptoSEC__

- [ ] NETPLAN --> Configuración Network Manager dels Servidors Ubuntu Server.
- [ ] NMAP --> Verificació d'arp, ports... etc.
- [ ] BIND9 --> Forwarder i SOA han de poder resoldre peticions DNS als clients.
- [ ] DHCP --> Xarxa Interna --> Configuració automàtica IP i DNS.
- [ ] IPTABLES --> Xarxa Interna --> NAT a l'exterior.
- [ ] APACHE2 --> https://cryptosec.net
- [ ] TEAMVIEWER --> GUI remot
- [ ] SSH --> Accés remot
- [ ] OPENVAS --> Verificació de vulnerabilitats
- [ ] WIRESHARK --> Analitzador de paquets del sistema
- [ ] ARP -A --> Veure taula CACHE
- [ ] HOST --> Resolver 
- [ ] NSLOOKUP --> Resolver 
- [ ] DIG --> Resolver 
- [ ] JOURNALCTL --> Veure possibles errors
- [ ] SYSTEMCTL --> Reiniciar o reload dels serveis
- [ ] SSL --> Certificats per Apache2
- [ ] ROUTING --> Per poder entrar a 192.168.3.0/24 desde la classe.
- [ ] TRACEROUTE --> Observar el traçat del paquet.
- [ ] PING --> Observar la conectivitat entre dispositius.
- [ ] CERTBOT - LET'S ENCRYPT --> Generar certificats per dominis reals (_Tried_).
- [ ] WAZUH --> Detectar vulnerabilitats del sistema i de la xarxa (_Tried_).

### __HACKING Kali__
- [ ] SET --> Setoolkit --> Software d'atacs d'Enginyeria Social
- [ ] BETTERCAP --> Framework/Sniffer per poder fer atacs de Man in the Middle.
- [ ] ZPHISHING --> Framework per simular _Phishing_ real.
- [ ] ETTERCAP --> Framework/Sniffer per poder fer atacs de man in the Middle.
- [ ] JOHN --> Brute Force Attack tool --> Cracker password
- [ ] SSLSTRIP --> Strips HTTPS to HTTP (_Tried_)

<br>
<br>
<br>
<br>

# __Practica:__

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/EsquemaFinal_Non-1.png?raw=true)

## __Plantejament a VIRTUALBOX__:

### __Portàtil d'en Keshi__:

+    - Kali Linux: BRIDGE (DHCP eth0)

        - X11 Forwarding SSH o Teamviewer

        - Static Routing to 192.168.3.0/24: ip route add 192.168.3.0/24 via 10.200.243.168 dev eno1

        - Setoolkit

        - Ettercap

        - Bettercap

        - John (Brute Force Crack)

        - Wireshark

        - Nmap

        - Traceroute

<br>
<br>
<br>
<br>

### __Portàtil d'en Cristian__:

+    - KALI White Hacker
    
    - Ub 20.04 SOA "SOACryptosec": BRIDGE (DHCP enp0s3) - 10.200.243.164/24

        - APACHE2: Pàg www.cryptosec.net o 10.200.243.164/cryptosec/index.html

            - /var/www/html/cryptosec/index.html

            - Perquè funcioni el HTTPS cal importar el CACERT.PEM al FIREFOX.

        - DNS AUTORITARI (cryptosec.net)

            - DNS

            - DNSSEC

<br>
<br>
<br>
<br>

### __PC Aaron i11__:

+   - Ub 20.04 Forwarder "ForwarderCryptosec":
    
        - BRIDGE (DHCP enp0s3) - 10.200.243.168/24

        - Internal Network (cryptosec enp0s8 192.168.3.0/24) - 192.168.3.1/24

        - IPTABLES
        
        - DHCP

        - DNS FORWARDING


    - Cryptosec Clients:

        - Internal Network (cryptosec enp0s3 192.168.3.0/24) - 192.168.3.100/24 ​​- 192.168.3.200/24

<br>
<br>
<br>
<br>

### __Kali (Keshi-Hacker)__

1. Verificació de les IPS i conectivitat amb Internet.

2. Rebre la IP per DHCP de la classe.

3. Activar services.sh.

4. Activar Teamviewer o cctivar X11 Forwarding SSH a l'ordinador del Professor:

_Extra_

X11 FORWARDING (Permetre Obrir Apps mode Gràfic):

    - ssh -X anonymous@ip

    - xauth list $DISPLAY --> COPIAR1

    - fet $DISPLAY --> COPIAR2

    - sudo bash

    - xauth add [ENGANXAR COPIAR1]

    - export DISPLAY=[ENGANXAR COPIAR2]

5. Verificar conectivitat des de l'ordinador del PROFE i veure què es pot obrir OK.

__________________________________________________________________________________________________________________________________________

<br>
<br>
<br>
<br>

### __SOA__

1. Verificació de les IPS i conectivitat amb Internet.

2. Modificar __NETPLAN__.

    - netplan try + netplan apply

    - IMPORTANT! Verificar _PING_ i _RESOLV_ cryptosec.net amb la IP adequada!

3. Modificar BIND9 (Primer en __DNS normal__ i després __DNSSEC__).

4. Verificar __APACHE2__: 10.200.243.164 i 10.200.243.164/cryptosec/index.html

    - Verificar els fitxers de __"cryptosec.net"__ a Apache2

        - Són a __/etc/apache2/sites-available/cryptosec.net.conf__

        - Comandes per verificar Apache2:

            - __a2ensite cryptosec.net.conf__ --> Habilita els virtualHost.

            - __apache2ctl configtest__ --> Verifica apache2
            
            - __openssl x509 --noout --text -in cacert.pem__

            - __openssl x509 --noout --text -in cryptosec_cert.pem__

            - __ufw allow "Apache Full"__ --> Permet firewall Apache2

5. Verificar que __DNSSEC__ funciona:

    - __dnssec-keygen__ --> GENERAR

    - __$INCLUDE a db.cryptosec.net__ --> Signatura manual

    - __dnssec-signzone__ --> Signar autom .signed

    - __dig cryptosec.net +dnssec +multiline__

    - __dnssec-verify -o cryptosec.net db.cryptosec.net [-v level]__
 
    - __host cryptosec.net__

    - __nslookup cryptosec.net__

6. Verificar claus de __DNSSEC__ i engegada davant __spoofing__ de la zona.

<br>
<br>
<br>
<br>

### __FORWARD__

1. Verificació de les __IPS__ i conectivitat amb Internet.

2. Modificar NETPLAN.

    - netplan try + netplan __apply__.

    - IMPORTANT! Verificar PING i RESOLV cryptosec.net amb la IP adequada!

    - Verificar que el DNS nameserver sigui FORWARDER a __10.200.243.164__.

3. Activar IPTABLES: __cryptonat.sh__

    - Verificar ip estàtica de la classe __10.200.243.168__.

4. Activar __FORWARDING de DNS__.

    - Verificar __named.conf.default-zones__

    - Ver __named.conf.options__

    - Reiniciar i verificar que facin PING I RESOLV. Sinó Journal.

5. Activar __DHCP__ per a 192.168.3.0/24 a la interfície __enp0s8__.

    - Reiniciar DHCP i verificar.
    
    - Fitxers __/etc/dhcp/dhcpd.conf__ i __/etc/default/isc-dhc-server__

    - Verificar amb CLIENTS que rebin la IP i facin resoldre a cryptosec.net.



### __CLIENTS__

1. Obrir i verificar que rebin IP i DNS.

    - Sinó reiniciar networking o dhclient -r (_release_) i dhclient -v (_verbose_).

    - Al FIREFOX introduir el cacert.pem --> Importar al navegador i provar https://cryptosec.net

    - __LINUX__: systemd-resolve __--flush-cache__ --> Neteja la cahcé DNS

    - __Windows__: ipconfig __/flushdns__


### __Comander per verificar la conectivitat__:

    - systemd-resolved --status --> Verifica DNS actual

    - nmap -sP 10.200.243.0/24 --> Escaneig de la Xarxa

    - resolvectl query cryptosec.net --> Resol cryptosec.net

    - host cryptosec.net --> Resol cryptosec.net

    - dig cryptosec.net +dnssec +multiline --> Resol cryptosec.net segur DNSSEC.



+ __EXTRES__:

    - Ordinador PROFE fer ROUTING a 192.168.3.0/24

        - Han de tenir NAT a l'exterior (Forwarder ha d'activar Iptables)

        - ip route add 192.168.3.0/24 via 10.200.243.168 dev eno1

        - Provar PING

            - Provar SSH -X usuariClientCryptosec@192.168.3.x



X11 FORWARDING (Permetre Obrir Apps mode Gràfic):

    - ssh -X anonymous@ip

    - xauth list $DISPLAY --> COPIAR1

    - fet $DISPLAY --> COPIAR2

    - sudo bash

    - xauth add [ENGANXAR COPIAR1]

    - export DISPLAY=[ENGANXAR]

# __Atacs del hacker__

+ __Brute Force Attack - Cracking Password with John__: El hacker ha aconseguit una copia dels fitxers /etc/passwd i /etc/shadow i les ha anomenat mini-passwd.txt i mini-shadow.txt. John és un __tool__ de Kali que permetrà desxifrar els _hashes_ de les contrasenyes. Quant més difícil més temps trigarà. Posarem contrasenyes sencilletes. Podrem veure com les desxifra. Utilitzarà un diccionari __rockyou.txt__. Aprofitant també que l'usuari ha  

+ __ARP Poisoning / Spoofing (2 parts) (BETTERCAP)__: Envenenament de les taules ARP de les víctimes implicades i reenviament de paquets al hacker. Amb el Wireshark - ARP - Nmap, veurem com fa el duplicat de MAC.

    * __MITM - Eavesdropping (Sniffing) (BETTERCAP)__: Amb l'ARP Spoof d'abans activarem un _sniffer_ i estarem escoltant la màquina afectada i veient les pàgines on visita. Podem captar credencials de pàgines HTTP.
    
    * __DNS Poisoning / Spoofing) (BETTERCAP)__: Amb l'ARP Spoof d'abans activarem un _dnsspoof_ i injectarem un registre de DNS fals on ens redirigirà a la nostra màquina on hi tindrem una _fake page: m0odle.escoladeltreball.org_ (__Moodle EDT__) i l'enviarem per correu utilitzant __SET__ dient que "_URGENT! L'Eduard ha posat les notes de M06, entra urgentment i mira la nota que tens!!!_" llavors l'usuari entrarà i no se n'adonarà i li robarem les credencials mostrades al __SET__.

+ __Spoofing CryptoSEC.NET (BETTERCAP)__: Ídem que l'anterior però els targets son el __SOA__ i el __Forwarding__, els clients interns de CryptoSEC quan hagin d'anar a la pàgina web __cryptosec.net__, entraràn a __cryptos3c.net__ ja que el hacker ha avisat que hi hà una urgència a la pàgina principal i 

+ __ZPHISHING: Phishing with a real "fake" HTTPS website__: Exemple real de __Phishing__ automatitzat i desplegat a __Cloudflare__ per un programa anomenat __Zphishing__. Genera servidor temporal a Internet amb una plantilla a escollir de l'usuari. Enmascarar el enllaç amb un _url shortner_ i enviar-ho a alguna víctima mitjançant __SET__ que enviarà el correu automàticament amb un compte de __Gmail__. L'usuari entrarà però no veurà l'enllaç perquè és una emergència i posarà les seves credencials. D'aquesta manera recollirem l'usuari i la contrasenya de l'usuari (_Credential Harvester_).

# __Credentials__

aaroncryptosec@gmail.com:acryptosec22
