# Planteamiento
#### Necesario:

- [ ] 1 SOA
- [ ] 1 Forwarder
- [ ] 1 Kali
- [ ] 3 Clientes

#### Practica:

* Primero hay que montar __los dos servidores__ (SOA y Forwarder).
* Mientra que ambos esten conectados a __un bridge__, el Forwarder tambien esta conectado a la __red int.__ : __cryptosec__.

> **Nota**: *es recomendable ir verificando todo para arreglar con antelacion fallos inprevistos.*

### Maq . SOA

1. Encendemos la maquina con su conexion __bridge__.

2. Configuramos y/o comprobamos que tenga las __IPs corresponientes__.

3. Verificar la __conexion de su IP__.

4. Configuramos la __zona ``cryptosec.net``__.

5. Reiniciamos el __DNS SOA__.

6. Configuramos el __DNS resolv__.

7. Verificar el __DNS__.

8. Verifica el __apache__ con nuestra pagina web cryptosec.

### Maq . Forwarder

1. Encendemos la maquina con sus dos conexiones (__bridge y cryptosec__).

2. Configuramos y/o comprobamos que tenga las __IPs corresponientes__.

3. Verificamos que haya __conexion en las IPs__.

4. Encendemos el __DHCP__ (ya esta encendido).

5. Ejecutamos el __iptables__ (no esta encendido).

6. Encendemos el __DNS forwarder__ (no esta encendido).

7. Configuramos el __DNS resolv__.

8. Verificamos el __DNS__.

## Maq . Hacker

1. Encendemos la maquina con su conexion __bridge__.

2. Comprovamos la ip que cargamos

3. Configuramos una __ruta de acceso__ a la red cryptosec.

4. Verificar la __conexion de su IP__ con la red cryptosec.

## Maq . Cliente

1. 