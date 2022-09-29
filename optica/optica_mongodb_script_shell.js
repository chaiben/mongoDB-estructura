db = client.db("optica");

db.createCollection("proveidor", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "proveïdor",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "title": "nom"
                },
                "adreca": {
                    "bsonType": "object",
                    "title": "adreça",
                    "properties": {
                        "carrer": {
                            "bsonType": "string"
                        },
                        "numero": {
                            "bsonType": "string",
                            "title": "número"
                        },
                        "pis": {
                            "bsonType": "string",
                            "title": "pis"
                        },
                        "porta": {
                            "bsonType": "string",
                            "title": "porta"
                        },
                        "ciutat": {
                            "bsonType": "string",
                            "title": "ciutat"
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "title": "codi postal"
                        },
                        "pais": {
                            "bsonType": "string",
                            "title": "país"
                        }
                    },
                    "additionalProperties": false
                },
                "telefon": {
                    "bsonType": "string",
                    "title": "telèfon"
                },
                "fax": {
                    "bsonType": "string",
                    "title": "fax"
                },
                "nif": {
                    "bsonType": "string",
                    "title": "nif"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "telefon",
                "nif"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("ulleres", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "ulleres",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "marca": {
                    "bsonType": "objectId",
                    "title": "marca"
                },
                "graduacio": {
                    "bsonType": "object",
                    "title": "graduació",
                    "properties": {
                        "izquierdo": {
                            "bsonType": "number",
                            "title": "izquierdo"
                        },
                        "derecho": {
                            "bsonType": "number",
                            "title": "derecho"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "izquierdo",
                        "derecho"
                    ]
                },
                "tipusMuntura": {
                    "bsonType": "string",
                    "title": "tipusMuntura",
                    "enum": [
                        "flotant",
                        "pasta",
                        "metàl·lica"
                    ]
                },
                "colorMuntura": {
                    "bsonType": "string",
                    "title": "color de la muntura"
                },
                "colorVidre": {
                    "bsonType": "string",
                    "title": "color vidre"
                },
                "preu": {
                    "bsonType": "number",
                    "title": "preu"
                },
                "empleat": {
                    "bsonType": "objectId",
                    "title": "empleat"
                },
                "client": {
                    "bsonType": "objectId",
                    "title": "client"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "marca",
                "graduacio",
                "tipusMuntura",
                "preu",
                "empleat",
                "client"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("clients", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "clients",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string",
                    "title": "nom"
                },
                "adreca": {
                    "bsonType": "object",
                    "title": "adreça",
                    "properties": {
                        "carrer": {
                            "bsonType": "string",
                            "title": "carrer"
                        },
                        "numero": {
                            "bsonType": "string",
                            "title": "número"
                        },
                        "pis": {
                            "bsonType": "string",
                            "title": "pis"
                        },
                        "porta": {
                            "bsonType": "string",
                            "title": "porta"
                        },
                        "ciutat": {
                            "bsonType": "string",
                            "title": "ciutat"
                        },
                        "codiPostal": {
                            "bsonType": "string",
                            "title": "codi postal"
                        },
                        "pais": {
                            "bsonType": "string",
                            "title": "país"
                        }
                    },
                    "additionalProperties": false
                },
                "telefono": {
                    "bsonType": "string",
                    "title": "telèfono"
                },
                "email": {
                    "bsonType": "string",
                    "title": "email"
                },
                "dataRegistre": {
                    "bsonType": "date",
                    "title": "data registre"
                },
                "recomanat": {
                    "bsonType": "objectId",
                    "title": "recomanat"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "telefono",
                "email",
                "dataRegistre"
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
                    "bsonType": "string"
                },
                "telefono": {
                    "bsonType": "string",
                    "title": "telèfono"
                },
                "email": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "telefono"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("marca", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "marca",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "nom": {
                    "bsonType": "string"
                },
                "proveidor": {
                    "bsonType": "string",
                    "title": "proveïdor"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "proveidor"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});