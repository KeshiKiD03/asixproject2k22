# Enviar un missatge xifrat i signat de 'pere' a 'anna'
# gpg21

### Pràctica:
**Com a Pere:**

* head /etc/group > fitxer_group --> Generem un fitxer
* gpg --full-generate-key --> Generem la clau pública i privada

**Com a Anna:**

* gpg --full-generate-key --> Ídem
* gpg --output /tmp/anna.gpg --export anna@edt.org --> Generem fitxer amb la clau pública

**Com a Pere:**

* gpg --import /tmp/anna.gpg --> Importem la clau pública d'Anna
* gpg --edit-key anna --> Signem la clau pública d'Anna
* gpg> sign + quit
* gpg --output /tmp/fitxer_encriptat.gpg --encrypt --recipient anna@edt.org fitxer_group --> Encriptem el fitxer generat anteriorment amb la clau pública del receptor, Anna.
* gpg --sign /tmp/fitxer_encriptat.gpg --> Signem el fitxer (si no ho signem, no ens demanarà 'passhprase')

**Com a Anna:**

* gpg --decrypt /tmp/fitxer_encriptat.gpg --> Desencriptem el fitxer xifrat i signat que ens ha enviat pere.

### Observacions:

* gpg [-a] --output /tmp/fitxer_firma.sign[.pem] --detach-sign /tmp/fitxer_encriptat.gpg --> Generem un fitxer amb la firma a partir del fitxer que volem.
* gpg --verify /tmp/fitxer_firma.sign[.pem] /tmp/fitxer_encriptat.gpg --> Verifiquem a través del fitxer amb la firma el contingut del fitxer original.
