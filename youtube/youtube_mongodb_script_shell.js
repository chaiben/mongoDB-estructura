db = client.db("youtubis");

db.createCollection("usuari", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "usuari",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "email": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "password": {
                    "bsonType": "string",
                    "maxLength": 30
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 60
                },
                "data_naixement": {
                    "bsonType": "date"
                },
                "sexe": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "pais": {
                    "bsonType": "string",
                    "maxLength": 45
                },
                "codi_postal": {
                    "bsonType": "string",
                    "maxLength": 10
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "email",
                "password",
                "nom"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("video", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "video",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "titol": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": null
                },
                "grandaria": {
                    "bsonType": "number"
                },
                "nom_arxiu": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "durada_video": {
                    "bsonType": "number"
                },
                "thumbnail_url": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "num_reproduccions": {
                    "bsonType": "number"
                },
                "num_likes": {
                    "bsonType": "number"
                },
                "num_dislikes": {
                    "bsonType": "number"
                },
                "estats": {
                    "bsonType": "string",
                    "enum": [
                        "privat",
                        "públic",
                        "ocult"
                    ]
                },
                "data_publicacio": {
                    "bsonType": "date"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "etiquetas": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "titol",
                "descripcio",
                "num_reproduccions",
                "num_likes",
                "num_dislikes",
                "estats",
                "usuari_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("video_etiqueta", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "video_etiqueta",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 50
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




db.createCollection("canal", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "canal",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "descripcio": {
                    "bsonType": "string",
                    "maxLength": null
                },
                "data_creacio": {
                    "bsonType": "date"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "data_creacio",
                "usuari_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("suscriptors_canal", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "suscriptors_canal",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "canal_id": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": false,
            "required": [
                "usuari_id",
                "canal_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("like_dislike_video", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "like_dislike_video",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "video_id": {
                    "bsonType": "objectId"
                },
                "value": {
                    "bsonType": "number",
                    "enum": [
                        1,
                        -1
                    ]
                },
                "data": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "usuari_id",
                "video_id",
                "value",
                "data"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("playlist", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "playlist",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "nom": {
                    "bsonType": "string",
                    "maxLength": 128
                },
                "data_creacio": {
                    "bsonType": "date"
                },
                "estat": {
                    "bsonType": "string",
                    "enum": [
                        "privat",
                        "public"
                    ]
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "videos": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "nom",
                "data_creacio",
                "estat",
                "usuari_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("comentari", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "comentari",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "video_id": {
                    "bsonType": "objectId"
                },
                "text": {
                    "bsonType": "string",
                    "maxLength": null
                },
                "data_creacio": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "usuari_id",
                "video_id",
                "text",
                "data_creacio"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("like_dislike_comentari", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "like_dislike_comentari",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuari_id": {
                    "bsonType": "objectId"
                },
                "comentari_id": {
                    "bsonType": "objectId"
                },
                "value": {
                    "bsonType": "number",
                    "enum": [
                        1,
                        -1
                    ]
                },
                "data": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "usuari_id",
                "comentari_id",
                "value",
                "data"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});