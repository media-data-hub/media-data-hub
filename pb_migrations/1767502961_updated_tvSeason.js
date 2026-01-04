/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("fgd2hx5s9ztjvho");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_Vsogsim` ON `tvSeason` (\n  `tvSeries`,\n  `order`\n)",
      "CREATE INDEX `idx_2lxBsggFJS` ON `tvSeason` (`name`)",
      "CREATE INDEX `idx_gelLHII0FM` ON `tvSeason` (`sortName`)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "hmfev1ut",
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
    id: "wabmavfs",
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
  const collection = app.findCollectionByNameOrId("fgd2hx5s9ztjvho");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_Vsogsim` ON `tvSeason` (\n  `tvSeries`,\n  `order`\n)"
    ]
  }, collection);

  // update field
  collection.fields.addAt(1, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "hmfev1ut",
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
    id: "wabmavfs",
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
