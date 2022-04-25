# Rubén Rodríguez García - ASIX M11
# RAID (Redundant Array of Independent Disks)

### RAID 0:
* Segmenta les dades en un o dos discos per poder escriure més ràpid (és fa la feina en
paral·lel. 
* No proporciona CAP seguretat.

### RAID 1:
* Consisteix en crear un mirror de l'altre disk (contenen el mateix), no cal que els discos siguin igual físicament ni que tinguin la mateixa mida.
* Si tenen diferents mides, quedarà tot a la mida del més petit (el més intel·ligent és que tinguin apropximadament la mateixa mida)
* Si cau un disc seguirem tenint totes les dades.
* Per llegir és més ràpid però per escriure és igual.
* El principal inconvenient és els diners, has de gastar més diners ja que has de tenir 2 discos iguals.

**Si tinc 3 discos d'1TB quant espai tinc?**

1 TB ja que són 3 discos iguals.

**Quants discos han de fallar per perdre totes les dades?**

Han de fallar tots els discos perquè no tinguem un sistema redundant.

### RAID 4:
* Paritat --> Un arxiu que amb un càlcul és pot recuperar el que falta. 
(EX (Disc, Disc, Paritat): 7 4 28 --> x 4 28 --> sap que el que falta és 7)
* No s'utiltiza perquè totes les paritats estàn al mateix disc, això genera un 'coll d'ampolla'.
* NOMÉS POT FALLAR 1 DISC!

### RAID 5 (mínim 3 discos):
* Ídem al 4, però les dades de control estàn repartides en tots els discos.
* NOMÉS POT FALLAR 1 DISC!

**Si escric a RAID 5 i tinc 3 discos d' 1TB, quanta capacitat d'emmagatzematge de dades tinc?**

2 TB ja que la partitat està repartida als 3 discos i acabem perdent 1 TB.

### RAID 6:
* Ídem al 5, però a l'hora de repartir les dades a tots els discos, és reparteix més paritat (2 paritats per DD)
* NOMÉS PODEN FALLAR 2 DISCOS!

**Si escric a RAID 6 i tinc 5 discos d' 1TB, quanta capacitat d'emmagatzematge de dades tinc?**

3 TB ja que la paritat està repartida als 5 discos i acabem perden 2 TB.

### RAID 0+1:
* Fem un RAID 1 sobre dos RAID 0 (tenim 4 discos d'1TB cadascún --> en total 4TB però aprofitables / útils només 2TB)
* Com fa el RAID 0, tindrem qúadruple (en aquest cas) de velocitat a l'hora de llegir i el doble a l'hora d'escriure
* NOMÉS PODEN FALLAR COM A MÀXIM 2 DISCOS (DEL MATEIX COSTAT!) --> NO POT FALLAR 1 DISC PER CADA COSTAT.

### RAID 10:
* Fem un RAID 0 sobre dos RAID 1 (tenim 4 discos d'1TB cadascún --> en total 4TB però aprofitables / útils només 2TB)
* Ídem al RAID 0 (quàdruple de lectura i doble d'escriptura)
* NOMÉS POT FALALR 1 PER CADA COSTAT (JA QUE SÓN UNA CÒPIA IDÈNTICA)

### IMPORTANT:
* dm --> device mapper (dispositiu que fa una assignació (taula de correspondència) entre els discos que ens inventem contra els real)
* md --> multi-disk = RAID
* Magin : <number> --> identifica la partició
