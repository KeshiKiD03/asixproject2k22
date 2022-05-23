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

+ **Apache2**: [--> readME <--](#apache2)

+ **Avantatges**: [--> readME <--](#avantatges)

+ **Desavantatges**: [--> readME <--](#desavantatges)

+ **Instal·lació Apache2 per a SOA CryptoSEC**: [--> readME <--](#installació-apache2-per-a-soa-cryptosec)

+ **Configurar Hosts Virtuals**: [--> readME <--](#configurar-hosts-virtuals)

+ **OpenSSL**: [--> readME <--](#openssl)

    + **Creació de claus i certificats**: [--> readME <--](#creació-de-claus-i-certificats)

    + **CA Veritat Absoluta**: [--> readME <--](#ca-veritat-absoluta)

    + **Habilitar SSL per HTTP**: [--> readME <--](#habilitar-ssl-per-http)

+ **Bibliografia**: [--> readME <--](#bibliografia)

# __Apache2__

Apache és un servidor web de codi obert, multiplataforma i gratuït. Aquest web server és un dels més utilitzats al món, actualment el 43% dels llocs web funcionen amb ell.

![](https://www.unfantasmaenelsistema.com/wp-content/uploads/2019/12/hd221.jpg)
> __Img Source__: *https://www.unfantasmaenelsistema.com/wp-content/uploads/2019/12/hd221.jpg*
<br>

Apache té una estructura basada en mòduls, que permet activar i desactivar funcionalitats addicionals, per exemple, mòduls de seguretat com mod_security, mòduls de memòria cau com Varnish , o de personalització de capçaleres com mod_headers. 

També permet ajustar els paràmetres de PHP del teu hosting de forma personalitzada mitjançant el fitxer .htaccess .

![](https://www.webempresa.com/wp-content/uploads/2021/10/servidor-rueda-dentada-400.png)
> __Img Source__: *https://www.webempresa.com/wp-content/uploads/2021/10/servidor-rueda-dentada-400.png*
<br>

## __Avantatges__

Els principals avantatges d'usar aquest servei web són els següents:

* De codi _obert_ i __gratuït__, amb una gran comunitat dusuaris.

* Pegats de seguretat regulars i actualitzats amb freqüència.

* Estructura basada en __mòduls__.

* Multiplataforma. Està disponible a servidors __Windows__ i __Linux__.

* Personalització mitjançant __.htaccess__ independent a cada hosting.

* Compatible amb els principals __CMS__ i __botigues online__ i plataformes __e-learning__

![](https://www.webempresa.com/wp-content/uploads/2021/10/servidor-flecha-up-arriba-400.png)
> __Img Source__: *https://www.webempresa.com/wp-content/uploads/2021/10/servidor-flecha-up-arriba-400.png*
<br>

## __Desavantatges__

* Presenta problemes d'estabilitat per sobre de les 10.000 connexions

* Un ús abusiu de mòduls poden generar bretxes de seguretat.

![](https://www.webempresa.com/wp-content/uploads/2021/10/servidor-flecha-down-abajo-400.png)
> __Img Source__: *https://www.webempresa.com/wp-content/uploads/2021/10/servidor-flecha-down-abajo-400.png*
<br>

# __Instal·lació Apache2 per a SOA CryptoSEC__

1. Actualitzar el __repositori__ i instal·lar __apache2__.

```bash
sudo apt update
```

```bash
sudo apt install apache2
```

2. Readjustar el firewall perque permeti Apache2. Apache es registra amb UFW per proporcionar alguns perfils d'aplicació que es poden utilitzar per habilitar o deshabilitar l'accés a Apache a través del _firewall_.

Llistem els perfils de __ufw__.

```bash
sudo ufw app list
```

Com ho indica el resultat, hi ha tres perfils disponibles per a Apache:

+ __Apache__: aquest perfil obre només el port 80 (tràfic web normal no xifrat)

+ __Apache Full__: aquest perfil obre el port 80 (tràfic web normal no xifrat) i el port 443 (tràfic TLS/SSL xifrat)

+ __Apache Secure__: aquest perfil obre només el port 443 (tràfic TLS/SSL xifrat)

```bash
Output
Available applications:
  Apache
  Apache Full
  Apache Secure
  OpenSSH
```

El resultat proporcionarà una llista del trànsit de HTTP que es permet:

```bash
sudo ufw allow 'Apache'
```

```bash
sudo ufw status
```

```bash
Output
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Apache                     ALLOW       Anywhere                
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Apache (v6)                ALLOW       Anywhere (v6)
```

3. Comprovar el servidor web.

```bash
sudo systemctl status apache2
```

```bash
Output
apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2020-04-23 22:36:30 UTC; 20h ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 29435 (apache2)
      Tasks: 55 (limit: 1137)
     Memory: 8.0M
     CGroup: /system.slice/apache2.service
             29435 /usr/sbin/apache2 -k start
             29437 /usr/sbin/apache2 -k start
             29438 /usr/sbin/apache2 -k start
```

4. Obrir un navegador i posar la IP del SOA 10.200.243.164. Per HTTP. Més tard configurarem HTTPS.

![](https://assets.digitalocean.com/articles/how-to-install-lamp-ubuntu-16/small_apache_default.png)
> __Img Source__: *https://assets.digitalocean.com/articles/how-to-install-lamp-ubuntu-16/small_apache_default.png*
<br>

5. Administrar Apache2:

Per aturar el vostre servidor web, escriviu el següent:

```bash
sudo systemctl stop apache2
```

Per iniciar el servidor web quan no estigui actiu, escriviu el següent:

```bash
sudo systemctl start apache2
```

Per aturar i després iniciar el servei de nou, escriviu el següent:

```bash
sudo systemctl restart apache2
```

Si només feu canvis de configuració, Apache sovint es pot recarregar sense tancar connexions. Per fer-ho, utilitzeu aquesta ordre:

```bash
sudo systemctl reload apache2
```

Per defecte, Apache està configurat per iniciar automàticament quan el servidor ho fa. Si no és el que voleu, deshabiliteu aquest comportament escrivint el següent:


```bash
sudo systemctl disable apache2
```

Per tornar a habilitar el servei de manera que es carregui a l'inici, escriviu el següent:

```bash
sudo systemctl enable apache2
```

# __Configurar hosts virtuals__

En utilitzar el servidor web __Apache__, podeu utilitzar hosts virtuals (similars a blocs de servidor de Nginx) per encapsular detalls de configuració i allotjar més d'un domini des d'un únic servidor. 

El nostre domini es __cryptosec.net__. És a dir quan l'usuari posi __cryptosec.net__ al navegador anirà a parar a la nostra pàgina web que està allotjada en __/var/www/html/cryptosec/__.

1. Crear el directori __cryptosec__ a __/var/www/html__

```bash
sudo mkdir /var/www/html/cryptosec
```

2. Cambiem el owner.

```bash
sudo chown -R $USER:$USER /var/www/html/cryptosec
```

3. Els permisos dels roots web haurien de ser correctes si no vau modificar el valor umask, que estableix permisos de fitxers predeterminats.

```bash
sudo chmod -R 755 /var/www/html/cryptosec
```

4. A continuació, creeu una pàgina d'exemple __index.html__ utilitzant vim o el vostre editor preferit:

```bash
sudo vim /var/www/html/cryptosec/index.html
```

5. El contingut tindrà això.

```bash
<html>
    <head>
        <title>Welcome to CRYPTOSEC.NET!</title>
    <style>
......
......
</html>
```
> _SEE FULL CONTENT_ --> ./index.html

6. Crear un fitxer de configuració per a la zona: __cryptosec.net.conf__ que estarà a __/etc/apache2/sites_available__.

sudo nano /etc/apache2/sites-available/your_domain.conf

```bash
sudo nano /etc/apache2/sites-available/cryptosec.net.conf
```

Dins tindrà el VirtualHost, de moment el HTTP.

```bash
<VirtualHost *:80>
    ServerAdmin cryptosec@localhost
    ServerName cryptosec.net
    ServerAlias www.cryptosec.net
    DocumentRoot /var/www/cryptosec
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Tingueu en compte que canviem ``DocumentRoot`` pel nostre nou directori i ``ServerAdmin`` per un correu electrònic al qual pugui accedir l'administrador del lloc your_domain . 
També afegim dues directives: ``ServerName``, que estableix el domini de base que hauria de coincidir per a aquesta definició de host virtual, i ``ServerAlias``, que defineix més noms que haurien de coincidir com si fossin el nom de base.

7. Habilitat la zona del fitxer de configuració, per tenir validesa.

```bash
sudo a2ensite cryptosec.net
```


8. Provar que funciona, fem un config test d'Apache2.

```bash
sudo apache2ctl configtest
```

```bash
Output
Syntax OK
```


![](./Photos/WhatsApp%20Image%202022-05-13%20at%202.25.22%20PM.jpeg)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

# __OPENSSL__

## __Creació de claus i certificats__

La TLS , o seguretat a la capa de transport, i la SSL , plataforma antecessora la sigla de la qual significa “capa de sockets segurs”, són protocols web que s'utilitzen per embolicar el trànsit normal amb una cobertura protegida xifrada.

Mitjançant aquesta tecnologia, els servidors poden enviar trànsit de manera segura entre servidors i clients sense la possibilitat que els missatges siguin interceptats per tercers. El sistema de certificat també ajuda els usuaris a verificar la identitat dels llocs amb què estableixen connexió.

En aquesta guia, us mostrarem la manera de configurar un certificat SSL signat per Veritat Absoluta CA per a l'empresa CryptoSEC amb un servidor web d'Apache a Ubuntu 20.04.

### __CA VERITAT ABSOLUTA__

1. Generem les claus per a la __CA Veritat Absoluta__.

```bash
openssl genrsa -out cakey.pem 1024
```

```bash
Generating RSA private key, 1024 bit long modulus (2 primes)
...........+++++
................+++++
e is 65537 (0x010001)
```

2. Generem el certificat per de la __CA Veritat Absoluta__.

```bash
openssl req -new -x509 -nodes -sha1 -days 365 -key cakey.pem -out cacert.pem
```

```bash
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:Barcelona
Locality Name (eg, city) []:BCN
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Veritat Absoluta
Organizational Unit Name (eg, section) []:Veritat
Common Name (e.g. server FQDN or YOUR name) []:veritat.absoluta.net
Email Address []:veritat@absoluta.net
```

3. Generem el request per al certificat de CryptoSEC.net a partir de les claus de CA Veritat Absoluta.

```bash
openssl req -newkey rsa:2048 -nodes -sha256 -keyout cryptosec_key.pem -out cryptosec_req.pem
```

```bash
Generating a RSA private key
........................+++++
........+++++
writing new private key to 'cryptosec_key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:Barcelona
Locality Name (eg, city) []:BCN
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Cryptosec
Organizational Unit Name (eg, section) []:Cryptosec
Common Name (e.g. server FQDN or YOUR name) []:cryptosec.net
Email Address []:cryptosec@cryptosec.net

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:jupiter
An optional company name []:jupiter
```

4. Visualitzem:

```bash
cryptosec@SOACryptosec:~/CERTS$ ls -l
total 16
-rw-rw-r-- 1 cryptosec cryptosec 1143 May 13 20:50 cacert.pem
-rw------- 1 cryptosec cryptosec  887 May 13 20:49 cakey.pem
-rw------- 1 cryptosec cryptosec 1704 May 13 20:51 cryptosec_key.pem
-rw-rw-r-- 1 cryptosec cryptosec 1135 May 13 20:51 cryptosec_req.pem
```

5. Som CA, hem de firmar i generar el certificat per a CryptoSEC.

```bash
openssl x509 -CAkey cakey.pem -CA cacert.pem -req -in cryptosec_req.pem
 -days 3650 -CAcreateserial -out cryptosec_cert.pem
```

```bash
Signature ok
subject=C = CA, ST = Barcelona, L = BCN, O = Cryptosec, OU = Cryptosec, CN = cryptosec.net, emailAddress = cryptosec@cryptosec.net
Getting CA Private Key
```

## __Habilitar SSL per HTTP__

1. Habilitar __mod_ssl__, el mòdul SSL d'Apache i __mod_headers__, que necessiten algunes de les configuracions del nostre fragment SSL, amb l'ordre __a2enmod__:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2. Modificar `/etc/apache2/sites-available/cryptosec.net.conf`.

```bash
sudo nano /etc/apache2/sites-available/cryptosec.net.conf
```

```bash
<VirtualHost *:443>
   ServerName cryptosec.net
   DocumentRoot /var/www/cryptosec

   SSLEngine on
   SSLCertificateFile /etc/ssl/certs/cryptosec_cert.pem
   SSLCertificateKeyFile /etc/ssl/private/cryptosec_key.pem
</VirtualHost>
```


3. Hem de copiar la clau i el certificat generat abans de Cryptosec.

```bash
cryptosec@SOACryptosec:~/CERTS$ sudo cp cryptosec_cert.pem /etc/ssl/certs/.
cryptosec@SOACryptosec:~/CERTS$ sudo cp cryptosec_key.pem /etc/ssl/private/.

```


* Verifiquem que estigui tot correcte:

```bash
sudo apache2ctl configtest
```

* Fem un reload per recarregar Apache2.

```bash
sudo systemctl reload apache2

```

* Fem un reinici d'Apache2.

```bash
sudo systemctl restart apache2
```

4. Finalment provar-ho en un navegador, posant __https://cryptosec.net__, ens sortirà un missatge d'excepció, perquè el navegador no conèix o no té el certificat de la CA en el navegador, per tema de trust.

![](https://assets.digitalocean.com/articles/apache_ssl_1604/warning_override.png)
> __Img Source__: *https://assets.digitalocean.com/articles/apache_ssl_1604/warning_override.png*
<br>

5. Per solucionar aquest problema, importem manualment el ``cacert.pem`` als navegadors.

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/CryptoSEC.net.png?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

6. Veure el contingut dels certificats:

```bash
openssl x509 --noout --text -in cryptosec_cert.pem 
```

```bash
openssl x509 --noout --text -in cacert.pem 
```

O des d'un navegador web Firefox: 

![](https://github.com/KeshiKiD03/asixproject2k22/blob/main/Photos/Captura.PNG?raw=true)
> __Img Source__: *@Aaron & @Cristian 's GitHub*
<br>

## --> [ [Tornar a Ciberseguretat](https://github.com/KeshiKiD03/asixproject2k22/blob/main/README.md) ] <--

# __Bibliografia__

+ https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04-es - APACHE2
+ https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04-es - APACHE2