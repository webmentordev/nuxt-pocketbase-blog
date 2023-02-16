migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a67imcd6lircfc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chmgowrc",
    "name": "post",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "wztsgky9gyuxpbv",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a67imcd6lircfc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chmgowrc",
    "name": "post_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "wztsgky9gyuxpbv",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
