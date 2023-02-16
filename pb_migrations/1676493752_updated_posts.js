migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.listRule = "@collection.tags.post_id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv")

  collection.listRule = null

  return dao.saveCollection(collection)
})
