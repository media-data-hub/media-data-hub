/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("pilsr6ab0pna2sm");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "hbjiurpc",
        name: "thumbnails",
        type: "file",
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: ["image/jpeg", "image/png", "image/webp"],
          thumbs: [],
          protected: false
        }
      })
    );

    return dao.saveCollection(collection);
  },
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("pilsr6ab0pna2sm");

    // remove
    collection.schema.removeField("hbjiurpc");

    return dao.saveCollection(collection);
  }
);
