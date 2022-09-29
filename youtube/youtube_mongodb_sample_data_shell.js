db.collection("usuari").insert({
    "_id": ObjectId("fe4b1efdded2aeda0cf40bef"),
    "email": "Lorem",
    "password": "Lorem",
    "nom": "Lorem",
    "data_naixement": ISODate("2016-04-08T15:06:21.595Z"),
    "sexe": "Lorem",
    "pais": "Lorem",
    "codi_postal": "Lorem"
});

db.collection("video").insert({
    "_id": ObjectId("bd50fb8dc8c4cbede6afbd58"),
    "titol": "Lorem",
    "descripcio": "Lorem",
    "grandaria": 75,
    "nom_arxiu": "Lorem",
    "durada_video": 72,
    "thumbnail_url": "Lorem",
    "num_reproduccions": 0,
    "num_likes": 0,
    "num_dislikes": 0,
    "estats": "privat",
    "data_publicacio": ISODate("2016-04-08T15:06:21.595Z"),
    "usuari_id": ObjectId("afbe6ec0cbda2a1d5edca0c3"),
    "etiquetas": [
        ObjectId("dcaf7db81ea9c01fd90fccee")
    ]
});

db.collection("video_etiqueta").insert({
    "_id": ObjectId("d3121eb9d328a4addf24214b"),
    "nom": "Lorem"
});

db.collection("canal").insert({
    "_id": ObjectId("92af9ecd4a4cf8a2e20fbb5f"),
    "nom": "Lorem",
    "descripcio": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
    "usuari_id": ObjectId("645747418aa8eaaedb8cc48b")
});

db.collection("suscriptors_canal").insert({
    "usuari_id": ObjectId("ef2d5d7fea2a03fecf64fc15"),
    "canal_id": ObjectId("2fcec119f2fedc58c86249da")
});

db.collection("like_dislike_video").insert({
    "usuari_id": ObjectId("adf0a7d4bfb5a4c8eed6aa2c"),
    "video_id": ObjectId("1d66959feea93d86b411cbbe"),
    "value": -1,
    "data": ISODate("2016-04-08T15:06:21.595Z")
});

db.collection("playlist").insert({
    "_id": ObjectId("bff258bc6892f8bf8cd88ad1"),
    "nom": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
    "estat": "privat",
    "usuari_id": ObjectId("f747d39e403f41a546d26a64"),
    "videos": [
        ObjectId("9fff817eca4cc2ab557cfbbe")
    ]
});

db.collection("comentari").insert({
    "_id": ObjectId("ea46d08cde3b53a9cdf1bad7"),
    "usuari_id": ObjectId("a2abd905daedf71f01baf6cf"),
    "video_id": ObjectId("aff607ea47ddc0e3a3cdbb2e"),
    "text": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z")
});

db.collection("like_dislike_comentari").insert({
    "usuari_id": ObjectId("8c9dccb2ab3bcdcf59aa2ff1"),
    "comentari_id": ObjectId("d3be71caaf021beffc4e20f5"),
    "value": -1,
    "data": ISODate("2016-04-08T15:06:21.595Z")
});