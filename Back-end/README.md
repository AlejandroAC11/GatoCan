docker-compose build crea los contenedores.

carpeta dist/ tiene los .js

con ts-node ejecutamos los archivos .ts en desarrollo, en el servidor utilizar los .js de dist

-------------Para BBDD----------
primera conexion con mongodb://root:root@localhost:27017

> use admin

crear el usario de bbdd, en este caso:
> db.createUser(
    {
    user: "alejandro",
    pwd: "yrZxrY3w",
    roles: [
    { role: "dbOwner", db: "gatocan-dev" },
    { role: "dbOwner", db: "gatocan-test" },
    { role: "dbOwner", db: "gatocan-prod" }
    ]
    }
    )

en container archivo /etc/mongod.conf.orig, anadir o modificar:

security:
    authorization: "enabled"

reiniciar bbdd

contectarse con los nuevos parametros de usuario creados