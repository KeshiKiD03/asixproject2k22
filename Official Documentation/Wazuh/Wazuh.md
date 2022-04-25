# Wazuh
## Descripcion/Biografia

**Que es?**
- Wazuh es un sistema de detección de intrusos en host de codigo abierto y libre (HIDS).

- Wazuh es una solución de monitoreo de seguridad gratuita, de codigo abierto y lista para empresas, monitoreo de integridad, respuesta a incidentes y cumplimientos.

- Wazuh es una platarforma Open Source utilizada para la prevencion, detección y respuesta a las amenazas.

---
**Que hace?/Que puede hacer?**
- Realiza análisis de registro, comprobación de integridad, supervisión del registro de Windows, detección de rootkits, alertas basadas en el tiempo y respuesta activa.

- Es capaz de proteger cargas de trabajo en entornos locales, virtualizados, en contenedores y en la nube.

- Wazuh aborda la necesidad de supervisión y respuesta continua a las amenazas avanzadas.

- Wazuh ayuda a detectar procesos de explotación ocultos que son más complejos que un simple patrón de firma y que pueden utilizarse para evadir los sistemas antivirus tradicionales.

- Se puede usar para monitorear puntos finales, servicios en la nube y contenedores, y para agregar y analizar datos de fuentes externas.

- Proporciona detección de intrusiones para la mayoria de sistemas operativos, incluyendo Linux, AIX, HP-UX, macOS, Solaris y Windows

- Wazuh tiene una arquitectura centralizada y multiplataforma que permite que múltiples sistemas sean fácilmente monitoreados y administrados.

- Wazuh puede ser configurado para enviar alertas a syslog. Esos mansajes pueden ser enviados a la interfaz web de ServicePilot en tiempo real por syslog para su análisis centralizado.

- Ademas, el agente de Wazuh porporciona capacidades de respuesta activa que se pueden utilizar para bloquear un ataque de red, detectar un proceso malicioso o poner en cuarentena un archivo infectado con malware.

---
**Como lo hace?**
- La solución Wazuh consta de un agente de seguridad para puntos finales, desplegado en los sistemas supervisados, y un servidor de gestion, que recoge los datos de recopilados por los agentes.

- Se centra en proporcionar la visibilidad adecuada, con los conocimientos necesarios para ayudar a los analisis de seguridad a descubrir, investigar y responder a las amenazas y campañas de ataque en varios puntos.

---
**Wazuh porporciona las siguentes capacidades:**
- __Análisis de seguridad__:
  - Wazuh se utiliza para recolectar, agregar, indexar y analizar datos de seguridad, ayudando a las organizaciones a detectar intrisiones, amenazas y comportamientos anómalos dentro de la red.

  - A medidas que las amenazas ciberneticas se vuelven mas sofisticadas, se requiere de monitoreo en tiempo real y análisis de seguridad para una rápida detección y remediación de las amenazas.

- __Detección de intrusiones__:
  - Los agentes de Wazuh analiza los sistemas monitorizados buscando malware, rootkits y anomalías sospechosas. Tambien pueden detectar ficheros y procesos ocultos, puertos de red a la escucha no registrado e inconsistencias en las respuestas a las llamadas del sistema.

  - Además de estas capacidades de los agentes, el servidor usa firmas para detectar intrusiones, usando un motor de expresiones regulares para analizar los datos de los logs


- __Análisis de los datos de logs__:
  - En los registros de sistemas, dispositivos y aplicaciones de su infraestructura, hay muchas situaciones en las que hay evidencia de ataque. Wazuh se puede utilizar para recopilar y analizar datos de registro automáticamente.

  - Los agentes de Wazuh leen los logs de las aplicaciones y del sistema operativo y los envían de forma segura al servidor central para almacenarlos y realizar un análisis basado en reglas. Dichas reglas ayudan a tener conocimiento de errores del sistema o de aplicación, fallos de configuración, intentos y/o éxito de actividades maliciosas, violaciones de la politica de seguridad y otra serie de problemas de operación o seguridad.


- __Monitorización de la integridad de ficheros__:
  - Wazuh monitorea el sistema de archivos e identifica los cambios realizados en el contenido, los permisos, la propiedad y los atributos de los archivos que deben vigilar. Ademas, identifica de forma nativa a los usuarios y las aplicaciones que se utilizan para crear o modificar archivos.


- __Detección de vulnerabilidades__:
  - Los agentes de Wazuh extraen datos del inventario de software y envían esta información al servidor, donde se correlaciona con las bases de datos CVE (Common Vulnerabilities and Exposure) continuamente actualizadas, para identificar software vulnerable conocido.

  - La evaluación de las vulnerabilidades de forma automática nos ayuda a encontrar los puntos vulnerables en los activos críticos y tomar las acciones correctivas necesarias antes de que sean explotadas por los atacantes.


- __Evaluación de la configuración__:
  - Wazuh nos ayuda a supervisar los ajustes de configuración del sistema y las aplicaciones para asegurarnos de que cumpla con las políticas de seguridad y estándartes.

  - Los agentes llevan a cabo escaneos periódicos para detectar las aplicaciones que se conoce que son vulnerables, no parcheadas o configuradas de forma insegura. Además, los chequeos pueden personalizarse y hacerse a medida para adecuarse a nuestra organización.


- __Respuestas a incidentes__:
  - Wazuh proporciona respuestas activa listas para ser utilizadas con el fin de llevar a cabo diversas contramedidas, tales como bloquear acceso a un sistema del origen de la amenaza, para hacer frente a las amenazas.

  - Ademas, Wazuh puede usarse para ejecutar comandos remotamente o consultas al sistema, identificando indicadores de compromiso (IOCs) y ayudando a otras actividades forenses o tareas de respuesta a incidentes.


- __Cumplimiento normativo__:
  - Wazuh proporciona algunos de los controles de seguridad necesarios para cumplir con los estándartes y regulaciones de la industria.

  - Wazuh puedeutilizarse para cumplir con los requisitosPCI DSS,GPG135oGDPR6, utilizando suinterfaz de usuario web que proporciona informes y paneles de control (dashboards)que pueden ayudarnos a dicho cumplimiento.

- __Monitorización de la seguridad__:
  - Wazuh ayuda a la monitorización de la infraes-tructura en la nube de proveedores como Amazon AWS, Azure o Google Cloud.

  - Además, Wazuh proporciona reglas para evaluar la configuración de su entorno de nube, detectando fácilmente las debilidades.

- __Seguridad en contenedores__:
  - Wazuh proporciona visibilidad de seguridad en sus hosts y contenedores Docker, monitoreando su comportamiento y detectando amenazas, vulnerabilidades y anomalías

  - El agente de Wazuh tiene una integración nativa con el motor Docker que permite a los usuarios monitorear imágenes, volúmenes, configuraciones de red y contenedores en ejecución.

## Practica
### Necesario:
- [ ] Sistema Operativo de 64 bits
- [ ] 4 GB de RAM
- [ ] 2 nícleos de CPU

--------

- Montar una maquina virtual (Oracle VirtualBox) de RedHat


## Bibliografia
- http://openaccess.uoc.edu/webapps/o2/bitstream/10609/117787/7/jpcozarTFM0620memoria.pdf <-- GUIA PARA PROYECTO
- https://blog.gudixsecurity.com/protege-tu-empresa-con-wazuh-edr-open-source/
- https://www.servicepilot.com/es/integration/monitoreo-wazuh/
- https://documentation.wazuh.com/current/index.html
- https://es.wikipedia.org/wiki/Wazuh
- https://www.csirt.gob.cl/media/2021/10/2SCSFP-SIEM-HE.pdf