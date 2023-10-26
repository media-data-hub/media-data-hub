/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("fgd2hx5s9ztjvho");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "lyv86tks",
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
    const collection = dao.findCollectionByNameOrId("fgd2hx5s9ztjvho");

    // remove
    collection.schema.removeField("lyv86tks");

    return dao.saveCollection(collection);
  }
);
