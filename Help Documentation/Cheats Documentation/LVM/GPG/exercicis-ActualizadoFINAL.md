# Pràctiques GPG

### Exercici 1:
* Usuaris: pere, marta i anna

### Documentació:
* useradd -m -s /bin/bash [pere/anna/marta]
* passwd [pere/marta/anna]
* login [pere/marta/anna]
* gpg --full-generate-key --> Generem les claus pública i privada) (Prenem 'enter' (selecciona RSA per defecte), tornem a premer 'enter', tornem a premer 'enter', 'yes') --> Fiquem la informació de l'usuari.
* ls -l .gnupg/ --> Veiem informació del directori 'gpg' (pubring --> llavero)
* gpg --list-keys --> Llistem les claus (ultimate --> confirma que la clau és seva 100%)
* gpg --output /tmp/pere.gpg --export pere@edt.org--> Propaguem la clau pública i ens genera un fitxer a '/tmp'
* file /tmp/pere.gpg --> Ens diu el 'tipus' de fitxer (fitxer que conté valors binaris)
* useradd -m -s /bin/bash marta
* gpg [--armor/-a] --output /tmp/pere.pem --export pere@edt.org --> Generem fitxer amb 'capçalera' i 'peu' (document PEM) --> fitxer ASCII --> si no possem 'output' ho 'vomita' per pantalla
* file /tmp/pere.pem --> Fitxer conté valor 'pem'
* gpg --full-generate-key --> Com Marta generem les claus públiques i privades
* gpg --list-keys
* gpg --import /tmp/pere.pem --> Importem la clau de pere
* gpg --list-keys --> Llistem les claus (Té la seva i la d'en Pere.
* gpg --edit-key [pere@edt.org/<id-pub>]--> Editem la clau d'en Pere (necessitem el uid de la seva clau (pub) o en correu d'en pere) --> ENTRAREM DINS D'UN EDITOR DE CLAUS
* ggp> fpr --> Finger print de la clau pública d'en Pere
* gpg --fingerprint --> Com a Pere, confirmem el 'finger print' i li 'diem' a la Marta perquè comprovi que és el seu fingerprint
* gpg> sign --> Signem la clau pública utilitzant la clau privada de la Marta (ens demanarà la 'passhprase' DE LA MARTA)
* gpg> check --> Veiem que ha pasat (no surtirà res encara que estigui firmada fins que sortim)
* gpg --list-keys --> Com a Marta llistem les claus (en la uid d'en Pere ara possa full, abans unknown)
* head /etc/passwd > /tmp/dades --> Generem un fitxer per enviar-li dades al Pere
* gpg --output /tmp/dades.gpg --encrypt --recipient pere@edt.org /tmp/dades --> Enviem el fitxer amb les dades però ho encriptem
* ls /tmp/dades.gpg --> Comprovem que s'ha creat el fitxer
* gpg -a --output /tmp/dades.pem --encrypt --recipient pere@edt.org /tmp/dades --> Ara generem les dades però de format 'pem'
* cat /tmp/dades.pem
* gpg --decrypt /tmp/dades.gpg --> Ens demanarà la 'passhprase' (LA D'EN PERE)
* gpg --output prova --decrypt /tmp/dades.pem --> Desencriptem i fiquem el resultat en un fitxer anomenat 'prova'
* cp /etc/os-release release --> Generem un fitxer per enviar a la Marta de manera 'signada'
* gpg --sign release --> Signem el fitxer (ens geenra un fitxer 'release.gpg')
* file release.gpg --> Comprovem de quin tipus és el fitxer
* rm release.gpg
* gpg --output /tmp/release.gpg --sign release --> Escollim la ubicació i nom del fitxer.
* ggp -a --output /tmp/release.pem --sign release --> Generem el '.pem'

**El missatge està signat per no encriptat**

* gpg --decrypt /tmp/release.gpg --> Com a marta ho desencriptem, ens mostra el contingut i la informació de la signatura (comprovem que la signatura és la d'en Pere ja que tenim la seva clau pública (ens surt 'full'))
* gpg --output prova --decrypt /tmp/release.gpg --> Dins del fitxer només ens ficarà les dades, la info de la signatura NO
* gpg --decrypt /tmp/release.pem --> El resultat és igual que al '.gpg'
* cp release /tmp
* gpg --output /tmp/release.sign --detach-sign release --> Signem el fitxer de manera 'detach' (li enviem de manera 'detach') --> 'release' és un fitxer que només tindrà la signatura
* gpg --decrypt /tmp/release.sign --> Verifiquem que és la firma d'en Pere
* gpg --verify /tmp/release.sign /tmp/release --> VERIFIQUIEM EL CONTINGUT DEL 'FILE' MITJANÇANT LA FIRMA!!!!!!
* vim /tmp/release --> Modifiquem el fitxer com a Pere
* gpg --verify /tmp/release.sign /tmp/release --> Com a Marta ara ens dirà 'BAD signature' ja que no hem rebut el que s'esperava.
* gpg --output /tmp/release.gpg --clearsign release --> Com a Pere signem el document 'release' generant un 'release.gpg' però fem una firma en plà (EL MÉS NORMAL ÉS FER ELS 'detach')
* cat /tmp/release.gpg --> Comprovem que tenim un document amb el contingut i la firma
* gpg --output /tmp/release.gpg --symmetric release --> Com a Pere, encriptem el fitxer amb 'criptografía simètrica) --> Ens demanarà una 'passhprase' (secret compartit amb Marta)
* gpg --decrypt /tmp/release.gpg --> Ens demana la 'passhprase' que hem posat a dalt.
* gpg -a --output /tmp/release.pem --symmetric release --> (Com a Pere) Ídem però format '.pem'
* gpg --list-keys --> (Com a Pere)
* gpg --gen-key --> (Com a Pere) --> perico prat pelut, perico@edt.org, 'passhprase' (perico), ara en Pere tindrà 2 claus públiques i privades
* gpg --edit-key perico --> Editem la clau 'perico' com a Pere
* gpg> [list/toggle] --> Llistem informació de la clau privada
* gpg> help --> Veiem totes les comandes posibles dins de l'editor de claus
* gpg --gen-key --> Generem les claus com a Anna (anna arnau aregall, anna@edt.org, 'passhprase' (anna))
* gpg -a --output /tmp/marta.pem --export marta --> Exportem les claus (com a Marta)
* cat /tmp/marta
* gpg --import /tmp/marta.pem --> Importem les claus de Marta (com Anna)
* gpg --list-keys --> Com Anna llistem les claus
* gpg --edit-key marta --> Com Anna editem
* gpg> trust: unknown --> No sabem si confiem o no | validity: unknown --> No sabem si es vàlida o no
* gpg -a --output /tmp/marta.pem --export --> Com a Marta exportem les dos claus
* gpg --import /tmp/marta.pem --> S'han processat 2 claus però importa 1 (la de Pere, ja que la seva pròpia (pbúclica) i la de Marta ja la teníem)
* gpg --edit-key [marta/pere] --> Segueix dient 'unknown' tan a 'trust' com a 'validity'
* gpg -a --output /tmp/release.pem --clear-sign release --> Com a Pere signem 'release'
* gpg --decrypt /tmp/release.pem --> (Com Anna) No sap que Pere és qui diu ser perquè les claus que té no estàn verificades
* uname -a > uname --> Com a Marta
* gpg -a --output /tmp/uname.pem --clear-sign uname --> Com a Marta envíem
* gpg --decrypt /tmp/uname.pem --> Com a Anna
* gpg --edit-key marta --> Com a Anna editem la clau pública de 'Marta'
* gpg> sign --> Com a Anna signem
* gpg --decrypt /tmp/uname.pem --> Com a Anna ara ja ens surt validada
* gpg --edit-key marta --> Com a Anna ara ja tenim 'validity: full' perquè ja està signada, pero segueix sense creure a Marta
* gpg --edit-key pere --> Segueix sense estar valdiat i no confia en ell

**trust: unknown --> PERQUÈ NO CONFÍA EN MARTA QUAN AQUESTA LI DIU QUI ÉS Pere**

* gpg --edit-key marta --> Com Anna
* gpg> trust --> 5 --> y (Li diem que confiem al màxim)
* gpg> trust: ultimate --> Ara ja està a 'ultimate'
* gpg --edit-key pere --> Només ha cambiat 'validity' (No confía en Pere)
* gpg --decrypt /tmp/release.pem --> Good signature!

**La cadena de confiança només pot ser de 5, ha de confiar en 3.**
