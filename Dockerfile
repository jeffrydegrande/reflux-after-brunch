FROM orchardup/nginx
MAINTAINER jeffry@jeffrydegrande.com
ADD public/ /var/www
CMD nginx
