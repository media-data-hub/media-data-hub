/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const snapshot = [
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "wi6sd7gt",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "mhvcgpp9",
          max: 0,
          min: 0,
          name: "sortName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "ndrg6ux5",
          max: 0,
          min: 0,
          name: "matchName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "krmadee7",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "fbhx6sdh",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "gw5hca6w",
          max: "",
          min: "",
          name: "dob",
          presentable: false,
          required: false,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "ikkqmnzl",
          max: "",
          min: "",
          name: "dod",
          presentable: false,
          required: false,
          system: false,
          type: "date"
        },
        {
          cascadeDelete: false,
          collectionId: "xti0ufphifzbhc2",
          hidden: false,
          id: "ak0ih1uz",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "czpl7lxz",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/webp",
            "image/png",
            "image/jpeg"
          ],
          name: "avatars",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "300x450f",
            "2000x3000f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "r0gfz90f",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1920x1080f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "mpoar7bd",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "4k1ujkjd1im5r9v",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "person",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "mdhkwmr4",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "g5imgrlg",
          max: 0,
          min: 0,
          name: "sortName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "lyqex6wv",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "uc4unxgt",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "vnhifble",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "afzvmgxk",
          max: "",
          min: "",
          name: "foundedAt",
          presentable: false,
          required: false,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "fnqvlbt2",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "efjb8bg2",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "posters",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "oabjnx7k",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "fszajd0z",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "ypmkakeu5o2le0y",
      indexes: [
        "CREATE INDEX `idx_tP5CKZt` ON `studio` (`name` COLLATE NOCASE)",
        "CREATE INDEX `idx_nXcQvhb` ON `studio` (`sortName` COLLATE NOCASE)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "studio",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "p0pakubv",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "lkrgayvn",
          max: 0,
          min: 0,
          name: "sortName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "wbq2hgwe",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          cascadeDelete: false,
          collectionId: "72fciyoehjf5ffl",
          hidden: false,
          id: "xgnrktzc",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "genres",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "xti0ufphifzbhc2",
          hidden: false,
          id: "qebeuuy5",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "d7tyamvx",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "posters",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "500x750f",
            "2000x3000f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "jlgta41s",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1280x720f",
            "3840x2160f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "onoyb0to",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "riruzvym",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "lbux6exr",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "yagywvzz",
          max: 0,
          min: 0,
          name: "contentRatings",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "cillvazu",
          max: "",
          min: "",
          name: "releaseDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "9hfnfm8s",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "dwstht72so8d0d6",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "collection",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "qlzhlulh",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "dncedymk",
          max: 0,
          min: 0,
          name: "sortName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "72fciyoehjf5ffl",
      indexes: [
        "CREATE UNIQUE INDEX `idx_h4PlNsv` ON `genre` (`name`)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "genre",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "h95wayjo",
          max: 0,
          min: 0,
          name: "matchName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "n6lj7gmy",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "0dyhnw6h",
          max: 0,
          min: 0,
          name: "tagline",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "v0nvkbhm",
          max: "",
          min: "",
          name: "releaseDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "x4mqbctj",
          max: 0,
          min: 0,
          name: "contentRatings",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "qzjxnozd",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          exceptDomains: null,
          hidden: false,
          id: "pfgffzq9",
          name: "homepage",
          onlyDomains: null,
          presentable: false,
          required: false,
          system: false,
          type: "url"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "7hs9dwzw",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "1ed45bqy",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "dwstht72so8d0d6",
          hidden: false,
          id: "nhlhvdgv",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "collections",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "ypmkakeu5o2le0y",
          hidden: false,
          id: "v9ktqj3t",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "studios",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "72fciyoehjf5ffl",
          hidden: false,
          id: "cszrhv8m",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "genres",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "xti0ufphifzbhc2",
          hidden: false,
          id: "9itpco8w",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "nypyfl2a",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          name: "posters",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x1500f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "jlomrhhk",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1920x1080f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "q7lzlj7s",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x185f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "zbaaoc3w",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "hbjiurpc",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "pilsr6ab0pna2sm",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "movie",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "lmuq3wcx",
          max: 2,
          min: 2,
          name: "iso639_1",
          pattern: "^[a-z]{2}$",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "0thpzn2m",
          max: 3,
          min: 3,
          name: "iso639_2",
          pattern: "^[a-z]{3}$",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "hbcragsc",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "nooln01zrzyzpr0",
      indexes: [
        "CREATE UNIQUE INDEX `idx_6xzkbzg` ON `language` (`iso639_1`)",
        "CREATE UNIQUE INDEX `idx_iSXjn4U` ON `language` (`iso639_2`)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "language",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "5dpn0wug",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "t9ytnyxx",
          max: 2,
          min: 2,
          name: "alpha2",
          pattern: "^[A-Z]{2}$",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "whe8bobw",
          max: 3,
          min: 3,
          name: "alpha3",
          pattern: "^[A-Z]{3}$",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "jy3sl1h9e3s75iv",
      indexes: [
        "CREATE UNIQUE INDEX `idx_azmWrLt` ON `country` (`alpha2`)",
        "CREATE UNIQUE INDEX `idx_OR5qu2e` ON `country` (`alpha3`)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "country",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cascadeDelete: true,
          collectionId: "pilsr6ab0pna2sm",
          hidden: false,
          id: "p0fyct4n",
          maxSelect: 1,
          minSelect: 0,
          name: "movie",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "0d22acftfgyyqh8",
          hidden: false,
          id: "rtflza8q",
          maxSelect: 1,
          minSelect: 0,
          name: "role",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: true,
          collectionId: "4k1ujkjd1im5r9v",
          hidden: false,
          id: "1hqb4puq",
          maxSelect: 1,
          minSelect: 0,
          name: "person",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "hevkhe3x",
          max: null,
          min: null,
          name: "priority",
          onlyInt: true,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "e93j13i5ggt4v3m",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "movieStaff",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "ilhxtm2l",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "p2dgi88c",
          maxSelect: 1,
          name: "jellyfin",
          presentable: false,
          required: false,
          system: false,
          type: "select",
          values: [
            "Actor",
            "Director",
            "Composer",
            "Writer",
            "GuestStar",
            "Producer",
            "Conductor",
            "Lyricist",
            "Arranger",
            "Engineer",
            "Mixer",
            "Remixer"
          ]
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "0d22acftfgyyqh8",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "role",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "xti0ufphifzbhc2",
      indexes: [
        "CREATE UNIQUE INDEX `idx_qKALrls` ON `tag` (`name`)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "tag",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "bjbn25pj",
          max: 0,
          min: 0,
          name: "matchName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "butbhcy7",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "t4c9upvr",
          max: 0,
          min: 0,
          name: "tagline",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "pujskecz",
          max: "",
          min: "",
          name: "firstAirDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "uzdug97h",
          max: "",
          min: "",
          name: "lastAirDate",
          presentable: false,
          required: false,
          system: false,
          type: "date"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "k5yd6esa",
          max: 0,
          min: 0,
          name: "contentRatings",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "2e2x4goo",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          exceptDomains: null,
          hidden: false,
          id: "punldxxl",
          name: "homepage",
          onlyDomains: null,
          presentable: false,
          required: false,
          system: false,
          type: "url"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "g5xicgtj",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "fncqo41q",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "dwstht72so8d0d6",
          hidden: false,
          id: "b14r52kc",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "collections",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "ypmkakeu5o2le0y",
          hidden: false,
          id: "btdh0m8h",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "studios",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "72fciyoehjf5ffl",
          hidden: false,
          id: "f8eredty",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "genres",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "xti0ufphifzbhc2",
          hidden: false,
          id: "vrtwe12t",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "v9ndqdfg",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          name: "posters",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x1500f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "3lp9vyyi",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1920x1080f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "2vcazam0",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x185f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "5uqhhmsb",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "k9hg70yn",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "cretk9g5ap96ug6",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "tvSeries",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "meloulwd",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "avn8keeo",
          max: 0,
          min: 0,
          name: "tagline",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "xlijz8dk",
          max: "",
          min: "",
          name: "airDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "7udeyphj",
          max: 0,
          min: 0,
          name: "contentRatings",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "cdp9e7yb",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          exceptDomains: null,
          hidden: false,
          id: "ejptqzcl",
          name: "homepage",
          onlyDomains: null,
          presentable: false,
          required: false,
          system: false,
          type: "url"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "loraszcj",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "ucotwf1n",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "ypmkakeu5o2le0y",
          hidden: false,
          id: "o99hnugc",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "studios",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "7vzbj9nl",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          name: "posters",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x1500f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "w98ohlxu",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1920x1080f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "w8rgfose",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x185f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "e079yfdc",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "lyv86tks",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "souyqgph",
          max: null,
          min: 0,
          name: "order",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          cascadeDelete: false,
          collectionId: "cretk9g5ap96ug6",
          hidden: false,
          id: "xcqonvq9",
          maxSelect: 1,
          minSelect: 0,
          name: "tvSeries",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "fgd2hx5s9ztjvho",
      indexes: [
        "CREATE UNIQUE INDEX `idx_Vsogsim` ON `tvSeason` (\n  `tvSeries`,\n  `order`\n)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "tvSeason",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cascadeDelete: true,
          collectionId: "fgd2hx5s9ztjvho",
          hidden: false,
          id: "1alfemzk",
          maxSelect: 1,
          minSelect: 0,
          name: "tvSeason",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "0d22acftfgyyqh8",
          hidden: false,
          id: "2gxfk1cu",
          maxSelect: 1,
          minSelect: 0,
          name: "role",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: true,
          collectionId: "4k1ujkjd1im5r9v",
          hidden: false,
          id: "wiylaxsr",
          maxSelect: 1,
          minSelect: 0,
          name: "person",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "ycrgmzuu",
          max: null,
          min: null,
          name: "priority",
          onlyInt: true,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "pg97numhn968ygk",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "tvSeasonStaff",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cascadeDelete: true,
          collectionId: "cretk9g5ap96ug6",
          hidden: false,
          id: "32jkadbg",
          maxSelect: 1,
          minSelect: 0,
          name: "tvSeries",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "0d22acftfgyyqh8",
          hidden: false,
          id: "vkiracqk",
          maxSelect: 1,
          minSelect: 0,
          name: "role",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: true,
          collectionId: "4k1ujkjd1im5r9v",
          hidden: false,
          id: "7o2lam70",
          maxSelect: 1,
          minSelect: 0,
          name: "person",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "exihuria",
          max: null,
          min: null,
          name: "priority",
          onlyInt: true,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "5af1xgjziu4c2mr",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "tvSeriesStaff",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
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
        },
        {
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
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "ubbw1zsr",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "2xfgfkra",
          max: "",
          min: "",
          name: "airDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "6zu9gdpo",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "qe8sq2sq",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "urjwvdas",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "lb3w7inq",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          name: "posters",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x1500f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "e0mqu2mn",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "pfa0hiwy",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "mwxailzq",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "dmhj1hzd",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "jpd7yjth",
          max: null,
          min: 0,
          name: "order",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          cascadeDelete: false,
          collectionId: "fgd2hx5s9ztjvho",
          hidden: false,
          id: "fwkiqmge",
          maxSelect: 1,
          minSelect: 0,
          name: "tvSeason",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "7etq46kixjljzng",
      indexes: [
        "CREATE UNIQUE INDEX `idx_V8H3r2U` ON `tvEpisode` (\n  `tvSeason`,\n  `order`\n)"
      ],
      listRule: "@request.auth.id != \"\"",
      name: "tvEpisode",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cascadeDelete: true,
          collectionId: "7etq46kixjljzng",
          hidden: false,
          id: "tjvbqpvx",
          maxSelect: 1,
          minSelect: 0,
          name: "tvEpisode",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "0d22acftfgyyqh8",
          hidden: false,
          id: "zdvw38vd",
          maxSelect: 1,
          minSelect: 0,
          name: "role",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: true,
          collectionId: "4k1ujkjd1im5r9v",
          hidden: false,
          id: "cmtzmo2a",
          maxSelect: 1,
          minSelect: 0,
          name: "person",
          presentable: true,
          required: true,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "tapzmfaw",
          max: null,
          min: null,
          name: "priority",
          onlyInt: true,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "kt8vb9lbmity66u",
      indexes: [],
      listRule: "@request.auth.id != \"\"",
      name: "tvEpisodeStaff",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != \"\""
    },
    {
      authAlert: {
        emailTemplate: {
          body: "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          subject: "Login from a new location"
        },
        enabled: true
      },
      authRule: "",
      authToken: { duration: 1209600 },
      confirmEmailChangeTemplate: {
        body: "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Confirm your {APP_NAME} new email address"
      },
      createRule: "",
      deleteRule: "id = @request.auth.id",
      emailChangeToken: { duration: 1800 },
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cost: 10,
          hidden: true,
          id: "password901924565",
          max: 0,
          min: 8,
          name: "password",
          pattern: "",
          presentable: false,
          required: true,
          system: true,
          type: "password"
        },
        {
          autogeneratePattern: "[a-zA-Z0-9_]{50}",
          hidden: true,
          id: "text2504183744",
          max: 60,
          min: 30,
          name: "tokenKey",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          exceptDomains: null,
          hidden: false,
          id: "email3885137012",
          name: "email",
          onlyDomains: null,
          presentable: false,
          required: false,
          system: true,
          type: "email"
        },
        {
          hidden: false,
          id: "bool1547992806",
          name: "emailVisibility",
          presentable: false,
          required: false,
          system: true,
          type: "bool"
        },
        {
          hidden: false,
          id: "bool256245529",
          name: "verified",
          presentable: false,
          required: false,
          system: true,
          type: "bool"
        },
        {
          autogeneratePattern: "users[0-9]{6}",
          hidden: false,
          id: "text4166911607",
          max: 150,
          min: 3,
          name: "username",
          pattern: "^[\\w][\\w\\.\\-]*$",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "users_name",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "users_avatar",
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          name: "avatar",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      fileToken: { duration: 120 },
      id: "_pb_users_auth_",
      indexes: [
        "CREATE UNIQUE INDEX `__pb_users_auth__username_idx` ON `user` (username COLLATE NOCASE)",
        "CREATE UNIQUE INDEX `__pb_users_auth__email_idx` ON `user` (`email`) WHERE `email` != ''",
        "CREATE UNIQUE INDEX `__pb_users_auth__tokenKey_idx` ON `user` (`tokenKey`)"
      ],
      listRule: "id = @request.auth.id",
      manageRule: null,
      mfa: {
        duration: 1800,
        enabled: false,
        rule: ""
      },
      name: "user",
      oauth2: {
        enabled: false,
        mappedFields: {
          avatarURL: "",
          id: "",
          name: "",
          username: "username"
        }
      },
      otp: {
        duration: 180,
        emailTemplate: {
          body: "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          subject: "OTP for {APP_NAME}"
        },
        enabled: false,
        length: 8
      },
      passwordAuth: {
        enabled: true,
        identityFields: [
          "email",
          "username"
        ]
      },
      passwordResetToken: { duration: 1800 },
      resetPasswordTemplate: {
        body: "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Reset your {APP_NAME} password"
      },
      system: false,
      type: "auth",
      updateRule: "id = @request.auth.id",
      verificationTemplate: {
        body: "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Verify your {APP_NAME} email"
      },
      verificationToken: { duration: 604800 },
      viewRule: "id = @request.auth.id"
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "26hv0lry",
          max: 0,
          min: 0,
          name: "name",
          pattern: "",
          presentable: true,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "rudwrnmu",
          max: 0,
          min: 0,
          name: "sortName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "riqrcyqi",
          max: 0,
          min: 0,
          name: "matchName",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "w0e5nann",
          max: 0,
          min: 0,
          name: "description",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: false,
          type: "text"
        },
        {
          hidden: false,
          id: "bv0ve2jb",
          max: "",
          min: "",
          name: "releaseDate",
          presentable: false,
          required: true,
          system: false,
          type: "date"
        },
        {
          hidden: false,
          id: "sribougx",
          max: 10,
          min: 0,
          name: "rating",
          onlyInt: false,
          presentable: false,
          required: false,
          system: false,
          type: "number"
        },
        {
          cascadeDelete: false,
          collectionId: "nooln01zrzyzpr0",
          hidden: false,
          id: "o85jr7pl",
          maxSelect: 1,
          minSelect: 0,
          name: "language",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "jy3sl1h9e3s75iv",
          hidden: false,
          id: "g0ykziq0",
          maxSelect: 1,
          minSelect: 0,
          name: "country",
          presentable: false,
          required: true,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "dwstht72so8d0d6",
          hidden: false,
          id: "pxwcxgfm",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "collections",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "72fciyoehjf5ffl",
          hidden: false,
          id: "zjtxgp9z",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "genres",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          cascadeDelete: false,
          collectionId: "xti0ufphifzbhc2",
          hidden: false,
          id: "pziyimvb",
          maxSelect: 2147483647,
          minSelect: 0,
          name: "tags",
          presentable: false,
          required: false,
          system: false,
          type: "relation"
        },
        {
          hidden: false,
          id: "fknfa1pm",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          name: "posters",
          presentable: true,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x1500f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "6241soxp",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "backdrop",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1920x1080f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "un6yyq4j",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "banners",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: [
            "1000x185f"
          ],
          type: "file"
        },
        {
          hidden: false,
          id: "pvelnpja",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "logos",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "bbarxoid",
          maxSelect: 99,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          name: "thumbnails",
          presentable: false,
          protected: false,
          required: false,
          system: false,
          thumbs: null,
          type: "file"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate"
        }
      ],
      id: "wmwk938ls187j2q",
      indexes: [],
      listRule: "",
      name: "musicAlbum",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: ""
    },
    {
      authAlert: {
        emailTemplate: {
          body: "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          subject: "Login from a new location"
        },
        enabled: true
      },
      authRule: "",
      authToken: { duration: 1209600 },
      confirmEmailChangeTemplate: {
        body: "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Confirm your {APP_NAME} new email address"
      },
      createRule: null,
      deleteRule: null,
      emailChangeToken: { duration: 1800 },
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          cost: 0,
          hidden: true,
          id: "password901924565",
          max: 0,
          min: 8,
          name: "password",
          pattern: "",
          presentable: false,
          required: true,
          system: true,
          type: "password"
        },
        {
          autogeneratePattern: "[a-zA-Z0-9]{50}",
          hidden: true,
          id: "text2504183744",
          max: 60,
          min: 30,
          name: "tokenKey",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          exceptDomains: null,
          hidden: false,
          id: "email3885137012",
          name: "email",
          onlyDomains: null,
          presentable: false,
          required: true,
          system: true,
          type: "email"
        },
        {
          hidden: false,
          id: "bool1547992806",
          name: "emailVisibility",
          presentable: false,
          required: false,
          system: true,
          type: "bool"
        },
        {
          hidden: false,
          id: "bool256245529",
          name: "verified",
          presentable: false,
          required: false,
          system: true,
          type: "bool"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: true,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: true,
          type: "autodate"
        }
      ],
      fileToken: { duration: 120 },
      id: "pbc_3142635823",
      indexes: [
        "CREATE UNIQUE INDEX `idx_tokenKey_pbc_3142635823` ON `_superusers` (`tokenKey`)",
        "CREATE UNIQUE INDEX `idx_email_pbc_3142635823` ON `_superusers` (`email`) WHERE `email` != ''"
      ],
      listRule: null,
      manageRule: null,
      mfa: {
        duration: 1800,
        enabled: false,
        rule: ""
      },
      name: "_superusers",
      oauth2: {
        enabled: false,
        mappedFields: {
          avatarURL: "",
          id: "",
          name: "",
          username: ""
        }
      },
      otp: {
        duration: 180,
        emailTemplate: {
          body: "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          subject: "OTP for {APP_NAME}"
        },
        enabled: false,
        length: 8
      },
      passwordAuth: {
        enabled: true,
        identityFields: [
          "email"
        ]
      },
      passwordResetToken: { duration: 1800 },
      resetPasswordTemplate: {
        body: "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Reset your {APP_NAME} password"
      },
      system: true,
      type: "auth",
      updateRule: null,
      verificationTemplate: {
        body: "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        subject: "Verify your {APP_NAME} email"
      },
      verificationToken: { duration: 259200 },
      viewRule: null
    },
    {
      createRule: null,
      deleteRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text455797646",
          max: 0,
          min: 0,
          name: "collectionRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text127846527",
          max: 0,
          min: 0,
          name: "recordRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text2462348188",
          max: 0,
          min: 0,
          name: "provider",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text1044722854",
          max: 0,
          min: 0,
          name: "providerId",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: true,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: true,
          type: "autodate"
        }
      ],
      id: "pbc_2281828961",
      indexes: [
        "CREATE UNIQUE INDEX `idx_externalAuths_record_provider` ON `_externalAuths` (collectionRef, recordRef, provider)",
        "CREATE UNIQUE INDEX `idx_externalAuths_collection_provider` ON `_externalAuths` (collectionRef, provider, providerId)"
      ],
      listRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      name: "_externalAuths",
      system: true,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text455797646",
          max: 0,
          min: 0,
          name: "collectionRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text127846527",
          max: 0,
          min: 0,
          name: "recordRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text1582905952",
          max: 0,
          min: 0,
          name: "method",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: true,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: true,
          type: "autodate"
        }
      ],
      id: "pbc_2279338944",
      indexes: [
        "CREATE INDEX `idx_mfas_collectionRef_recordRef` ON `_mfas` (collectionRef,recordRef)"
      ],
      listRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      name: "_mfas",
      system: true,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text455797646",
          max: 0,
          min: 0,
          name: "collectionRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text127846527",
          max: 0,
          min: 0,
          name: "recordRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          cost: 8,
          hidden: true,
          id: "password901924565",
          max: 0,
          min: 0,
          name: "password",
          pattern: "",
          presentable: false,
          required: true,
          system: true,
          type: "password"
        },
        {
          autogeneratePattern: "",
          hidden: true,
          id: "text3866985172",
          max: 0,
          min: 0,
          name: "sentTo",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: false,
          system: true,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: true,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: true,
          type: "autodate"
        }
      ],
      id: "pbc_1638494021",
      indexes: [
        "CREATE INDEX `idx_otps_collectionRef_recordRef` ON `_otps` (collectionRef, recordRef)"
      ],
      listRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      name: "_otps",
      system: true,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      createRule: null,
      deleteRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text455797646",
          max: 0,
          min: 0,
          name: "collectionRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text127846527",
          max: 0,
          min: 0,
          name: "recordRef",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text4228609354",
          max: 0,
          min: 0,
          name: "fingerprint",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: true,
          type: "text"
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: true,
          type: "autodate"
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: true,
          type: "autodate"
        }
      ],
      id: "pbc_4275539003",
      indexes: [
        "CREATE UNIQUE INDEX `idx_authOrigins_unique_pairs` ON `_authOrigins` (collectionRef, recordRef, fingerprint)"
      ],
      listRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      name: "_authOrigins",
      system: true,
      type: "base",
      updateRule: null,
      viewRule: "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    }
  ];

  return app.importCollections(snapshot, false);
}, _app => null);
