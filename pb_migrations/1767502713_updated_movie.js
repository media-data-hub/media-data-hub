/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pilsr6ab0pna2sm");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_BoXxt4tQlx` ON `movie` (`matchName`)",
      "CREATE INDEX `idx_pepaY3Dum4` ON `movie` (`name`)",
      "CREATE INDEX `idx_hZIDUY7SAJ` ON `movie` (`sortName`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "cbvu2ai7",
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
    id: "nxikamxr",
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
  const collection = app.findCollectionByNameOrId("pilsr6ab0pna2sm");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "cbvu2ai7",
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
    id: "nxikamxr",
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
