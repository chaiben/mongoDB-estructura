db.collection("usuari").insert({
    "_id": ObjectId("79c2beb9b3cdcae340859093"),
    "email": "Lorem",
    "password": "Lorem",
    "nom": "Lorem",
    "data_naixement": ISODate("2016-04-08T15:06:21.595Z"),
    "sexe": "Lorem",
    "pais": "Lorem",
    "codi_postal": "Lorem"
});

db.collection("video").insert({
    "_id": ObjectId("a0cbd2f3ecf52378ddb046be"),
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
    "usuari_id": ObjectId("29e8ae8a2f0fb64d74dadf2b"),
    "etiquetas": [
        ObjectId("4ba9ee70c7aaadefbf1c2b9c")
    ]
});

db.collection("video_etiqueta").insert({
    "_id": ObjectId("3ea1efffc75cdff55d930b8f"),
    "nom": "Lorem"
});

db.collection("canal").insert({
    "_id": ObjectId("c21d0d2a62737ebaf3becde4"),
    "nom": "Lorem",
    "descripcio": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
    "usuari_id": ObjectId("445ff38f4bb5424b340b7b0c")
});

db.collection("suscriptors_canal").insert({
    "usuari_id": ObjectId("acc17f8ac2f8aeeb0a8b0bff"),
    "canal_id": ObjectId("ce5ec93a89bad288ecc4cf4b")
});

db.collection("like_dislike_video").insert({
    "usuari_id": ObjectId("89679554c7607c21e0ccaa1f"),
    "video_id": ObjectId("d99bef166beeb2bb946b4bd9"),
    "value": -1,
    "data": ISODate("2016-04-08T15:06:21.595Z")
});

db.collection("playlist").insert({
    "_id": ObjectId("6c0f8c5e8a24f504d5a64f1a"),
    "nom": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z"),
    "estat": "privat",
    "usuari_id": ObjectId("c7cf87a62624edaa8a21cd91"),
    "videos": [
        ObjectId("941db9bfcfc8cedc103f4f7c")
    ]
});

db.collection("comentari").insert({
    "comentari_id": ObjectId("d812c2bbabcec8e06ccdaa4a"),
    "usuari_id": ObjectId("f2c7bbc859b17ea3e1eb0c2c"),
    "video_id": ObjectId("5e8d22d7823ee8b314639cfa"),
    "text": "Lorem",
    "data_creacio": ISODate("2016-04-08T15:06:21.595Z")
});

db.collection("like_dislike_comentari").insert({
    "usuari_usuari_id": ObjectId("0f11c5ecf4f195e4a25a85cf"),
    "comentari_comentari_id": ObjectId("91d46d2d4adcbbca25a60c28"),
    "value": -1,
    "data": ISODate("2016-04-08T15:06:21.595Z")
});