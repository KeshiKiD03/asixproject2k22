#! /bin/bash
# @keshi ASIX M11 2021-2022
# instal.lacio slapd edt.org
# -------------------------------------
mkdir /etc/ldap/certs

cp /opt/docker/ca_leomessi_cert.pem /etc/ldap/certs/. # PER PROVAR-SE A SI MATEIX COM A CLIENT
cp /opt/docker/ca_leomessi_cert.pem /etc/ssl/certs/. # Certificat de CA
cp /opt/docker/servercert_ldap.pem /etc/ldap/certs/. # Certificat del servidor

cp /opt/docker/serverkey_ldap.pem  /etc/ldap/certs/. # Key del servidor

rm -rf /etc/ldap/slapd.d/*
rm -rf /var/lib/ldap/*

cp /opt/docker/slapd.conf /etc/ldap/slapd.conf

slaptest -f /opt/docker/slapd.conf -F /etc/ldap/slapd.d # Provem i ensamblem el servidor LDAP
slaptest -u -f /opt/docker/slapd.conf -F /etc/ldap/slapd.d

slapadd -F /etc/ldap/slapd.d -l /opt/docker/edt.org.ldif # Populate de LDAP
chown -R openldap.openldap /etc/ldap/slapd.d /var/lib/ldap

cp /opt/docker/ldap.conf /etc/ldap/ldap.conf # Necesari per probar-se a si mateix
