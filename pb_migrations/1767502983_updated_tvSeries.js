/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("cretk9g5ap96ug6");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE INDEX `idx_ZnPY8QkkDc` ON `tvSeries` (`name`)",
      "CREATE INDEX `idx_tleDlMNCe5` ON `tvSeries` (`sortName`)",
      "CREATE UNIQUE INDEX `idx_9xFhc7AbUZ` ON `tvSeries` (`matchName`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "uigzpmpr",
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
    id: "wea1c5pk",
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
  const collection = app.findCollectionByNameOrId("cretk9g5ap96ug6");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "uigzpmpr",
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
    id: "wea1c5pk",
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
