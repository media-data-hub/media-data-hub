/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("jy3sl1h9e3s75iv");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "t9ytnyxx",
        name: "alpha2",
        type: "text",
        required: true,
        presentable: true,
        unique: false,
        options: {
          min: 2,
          max: 2,
          pattern: "^[A-Z]{2}$"
        }
      })
    );

    return dao.saveCollection(collection);
  },
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("jy3sl1h9e3s75iv");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "t9ytnyxx",
        name: "alpha2",
        type: "text",
        required: true,
        presentable: true,
        unique: false,
        options: {
          min: 2,
          max: 2,
          pattern: "^[A-Z]{3}$"
        }
      })
    );

    return dao.saveCollection(collection);
  }
);
