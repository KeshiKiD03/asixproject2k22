#! /bin/bash

/opt/docker/install.sh && echo "Install Ok"

# Detach

#/usr/sbin/slapd -d0

# Detach with LDAPS

/usr/sbin/slapd -d0 -u openldap -h "ldap:/// ldaps:/// ldapi:///"

# Interactive with LDAPS

# /usr/sbin/slapd -u openldap -h "ldap:/// ldaps:/// ldapi:///"
