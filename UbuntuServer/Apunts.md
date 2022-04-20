# How to Ldaps

# @keshi ASIX M11-SAD Curs 2021-2022

# Objetivos

1. Conectividad de LDAP con __Certificados TLS/SSL__. 

    --> `A partir de ldap21:group se generará ssl22:ldaps que tendrá certificados propios para el uso de TLS/SSL .`

2. Verificación de la creación de una __Entidad de Certificación__ nueva __"LeoMessi"__ 

    --> `Se creará la Entidad de Certificación a partir de Par de Claves Pub/Priv en el Servidor y generar Certificados de la misma, posteriormente su propagación`.

3. Verificación de comandos de __LDAP 389 y LDAPS 636 y STARTLS -Z / -ZZ__.

# Requisitos

* ldap21:group --> Docker

* openssl

    * Par de claves Pub/Priv para la CA (pass: _cakey_) --> ``cakey.pem``

    * CA inventado nuevo a partir de la CA (pass: _cakey_) --> ``ca_nombreInventado_cert.pem``

    * Par de claves Pub/Priv para el Servidor LDAP edt.org (_Passwordless_) --> ``serverkey_ldap.pem` 

    * Request de certificado para el Servidor LDAP edt.org a partir de Certificado de la CA (``ca_nombreInventado_cert.pem``) (_Passwordless_) --> ```serverrequest_ldap.pem``

    * Certificado del Servidor de Ldap edt.org a partir del Request del Certificado (__Lo tiene que firmar__) --> ```servercert_ldap.pem``

* slapd.conf

    --> 

    --> 

* ldap.conf 

    --> BASE dc=edt,dc=org

    --> URI ldap://ldap.edt.org

    --> TLS_CACERT /etc/ldap/certs/``ca_nombreInventado_cert.pem``.

* /etc/hosts -->  Contendrá --> ``ip_ldap       ldap.edt.org``

* /etc/ldap/certs --> Contendrá --> ``ca_nombreInventado_cert.pem``