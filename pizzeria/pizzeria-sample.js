db.collection("product").insert({
  "_id": ObjectId("c25ebd7cfb0ccfc8cf3e0baf"),
  "nom": "Diabola",
  "descripcio": "¡Pizza picante!! No apta para angelitos...",
  "imatge": "https://api.lorem.space/image/pizza?w=150&h=220",
  "preu": "11.35",
  "tipo": "pizza",
  "categoria": "picantes"
});

db.collection("clients").insert({
  "_id": ObjectId("549bdc516a818576530fc1bf"),
  "nom": "Paco",
  "cognoms": "Polo",
  "adreça": {
      "carrer": "Paralell",
      "numero": "33",
      "pis": "2",
      "porta": "B",
      "ciutat": "Barcelona",
      "codigo postal": "08001",
      "pais": "España"
  },
  "telefono": "677878990",
  "email": "paco.polo@hotmail.com"
});

db.collection("botiga").insert({
  "_id": ObjectId("7d83cfc8c16cedcf83f28ca3"),
  "adreça": "Rambla del Raval",
  "codigo postal": "08001",
  "localitat": "Barcelona",
  "provincia": "Barcelona",
  "comandas": [
      {
          "_id": ObjectId("f1422488cef7d1b72cea496b"),
          "data registre": ISODate("2022-11-06T15:06:21.595Z"),
          "data entrega": ISODate("2022-11-06T15:07:21.595Z"),
          "tipo": "domicili",
          "repartidor": ObjectId("43923bbd7403baf2aaca84c4"),
          "productos": [
              ObjectId("c25ebd7cfb0ccfc8cf3e0baf")
          ],
          "client": ObjectId("549bdc516a818576530fc1bf")
      }
  ],
  "empleat": [
      {
          "_id": ObjectId("43923bbd7403baf2aaca84c4"),
          "nom": "Manuel",
          "cognoms": "Speed",
          "nif": "X12332123S",
          "telefon": "612312332",
          "cargo": "repartidor"
      }
  ]
});