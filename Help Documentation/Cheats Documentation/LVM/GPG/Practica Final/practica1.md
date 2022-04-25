# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

https://geekland.eu/aprender-markdown-en-minutos/ 

#### EMOJIS CHEATSHEET

👹 🤬  😍 🥰  🥺  👾  👽  👍  🔥  🌈 ☀️  🌤 ☄️  🚧 ☢️ 

☣️ ⛔️  💮  🆚 ❗️ ❗️ ❗️ ❓ ❓  💯 ❤️‍🔥  💛  🧡  💟 

#### GPG MANUAL

* **Pretty Good Privacity**. Es un cifrado de seguridad. Ofrece seguridad en las comunicaciones.

* No le gusta al tio SAM. (Linux)

* Tener cuidado con los delincuentes.

* En el libro en el código estaba en código C --> Lo pasa en C y tienes tu programa.

* PGP es el ORIGINAL.

* GNU hizo la versión pública.

* **GNU PG --> GPG** 

ls -l $(tty)

sudo chown [user] $(tty)

---------------------------

su -l pere

gpg --list-keys

gpg -a --output /tmp/pere.pem --export pere@edt.org

ls -l /tmp/pere.pem

ls -l /tmp/pere.pem

su -l marta

-------

* gpg --full-generate-key

* defecto x2

* yes

* marta

* marta@edt.org

* La Marta

* ok

* Passphrase: marta.

* marta --> Genera entriopia.

* gpg --list-keys

-------

**¿Qué necesita Marta para enviar a Pere?**

* Necesita tener su **`clave pública`** en su **`LLAVERO`** **`pubring`**. 

* gpg --import /tmp/pere.pem

* Marta tiene 2 claves

-----

**Editar el LLAVERO**

* gpg --edit-key





* gpg --edit-key pere@edt.org


    * trust y sub.


* gpg > fpr

    * Primary fingerprint:


* USUARIO PERE: gpg --fingerprint.

* La marta lo contrasta con su fingerprint.

* gpg > sign 

    * Está seguro que quiere avalar, fe si realmente es la clave de PERE.

    * Pide el passphrase es la clave secreta de PERE.



<EJEMPLO_PISARRA>

* Marta avala, hace una firma la clave pública de Pere.

* Lo usa con su **clave PRIVADA**.

* Necesita utilizar el password que está protegida.





* gpg> check

* gpg> quit (No se guarda)


* gpg --list-keys

    * Ahora sale full en la pública de PERE (Porque ha firmado).



**PRUEBA** **PAG 9 Y 10**

* head /etc/passwd > /tmp/dades

* gpg --output /tmp/dades.gpg --encrypt --recipient pere@edt.org /tmp/dades

    * -- output - lo envia a fichero

    * Sino lo envia por pantalla

* ls /tmp/dades.gpg

* file /tmp/dades.gpg --> Tipo PGP

* cat /tmp/dades.gpg --> Binario



----------

* gpg -a o --armor --output /tmp/dades.pem --encrypt --recipient pere@edt.org /tmp/dades


* ls /tmp/dades.pem -->

* file /tmp/dades.pem --> Tipo PGP

* cat /tmp/dades.pem --> ASCII / Binario

-------------

* su -l pere

ls -l $(tty)

sudo chown [user] $(tty)


* gpg --decrypt /tmp/dades.gpg

* gpg --output prova --decrypt /tmp/dades.gpg


* Fitxer encriptat

    * Marta ha utilizado su clave privada para encriptar el fichero.

* Pere lo decripta.







-------------

* Pere firma el mensaje y lo envia encriptado con su privada.

* Marta verificará el mensaje con la pública de Pere



-----------------


* cp /etc/os-release release

* gpg --sign release

* file release.gpg

* cat release.gpg


* **gpg --output /tmp/release.gpg --sign release** --> Lo firma

* **gpg --armor --output /tmp/release.pem --sign release**

    * armor --> pem.

* cat /tmp/release.pem

* file /tmp/release.pem



----

su -l marta

ls -l $(tty)

sudo chown [user] $(tty)

* gpg --decrypt /tmp/release.gpg

**POR PANTALLA**


* gpg --output prova --decrypt /tmp/release.gpg

* cat prova

* gpg --decrypt /tmp/release.gpg 2> /dev/null (Salida estándar)


----



* gpg --output prova --decrypt /tmp/release.pem

* cat prova

* gpg --decrypt /tmp/release.pem




* pere@i11:~$ gpg --output /tmp/release.gpg --detach-sign release



* cp release /tmp

-----

su -l marta

* gpg --decrypt /tmp/release.gpg



marta@i11:~$ gpg --decrypt /tmp/release.gpg
Detached signature.
Please enter name of data file: /tmp/release
gpg: Signature made Wed 23 Feb 2022 08:44:34 AM CET
gpg:                using RSA key 42DE3CC00E0A6A88F116304BF8C029DA130F5D1B
gpg: Good signature from "Pere Papito (Hola) <pere@edt.org>" [full]



* firma detach (**firma separada, por separado**): Pere tiene 2 ficheros, todos están a TMP. Verifica la **autoria, integritat, no repudi**.

    * gpg --output /tmp/release.sign --detach-sign /tmp/release

* cat /tmp/release.

* cat /tmp/release.sign

* gpg --verify /tmp/release.sign /tmp/release

    * Good signature de PERE.



marta@i11:~$ gpg --verify /tmp/release.sign /tmp/release
gpg: Signature made Wed 23 Feb 2022 08:51:50 AM CET
gpg:                using RSA key 4E58046CCF9AA98C68B7E194F82995F9236A9CA0
gpg: Good signature from "marta (La Marta) <marta@edt.org>" [ultimate]
marta@i11:~$ 





-----

su -l pere

cambiar 

vim /tmp/


marta@i11:~$ gpg --verify /tmp/release.sign /tmp/release
gpg: Signature made Wed 23 Feb 2022 08:51:50 AM CET
gpg:                using RSA key 4E58046CCF9AA98C68B7E194F82995F9236A9CA0
gpg: BAD signature from "marta (La Marta) <marta@edt.org>" [ultimate]


-----

su -l pere

# gpg --output /tmp/release.gpg --clearsign release

    * CLEARSIGN, firma clara.

    * GENERA contenido + firma.

    * Con el detach, por una banda tienes el doc original y por otra el fichero.



pere@i11:~$ gpg --output /tmp/release.gpg --clearsign release
File '/tmp/release.gpg' exists. Overwrite? (y/N) y
pere@i11:~$ cat /tmp/release.gpg 
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

PRETTY_NAME="Debian GNU/Linux 10 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
-----BEGIN PGP SIGNATURE-----

iQGzBAEBCgAdFiEEQt48wA4KaojxFjBL+MAp2hMPXRsFAmIV6JwACgkQ+MAp2hMP
XRtskgv/ZmCxL3i6byGZmZMwyUOCkDE08/bN0ofyj0cJn6aejwKCzzr7AdYRoXJM
yX8KBbB5vJQKW3TKC09Y6syFKTRASQACKuuH1GmEViLm/DNx2OLPgmv4gb4FB848
BgvZx1QDSIff1RT1FBKWqOI0ivYJULe32rl7fAc+Zmp6enruL2RfSgA3SNiENSFQ
k9t64MUpwqX6uRYD1lhPk4HStKVe3xgkYCVMofvXviv0VfxAGbYBF35tn3iJSqNm
OG+4L/U5pRbMBbqRTmLWpYw8gZ2XV9fpcF7rqxREcGFtpL9AkA179mvzegM0Rmhj
FYrtAVcvsvn68xU5DD/nHLhm+C49nAnD1Cla00rKh/OD30DRxr5512kg7YT5z8jv
NI3L0PlRvDjaXMrconn9/Yfx74hHoO1m6btlmR7w8BK3q/f+r28YVSmI0bvNltPl
nK8F6ehlWuKHkcPAK0s4C67l489eNOWJXibyDmxiTtNdvL/30HOIHADaO40J1kd6
/Pz9Lryj
=ySPh
-----END PGP SIGNATURE-----
pere@i11:~$ 



----------------


* gpg --output /tmp/release.gpg --symmetric release

    * secret



* su -l marta

    * gpg --decrypt /tmp/release.gpg 


    marta@i11:~$ gpg --decrypt /tmp/release.gpg 
gpg: AES256.CFB encrypted data
gpg: encrypted with 1 passphrase
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
marta@i11:~$ 


--------------------------------------------------

su -l pere

* gpg -a --output /tmp/release.pem --symmetric release

* cat /tmp/release.pem

-----------------------------------------------------


**PÁGINA 18**

* su -l pere


* gpg --list-keys (Claves públicas UID y SUBCLAVES)

1

* gpg --gen-key

    * perico prat pelut

    * perico@edt.org


* passphrase: perico


* gpg --list-keys

2




-----------------

* gpg --edit-key perico (**Vemos información la clave privada**)


* gpg --edit-key perico@edt.org

    * gpg> toggle

        * TOGGLE: 


* gpg> help



----------------

**TRUST**

**VALIDITY**


-----------------


* gpg --gen-key

* anna


------------

* su -l marta

* gpg -a --output /tmp/marta.pem --export marta --> Exportamos la clave de MARTA

* cat /tmp/marta.pem

--------

* su -l anna

* gpg --import /tmp/marta.pem --> Importa llaves

* gpg --list-keys --> Vemos las claves públicas

* gpg --edit-key marta --> Editamos la de MARTA

* gpg>


**TRUST**: unknown --> Sabemos si confia o no

**VALIDITY**: unknown --> Sabemos si confia o no

* gpg> quit

---------

* gpg -a --output /tmp/marta.pem --export (Sin especificar la clave de MARTA)

    * Se han procesado 2 porque una ya tenía.

    * Exporta todo la CLAVE.


* su -l anna

* gpg --import /tmp/marta.pem

    * Mira toda las las CLAVES o algunas CLAVEs.


* gpg --edit-key marta

    * unknown / unknown 

* gpg --edit-key pere

    * unknown / unknown


* gpg> 

-----

* su -l pere

* gpg -a --output /tmp/release.pem --clearsign release

* cat /tmp/release


------

* su -l anna

* gpg --decrypt /tmp/release.pem

    * Validando la integridad --> Good signature --> No sé si Pere es pere de verdad. La signatura es Buena, pero no sé si es Pere.

        * Porque las claves que tiene están firmadas / verificadas.




* su -l marta

* uname -a > uname

* gpg -a --output /tmp/uname.pem --clear-sign uname

    * passphrase



* su -l anna

* gpg --decrypt /tmp/uname

    * Validando la integridad --> Good signature --> No sé si Pere es pere de verdad. La signatura es Buena, pero no sé si es Pere.

        * Porque las claves que tiene están firmadas / verificadas.

    (ídem)

------------------

* su -l anna


* Anna firma la llave de Marta.

1. Fingerprint

* gpg --fingerprint (de Marta)

2. gpg --edit key marta

3. gpg> sign

4. gpg> y

5. gpg> check


* gpg --decrypt /tmp/uname

    * GOOD SIGNATURE


* gpg --decrypt /tmp/release.pem

    * BAD SIGNATURE



* gpg --edit-key marta@edt.org

* gpg>


    * **Validity full = Mirar el DNI**.

    * **TRUST**: Uknown, no lo sabemos.
    



* gpg --edit-key pere

* gpg>


    * **Validity full = Mirar el DNI**.

    * **TRUST**: Uknown, no lo sabemos.
    
    * **VALIDITY**: Undefined.



#### CONCEPTO DE LA CONFIANZA.

* PKI = Public Key Infraestructure.

    * Autoridades de certificación.

* GPG:

    * **Web of trust**.

        * Nadie dice quien es una autoridad.

        * Cada usuario tiene que decir a **QUIEN CONFIA O A QUIEN NO**.

        * Si pere es amigo de marta y pere ha firmado el certificado de marta.



------------


#### CAMBIAR LA CONFIANZA

* su -l anna

* gpg --edit-key marta@edt.org

* gpg> trust 5

* y

* gpg> list

    * La clave publica pasa a TRUST ULTIMATE.

* gpg> quit



* gpg --edit-key pere

    * FULL

------------------------------------


* Trust to validate Keys. (**PDF**)

* Web of trust.

* Si te lo dicen 3 personas, automáticamente confiarás en una.

* gpg.conf

    * La cadena tiene que ser como máximo 5 personas.