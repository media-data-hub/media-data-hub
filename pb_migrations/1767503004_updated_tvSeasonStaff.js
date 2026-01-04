/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pg97numhn968ygk");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_9WEMK0naWD` ON `tvSeasonStaff` (\n  `tvSeason`,\n  `role`,\n  `priority`\n)"
    ]
  }, collection);

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pg97numhn968ygk");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  return app.save(collection);
});
