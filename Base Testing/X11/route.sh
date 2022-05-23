#!/bin/bash
# Classe
#ip route add 192.168.3.0/24 via 10.200.243.168 dev eth0
# Casa
#ip route add 192.168.3.0/24 via 192.168.0.168 dev eth0
# Imagin
ip route add 192.168.3.0/24 via 192.168.31.168 dev eth0
route -n
