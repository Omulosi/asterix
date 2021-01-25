#!/bin/sh

cd /api/


#apt install gdal-bin libgdal-dev
#apt install python3-gdal
#apt install binutils libproj-dev

python manage.py makemigrations
python manage.py migrate

exec "$@"
