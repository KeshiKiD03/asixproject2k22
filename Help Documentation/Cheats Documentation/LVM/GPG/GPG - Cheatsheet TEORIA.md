# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

https://geekland.eu/aprender-markdown-en-minutos/ 

#### EMOJIS CHEATSHEET

👹 🤬  😍 🥰  🥺  👾  👽  👍  🔥  🌈 ☀️  🌤 ☄️  🚧 ☢️ 

☣️ ⛔️  💮  🆚 ❗️ ❗️ ❗️ ❓ ❓  💯 ❤️‍🔥  💛  🧡  💟 


## CHEAT SHEET

`Clasificación de Criptografías`

* Criptografía de **Clave Simétrica**:

    * *Menor coste* que los *Asimétricos*.

    * Cifrar y descrifrar con la simétrica es más rápido y requiere claves más pequeñas y menos coste.

    * Ambos son robustos pero no se puede decir que unos son mejores o que cifran mejor.

    * **USA LA MISMA CLAVE PARA ENCRIPTAR Y DESENCRIPTAR.**

    * El problema del Cifrado Simétrico es que esta clave es **COMPARTIDA** en 2 interlocutores --> Problema de compartir el **SECRETO de forma segura**.

    * Tiene buen rendimiento para **cifrar flujos continuos** --> **TCP**.



* Criptografía de Clave Asimétrica:

    * Mayor coste, usa Dos Llaves diferentes --> **CLAVE PRIVADA Y CLAVE PÚBLICA**.

    * Se usan como pareja para conseguir el **CIFRADO y FIRMADO**.

    * Se interpreta algo que se ha **HECHO** y que se puede **DESHACER**.

    * La clave Privada se tiene que mantener fuera, es sólo **SECRETO**.

    * La clave pública se tiene que **PROPAGAR A OTROS**.

    * Para **`CIFRAR`**, se **CIFRA CON LA CLAVE PÚBLICA DEL DESTINATARIO**.

    * Para **`DESCIFRAR`**, el destinatario DESCIFRA con su **CLAVE PRIVADA**.

    * Para FIRMAR DIGITALMENTE se FIRMA con la CLAVE PRIVADA del EMISOR y el RECEPTOR verifica la FIRMA con la clave PÚBLICA del EMISOR.

    * Se usan dos claves para salver lo de COMPARTIR EL SECRETO.

        * Todo el mundo tiene una clave privada sin compartir y una clave pública apra compartir.

        * Algunos algorismos de clave asimétrica son RSA, DSA, Elgamal...


* Criptografía HÍBRIDA:

    * Es más rápida y menos costosa (**SIMÉTRICA**).

    * Tiene el inconveniente de que los dos interlocutores saben la clave simétrica (**SIMETRICA**).

    * Un mecanismo muy usado para comunicaciones seguras. --> Como son SSH o SSL --> Combinan los dos tipos de criptografías.

    * El asimétrico --> Claves pública/privada --> No hace falta compartir secreto.

    * Una vez establecida la comunicación segura de los dos INTERLOCUTORES --> Puede intercambiarse un **SECRETO COMPARTIDO** e iniciar una **COMUNICACIÓN CIFRADA SIMÉTRICA** que proporciona un rendimiento mejor para un CIFRADO de **Diálogo** contínuo **TCP**.

----------------------------------------------------------------------------------

* Claves:

    * Privada:

        * Clave del tipo RSA o DASA --> 1024, 2048 o 494 bits.

        * Mantener fuera de alcance.

    * Pública:

        * Van en par con la privada.

        * A partir de una clave privada se genera una pública.

        * Se transforman en certificados --> No son útiles.

    * Certificados:

        * Las claves públicas se convierten en --> "Certificados Digitales".

        * Una clave pública es avalada por una entidad.

        * Papel con un sello por alguna entidad certificadora...
        
        * Formato X509.

        * La finalidad 

        * Es asociar la CLAVE PÚBLICA de alguien a alguna **ENTIDAD**.

        * La finalidad de un CERTIFICADO es DEMOSTRAR que el POSEEDOR del certificado es QUIÉN DICE SER Y TIENE DERECHO A HACERLO. 

        * Un certificado válido para hacer:
        
            * *emailProtection* --> Identifica el usuario y permite cifrar y firmar contenido EMAIL.

            * serverAuth --> Identifica el servidor y le permite actuar como servidor usando SSL.

        * La **clave pública de Pere** no sabemos si realmente es de **Pere** o de algún otro. En cambio un **certificado de Pere**, es una clave pública donde algúno con **AUTORIDAD, LO AVALA**, indicando que realmente es **PERE**.

----------------------------------------------------------------------------------

**FORMATOS DE FICHEROS**

* PEM --> Formato más usual y por defecto. Contiene claves privada o pública en **FORMATO ASCII**. Se codifica en **base64** para luego generar un texto ASCII imprimible. Se le añaden **CABECERAS Y PIES**.

* DER --> **Formato Binario**.

* CIFRADO --> Se puede cifrar con contraseña como medida extra. 

* OTROS --> .cert, .crt, .crs, .key --> Mejor **.pem**

----------------------------------------------------------------------------------

**CREACIÓN DE CLAVES Y CERTIFICADOS**

Cada usuario puede crear su propia clave privada. Para crear la clave pública:

* Crear una clave "avalada" por ellos mismos --> **Certificados Autofirmados**.

* Crear una petición a una entidad de CERTIFICACIÓN (**Certification Authority**) --> Genera un certificado avalado por esta CA.

----------------------------------------------------------------------------------

**MODELO DE CONFIANZA**

* El emisor y receptor tienen que indicar el **nivel de confianza**.

* Depende del receptor si confía mucho o confía poco en algún emisor podrá hacer tales cosas.

* Para ello el emisor debe **avalar un certificado válido por alguna entidad certificadora** para hacer tales cosas.

* Ejemplo: Faltar a clase.

    1. Falta a clase --> Autofirmado --> Poca confianza.

    2. Falta a clase --> Lo firma su madre --> Firmado por entidad externa --> Lo creerá depende del papel de la madre.

    3. Falta a clase hijo del director --> El profesor se lo cree porque confía y conoce la **firma del director**.

    4. Falta a clase por médico --> Profesor se lo crre porque hay una **FIRMA OFICIAL**.

----------------------------------------------------------------------------------

**WEB OF TRUST** --> El usuario es responsable de confiar o no con otros CERTIFICADOS. No hay entidades de certificación. Si varias personas confían en otra persona automáticamente confiarás con una persona.

**PKI** --> Public Key Infrastructura --> Se basa en la confianza EMOSIRA del CERTIFICADO o CA.

### ELEMENTOS RELACIONADOS CON LA CONFIANZA

**CA self-signed** --> Una CA se auto firma a sí misma. Sólo dentro de la EMPRESA.

**CA top** --> Una CA autofirmada TOP. Es de nivel superior.

**CA delegada** --> Empresa que puede emitir ceritificados como delegados de una empresa de certificación superior.

**Cadena de confianza** --> PKI --> Estructura piramidal. Una CA delegada avalada por una entidad de grado superior.

**Llavero de claves** --> Todas las llaves se van acumulando en un llavero. Tienen la clave privada y la clave pública de cualquier emisor.

**HASH** --> Genera fingerprints, tiene que ver con FIRMAR. En las contraseñas son de formato MD5, **LOS HASHES SON EL RESUMEN DE LA CONTRASEÑA**. 

* Un algoritmo de hash es un resumen.

* SON:

    * MD5 --> Genera un resumen de 128 bits.

    * SHA1 --> Secure Hash Algorism.

----------------------------------------------------------------------------------

**FIRMAR HÍBRIDO**

1. Se genera un **hash** o un **resumen del mensaje**.

2. Este resumen se cifra con la **clave privada del emisor**. Sólo el **`resumen`**, no todo el mensaje.

3. El **receptor calcula** un **resumen** del mensaje que **recibe** (de la parte correspondiente al mensaje).

4. El **`receptor descifra`** el **hash** que ha **recibido**. Lo **descifra** con la **`clave pública`** del **emisor** y obtiene el **resumen original** que ha calculado el emisor.

5. Los **dos hash** deben ser **`iguales`**. Si lo son la firma digital es correcta, si no lo son es incorrecta.

Las condiciones que se cumplen son:

1. **`Se garantiza la autenticación`**. Sólo el emisor puede haber generado el mensaje si el hash es descifrable por la clave pública del emisor.

2. **`Se garantiza la integridad`**. Nadie más puede haber modificado el mensaje porque al hacerlo se hubiera modificado el hash que calcula el receptor y no coincidirían. 

    * Debido a que nadie más que el emisor tiene su clave privada un atacante puede modificar el contenido pero no puede firmarlo de nuevo (calcular el nuevo hash).

3. No es necesario cifrar todo el mensaje, sólo el hash, que es la parte que garantiza que no se ha modificado. 



----------------------------------------------------------------------------------

**CIFRAR HÍBRIDO**

1. El mensaje se cifra con una *clave simétrica*. 

    * Esta clave sólo la conoce el **`emisor`**.

2. Se utiliza una clave simétrica porque el cifrado es **menos costoso** computacionalmente que usando claves asimétricas.

3. La clave simétrica se **`encripta`** usando la **`clave pública`** del **`destinatario`**.

4. Es el mecanismo para enviar la *clave simétrica*, 'el **`secreto compartido`**' de forma segura.

5. Se envía el mensaje **cifrado(simétrico)** y la **`clave de cifrado (asimétrico)`**.

6. El receptor **desencripta** la clave de cifrado usando su **`propia clave privada`**.

7. Una vez sabe cuál es el '**`secreto compartido`**' puede pasar a **`descifrar`** el mensaje usando esta **`clave simétrica`**.

Las condiciones que se cumplen son:

1. Se encripta usando **`criptografía simétrica`** por ser más rápido y eficiente.

2. La **`criptografía asimétrica`** sirve para transferirse el '**`secreto compartido`**', la clave usada **`realmente para encriptar`**.

3. Estos tipos de claves se llaman **`claves de sesión`**. 