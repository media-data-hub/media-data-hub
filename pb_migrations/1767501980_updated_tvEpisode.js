/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("7etq46kixjljzng");

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "lb3w7inq",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/webp",
      "image/png",
      "image/svg+xml"
    ],
    name: "posters",
    presentable: true,
    protected: false,
    required: false,
    system: false,
    thumbs: [
      "1000x1500f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "e0mqu2mn",
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
    id: "pfa0hiwy",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml"
    ],
    name: "banners",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(11, new Field({
    hidden: false,
    id: "mwxailzq",
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
  collection.fields.addAt(12, new Field({
    hidden: false,
    id: "dmhj1hzd",
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
  const collection = app.findCollectionByNameOrId("7etq46kixjljzng");

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "lb3w7inq",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/webp",
      "image/png"
    ],
    name: "posters",
    presentable: true,
    protected: false,
    required: false,
    system: false,
    thumbs: [
      "1000x1500f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "e0mqu2mn",
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
    id: "pfa0hiwy",
    maxSelect: 99,
    maxSize: 5242880,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    name: "banners",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: "file"
  }));

  // update field
  collection.fields.addAt(11, new Field({
    hidden: false,
    id: "mwxailzq",
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
  collection.fields.addAt(12, new Field({
    hidden: false,
    id: "dmhj1hzd",
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
