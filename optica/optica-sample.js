db.collection("proveidor").insert({
  "_id": ObjectId("859b3e475fe5aa69562deebb"),
  "nom": "Channel",
  "adreça": {
      "carrer": "Passeig de Gracia",
      "numero": "12",
      "pis": "1",
      "porta": "A",
      "ciutat": "Barcelona",
      "codigo postal": "08002",
      "pais": "España"
  },
  "telefono": "933123456",
  "fax": "933123457",
  "nif": "B4334543",
  "lista marcas": [
      {
          "_id": ObjectId("7caaf2fe9e759dae866df47a"),
          "nom": "Channel"
      }
  ]
});

db.collection("empleat").insert({
  "_id": ObjectId("ed2d11a3974d8ec65af86c50"),
  "nom": "Paco",
  "telefono": "600123445",
  "email": "paco@optica.com"
});

db.collection("clients").insert({
  "_id": ObjectId("0f2273de5efbd3cb728887a7"),
  "nom": "Marco Polo",
  "adreça": {
      "carrer": "Marina",
      "numero": "10",
      "pis": "5",
      "porta": "1",
      "ciutat": "Barcelona",
      "codigo postal": "Lorem",
      "pais": "08007"
  },
  "telefono": "933123444",
  "email": "marco.polo@gmail.com",
  "recomenat": [],
  "lista ulleres": [
      {
          "_id": ObjectId("c049df5d6c386dc2b3bacf3f"),
          "graduació": [
              0.75,
              1.25
          ],
          "tipus muntura": "pasta",
          "color muntura": "negre",
          "color vidre": [
              "transparente",
              "transparente"
          ],
          "preu": 79.5,
          "marca": ObjectId("7caaf2fe9e759dae866df47a"),
          "empleat": ObjectId("ed2d11a3974d8ec65af86c50")
      }
  ]
});