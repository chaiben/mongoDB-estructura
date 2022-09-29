db.collection("proveidor").insert({
    "_id": ObjectId("6285eacbaf5fd1bfede59e9c"),
    "nom": "Lorem",
    "adreca": {
        "carrer": "Lorem",
        "numero": "Lorem",
        "pis": "Lorem",
        "porta": "Lorem",
        "ciutat": "Lorem",
        "codiPostal": "Lorem",
        "pais": "Lorem"
    },
    "telefon": "Lorem",
    "fax": "Lorem",
    "nif": "Lorem"
});

db.collection("ulleres").insert({
    "_id": ObjectId("3e2e0cd632c9d64935e94ee3"),
    "marca": ObjectId("6e2f78addc1fca1fee638c4e"),
    "graduacio": {
        "izquierdo": -8,
        "derecho": 26
    },
    "tipusMuntura": "metàl·lica",
    "colorMuntura": "Lorem",
    "colorVidre": "Lorem",
    "preu": 43,
    "empleat": ObjectId("ca23f21b5a34fb0d601205b0"),
    "client": ObjectId("00bded1b3ded1c20bfe3fb9d")
});

db.collection("clients").insert({
    "_id": ObjectId("e1ff400cc2bd6e66a368a9e6"),
    "nom": "Lorem",
    "adreca": {
        "carrer": "Lorem",
        "numero": "Lorem",
        "pis": "Lorem",
        "porta": "Lorem",
        "ciutat": "Lorem",
        "codiPostal": "Lorem",
        "pais": "Lorem"
    },
    "telefono": "Lorem",
    "email": "Lorem",
    "dataRegistre": ISODate("2016-04-08T15:06:21.595Z"),
    "recomanat": ObjectId("b8ecf637d97be5216b4faed6")
});

db.collection("empleat").insert({
    "_id": ObjectId("d5babccb7577deebadeb6e1b"),
    "nom": "Lorem",
    "telefono": "Lorem",
    "email": "Lorem"
});

db.collection("marca").insert({
    "_id": ObjectId("c8327b2a5ac77cf0aabd1cdb"),
    "nom": "Lorem",
    "proveidor": "Lorem"
});