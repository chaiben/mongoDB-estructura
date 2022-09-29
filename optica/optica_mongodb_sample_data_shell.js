db.collection("proveidor").insert({
    "_id": ObjectId("b04b36baadea8dfc6ad20a74"),
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
    "_id": ObjectId("fce48ce9c143b8e523b39d48"),
    "marca": ObjectId("b2fab7beeed2ad17f22dbaf4"),
    "graduacio": {
        "izquierdo": -8,
        "derecho": 26
    },
    "tipusMuntura": "Lorem",
    "colorMuntura": "Lorem",
    "colorVidre": "Lorem",
    "preu": 43,
    "empleat": ObjectId("a3ae9c8ed4dd507e5e33cb8c"),
    "client": ObjectId("abd873afa4b7caabf18d2626")
});

db.collection("clients").insert({
    "_id": ObjectId("bae3f2e4cc6dd9bb35d96042"),
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
    "recomanat": ObjectId("ed3beab62bfe3bf6064df10c")
});

db.collection("empleat").insert({
    "_id": ObjectId("d2cafadaa61e90acbcdb935c"),
    "nom": "Lorem",
    "telefono": "Lorem",
    "email": "Lorem"
});

db.collection("marca").insert({
    "_id": ObjectId("dfb0a5fdbfde5aafe2cb3ca2"),
    "nom": "Lorem",
    "proveidor": "Lorem"
});