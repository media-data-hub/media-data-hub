/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("7etq46kixjljzng");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "dmhj1hzd",
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
    const collection = dao.findCollectionByNameOrId("7etq46kixjljzng");

    // remove
    collection.schema.removeField("dmhj1hzd");

    return dao.saveCollection(collection);
  }
);
