/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const collection = new Collection({
      id: "wmwk938ls187j2q",
      created: "2023-10-30 08:01:16.590Z",
      updated: "2023-10-30 08:01:16.590Z",
      name: "musicAlbum",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "26hv0lry",
          name: "name",
          type: "text",
          required: true,
          presentable: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: ""
          }
        },
        {
          system: false,
          id: "rudwrnmu",
          name: "sortName",
          type: "text",
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: ""
          }
        },
        {
          system: false,
          id: "riqrcyqi",
          name: "matchName",
          type: "text",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: ""
          }
        },
        {
          system: false,
          id: "w0e5nann",
          name: "description",
          type: "text",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: ""
          }
        },
        {
          system: false,
          id: "bv0ve2jb",
          name: "releaseDate",
          type: "date",
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: "",
            max: ""
          }
        },
        {
          system: false,
          id: "sribougx",
          name: "rating",
          type: "number",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: 0,
            max: 10,
            noDecimal: false
          }
        },
        {
          system: false,
          id: "o85jr7pl",
          name: "language",
          type: "relation",
          required: true,
          presentable: false,
          unique: false,
          options: {
            collectionId: "nooln01zrzyzpr0",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: 1,
            displayFields: null
          }
        },
        {
          system: false,
          id: "g0ykziq0",
          name: "country",
          type: "relation",
          required: true,
          presentable: false,
          unique: false,
          options: {
            collectionId: "jy3sl1h9e3s75iv",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: 1,
            displayFields: null
          }
        },
        {
          system: false,
          id: "pxwcxgfm",
          name: "collections",
          type: "relation",
          required: false,
          presentable: false,
          unique: false,
          options: {
            collectionId: "dwstht72so8d0d6",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: null,
            displayFields: null
          }
        },
        {
          system: false,
          id: "zjtxgp9z",
          name: "genres",
          type: "relation",
          required: false,
          presentable: false,
          unique: false,
          options: {
            collectionId: "72fciyoehjf5ffl",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: null,
            displayFields: null
          }
        },
        {
          system: false,
          id: "pziyimvb",
          name: "tags",
          type: "relation",
          required: false,
          presentable: false,
          unique: false,
          options: {
            collectionId: "xti0ufphifzbhc2",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: null,
            displayFields: null
          }
        },
        {
          system: false,
          id: "fknfa1pm",
          name: "posters",
          type: "file",
          required: false,
          presentable: true,
          unique: false,
          options: {
            maxSelect: 99,
            maxSize: 5242880,
            mimeTypes: ["image/jpeg", "image/webp", "image/png"],
            thumbs: ["1000x1500f"],
            protected: false
          }
        },
        {
          system: false,
          id: "6241soxp",
          name: "backdrop",
          type: "file",
          required: false,
          presentable: false,
          unique: false,
          options: {
            maxSelect: 99,
            maxSize: 5242880,
            mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            thumbs: ["1920x1080f"],
            protected: false
          }
        },
        {
          system: false,
          id: "un6yyq4j",
          name: "banners",
          type: "file",
          required: false,
          presentable: false,
          unique: false,
          options: {
            maxSelect: 99,
            maxSize: 5242880,
            mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            thumbs: ["1000x185f"],
            protected: false
          }
        },
        {
          system: false,
          id: "pvelnpja",
          name: "logos",
          type: "file",
          required: false,
          presentable: false,
          unique: false,
          options: {
            maxSelect: 99,
            maxSize: 5242880,
            mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            thumbs: [],
            protected: false
          }
        },
        {
          system: false,
          id: "bbarxoid",
          name: "thumbnails",
          type: "file",
          required: false,
          presentable: false,
          unique: false,
          options: {
            maxSelect: 99,
            maxSize: 5242880,
            mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            thumbs: [],
            protected: false
          }
        }
      ],
      indexes: [],
      listRule: "",
      viewRule: "",
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {}
    });

    return Dao(db).saveCollection(collection);
  },
  db => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("wmwk938ls187j2q");

    return dao.deleteCollection(collection);
  }
);
