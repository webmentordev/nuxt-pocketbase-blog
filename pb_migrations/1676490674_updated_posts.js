migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.listRule = "@request.auth.collectionName = \"tags\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.listRule = null

  return dao.saveCollection(collection)
})
