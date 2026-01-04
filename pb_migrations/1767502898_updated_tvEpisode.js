/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("7etq46kixjljzng");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_V8H3r2U` ON `tvEpisode` (\n  `tvSeason`,\n  `order`\n)",
      "CREATE INDEX `idx_0nKY7bUSG3` ON `tvEpisode` (`name`)",
      "CREATE INDEX `idx_ZMOTkjS7lc` ON `tvEpisode` (`sortName`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "e6si7vip",
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
    id: "cwkfv1wf",
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
  const collection = app.findCollectionByNameOrId("7etq46kixjljzng");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_V8H3r2U` ON `tvEpisode` (\n  `tvSeason`,\n  `order`\n)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "e6si7vip",
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
    id: "cwkfv1wf",
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
