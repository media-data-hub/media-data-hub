/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("5af1xgjziu4c2mr");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_0jkpAAqOMz` ON `tvSeriesStaff` (\n  `tvSeries`,\n  `role`,\n  `priority`\n)"
    ]
  }, collection);

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("5af1xgjziu4c2mr");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  return app.save(collection);
});
