db.collection("client").insert({
    "_id": ObjectId("ff8fdeeeb57f1409ce4207be"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "adreca": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem",
    "codi_postal": "Lorem",
    "telefono": "Lorem"
});

db.collection("botiga").insert({
    "_id": ObjectId("8a4ec619683cdada0933bac1"),
    "adreca": "Lorem",
    "codi_postal": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem"
});

db.collection("empleat").insert({
    "_id": ObjectId("9be09dbbcefa8ba3f7802e20"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "nif": "Lorem",
    "telefon": "Lorem",
    "cargo": "repartidor",
    "botiga_id": ObjectId("7cee27cade7dea8f33bb9bf9")
});

db.collection("comanda").insert({
    "_id": ObjectId("a0efbe035a762b10e4e4c7ac"),
    "client_client_id": ObjectId("ecef9f36faa5c09adb99a06c"),
    "data_registre": ISODate("2016-04-08T15:06:21.595Z"),
    "tipo": "Lorem",
    "repartidor_id": ObjectId("ca9ae1be1eee1cdac3edfaea"),
    "data_lliurament": ISODate("2016-04-08T15:06:21.595Z"),
    "products": [
        {
            "producte_id": ObjectId("43bc1cc4fafa90acab4aa54b"),
            "cantidad": 33
        }
    ]
});

db.collection("categoria_pizza").insert({
    "_id": ObjectId("752bf3a76e7efae7ce6ceb6d"),
    "nom": "Lorem"
});

db.collection("producte").insert({
    "_id": ObjectId("a1f09b8c8f83af1debcbdcd2"),
    "nom": "Lorem",
    "descripcio": "Lorem",
    "imatge": "Lorem",
    "preu": 22,
    "tipo": "begudes",
    "categoria_pizza_id": ObjectId("caf275db8b710dadc48df3bf")
});