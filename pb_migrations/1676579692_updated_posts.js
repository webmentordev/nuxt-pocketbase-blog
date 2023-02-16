migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.createRule = null

  return dao.saveCollection(collection)
})
