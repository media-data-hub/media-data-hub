/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("0d22acftfgyyqh8");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_oHUy9oGMXr` ON `role` (`name`)"
    ]
  }, collection);

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("0d22acftfgyyqh8");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE INDEX `idx_oHUy9oGMXr` ON `role` (`name`)"
    ]
  }, collection);

  return app.save(collection);
});
