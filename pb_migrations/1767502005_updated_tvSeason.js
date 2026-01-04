/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("fgd2hx5s9ztjvho");

  // update field
  collection.fields.addAt(12, new Field({
    hidden: false,
    id: "7vzbj9nl",
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
  collection.fields.addAt(13, new Field({
    hidden: false,
    id: "w98ohlxu",
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
    thumbs: [
      "1920x1080f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(14, new Field({
    hidden: false,
    id: "w8rgfose",
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
    thumbs: [
      "1000x185f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(15, new Field({
    hidden: false,
    id: "e079yfdc",
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
  collection.fields.addAt(16, new Field({
    hidden: false,
    id: "lyv86tks",
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
  const collection = app.findCollectionByNameOrId("fgd2hx5s9ztjvho");

  // update field
  collection.fields.addAt(12, new Field({
    hidden: false,
    id: "7vzbj9nl",
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
  collection.fields.addAt(13, new Field({
    hidden: false,
    id: "w98ohlxu",
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
    thumbs: [
      "1920x1080f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(14, new Field({
    hidden: false,
    id: "w8rgfose",
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
    thumbs: [
      "1000x185f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(15, new Field({
    hidden: false,
    id: "e079yfdc",
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
  collection.fields.addAt(16, new Field({
    hidden: false,
    id: "lyv86tks",
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
