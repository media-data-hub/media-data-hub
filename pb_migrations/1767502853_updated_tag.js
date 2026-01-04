/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("xti0ufphifzbhc2");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_qKALrls` ON `tag` (`name`)",
      "CREATE INDEX `idx_SNvjHTPXto` ON `tag` (`sortName`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "aex1ne3e",
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
    id: "paykhmqo",
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
  const collection = app.findCollectionByNameOrId("xti0ufphifzbhc2");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_qKALrls` ON `tag` (`name`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "aex1ne3e",
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
    id: "paykhmqo",
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
