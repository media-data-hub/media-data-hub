/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("wmwk938ls187j2q");

  // add field
  collection.fields.addAt(6, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text2416879994",
    max: 0,
    min: 0,
    name: "contentRatings",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("wmwk938ls187j2q");

  // remove field
  collection.fields.removeById("text2416879994");

  return app.save(collection);
});
