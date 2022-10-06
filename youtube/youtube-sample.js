db.usuari.insert({
  "_id": ObjectId("38e5a69ddfc7de6a3bd579ad"),
  "email": "Lorem",
  "password": "Lorem",
  "nom": "Andreas",
  "data_naixement": ISODate("2016-04-08T15:06:21.595Z"),
  "sexe": "Lorem",
  "pais": "Lorem",
  "codi_postal": "Lorem",
  "videos": [
      {
          "_id": ObjectId("edcadb38d52cddf328093d1f"),
          "nom": "Lorem",
          "descripcio": "Lorem",
          "grandaria": 66,
          "nom_arxiu": "Lorem",
          "durada": 63,
          "thumbnail": "Lorem",
          "nombre_reproducio": 81,
          "nombre_likes": 150,
          "nombre_dislikes": 85,
          "estat": "Lorem",
          "etiquetes": [
              {
                  "_id": ObjectId("bf8ebb4fe3b28f5fdcce5fe6"),
                  "nom": "Lorem"
              }
          ],
          "data_publicacio": ISODate("2016-04-08T15:06:21.595Z"),
          "lista_likes": [
              {
                  "usuari_id": ObjectId("d3a563b84aa83f03b9dd4eae"),
                  "value": 1,
                  "data": ISODate("2016-04-08T15:06:21.595Z")
              }
          ],
          "comentaris": [
              {
                  "_id": ObjectId("2b1aecba6be0b1d48cdf4dfa"),
                  "text": "Lorem",
                  "data": ISODate("2016-04-08T15:06:21.595Z"),
                  "lista_likes": [
                      {
                          "usuari_id": ObjectId("aef4487dca0c4ad56adaa52b"),
                          "value": 1,
                          "data": ISODate("2016-04-08T15:06:21.595Z")
                      }
                  ]
              }
          ]
      }
  ],
  "canal": {
      "_id": ObjectId("5ff0b8c8ceda995facefe7ca"),
      "nom": "Lorem",
      "descripcio": "Lorem",
      "data_creacio": ISODate("2016-04-08T15:06:21.595Z")
  },
  "canales_suscrip": [
      ObjectId("93bce83b5fe4811e9d0889ce")
  ],
  "playlists": [
      {
          "_id": ObjectId("8b818f3fd2aa0fae364c27e3"),
          "nom": "Lorem",
          "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
          "estat": "Lorem",
          "lista_videos": [
              ObjectId("dccac2977c97e2d9e878e54d")
          ]
      }
  ]
});