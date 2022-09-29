# Descripción

Modelado de diversos diagramas entidad-relación para base de datos en mongoDb.

## Contenido

### Docker
Archivo docker para levantar un servidor de MongoDB. En un terminal acceda a la carpeta de docker y levante la instancia. Comandos:

```
cd docker
docker compose up
```

### Ejercicio 1: Optica
Archivos
- *MongoDB_model_optica.hck.json*: Modelo definido utilizando Hackolade
- *optica_mongodb_script_shell.json*: MongoDb script
- *optica_sample_data_shell.json*: Ejemplo de dato a ser insertado
- *optica.png*: Imagen del modelo definido
![Modelo optica](./optica/optica.png)

### Ejercicio 2: Pizzeria
Archivos
- *MongoDB_model_pizzeria.hck.json*: Modelo definido utilizando Hackolade
- *pizzeria_mongodb_script_shell.json*: MongoDb script
- *pizzeria_sample_data_shell.json*: Ejemplo de dato a ser insertado
- *pizzeria.png*: Imagen del modelo definido
![Modelo pizzeria](./pizzeria/pizzeria.png)

## Programas utilizados
- [Hackolade](https://hackolade.com/): Programa para modelaje de la base de datos
- [MongoDB Compass](https://www.mongodb.com/es/products/compass): Programa utilizado para conectar con la base de datos de modo grafico y por shell
- [Docker](https://www.docker.com/): Programa utilizado para levantar el servidor MongoDb