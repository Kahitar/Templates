NGINX
-----

- Configuration file in "/etc/nginx/sites-enabled/template_name"
- Restart:
    $ sudo systemctl restart nginx


GUNICORN
--------

- Add app to gunicorn (from app root, 'processes * 2 + 1' workers = 3):
    $ gunicorn -w 3 run:app


Supervisor
----------

- Configuration file: /etc/supervisor/conf.d/template_name.conf
- Restart jobs:
    $ sudo supervisorctl reload


UFW (Firewall)
--------------

