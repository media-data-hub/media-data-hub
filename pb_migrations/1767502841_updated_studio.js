/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("ypmkakeu5o2le0y");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_tP5CKZt` ON `studio` (`name` COLLATE NOCASE)",
      "CREATE INDEX `idx_nXcQvhb` ON `studio` (`sortName` COLLATE NOCASE)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "mdhkwmr4",
    max: 0,
    min: 0,
    name: "name",
    pattern: "^[^\\s]+(\\s+[^\\s]+)*$",
    presentable: true,
    primaryKey: false,
    required: true,
    system: false,
    type: "text"
  }));

  // update field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "g5imgrlg",
    max: 0,
    min: 0,
    name: "sortName",
    pattern: "^[^\\s]+(\\s+[^\\s]+)*$",
    presentable: false,
    primaryKey: false,
    required: true,
    system: false,
    type: "text"
  }));

  // update field
  collection.fields.addAt(7, new Field({
    hidden: false,
    id: "fnqvlbt2",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml"
    ],
    name: "logos",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "efjb8bg2",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml"
    ],
    name: "posters",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "oabjnx7k",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml"
    ],
    name: "backdrop",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(10, new Field({
    hidden: false,
    id: "fszajd0z",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml"
    ],
    name: "thumbnails",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("ypmkakeu5o2le0y");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE INDEX `idx_tP5CKZt` ON `studio` (`name` COLLATE NOCASE)",
      "CREATE INDEX `idx_nXcQvhb` ON `studio` (`sortName` COLLATE NOCASE)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "mdhkwmr4",
    max: 0,
    min: 0,
    name: "name",
    pattern: "",
    presentable: true,
    primaryKey: false,
    required: true,
    system: false,
    type: "text"
  }));

  // update field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "g5imgrlg",
    max: 0,
    min: 0,
    name: "sortName",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: true,
    system: false,
    type: "text"
  }));

  // update field
  collection.fields.addAt(7, new Field({
    hidden: false,
    id: "fnqvlbt2",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    name: "logos",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "efjb8bg2",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    name: "posters",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "oabjnx7k",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    name: "backdrop",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(10, new Field({
    hidden: false,
    id: "fszajd0z",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    name: "thumbnails",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  return app.save(collection);
});
