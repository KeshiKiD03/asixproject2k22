# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

https://geekland.eu/aprender-markdown-en-minutos/ 

#### EMOJIS CHEATSHEET

👹 🤬  😍 🥰  🥺  👾  👽  👍  🔥  🌈 ☀️  🌤 ☄️  🚧 ☢️ 

☣️ ⛔️  💮  🆚 ❗️ ❗️ ❗️ ❓ ❓  💯 ❤️‍🔥  💛  🧡  💟 


## CHEAT SHEET COMANDOS

* `gpg --gen-key` --> Generar CLAVES GPG

* `gpg --full-generate-key`

* `gpg --gen-revoke` --> Revocar una clave

* `gpg --export [UID]` --> Exportar la clave de un usuario

* `gpg --list-keys` --> Muestra todas las claves presentes.

* `gpg --fingerprint` --> Mira el fingerprint de una persona

* `gpg --list-secret-keys` --> Mira el listado de claves privadas.

* `gpg --delete-key [UID]` --> Borra una clave pública.

* `gpg --delete-secret-key` --> Borra clave privada.

* gpg --edit-key UID --> Edita una clave

    * gpg> sign --> Firma una clave.

    **Grado de confianza:**

    1. Don't know (No lo sé)

    2. I do NOT Trust (No confío)

    3. I trust marginally (Poco)

    4. I trust fully (Mucho)

**CIFRAR Y DESCIFRAR**

* gpg -u UID / --local-user UID --> Cuando hay más claves privadas en el llavero. Si eso pasa se puede seleccionar con -u

* gpg -r / --recipient --> Para cifrar un fichero con su clave (Del destinatario)

* gpg -e [FICHERO] --> Para CIFRAR lo siguiente.

* gpg --encrypt [FICHERO] --> PARA CIFRAR EL FICHERO.

    * gpg -er [UID_DESTINATARIO] [FICHERO]

* gpg --armor / -a --> Para uso de **.pem**. Será tipo ASCII de 7 BITS.

---------------

**CIFRAR CON ARMOR Y RECIPIENT**

* gpg -a -er [UID_DESTINATARIO] [FICHERO]

---------------

**DESCIFRAR**

* gpg -d [FICHERO]

* gpg --decrypt [FICHERO] --> MUESTRA POR PANTALLA

* gpg --decrypt [FICHERO] -o [FICHERO] --> Lo guarda en un fichero.

---------------

**FIRMAR**

* gpg -s [FICHERO] --> Firma con nuestra clave.

* gpg --sign [FICHERO] --> 

**CLEARSIGN**

* gpg --clearsign [FICHERO] --> Lo firma en formato ASCII.

**DETACH SIGN**

* gpg -b [FICHERO] --> La signatura también se puede generar en un fichero separado. Recomendable cuando se firman ficheros binarios (Comprimidos).

* gpg --detach-sign [FICHERO] --> Lo mismo que el anterior

* gpg -u [REMITENTE] -r [DESTINATARIO] --armor --sign --encrypt [FICHERO.pem]

-----------------

**VERIFICAR**

* gpg --verify [FICHERO] --> Verifica la firma - Sólo funcionará si tiene la clave pública del remitente.

* 

* 

* 

* 

* 

* 

* 

* 
* 

* 

* 
* 

* 

* 
* 

* 

* 
* 

* 

* 
