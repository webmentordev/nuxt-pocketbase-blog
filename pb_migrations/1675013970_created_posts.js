migrate((db) => {
  const collection = new Collection({
    "id": "wztsgky9gyuxpbv",
    "created": "2023-01-29 17:39:30.101Z",
    "updated": "2023-01-29 17:39:30.101Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("wztsgky9gyuxpbv");

  return dao.deleteCollection(collection);
})
