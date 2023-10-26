/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("cretk9g5ap96ug6");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "k9hg70yn",
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
    const collection = dao.findCollectionByNameOrId("cretk9g5ap96ug6");

    // remove
    collection.schema.removeField("k9hg70yn");

    return dao.saveCollection(collection);
  }
);
