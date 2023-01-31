migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "69wxltnm",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 255,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xo22kujg",
    "name": "body",
    "type": "text",
    "required": true,
    "unique": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "69wxltnm",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 255,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xo22kujg",
    "name": "body",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
