/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("dwstht72so8d0d6");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "onoyb0to",
        name: "banners",
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

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "riruzvym",
        name: "logos",
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
    const collection = dao.findCollectionByNameOrId("dwstht72so8d0d6");

    // remove
    collection.schema.removeField("onoyb0to");

    // remove
    collection.schema.removeField("riruzvym");

    return dao.saveCollection(collection);
  }
);
