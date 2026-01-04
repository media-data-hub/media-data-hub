/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("dwstht72so8d0d6");

  // update field
  collection.fields.addAt(6, new Field({
    hidden: false,
    id: "d7tyamvx",
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
    thumbs: [
      "500x750f",
      "2000x3000f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(7, new Field({
    hidden: false,
    id: "jlgta41s",
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
      "1280x720f",
      "3840x2160f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "onoyb0to",
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
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "riruzvym",
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
  collection.fields.addAt(10, new Field({
    hidden: false,
    id: "lbux6exr",
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
  const collection = app.findCollectionByNameOrId("dwstht72so8d0d6");

  // update field
  collection.fields.addAt(6, new Field({
    hidden: false,
    id: "d7tyamvx",
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
    thumbs: [
      "500x750f",
      "2000x3000f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(7, new Field({
    hidden: false,
    id: "jlgta41s",
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
      "1280x720f",
      "3840x2160f"
    ],
    type: "file"
  }));

  // update field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "onoyb0to",
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
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "riruzvym",
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
  collection.fields.addAt(10, new Field({
    hidden: false,
    id: "lbux6exr",
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
