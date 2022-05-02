# IPTABLES 2021-2022
## Aaron Andal ASIX M11 2021-2022

# 28.04.22 - Ejercicio Práctico

Tenemos 2 redes distintas 192.168.12.0/24 y 192.168.13.0/24 están conectadas ambas por sus respectivos gateways (eno1) (FastEthernet0/0) y (FastEthernet0/1) del Router.

Están aisladas en una red Interna, xarxa A y xarxa B.

Debes hacer NAT - Accept para que puedan hacer PING al exterior.

Pueden hacer Resol de DNS porque la política de DNS está ACCEPT por DEFAULT.

Y podemos hacer un par de IPTABLES FORWARDING para DROP o ACCEPT. _Por ejemplo denegar acceder a Internet alguien en concreto_

Por último un PORT REDIRECTION con PREROUTING. Abrirermos los puertos 5001 y 5002 locales y se redirigirá a otra IP: puertos 13 y 7. 

Usaremos XinetD con los servicios 13 de Daytime y 7 de EchoServer.

1. Preparación de las IP en cada máquina

__ROUTER__

```
sudo bash

apt-get update

apt-get intall bind9-tools net-tools nmap iproute2 netstat
```

2. Ponemos las IP con ip address add y la gateway con ip route

```
ip a 

ip a show eno1 # Filtra

ip l # Ver ip a

ip r # Ver el enrutamiento

ip link set eno1 up # Está up

ip address add 192.168.12.1/24 dev eno1

ip r # Observamos
```

3. En los clientes A1 y A2

```

# A1

ip link set eno1 up # Está up

ip address add 192.168.12.2/24 dev eno1

ip r # Observamos

ip route add default via 192.168.12.1

ip r # Vemos que va al router

# A2

ip link set eno1 up # Está up

ip address add 192.168.12.3/24 dev eno1

ip r # Observamos

ip route add default via 192.168.12.1

ip r # Vemos que va al router

## OJO DNS SE DEJA TAL CUAL
```

3. Verificar la conectividad con un PING

```
ping 192.168.12.1

ping 192.168.12.2

ping 192.168.12.3

# Todavia no puede salir al exterior porque no tiene NAT ACTIVADO
```

4. Activamos la regla MASQUERADE para que haga NAT a fuera.

```
#! /bin/bash
# @edt ASIX M11-SAD Curs 2018-2019
# iptables

#echo 1 > /proc/sys/ipv4/ip_forward

# Regles flush
iptables -F
iptables -X
iptables -Z
iptables -t nat -F

# Polítiques per defecte: 
iptables -P INPUT ACCEPT
iptables -P OUTPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -t nat -P PREROUTING ACCEPT
iptables -t nat -P POSTROUTING ACCEPT

# obrir el localhost
iptables -A INPUT  -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# obrir la nostra ip
iptables -A INPUT -s 10.200.243.207 -j ACCEPT
iptables -A OUTPUT -d 10.200.243.207 -j ACCEPT

# Fer NAT per les xarxes internes:
# - 192.168.12.0.0/24
# - 192.168.13.0.0/24

iptables -t nat -A POSTROUTING -s 192.168.12.0/24 -o eno1 -j MASQUERADE
iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o eno1 -j MASQUERADE
```

5. Ejecutamos

```
bash ip-05-nat-Practica.sh
```

6. Verificamos con un ping 1.1.1.1 y DNS host gmail.com y telnet gmail.com 80


```
ping 1.1.1.1

ping 8.8.8.8

host google.com

host gmail.com

telnet gmail.com 80 
```

7. En otro PC B1 por ejemplo, instalamos XinetD y configuramos para abrir el puerto en TCP = Disable NO y reiniciamos xinet.

```
nmap localhost

13 daytime
```

8. Creamos un nuevo IPTABLE de FORWARDING para DENEGAR el acceso a INTERNET para la RED 192.168.12.0/24

```
# FORWARD
# Habilitar DNS
# IDA
#iptables -A FORWARD -s 192.168.12.0/24 -p udp -o eno1 --dport 53 -j ACCEPT
# Vuelta
#iptables -A FORWARD -i eno1 -p udp -d 192.168.12.0/24 --sport 53 -j ACCEPT

# Denegar navegar a Internet

#iptables -A FORWARD -s 192.168.12.0/24 -p tcp -o eno1 --dport 80 -j ACCEPT
#iptables -A FORWARD -i eno1 -p tcp --sport 80 -d 192.168.12.0/24 -j ACCEPT
```

9. Creamos otro para Port FORWARDING

```
# Port Forwarding a Daytime de la 192.168.13.2 port 13
iptables -t nat -A PREROUTING -i eno1 -p tcp --dport 5001 -j DNAT --to 192.168.13.2:13
iptables -t nat -A PREROUTING -i eno1 -p tcp --dport 5002 -j DNAT --to 192.168.13.2:7
```


10. Quedaría así

```
#! /bin/bash
# @edt ASIX M11-SAD Curs 2018-2019
# iptables

#echo 1 > /proc/sys/ipv4/ip_forward

# Regles flush
iptables -F
iptables -X
iptables -Z
iptables -t nat -F

# Polítiques per defecte: 
iptables -P INPUT ACCEPT
iptables -P OUTPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -t nat -P PREROUTING ACCEPT
iptables -t nat -P POSTROUTING ACCEPT

# obrir el localhost
iptables -A INPUT  -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# obrir la nostra ip
iptables -A INPUT -s 10.200.243.207 -j ACCEPT
iptables -A OUTPUT -d 10.200.243.207 -j ACCEPT

# Fer NAT per les xarxes internes:
# - 192.168.12.0/24
# - 192.168.13.0/24
iptables -t nat -A POSTROUTING -s 192.168.12.0/24 -o eno1 -j MASQUERADE
iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o eno1 -j MASQUERADE

# FORWARD
# Habilitar DNS
# IDA
#iptables -A FORWARD -s 192.168.12.0/24 -p udp -o eno1 --dport 53 -j DROP
# Vuelta
#iptables -A FORWARD -i eno1 -p udp -d 192.168.12.0/24 --sport 53 -j DROP

# Denegar navegar a Internet HOST DNS

#iptables -A FORWARD -s 192.168.12.2 -p tcp -o eno1 --dport 80 -j DROP

#iptables -A FORWARD -i eno1 -p tcp --sport 80 -d 192.168.12.2 -j DROP

# Port Forwarding a Daytime de la 192.168.13.2 port 13
iptables -t nat -A PREROUTING -i eno1 -p tcp --dport 5001 -j DNAT --to 192.168.13.2:13
iptables -t nat -A PREROUTING -i eno1 -p tcp --dport 5002 -j DNAT --to 192.168.13.2:7
```

<div style="padding: 5%">
  <img src="" /> 
</div>