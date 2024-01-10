/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("4k1ujkjd1im5r9v");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "mpoar7bd",
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
    const collection = dao.findCollectionByNameOrId("4k1ujkjd1im5r9v");

    // remove
    collection.schema.removeField("mpoar7bd");

    return dao.saveCollection(collection);
  }
);
