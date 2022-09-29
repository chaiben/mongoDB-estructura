db.collection("client").insert({
    "_id": ObjectId("bcc51656994ef4bbaf4ff88e"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "adreca": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem",
    "codi_postal": "Lorem",
    "telefono": "Lorem"
});

db.collection("botiga").insert({
    "_id": ObjectId("aebddf73a3adc170d5f1b4ed"),
    "adreca": "Lorem",
    "codi_postal": "Lorem",
    "localitat": "Lorem",
    "provincia": "Lorem"
});

db.collection("empleat").insert({
    "_id": ObjectId("f5c0b7ca54c02e99db0b7bdc"),
    "nom": "Lorem",
    "cognoms": "Lorem",
    "nif": "Lorem",
    "telefon": "Lorem",
    "cargo": "Lorem",
    "botiga_id": ObjectId("670f08efc2dfefdc3bc814ff")
});

db.collection("comanda").insert({
    "_id": ObjectId("b7fabb7ff3edada1af3acd2a"),
    "client_client_id": ObjectId("f33acbc9cb54ecbbe4eac363"),
    "data_registre": ISODate("2016-04-08T15:06:21.595Z"),
    "tipo": "Lorem",
    "repartidor_id": ObjectId("fd24eff36991f395aa20ded6"),
    "data_lliurament": ISODate("2016-04-08T15:06:21.595Z"),
    "products": [
        {
            "producte_id": ObjectId("bd29224a7ee4c9bb18ee96ca"),
            "cantidad": 33
        }
    ]
});

db.collection("categoria_pizza").insert({
    "_id": ObjectId("bc9aa0fcdec11bfd1b070b44"),
    "nom": "Lorem"
});

db.collection("producte").insert({
    "_id": ObjectId("e1d085e518da8a9aa3b37bff"),
    "nom": "Lorem",
    "descripcio": "Lorem",
    "imatge": "Lorem",
    "preu": 22,
    "tipo": "Lorem",
    "categoria_pizza_id": ObjectId("d7f6abd9a11a9b3388fb6eaa")
});