db = client.db("Pizzeria");

db.createCollection("client", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "client",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 60
                },
                "cognoms": {
                    "bsonType": "string",
                    "maxLength": 100
                },
                "adreca": {
                    "bsonType": "string"
                },
                "localitat": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "provincia": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "codi_postal": {
                    "bsonType": "string",
                    "maxLength": 10
                },
                "telefono": {
                    "bsonType": "string",
                    "maxLength": 20
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "cognoms",
                "adreca",
                "localitat",
                "provincia",
                "codi_postal",
                "telefono"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("botiga", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "botiga",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "adreca": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "codi_postal": {
                    "bsonType": "string",
                    "maxLength": 10
                },
                "localitat": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "provincia": {
                    "bsonType": "string",
                    "maxLength": 45
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "adreca",
                "codi_postal",
                "localitat",
                "provincia"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("empleat", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "empleat",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 60
                },
                "cognoms": {
                    "bsonType": "string",
                    "maxLength": 100
                },
                "nif": {
                    "bsonType": "string",
                    "maxLength": 20
                },
                "telefon": {
                    "bsonType": "string",
                    "maxLength": 20
                },
                "cargo": {
                    "bsonType": "string"
                },
                "botiga_id": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "cognoms",
                "nif",
                "telefon",
                "cargo",
                "botiga_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("comanda", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "comanda",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "client_client_id": {
                    "bsonType": "objectId"
                },
                "data_registre": {
                    "bsonType": "date"
                },
                "tipo": {
                    "bsonType": "string"
                },
                "repartidor_id": {
                    "bsonType": "objectId"
                },
                "data_lliurament": {
                    "bsonType": "date"
                },
                "products": {
                    "bsonType": "array",
                    "title": "productes",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "producte_id": {
                                "bsonType": "objectId",
                                "title": "producte_id"
                            },
                            "cantidad": {
                                "bsonType": "number"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "client_client_id",
                "data_registre",
                "tipo"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("categoria_pizza", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "categoria_pizza",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 128
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("producte", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "producte",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": null
                },
                "imatge": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "preu": {
                    "bsonType": "number"
                },
                "tipo": {
                    "bsonType": "string"
                },
                "categoria_pizza_id": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "descripcio",
                "imatge",
                "preu",
                "tipo"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});