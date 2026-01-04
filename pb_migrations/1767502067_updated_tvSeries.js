/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("cretk9g5ap96ug6");

  // update field
  collection.fields.addAt(17, new Field({
    hidden: false,
    id: "v9ndqdfg",
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
  collection.fields.addAt(18, new Field({
    hidden: false,
    id: "3lp9vyyi",
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
  collection.fields.addAt(19, new Field({
    hidden: false,
    id: "2vcazam0",
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
  collection.fields.addAt(20, new Field({
    hidden: false,
    id: "5uqhhmsb",
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
  collection.fields.addAt(21, new Field({
    hidden: false,
    id: "k9hg70yn",
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
  const collection = app.findCollectionByNameOrId("cretk9g5ap96ug6");

  // update field
  collection.fields.addAt(17, new Field({
    hidden: false,
    id: "v9ndqdfg",
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
  collection.fields.addAt(18, new Field({
    hidden: false,
    id: "3lp9vyyi",
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
  collection.fields.addAt(19, new Field({
    hidden: false,
    id: "2vcazam0",
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
  collection.fields.addAt(20, new Field({
    hidden: false,
    id: "5uqhhmsb",
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
  collection.fields.addAt(21, new Field({
    hidden: false,
    id: "k9hg70yn",
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
