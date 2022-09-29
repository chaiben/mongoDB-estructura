db.collection("client").insert({
    "_id": ObjectId("bfe2f81edb4c4edb863d0f1c"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "adreca": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem",
    "codi_postal": "Lorem",
    "telefono": "Lorem"
});

db.collection("botiga").insert({
    "_id": ObjectId("3ed07aacbbeddfeeea0b0af1"),
    "adreca": "Lorem",
    "codi_postal": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem"
});

db.collection("empleat").insert({
    "_id": ObjectId("e4296cd20347faeca8c19ef9"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "nif": "Lorem",
    "telefon": "Lorem",
    "cargo": "repartidor",
    "botiga_id": ObjectId("f1bcd785acc60aa068b59c75")
});

db.collection("comanda").insert({
    "_id": ObjectId("831d95ea5fcd87114dabf4d0"),
    "client_id": ObjectId("a13ecd47177ccbdbdebb67ce"),
    "data_registre": ISODate("2016-04-08T15:06:21.595Z"),
    "tipo": "Lorem",
    "repartidor_id": ObjectId("b4698abaca0d8b5fd4bc00c1"),
    "data_lliurament": ISODate("2016-04-08T15:06:21.595Z"),
    "products": [
        {
            "producte_id": ObjectId("f1eeef3400dfeb778d4dad4a"),
            "cantidad": 33
        }
    ]
});

db.collection("categoria_pizza").insert({
    "_id": ObjectId("afce3c66deeaf7fb7dbbecec"),
    "nom": "Lorem"
});

db.collection("producte").insert({
    "_id": ObjectId("cfebfa9ff9aedb64b4dfb6a8"),
    "nom": "Lorem",
    "descripcio": "Lorem",
    "imatge": "Lorem",
    "preu": 22,
    "tipo": "begudes",
    "categoria_pizza_id": ObjectId("fabedad0260930afeb334dcd")
});