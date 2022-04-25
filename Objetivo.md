# __Projecte ASIX 2k22__
## __Escola Del Treball__
### __2HISX 2021-2022__
### __Aaron Andal & Cristian Condolo__

<br>
<br>

# __Ciberseguretat__: "_Careful where you step_" 🕵️ 🔎

<div style="align: center">
    <img src="https://tec.mx/sites/default/files/styles/header_full/public/2021-08/ciberseguridad-tec-de-monterrey.jpg?itok=H3ibmb8t" />
</div>



# Objectius "Projecte ASIX - Ciberseguretat: _Careful where you step_ 🕵️ 🔎"

L'objectiu principal d'aquest projecte de Ciberseguretat, és el bon funcionament d'una VPN - Virtual Private Network on englobem diferents serveis en funcionament, explicant breument cada cascuna dels diferents serveis que hi componen la nostra organització: __"CryptoSEC"__

<div style="align: center">
    <img src="https://serversideup.net/wp-content/uploads/2020/05/Wireguard-Ubuntu20.04-ServerConfiguration-1024x911.png" />
</div>

Durant aquest projecte, ens trobarem diferents reptes tant a nivell tècnic com en l'àmbit sistemàtic. Haurem de ser capaços de resoldre aquests reptes amb l'ajuda bé de diferents companys de classe, o de la informació investigada per Internet.

<div style="align: center">
    <img src="https://www.infinitiaresearch.com/wp-content/uploads/2021/09/design-research.png" />
</div>

En la recerca d'informació de tota la documentació, independentment de les seves funcionalitats, les bateries de proves, el control de versions fins a arribar a l'últim "_stage_" del projecte. Es farà un seguiment de tot lo que es fa, es farà i lo que s'està fent en hores de projecte.

<br>

Tenim una idea clara, _primer_ la recerca d'informació i recapitulació de tots els _serveis_ que utilitzarem, _segon_ un petit exemple de funcionament del servei en qüestió i finalment, l'assemblació al cos del projecte després de verificar que compleix tant de l'informàtica o concretament a la ciberseguretat: 

+ __L'atomicitat__ :Verificar que una operació s'ha realitzat o no, per tant no es pot quedar a mitjes.

+ El __control d'errors__: És imprescincible detectar on ens hem equivocat per poder corregir l'error o idear altres plans i proseguir amb el projecte.

+ L'__aïllament__: Mecanisme de seguretat que permetrà separar els programes en execució, per tal de mitigar errors del sistema o vulnerabilitats de software.

+ La __durabilitat__: Garantir la integritat de les dades i que no es borrin accidentalment.

+ L'__integritat & compatibilitat__: És important que hi hagi una compatibilitat en els serveis que s'instal·laràn a la 

<br>

## Ciberseguretat

+ La __VPN__: Xifrar sempre la navegació de l'usuari, aïllar la xarxa habitual per una més segura. Accés mitjançant claus o certificats.

+ __Xifratge de dades__:

+ La __investigació davant delicte__: Si es produeix un delicte dins de l'empresa, és molt important que es faci una investigació exhaustiva.

+ ____

<br>

# __Els objectius dels serveis de CryptoSEC__

### Wireguard VPN

+ __Aïllar__ la xarxa de CryptoSEC a una VPN on es permetrà la navegació a l'exterior i l'accés a la VPN sempre i quan siguin clients de CryptoSEC i tinguin accés a la nostra VPN amb Wireguard.

### Wazuh (Host Intrusion Detect)

### OpenSSL

### DNS Criptogràfic

### Samba

### Let's Encrypt ACME - Certbot

### Encrypted File Systems

### SSH

### RADIUS

### Deployment a Docker o Virtualbox

https://www.lpi.org/our-certifications/exam-303-objectives 

#### Docker

Docker --> docker run -it ubuntu:latest

# Ubuntu1 VPN WireGuard + Wazuh o RADIUS + Iptables

* Desplegament Ubuntu Server

ubuntu# apt-get update && apt-get install -y ubuntu-server

* Tendrá Wireguard VPN

Implementación de VPN con WireGuard.

* 5 clients (wireguards client), un cliente será debian - fedora - ubuntu - otras 2

# Ubuntu2 DNS Cripto + Par claves Priv Pub + OpenSSL

* Desplegament Ubuntu Server con DNS. Uno principal + Uno secundario y tendrá DNS Sec

### VirtualBox

# Ubuntu3 Samba

---------

# AWS (Desplegar 3 servidores)

# Local (Conectarnos a la WireGuardVPN) - 2 host

Desde local abrir un Tunel VPN de WireGuard a AWS para que se pueda conectar a la VPN y tener servicios de DNS - Samba etc.

--------------

* 331.4 DNS and Cryptography

### Description: Candidates should have experience and knowledge of cryptography in the context of DNS and its implementation using BIND. The version of BIND covered is 9.7 or higher.

Key Knowledge Areas:

### Understand the concepts of DNS, zones and resource records

### Understand DNSSEC, including key signing keys, zone signing keys and relevant DNS records such as DS, DNSKEY, RRSIG, NSEC, NSEC3 and NSEC3PARAM

### Configure and troubleshoot BIND as an authoritative name server serving DNSSEC secured zones

### Manage DNSSEC signed zones, including key generation, key rollover and re-signing of zones

### Configure BIND as an recursive name server that performs DNSSEC validation on behalf of its clients

### Understand CAA and DANE, including relevant DNS records such as CAA and TLSA

### Use CAA and DANE to publish X.509 certificate and certificate authority information in DNS

### Use TSIG for secure communication with BIND

### Awareness of DNS over TLS and DNS over HTTPS

Awareness of Multicast DNS

Partial list of the used files, terms and utilities:

    named.conf
    dnssec-keygen
    dnssec-signzone
    dnssec-settime
    dnssec-dsfromkey
    rndc (including relevant subcommands)
    dig
    delv
    openssl (including relevant subcommands)​


* Host Intrusion Detection (WAZUH)

Description: Candidates should be familiar with the use and configuration of common host intrusion detection software. This includes managing the Linux Audit system and verifying a system's integrity.

Key Knowledge Areas:

###     Use and configure the Linux Audit system

###     Use chkrootkit

###     Use and configure rkhunter, including updates

###     Use Linux Malware Detect

###     Automate host scans using cron

###     Use RPM and DPKG package management tools to verify the integrity of installed files

    Configure and use AIDE, including rule management
    Awareness of OpenSCAP

Partial list of the used files, terms and utilities:

    auditd
    auditctl
    ausearch, aureport
    auditd.conf
    audit.rules
    pam_tty_audit.so
    chkrootkit
###     rkhunter
###     /etc/rkhunter.conf
    maldet
    conf.maldet
    rpm
    dpkg
    aide
    /etc/aide/aide.conf

# 334.3 Packet Filtering (IPTABLES)

Weight: 5

Description: Candidates should be familiar with the use and configuration of the netfilter Linux packet filter.

Key Knowledge Areas:

    Understand common firewall architectures, including DMZ
    Understand and use iptables and ip6tables, including standard modules, tests and targets
    Implement packet filtering for IPv4 and IPv6
    Implement connection tracking and network address translation
    Manage IP sets and use them in netfilter rules
    Awareness of nftables and nft
    Awareness of ebtables
    Awareness of conntrackd

Partial list of the used files, terms and utilities:

    iptables
    ip6tables
    iptables-save
    iptables-restore
    ip6tables-save
    ip6tables-restore
    ipset

 
# 334.4 Virtual Private Networks (WIREGUARD)

Weight: 4

Description: Candidates should be familiar with the use of OpenVPN, IPsec and WireGuard to set up remote access and site to site VPNs.

Key Knowledge Areas:

    Understand the principles of bridged and routed VPNs
###     Understand the principles and major differences of the OpenVPN, IPsec, IKEv2 and WireGuard protocols
    Configure and operate OpenVPN servers and clients
    Configure and operate IPsec servers and clients using strongSwan
###     Configure and operate WireGuard servers and clients
    Awareness of L2TP

Partial list of the used files, terms and utilities:

    /etc/openvpn/
    openvpn
    /etc/strongswan.conf
    /etc/strongswan.d/
    /etc/swanctl/swanctl.conf
    /etc/swanctl/
    swanctl
###     /etc/wireguard/
###     wg
###     wg-quick
    ip



# 334.2 Network Intrusion Detection

Weight: 4

Description: Candidates should be familiar with the use and configuration of network security scanning, network monitoring and network intrusion detection software. This includes updating and maintaining the security scanners.

Key Knowledge Areas:

    Implement bandwidth usage monitoring
###     Configure and use Snort, including rule management
###     Configure and use OpenVAS, including NASL

Partial list of the used files, terms and utilities:

    ntop
###     snort
###     snort-stat
###     pulledpork.pl
    /etc/snort/*
    openvas-adduser
    openvas-rmuser
    openvas-nvt-sync
    openvassd
    openvas-mkcert
    openvas-feed-update
    /etc/openvas/*

 


# Topic 334: Network Security (Wazuh o FreeRadius)
# 334.1 Network 

Weight: 4

Description: Candidates should be able to secure networks against common threats. This includes analyzing network traffic of specific nodes and protocols.

Key Knowledge Areas:

    Understand wireless networks security mechanisms
    Configure FreeRADIUS to authenticate network nodes
    Use Wireshark and tcpdump to analyze network traffic, including filters and statistics
    Use Kismet to analyze wireless networks and capture wireless network traffic
    Identify and deal with rogue router advertisements and DHCP messages
    Awareness of aircrack-ng and bettercap

Partial list of the used files, terms and utilities:

    radiusd
    radmin
    radtest
    radclient
    radlast
    radwho
    radiusd.conf
    /etc/raddb/*
    wireshark
    tshark
    tcpdump
    kismet
    ndpmon

 

# Topic 335: Threats and Vulnerability Assessment
335.1 Common Security Vulnerabilities and Threats

Weight: 2

Description: Candidates should understand the principle of major types of security vulnerabilities and threats.

Key Knowledge Areas:

    Conceptual understanding of threats against individual nodes
    Conceptual understanding of threats against networks
    Conceptual understanding of threats against application
    Conceptual understanding of threats against credentials and confidentiality
    Conceptual understanding of honeypots

Partial list of the used files, terms and utilities:

    Trojans
    Viruses
    Rootkits
    Keylogger
    DoS and DDoS
    Man in the Middle
    ARP and NDP forgery
    Rogue Access Points, Routers and DHCP servers
    Link layer address and IP address spoofing
    Buffer Overflows
    SQL and Code Injections
    Cross Site Scripting
    Cross Site Request Forgery
    Privilege escalation
    Brute Force Attacks
    Rainbow tables
    Phishing
    Social Engineering

 
# 335.2 Penetration Testing

Weight: 3

Description: Candidates understand the concepts of penetration testing, including an understand of commonly used penetration testing tools. Furthermore, candidates should be able to use nmap to verify the effectiveness of network security measures.

Key Knowledge Areas:

    Understand the concepts of penetration testing and ethical hacking
    Understand legal implications of penetration testing
    Understand the phases of penetration tests, such as active and passive information gathering, enumeration, gaining access, privilege escalation, access maintenance, covering tracks
    Understand the architecture and components of Metasploit, including Metasploit module types and how Metasploit integrates various security tools
    Use nmap to scan networks and hosts, including different scan methods, version scans and operating system recognition
    Understand the concepts of Nmap Scripting Engine and execute existing scripts
    Awareness of Kali Linux, Armitage and the Social Engineer Toolkit (SET)

Partial list of the used files, terms and utilities:

    nmap



----------------------------------------------------------------------------

# Ubuntu1

* X.509 Certificates and Public Key Infrastructures

Description: Candidates should understand X.509 certificates and public key infrastructures. They should know how to configure and use OpenSSL to implement certification authorities and issue SSL certificates for various purposes.

Key Knowledge Areas:

    Understand X.509 certificates, X.509 certificate lifecycle, X.509 certificate fields and X.509v3 certificate extensions
    Understand trust chains and public key infrastructures, including certificate transparency
    Generate and manage public and private keys
    Create, operate and secure a certification authority
    Request, sign and manage server and client certificates
    Revoke certificates and certification authorities
    Basic feature knowledge of Let's Encrypt, ACME and certbot
    Basic feature knowledge of CFSSL

Partial list of the used files, terms and utilities:

    openssl (including relevant subcommands)
    OpenSSL configuration
    PEM, DER, PKCS
    CSR
    CRL
    OCSPSP


* Encrypted File Systems

Description: Candidates should be able to set up and configure encrypted file systems.

Key Knowledge Areas:

    Understand block device and file system encryption
    Use dm-crypt with LUKS1 to encrypt block devices
    Use eCryptfs to encrypt file systems, including home directories and PAM integration
    Awareness of plain dm-crypt
    Awareness of LUKS2 features
    Conceptual understanding of Clevis for LUKS devices and Clevis PINs for TMP2 and Network Bound Disk Encryption (NBDE)/Tang

Partial list of the used files, terms and utilities:

    cryptsetup (including relevant subcommands)
    cryptmount
    /etc/crypttab
    ecryptfsd
    ecryptfs-* commands
    mount.ecryptfs, umount.ecryptfs
    pam_ecryptfs

