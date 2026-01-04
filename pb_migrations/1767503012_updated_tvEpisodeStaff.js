/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("kt8vb9lbmity66u");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_yq9tWXSupM` ON `tvEpisodeStaff` (\n  `tvEpisode`,\n  `role`,\n  `priority`\n)"
    ]
  }, collection);

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("kt8vb9lbmity66u");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  return app.save(collection);
});
