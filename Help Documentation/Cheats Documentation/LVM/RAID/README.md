# M11-SAD Seguretat i alta disponibilitat
## Escola Del Treball
### 2HISX 2021-2022
### Aaron Andal

## INDEX

* **RAID**: [LVM](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid)

    * **¿QUÉ ES RAID?**: [WHAT IS RAID](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid)

* **TIPOS DE RAID**: [RAID TYPES](https://github.com/KeshiKiD03/lvm/tree/main/RAID#tipos-de-raid)

    * **RAID 0**: [RAID0](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-0-performance)

    * **RAID 1**: [RAID1](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-1-redundancy)

    * **RAID 2**: [RAID2](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-2)

    * **RAID 3**: [RAID3](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-3)

    * **RAID 4**: [RAID4](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-4-error-checking)

    * **RAID 5**: [RAID5](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-5-distributed-error-checking)

    * **RAID 6**: [RAID6](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-6-redundant-error-checking)

    * **RAID 0+1**: [RAID0+1](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-01)

    * **RAID 1+0**: [RAID1+0](https://github.com/KeshiKiD03/lvm/tree/main/RAID#raid-10-raid-10)


* **PRACTICAS RAID: HOWTO 1: Trabajo Básico con RAID**: [PT1](https://github.com/KeshiKiD03/lvm/tree/main/RAID/Pr%C3%A1ctica%201%20(HOWTO):%20Trabajo%20B%C3%A1sico%20con%20RAID)

* **PRACTICAS RAID: HOWTO 2: RAID 5**: [PT2](https://github.com/KeshiKiD03/lvm/tree/main/RAID/Pr%C3%A1ctica%202%20(HOWTO):%20RAID%20LEVEL%205)

## RAID

### ¿QUE ES RAID?

**Reduntant Array of Inexpensive Disks**

* The basic idea behind RAID is to combine multiple small, inexpensive disk drives into an array to accomplish performance or redundancy goals not attainable with one large and expensive drive. 

* La idea del **`RAID`** es **`combinar`** múltiples pequeños discos en un **`ARRAY`** para incrementar el **`RENDIMIENTO`** o la **`REDUNDANCIA`** no alcanzables con un solo disco **`CARO`**.

* This array of drives appears to the computer as a single logical storage unit or drive.

* Este **`ARRAY DE DISCOS`**, aparecen como un único **`ALMACENAMIENTO LÓGICO`** o **`UNIDAD`**.

* RAID permite que la información se **`propague`** en diferentes discos.

* El **`OBJETIVO`** del RAID es dividir y replicar la información en diferentes discos duros, y a parte incrementar la **`FIABILIDAD`** de la **`TRANSFERENCIA`**.

* RAID usa técnicas como:

    * **`RAID0 --> Disk striping.`**.

    * **`RAID1 --> Disk mirroring`**.

    * **`RAID5 --> Disk striping with parity`**.

* **Todo para obtener `REDUNDANCIA`, baja `LATENCIA`, incrementar el `ANCHO de BANDA` y maximizar la habilidad de `RECUPERACIÓN` en caso de `FAIL`**.

------------------------------------------------------------------------------------------------------------------------------------------------------------------

**SOFTWARE RAID**

* Implementa varios RAID LEVEL en el Kernel (**`SOFTWARE`**).

* Es la más barata ya que no requieres controladores de disco o hot-swap chassis.

* Linux Kernel contiene **`MD`** --> **`Multi Disc`** driver que permite **`RAID`**

------------------------------------------------------------------------------------------------------------------------------------------------------------------

### TIPOS DE RAID

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 0 (Performance)

**`RAID0 = STRIPING / VOLUMEN DIVIDIDO`**.

* Orientado a striping o **distribución por bandas**.

**`NO TIENE REDUNDANCIA`**

* Los discos deben tener el **`mismo tamaño`** o uno **`mayor que otro`**.

* Distribuye los datos equitativamente entre **`DOS`** o más discos **`SIN INFORMACIÓN DE PARIDAD`** que proporcione **`REDUNDANCIA`**.

* Incrementa el **`rendimiento`**.

* Inconvenientes:

    * No existe **control de paridad** ni **tolerancia a fallos** --> No existe una garantía de **`integridad de datos`**.

    * Las **`posibilidades`** de `recuperar información` en un disco averiado es `0` en un RAID0.

![](http://www.mercadoit.com/blog/wp-content/uploads/2019/01/Raid-0.jpg)


------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 1 (Redundancy)

**`RAID1 = MIRRORING / VOLUMEN ESPEJO`**.

* Orientado a espejo o **distribución por igual**.

* Primer modo que realmente tiene **`REDUNDANCIA`**.

* Si uno de los discos **`FALLA`**, los datos permanecerán **`INTACTOS`** puesto que se dispone otro disco.

* **`Rendimiento`** de las lecturas es la **`SUMA`** de los rendimientos de los discos.

* Crea una **`copia exacta`** de un conjunto de datos en **`dos`** o **`más discos`**. 

* Resulta útil cuando el **`rendimiento en lectura`** es más importante que la **`capacidad`**.

* RAID1 sólo puede ser **tan grande** como el **más pequeño de sus discos**.

    * Es decir, si tienen tamaños diferentes, se quedará con el tamaño del **`más pequeño`**.

    * Ya que se trata de una **`COPIA DE OTRO DISCO`**, entonces su **`TAMAÑO`** será **`IGUAL`**.

    * Si tenemos **3 discos** de **1TB**, la capacidad que tendremos es **`1TB`** --> **`PORQUE ES UNA COPIA`**.

* Para **PERDER LOS DATOS**, tienen que **FALLAR TODOS los DISCOS**.

    * Así no tendremos un **`SISTEMA REDUNDANTE`**

* Inconvenientes:

    * **Costoso**.

        * Puesto que se copia la misma información en todos los discos, cada disco tiene un precio.

![](http://www.mercadoit.com/blog/wp-content/uploads/2019/01/Raid-1.jpg)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 2

**`RAID2 = RAID0 + RAID1`**.

* RAID0 y RAID1 a la vez.

* Se calcula con el código de Hamming.

* **Paridad de HAMMING**

![](https://www.profesionalreview.com/wp-content/uploads/2019/01/RAID-2.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### PARIDAD

**PARIDAD**: Para explicarlo de una forma sencilla, la paridad es la suma de todos los dispositivos utilizados en una matriz. 

Recuperarse del fallo de dispositivo es posible leyendo los datos buenos que quedan y comparándolos con el dato de paridad almacenado en el conjunto. 

La paridad es usada por los niveles de RAID 2, 3, 4 y 5. 

RAID 1 no utiliza la paridad puesto que todos los datos están completamente duplicados al tratarse de un espejo.

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 3

**`RAID3 = RAID0 + PARIDAD (EN BYTES)`**.

* Es redundante.

* Usa **`data striping`** con un **`disco de paridad`** dedicado.

* Necesita mínimo 3 discos.

* Permite tasas de transferencia **ALTAS**.

* Se usan **`2 discos tipo RAID0`** y uno para **`PARIDAD`**.

* Si **`perdemos uno`** de los discos, **`podremos recuperarlo`** mediante el **`bit de paridad`**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Raid3.png/800px-Raid3.png?20100124125409)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 4 (Error Checking)

**`RAID4 = RAID3 + PARIDAD (EN BLOQUES) - NO RECOMENDABLE`**.

* Parecido al RAID3, excepto porque divide a nivel de **`BLOQUES`** en lugar de **`BYTES`**.

* Todas las paridades están en el **`MISMO DISCO`**.

* La **`PARIDAD`** --> Es un archivo que con un cálculo puede recuperar lo que haga falta.

    * Ejemplo: (EX (Disc, Disc, Paritat): 7 4 28 --> x 4 28 --> sap que el que falta és 7)

* El problema que tiene es que genera un **`CUELLO de BOTELLA`** teniendo un **`SOLO DISCO COMO PARIDAD`**.

* RAID4 NO SE UTILIZA, por el tema del **`CUELLO DE BOTELLA`**.

    * **SOLO PUEDE FALLAR UN DISCO**

* El almacenamiento de RAID 4 es lo mismo que el **`miembro más pequeño`**.

![](https://static.thegeekstuff.com/wp-content/uploads/2011/12/raid4.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 5 (Distributed Error Checking)

**`RAID5 = RAID4 + PARIDAD REPARTIDA (STRIPPING CON PARIDAD) - MIN 3 DISCOS`**.

* Lo mismo que el RAID4, pero las PARIDADES se reparten por **`TODOS LOS DISCOS`**

* Es el modo RAID **`más util`** cuando uno desea **`COMBINAR`** un mayor número de **`DISCOS`** y todavía conservar **`REDUNDANCIA`**.

* La **`CAPACIDAD`** de almacenamiento se SIEMPRE equilamente a la **`SUMA`** de todos los **`DISCOS`** menos **`UNO`**

* **Si uno de los datos falla, todos los `datos permanecerán` intactos, gracias a la `información de paridad`**.

* **Si `dos discos` `fallan` simultáneamente, `todos los discos permanecerán`. RAID5 puede sobrevivir a un `fallo de disco`.**

* **SÓLO PUEDE FALLAR UN DISCO**

* **Es la que más se usa**

* **`RAID5 elimina`** el **`CUELLO DE BOTELLA`** que generaba RAID4.

* Si falla alguno, la RAID5 se puede calcular y corregir.

**EJEMPLO**

**Si tengo 3 DISCOS de 1TB a RAID5, ¿Cuanta capacidad de almacenamiento tengo?**

* **`2TB`**. 

* La **`PARIDAD`** está repartida a los **`3 discos`** y acabamos perdiendo **`1TB`**

![](http://www.mercadoit.com/blog/wp-content/uploads/2019/01/RAID-5.jpg)

![](https://www.intel.com/content/dam/support/us/en/images/chipsets/imsm/sb/img/raid5.jpg)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 6 (Redundant Error Checking)

**`RAID5 = STRIPPING CON PARIDAD DOBLE`**.

* Lo mismo que el **`RAID5`** pero a la hora de repartir los datos a todos los discos, se reparten **`más paridades`** (Dos paridades por DISCO DURO).

* **`SÓLO PUEDEN FALLAR 2 DISCOS!`**

![](http://www.mercadoit.com/blog/wp-content/uploads/2019/01/RAID-6.jpg)

#### RAID 0+1:

* RAID 1 + 0 hace **`STRIPPING y ESPEJO al MISMO TIEMPO`**

    * Se **`dividen`** en **`2 discos`** para aumentar la velocidad.

    * Al mismo tiempo están **`duplicadas`** en un otro disco, como mínimo. 

* Fem un RAID 1 sobre dos RAID 0 (tenim 4 discos d'1TB cadascún --> en total 4TB però aprofitables / útils només 2TB)

* Com fa el RAID 0, tindrem qúadruple (en aquest cas) de velocitat a l'hora de llegir i el doble a l'hora d'escriure

* **`NOMÉS PODEN FALLAR COM A MÀXIM 2 DISCOS (DEL MATEIX COSTAT!) `**--> NO POT FALLAR 1 DISC PER CADA COSTAT.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Raid0mas1.png/1024px-Raid0mas1.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### RAID 10 (RAID 1+0):

* Fem un RAID 0 sobre dos RAID 1 (tenim 4 discos d'1TB cadascún --> en total 4TB però aprofitables / útils només 2TB)

* Ídem al RAID 0 (quàdruple de lectura i doble d'escriptura)

* NOMÉS POT FALLAR 1 PER CADA COSTAT (JA QUE SÓN UNA CÒPIA IDÈNTICA)

![](http://www.mercadoit.com/blog/wp-content/uploads/2019/01/Raid-10.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/RAID_10.svg/220px-RAID_10.svg.png)


![](https://github.com/KeshiKiD03/lvm/blob/main/Photos/raid6.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

### IMPORTANT:
```yaml
* dm --> device mapper (dispositiu que fa una assignació (taula de correspondència) entre els discos que ens inventem contra els real)
* md --> multi-disk = RAID
* Magin : <number> --> identifica la partició
```
------------------------------------




## PRÁCTICA 2: RAID LEVEL 5

### 1. RAID5: Degradar i FAILED

### 2. RAID5: Degradar i RECUPERAR

## PRÁCTICA 3: START / STOP / ASSEMBLE / MD127

### 1. Ordre MDADM

### 2. Exemple 1: Regeneració Automàtica / Regeneració per nom de RAID

### 3. Exemple 2: Assemble indicant les parts

### 4. Exemple 3: Múltiples RAID

## Reshape: Raid-Devices / Level / Size

### 1. Reshape RAID Devices

### 2. Exemple 1: Regeneració Automàtica / Regeneració per nom de RAID

### 3. Reshape: LEVEL

#### Convertir un RAID1 a un RAID5

#### Impossibily Level Change

### 4. Reshape: SIZE
