# DEMO KESHI ATTACK MAN IN THE MIDDLE - (ARP Cache Poisoning / Spoofing - Sniffing)

Herramientas:

- ETTERCAP

- BETTERCAP

- WIRESHARK

- ARP -A

- NMAP -sP GATEWAY/24

PROCEDURE:

1. Abrir Bettercap: 

    FER UN HELP I EXPLICAR ELS TIPUS QUE TÉ - BETTERCAP ES COM UNA VERSIÓ MILLORADA DE ETTERCAP.

    - Bettercap es un framework com Ettercap que permet fer atacs MITM - Man in the Middle.

    - Demo de ARP Cache Poisoning juntament amb Spoofing d'ARP

    - Cristian veurà els resultats en els resultats en el seu Wireshark.

    - La victima podrà detectar que li estan fent fent SPOOFING fent comandes sencilles d'auditoria com ARP o NMAP -sP.

    - Desde KALI veurem l'activitat de la víctima ja que serem MITM

2. Obrim el Bettercap per procedir a fer l'atac MITM - SNIFFING.

3. Amb aquesta comanda net.probe on analitzarem la nostra xarxa de la classe.

4. Per fer-ho més bonic, com s'hi diu a JSON o MONGODB , fer un PRETTY-FILE. Activarem la opció `ticker on`.

5. Obtindrem una taula ben ordenada de tots els dispositius connectats a la Xarxa.

6. A partir d'aquí jo el Black Hacker, m'estic frotant les mans per començar l'atac. Hem d'escollir una víctima.

7. Com ja sé a quin equip atacarem. "Ordinador de la CLASSE". 

8. En un bloc de notes apuntarem LES IPS I LES MAC que necessitem.

    - IP Y MAC KALI.

    - IP Y MAC ROUTER CLASSE.

    - IP Y MAC VICTIMA.

9. Ja podem tancar el ticker.

10. Fem un clear.

11. Des d'aquest punt ja podem fer l'atac MITM, començarem primer amb l'envenament de ARP.

Com havia comentat abans en la PRESENTACIÓ sobre ARP, en aquest cas farem un ENVERINAMENT dels dispositius IMPLICATS, fent creure que s'estàn comunicant amb el servidor o gateway PERO s'estàn comunicant amb NOSALTRES. - ÉS SPOOFING

12. FEM UN HELP ARP.SPOOF PER VEURE QUE HI TENIM A DINS.

13. Ens insteressa el FULL DUPLEX TRUE en aquest CAS ja que enverinarà el GATEWAY I EL HOST IMPLICAT. És a dir que atacará l'anada i la tornada.

14. També el TARGETS per dir que serà la víctima.

15. Sino també ho podríem fer per comandes fent un arpspoof -i eth0 -t [VICTIMA] [GATEWAY] com l'anada i 

arpspoof -i eth0 -t [GATEWAY] [VICTIMA]

I la deixariem fent.

15. PODREM - OBRIM EL WIRESHARK UN MOMENT ABANS DE POSAR-HO EN MARXA. I FILTREM PER ARP.

16. HO POSEM EN MARXA-.

set arp.spoof.fullduplex true
set arp.spoof.targets [IP VICTIMA]
arp.spoof on

17. A partir d'aquí activem el SNIFFER.

17. OBSERVEM AL WIRESHARK D'EN CRISTIAN QUE EL KALI ESTÀ FENT LA REDIRECCIÓ DE PAQUETS EN LA CONEXIÓ DE LA VÍCTIMA - GATEWAY AL SEU HOST I ENVERINANT LA CACHÉ D'AMBDÓS DISPOSITIUS FENT CREURE QUE S'ESTÀN COMUNICANT ENTRE ELLS, PERO NO, ESTÀN PARLANT AMB EL KALI. 

- JA QUE KALI HA FET CREURE QUE DESDE EL PUNT DE VISTA DE LA VICTIMA, LA GATEWAY AMB IP .1 TÉ LA MAC 34:17 ÍDEM AMB EL GATEWAY AMB LA VÍCTIMA, JA QUE HEM ACTIVAT EL FULL DUPLEX, més tard farem el mateix exemple pero des d'una xarxa INTERNA "CRYPTOSEC".

SEGONS WIRESHARK:

La víctima fa un ARP Request per saber la MAC del Router, mira en la seva ARP Table i no la té, li reenvia al ROUTER. Pero ja no es el ROUTER, contesta KALI dient que la GATEWAY està al seu ORDINADOR.

Lo mateix al GATEWAY amb LA VICTIMA.

18. Llavors estarem fent un ATAC MITM i estarem escoltant i monitoritzant lo que està fent l'usuari.

18. Desde el CLIENT com sabem que ens estàn fent SPOOFING? - Fer unes comandes sencilles.

19. INCLUS PODREM ROBARLI LES CREDENCIALS (ES L'EXEMPLE DE DESPRÉS), PERO NOMÉS EN PÀGINES HTTP - JA QUE HTTPS UTILITZA SSL PER ENCRIPTAR LA INFORMACIÓ.

HEM PROVAT TAMBÉ UN MÓDUL ANOMENAT SSL STRIP QUE TRENCA EL SSL I RETORNA A LA VICTIMA LA MATEIXA PÀGINA PERO EN HTTP.

20. Fem una prova. Eduard o quien sea, pots anar a una pàgina web qualsevol?

21. Com podrem observar podem veure l'activitat de l'usuari.

# DEMO KESHI - CRISTIAN (DNS Cache Poisoning - Spoofing)

Herramientas:

- ETTERCAP

- BETTERCAP

- WIRESHARK

- ARP -A

- NMAP -sP GATEWAY/24

- 

# DEMO FINAL DNSSPOOF CON BETTERCAP - SOA - FORWARD CRYPTOSEC STEAL (DNS CACHE POISON / SPOOFING) - SET - MITM

Herramientas:

- BETTERCAP

- ETTERCAP

- WIRESHARK

- ARP -A

- NMAP -sP GATEWAY/24

- Firefox


- POISON A SOA I FORWARD

- ELS CLIENTS DE LA XARXA INTERNA PREGUNTARAN AL SEU DNS (FORWARDER) I SERAN REENVIATS AL KALI. ARP SPOOFING I SI VOLEN ENTRAR A UNA NOVA PAG WEB KALI LI DONARA UNA WEB FALSA. 

1. PROVA SENCILLA DE DNS SPOOFING

Obrir APACHE2

2. Obrir BETTERCAP, fer el ARP SPOOF i HELP DNS SPOOF.

2. Amb el BETTERCAP obrir, fer el ARP SPOOF i fer DNS SPOOF un registre on the fly amb dns.spoof

