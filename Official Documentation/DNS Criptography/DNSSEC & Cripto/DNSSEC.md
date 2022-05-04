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

* **Introducció**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Descripció**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Practica**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


* **Bibliografia**: [Plantilla](https://github.com/KeshiKiD03/asixproject2k22/)


# DNSSEC (Dominion Name System Security Extension)
## Introducció
Unes de les tante defenses d'Internet es el __sistema de noms de domini__, o bé ***DNS***. Aquest protocol te com a objectiu traduir els noms de domini que utilitza l'usuari en adreces IP que es poden interpretar les maquines.

Els DNS treballen amb bases de dades en els que s'__emmagatzema els registres__ amb l'informació dels __dominis__ i les seves __IP__. La seva seguretat el fa capaz quan intenten falsificar els registres, pero encara es vulnerable als __redireccionament__ a __lloc maliciosos__ i __suplantació__, o també l'__intercepció de trafic__.

<img src="Photos/dnssec_atac01.jpg" style="width: 45%"> <img src="Photos/dnssec_atac02.jpg" style="width: 45%"><br><br>

Per donar sol·lució aquells problemes es va dissenyar lo que es coneixe com __extension de seguretat pel sistema de noms de domini__, o bé DNSSEC.

## Descripció
**Que es?**
Afegeix una capa de seguretat adicional als servidors DNS d'un domini. Gracies a allo es preveixen un gran quantitat de posibles activitats malicioses. Aquesta extensió comprova l'integritat i autenticació de les dades.

**Com funciona?**
Les noves funcions d'aquest protocol estan basades en la __criptografia asimetrica__, tambe coneguda com __criptografia de claus publiques i privades__. Mitjançant el us de les clau i les firmes generades a partir de les claus, que es pot saber __si l'informacio ha sigut modificat o no__.

Quan un client realitza una recerca de domini que compta amb DNSSEC, en el proces s'envia l'informació necessaria per resolver la recerca (adreça IP del domini que esta buscant). Pero tambe s'envien unes quantes firmes de les claus associades als diferents servidors DNS que esta consultant.

Si al comprovar aquestes firmes no coinceixen les uns amb les altres, la consulta no pot se valida como legitimad doncs la cadena de confiança s'ha trencat i por lo tant no es segur accedir aquell lloc web. Pel contrari, si coincideixen les uns amb les altres, l'usuari podrà accedir ja que el proces ha sigut autenticat i la cadena de confiança no s'ha trencat.

## Practica

## Bibliografia
- https://www.dondominio.com/help/es/266/dnssec-que-es-y-como-funciona/
- https://www.incibe.es/protege-tu-empresa/blog/dnssec-asegurando-integridad-y-autenticidad-tu-dominio-web
- 