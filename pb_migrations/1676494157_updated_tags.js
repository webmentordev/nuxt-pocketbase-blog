migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a67imcd6lircfc")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a67imcd6lircfc")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
