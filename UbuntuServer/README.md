# Ubuntu Server
## @isx36579183 ASIX M11-SAD Curs 2021-2022

# Index

**Manual LDAPS**: [Manual](https://docs.google.com/document/d/1lyjnPMFODZWkaCpDd12iIVZH5fkIafsXo9fS5PyFPSk/edit?usp=sharing)

**Containers y configuración**: [--> readme Configuración LDAPS <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#containers)

**Alternative Subject Name**: [--> readme Alternative Subject Name <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#subject-alternative-name)

**Apunts Ruben**: [--> readme Apunts Ruben <--](https://github.com/KeshiKiD03/ssl_cert/tree/main/ssl22_ldaps-Keshi#ldap-server--tls-ssl)


### Containers:

Creació d'un container docker amb un servei ldap
i la base de dades *dc=edt,dc=org*. Aquest servei
permet l'accés segur via TLS/SSL amb *ldaps* i 
també *starttls*.

```
$ docker network create 2hisx

$ docker build -t keshikid03/ssl22:ldaps .

$ docker run --rm --name ldap.edt.org -h ldap.edt.org --net 2hisx -p 389:389 -d keshikid03/ssl22:ldaps

$ docker run --rm --name phpldapadmin.edt.org -h phpldapadmin.edt.org --net 2hisx -p 80:80 -d edtasixm06/phpldapadmin:20

```

#### Configuració:

Per tal de que escolti també al port ldaps (636) a més del port standard (389), *startup.sh*:
```
/sbin/slapd -d0 -u ldap -h "ldap:/// ldaps:/// ldapi:///" 
```

Per configurar les `claus de TLS/SSL`, *slapd.conf*:
```
TLSCACertificateFile        /etc/ldap/certs/cacert.pem
#TLSCertificateFile          /etc/ldap/certs/servercert.ldap.pem
TLSCertificateFile		/etc/ldap/certs/servercertPLUS.pem
TLSCertificateKeyFile       /etc/ldap/certs/serverkey.ldap.pem
TLSVerifyClient       never
TLSCipherSuite HIGH:MEDIUM:LOW:+SSLv2
```

En el `client` cal configurar el `certificat de la CA` que ha de validar el certificat del `servidor`: `/etc/openldap/ldap.conf`:

```
TLS_CACERT /etc/ldap/certs/cacert.pem
```

En la `pròpia imatge ldap` configurar el `client ldap` per usar el certificat de la CA: `/etc/openldap/ldap.conf`:

```
TLS_CACERT /opt/docker/cacert.pem
```

#### Ordres client:

Exemples de connexió client  en text plà i en tls/ssl
```
ldapsearch -x  -H ldap://ldap.edt.org 
ldapsearch -x  -H ldaps://ldap.edt.org 
```

Exemples usant startls:
```
ldapsearch -x -Z -H ldap://ldap.edt.org 
ldapsearch -x -ZZ -H ldap://ldap.edt.org 
```

Exemple '*erroni*', usar starttls sobre una connexió que 
ja és tls/ssl:
```
ldapsearch -x -ZZ -H ldaps://ldap.edt.org 
```

Desar e un fitxer el debug:
```
ldapsearch -x -ZZ -H ldap://ldap.edt.org -d1   dn  2> log
```


## Subject Alternative Name

**Atenció** Si es genera un nou certificat cal generar de nou la imatge docker i fer el run,
no podem simplement copiar-la en calent al container per fer el test perquè el certificat es
carrega al slapd en temps de construccció (en fer *slaptest*) de la base de dades.

Fitexr de extensions amb noms alternatius de host del servidor:
```
basicConstraints=CA:FALSE
extendedKeyUsage=serverAuth
subjectAltName=IP:172.17.0.2,IP:127.0.0.1,email:copy,URI:ldaps://mysecureldapserver.org
```

Generar el certificat nou:
```
openssl x509 -CAkey cakey.pem -CA cacert.pem -req -in serverreq.ldap.pem -days 3650 -CAcreateserial -extfile ext.alternate.conf -out servercert.ldap.pem
Signature ok
subject=/C=ca/ST=barcelona/L=barcelona/O=edt/OU=informatica/CN=ldap.edt.org/emailAddress=ldap@edt.org
Getting CA Private Key
```

Verificar que hi ha les extensions:
```
openssl x509 -noout -text -in servercert.ldap.pem
        ...
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication
            X509v3 Subject Alternative Name: 
                IP Address:172.17.0.2, IP Address:127.0.0.1, email:ldap@edt.org, URI:ldaps://mysecureldapserver.org
```

Test ldap
```
# ldapsearch -x -LLL -h 172.17.0.2 -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
# ldapsearch -x -LLL -Z -h 172.17.0.2 -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
# ldapsearch -x -LLL -ZZ -h 172.17.0.2 -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
# ldapsearch -x -LLL -H ldaps://172.17.0.2  -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
# ldapsearch -x -LLL -H ldaps://172.17.0.2:636  -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
# ldapsearch -x -LLL -ZZ -H ldaps://172.17.0.2 -s base -b 'dc=edt,dc=org' dn
ldap_start_tls: Operations error (1)
	additional info: TLS already started
```

```
# cat /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
172.17.0.2 ldap.edt.org mysecureldapserver.org
# ldapsearch -x -LLL -H ldaps://ldap.edt.org -s base -b 'dc=edt,dc=org' dn
dn: dc=edt,dc=org
```

Test del certificat:
```
# openssl s_client -connect 172.17.0.2:636 < /dev/null 2> /dev/null | openssl x509 -noout -tex
```

Test des de l'interior del container:
```
# ldapsearch -x -LLL -ZZ -h 127.0.0.1 -s base
dn: dc=edt,dc=org
dc: edt
description: Escola del treball de Barcelona
objectClass: dcObject
objectClass: organization
o: edt.org
[root@ldap docker]# ldapsearch -x -LLL -H ldaps://127.0.0.1 -s base dn
dn: dc=edt,dc=org
[root@ldap docker]# ldapsearch -x -LLL -H ldaps://localhost -s base dn
dn: dc=edt,dc=org
```


# LDAP Server + TLS SSL
## @edt ASIX M11-ASO 2021-2022
### Servidor LDAP (Debian 11) / APUNTS

**Actuem com a CA...**

* **Generem clau privada simple i fabriquem certificat autosignat de veritat absoluta:**
```
openssl genrsa -out cakey.pem
openssl req -new -x509 -days 365 -key cakey.pem -out cacert.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:Barcelona
Locality Name (eg, city) []:bcn
Organization Name (eg, company) [Internet Widgits Pty Ltd]:VeritatAbsoluta
Organizational Unit Name (eg, section) []:Certificats
Common Name (e.g. server FQDN or YOUR name) []:veritat
Email Address []:veritat@edt.org
```

* **Generem clau privada del servidor:**
```
openssl genrsa -out serverkey.ldap.pem 4096
```

* **Podem generar clau pública del servidor però NO CAL:**
```
openssl rsa -in cakey.pem -pubout -out cakeypub.pem
```

* **Generem 'request' per el servidor LDAP:**
```
openssl req -new -x509 -days 365 -nodes -out servercert.ldap.pem -keyout serverkey.ldap.pem
Generating a RSA private key
..........+++++
.........+++++
writing new private key to 'serverkey.ldap.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:Catalunya
Locality Name (eg, city) []:Barcelona
Organization Name (eg, company) [Internet Widgits Pty Ltd]:edt
Organizational Unit Name (eg, section) []:ldap
Common Name (e.g. server FQDN or YOUR name) []:ldap.edt.org
Email Address []:ldap@edt.org
```

**Som el servidor LDAP...**

**Fem la petició (de firma) al servidor (VeritatAbsoluta), ens demanarà 'qui som':**

* **Obtenim la petició del 'request' al servidor VeritatAbsolut (CA):**
```
openssl req -new -key serverkey.ldap.pem -out serverrequest.ldap.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:Catalunya
Locality Name (eg, city) []:Barcelona
Organization Name (eg, company) [Internet Widgits Pty Ltd]:edt
Organizational Unit Name (eg, section) []:ldap
Common Name (e.g. server FQDN or YOUR name) []:ldap.edt.org
Email Address []:ldap@edt.org

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:jupiter
An optional company name []:edt
```

**Tornem a ser CA...**

* **SIGNEM la 'request' enviada per LDAP, és genera 'cacert.srl':**
```
openssl x509 -CA cacert.pem -CAkey cakey.pem -req -in serverrequest.ldap.pem -CAcreateserial -days 365 -out servercert.ldap.pem
Signature ok
subject=C = CA, ST = Catalunya, L = Barcelona, O = edt, OU = ldap, CN = ldap.edt.org, emailAddress = ldap@edt.org
Getting CA Private Key
```

* **ALTERNATIVA: Signar la 'request' acceptant altres dominis com a sinònims adjuntant un fitxer de configuració:**
```
openssl x509 -CA cacert.pem -CAkey cakey.pem -req -in serverrequest.ldap.pem -out servercertPLUS.pem -CAcreateserial -extfile ext.alternate.conf -days 365
```

**DINS DEL DOCKER/SERVIDOR:**

* **Creem i inicialitzem docker:**
```
docker build -t rubeeenrg/tls21:ldaps .

docker run --rm -h ldap.edt.org --name ldap.edt.org --network 2hisix -d rubeeenrg/tls21:ldaps
```

**NOTA:** Els ports -p 389:389 -p 636:6363 no cal exposar-los cap a fora ja que ho farem local!

* **Comprovem que dins del docker funciona:**

**NOTA:** Afegir '-d1 (debug)' i '-v (verbose)' per mirar errors,
```
ldapsearch -x -ZZ -LLL -H ldap://ldap.edt.org -b 'dc=edt,dc=org'
ldapsearch -x -LLL -H ldaps://ldap.edt.org -b 'dc=edt,dc=org'

PLUS:

ldapsearch -x -LLL -H ldaps://mysecureldapserver.org -b 'dc=edt,dc=org'
```

**COM A CLIENT:**

* **Hem de modificar '/etc/hosts' i posar la IP del Docker:**
```
172.x.x.x	ldap.edt.org mysecureldapserver.org
127.0.0.1	localhost
```

* **Com a client, encara NO FUNCIONA, falta el següent:**
```
ldapsearch -x -LLL -H ldaps://ldap.edt.org -b 'dc=edt,dc=org'
ldapsearch -x -ZZ -LLL -H ldap://ldap.edt.org -b 'dc=edt,dc=org'
ldapsearch -x -LLL -H ldaps://mysecureldapserver.org -b 'dc=edt,dc=org'
ldapsearch -x -LLL -h 172.19.0.2 -b 'dc=edt,dc=org'
```

* **Hem de modificar al client l'arxiu '/etc/ldap/ldap.conf' i ficar-li la ruta del certifcat, per tant, hem de pasar-li el certificat de la CA creat anteriorment per extreure la clau pública i xequejar el servidor LDAPs:**
```
cp /var/tmp/m11/ssl21/tls:ldaps/cacert.pem /etc/ssl/certs/cacert.pem
cp /var/tmp/m11/ssl21/tls:ldaps/servercertPLUS.pem /etc/ssl/certs/servercertPLUS.pem
```

* **ARXIU '/etc/ldap/ldap.conf':**
```
TLS_CACERT	/etc/ssl/certs/cacert.pem
TLS_CACERT	/etc/ssl/certs/servertcertPLUS.pem
```

**NOTA:** El client necessita saber a quina entitat (CA) preguntar sobre la veracitat del servidor al que s'està connectant.
