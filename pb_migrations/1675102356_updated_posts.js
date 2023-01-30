migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5p6v4z9",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  // remove
  collection.schema.removeField("n5p6v4z9")

  return dao.saveCollection(collection)
})
