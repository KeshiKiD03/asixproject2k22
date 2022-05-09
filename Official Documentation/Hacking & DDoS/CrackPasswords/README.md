# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<br>

# __Ciberseguretat__: "_Careful where you step_" 🕵️ 🔎

<div style="align: center; width: 100%">
    <img src="https://tec.mx/sites/default/files/styles/header_full/public/2021-08/ciberseguridad-tec-de-monterrey.jpg?itok=H3ibmb8t" />
</div>

# Index

* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Lorem Ipsum**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


# Brute Force Attack (Hydra + Hashcat)

Si et diuen que "alomillor" la contrasenya està en un dels 2^10 bits i l'has de provar a mà un per un ... serà etern!

A Kali Linux, hi hà un métode millor on es pot implementar de forma automàtic, un "cracker password" d'estil d'atac _"Brute Force Attack"_.

L'eina que utilitzarem es __"Hydra"__. Hydra utilitzarà una _llista de passwords_ que creurà que son les _"bones"_, l'utilitzarà com a _diccionari._

Podem utilitzar una que ve per defecte: /usr/share/wordlists/rockyou.txt.gz, conté 4 milions de passwords.

<div style="align: center; width: 100%">
    <img src="./Crack1.png" />
</div>

## Métode simple

1. Creem un fitxer `wordlist.txt` i li posem les contrasenyes que _"potser son"_.

<div style="align: center; width: 100%">
    <img src="./Crack2.png" />
</div>

2. Executem la següent comanda sabent que l'usuari del servidor es `cryptosec`: `hydra -l "cryptosec" -P wordlist.txt 10.200.243.147 ssh` 

3. Voilà en uns minuts obtenim la contrasenya amb __Hydra__.

<div style="align: center; width: 100%">
    <img src="./Crack3.png" />
</div>

## Métode de HASH (Utilitzant HASHCAT)

__HASH__: És un resum d'una frase o una contrasenya en aquest cas. Està encriptat en alguns formats com MD5, SHA256... etc. S'emmagatzema en servidors on hi tenen IP (Information Provider).

Podem obtenir el "hash" d'algú i provar de trencar l'encriptació amb métodes offlne per _"crackejar"_ el hash, tardaríem molt de temps en saber quina contrasenya és. Per això implementarem de nou el __"Brute Force Attack"__. Executarem el _MD5 Algorithm_. 

<div style="align: center; width: 100%">
    <img src="./Crack5.png" />
</div>

<div style="align: center; width: 100%">
    <img src="./Crack4.png" />
</div>

Necesitarem:

+ El wordfile d'abans

+ Un _fitxer de hashes_

    + El creem un moment de /etc/shadows anomenat _"hashes.txt"_: 

```bash
sshd:*:19108:0:99999:7:::
systemd-coredump:!!:19108::::::
cryptosec:$6$vCZsSW3NvrkaM0fZ$9wOQfwC1Hitu7pVhxjR1xfdYJWaSjK0tO0vZl5/NWCyiFkcxIEY1Xs2gjoRC1T1U4Py6Pcj2sJOQ.DHZRLJQB1:19110:0:99999:7:::
lxd:!:19108::::::
bind:*:19115:0:99999:7:::
root@cryptosec:/home/cryptosec# 

```

HASHCat és una eina molt extensa, podem fer moltes proves a dins, per aquest exemple utilitzarem aquesta sintaxis: 
`hashcat -a [ATTACK MODE] -m [HASH TYPE] -o [OUTPUT FILE] [INPUTFILE] [DICCIONARIS]`

`hashcat -a 0 -m 1800 -o crackedpasswords.txt hashes.txt wordlist.txt`

```
# -a ## Attack mode
    0 = Straightsc
    1 = Combination
    3 = Brute-force
    6 = Hybrd Wordlist + Mask
    7 = Hybrid Mask + Wordlist

# -m ## Hash types
    0 = MD5
    1800 = SHA5-512(Unix)
    1000 = NTLM # Windows

```

L'executem:

<div style="align: center; width: 100%">
    <img src="./Crack9.png" />
</div>

__IMPORTANT__: Necesitaràs un mínim de 3 o 4GB de RAM en la màquina virtual ja que sino et donarà error de memoria.

__Voilà ja la tenim__

<div style="align: center; width: 100%">
    <img src="./Crack8.png" />
</div>

<div style="align: center; width: 100%">
    <img src="./Crack7.png" />
</div>