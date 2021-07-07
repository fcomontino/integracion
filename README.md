# Entrega Integración de plataformas

## Comenzando 🚀
### Pre-requisitos 📋

- Docker y Docker Compose
- Node 12.18 o inferior

### Prerapar ambiente ⚙️

Clonar proyecto desde repositorio git y acceder a carpeta de proyecto
```
git clone https://github.com/fcomontino/integracion.git
```
Dentro de directorio /docker debe configurar el archivo de variables de entorno .env con el siguiente formato:
```
cd integracion/docker/
```
.env:
```
SCRIPT_FILE=docker/scripts/setup_env.sh

APP_ENV=development

SERVER_URL=http://localhost
SERVER_PORT=3000

DB_CLIENT=pg
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_DATABASE=products
EXTERNAL_DB_PORT=5432
```
Para crear contenedor ejecutar los siguientes comandos:
```
docker-compose build db
docker-compose up -d db
```


Luego ir a raíz de proyecto backend y crear .env correspondiente:
```
cd ../packages/server/
```
```
##---------------------------- SERVER -----------------------------##
APP_ENV=development

SERVER_URL=http://localhost
SERVER_PORT=3000

DB_CLIENT=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_DATABASE=products
EXTERNAL_DB_PORT=5432
DEFAULT_APP_PORT=3001
EXTERNAL_APP_PORT=3001
DEFAULT_BACKEND_PORT=3000
EXTERNAL_BACKEND_PORT=3000
```

### Levantar proyecto 🔧

En el directorio /integracion/packages/server/ ejecutar los siguientes comandos:

Para instalar dependencias, migraciones y seed (ejecutar solo la primera vez):
```
npm run setup
```
Levantar proyecto
```
npm run dev
```

### Colección Postman

Colección de postman con los requst disponibles

```
https://www.postman.com/collections/95dbd4e92b31419a79d5
```

Documentación de la API

```
https://www.youtube.com/watch?v=RG-9JZ9gHwE&ab_channel=HoyosPictures
```