/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("4k1ujkjd1im5r9v");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ndrg6ux5",
        name: "matchName",
        type: "text",
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ""
        }
      })
    );

    return dao.saveCollection(collection);
  },
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("4k1ujkjd1im5r9v");

    // remove
    collection.schema.removeField("ndrg6ux5");

    return dao.saveCollection(collection);
  }
);
