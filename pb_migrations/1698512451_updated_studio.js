/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("ypmkakeu5o2le0y");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "efjb8bg2",
        name: "posters",
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
        id: "oabjnx7k",
        name: "backdrop",
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
        id: "fszajd0z",
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

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "fnqvlbt2",
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
    const collection = dao.findCollectionByNameOrId("ypmkakeu5o2le0y");

    // remove
    collection.schema.removeField("efjb8bg2");

    // remove
    collection.schema.removeField("oabjnx7k");

    // remove
    collection.schema.removeField("fszajd0z");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "fnqvlbt2",
        name: "logo",
        type: "file",
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ["image/jpeg", "image/png", "image/webp"],
          thumbs: [],
          protected: false
        }
      })
    );

    return dao.saveCollection(collection);
  }
);
