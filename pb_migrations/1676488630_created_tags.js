migrate((db) => {
  const collection = new Collection({
    "id": "8a67imcd6lircfc",
    "created": "2023-02-15 19:17:10.325Z",
    "updated": "2023-02-15 19:17:10.325Z",
    "name": "tags",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "jfmapwvw",
        "name": "tag",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 15,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8a67imcd6lircfc");

  return dao.deleteCollection(collection);
})
