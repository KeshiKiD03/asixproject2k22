# UbuntuServer:Wireguard Aaron & Cristian
FROM ubuntu:latest
LABEL version="1.0"
LABEL author=" @aaron @cristian"
LABEL subject="Ubuntu Server - Wireguard"
RUN apt-get update
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y ubuntu-server procps iproute2 tree nmap vim nano systemd openssl 
RUN mkdir /opt/docker
COPY * /opt/docker/
RUN chmod +x /opt/docker/startup.sh
WORKDIR /opt/docker
#CMD /opt/docker/startup.sh
