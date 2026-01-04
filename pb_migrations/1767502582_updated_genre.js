/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("72fciyoehjf5ffl");

  // update field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "dncedymk",
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

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("72fciyoehjf5ffl");

  // update field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "dncedymk",
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

  return app.save(collection);
});
