/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const snapshot = [
      {
        id: "4k1ujkjd1im5r9v",
        created: "2023-10-21 11:38:51.407Z",
        updated: "2023-10-25 03:05:52.372Z",
        name: "person",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "wi6sd7gt",
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
            id: "mhvcgpp9",
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
            id: "krmadee7",
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
            id: "fbhx6sdh",
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
            id: "gw5hca6w",
            name: "dob",
            type: "date",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: "",
              max: ""
            }
          },
          {
            system: false,
            id: "ikkqmnzl",
            name: "dod",
            type: "date",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: "",
              max: ""
            }
          },
          {
            system: false,
            id: "czpl7lxz",
            name: "avatars",
            type: "file",
            required: false,
            presentable: true,
            unique: false,
            options: {
              maxSelect: 99,
              maxSize: 5242880,
              mimeTypes: ["image/webp", "image/png", "image/jpeg"],
              thumbs: ["300x450f", "2000x3000f"],
              protected: false
            }
          },
          {
            system: false,
            id: "r0gfz90f",
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
            id: "ak0ih1uz",
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
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "ypmkakeu5o2le0y",
        created: "2023-10-21 11:58:45.376Z",
        updated: "2023-10-25 03:05:43.681Z",
        name: "studio",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "mdhkwmr4",
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
            id: "g5imgrlg",
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
            id: "lyqex6wv",
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
            id: "uc4unxgt",
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
            id: "vnhifble",
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
            id: "afzvmgxk",
            name: "foundedAt",
            type: "date",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: "",
              max: ""
            }
          },
          {
            system: false,
            id: "fnqvlbt2",
            name: "logo",
            type: "file",
            required: false,
            presentable: true,
            unique: false,
            options: {
              maxSelect: 1,
              maxSize: 5242880,
              mimeTypes: ["image/jpeg", "image/png", "image/webp"],
              thumbs: [],
              protected: false
            }
          }
        ],
        indexes: [
          "CREATE INDEX `idx_tP5CKZt` ON `studio` (`name` COLLATE NOCASE)",
          "CREATE INDEX `idx_nXcQvhb` ON `studio` (`sortName` COLLATE NOCASE)"
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "dwstht72so8d0d6",
        created: "2023-10-21 12:14:04.314Z",
        updated: "2023-10-23 14:15:47.816Z",
        name: "collection",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "p0pakubv",
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
            id: "lkrgayvn",
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
            id: "wbq2hgwe",
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
            id: "xgnrktzc",
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
            id: "qebeuuy5",
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
            id: "d7tyamvx",
            name: "posters",
            type: "file",
            required: false,
            presentable: false,
            unique: false,
            options: {
              maxSelect: 99,
              maxSize: 5242880,
              mimeTypes: ["image/jpeg", "image/png", "image/webp"],
              thumbs: ["500x750f", "2000x3000f"],
              protected: false
            }
          },
          {
            system: false,
            id: "jlgta41s",
            name: "backdrop",
            type: "file",
            required: false,
            presentable: false,
            unique: false,
            options: {
              maxSelect: 99,
              maxSize: 5242880,
              mimeTypes: ["image/jpeg", "image/png", "image/webp"],
              thumbs: ["1280x720f", "3840x2160f"],
              protected: false
            }
          },
          {
            system: false,
            id: "yagywvzz",
            name: "contentRatings",
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
            id: "cillvazu",
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
            id: "9hfnfm8s",
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
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "72fciyoehjf5ffl",
        created: "2023-10-21 12:15:19.622Z",
        updated: "2023-10-23 07:06:13.268Z",
        name: "genre",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "qlzhlulh",
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
            id: "dncedymk",
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
          }
        ],
        indexes: ["CREATE UNIQUE INDEX `idx_h4PlNsv` ON `genre` (`name`)"],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "pilsr6ab0pna2sm",
        created: "2023-10-21 12:25:23.533Z",
        updated: "2023-10-25 03:04:52.080Z",
        name: "movie",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "cbvu2ai7",
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
            id: "nxikamxr",
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
            id: "h95wayjo",
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
            id: "n6lj7gmy",
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
            id: "0dyhnw6h",
            name: "tagline",
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
            id: "v0nvkbhm",
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
            id: "x4mqbctj",
            name: "contentRatings",
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
            id: "qzjxnozd",
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
            id: "pfgffzq9",
            name: "homepage",
            type: "url",
            required: false,
            presentable: false,
            unique: false,
            options: {
              exceptDomains: [],
              onlyDomains: []
            }
          },
          {
            system: false,
            id: "7hs9dwzw",
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
            id: "1ed45bqy",
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
            id: "nhlhvdgv",
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
            id: "v9ktqj3t",
            name: "studios",
            type: "relation",
            required: false,
            presentable: false,
            unique: false,
            options: {
              collectionId: "ypmkakeu5o2le0y",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: null,
              displayFields: null
            }
          },
          {
            system: false,
            id: "cszrhv8m",
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
            id: "9itpco8w",
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
            id: "nypyfl2a",
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
            id: "jlomrhhk",
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
            id: "q7lzlj7s",
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
            id: "zbaaoc3w",
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
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "nooln01zrzyzpr0",
        created: "2023-10-21 12:41:38.723Z",
        updated: "2023-10-23 07:06:13.268Z",
        name: "language",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "lmuq3wcx",
            name: "iso639_1",
            type: "text",
            required: true,
            presentable: true,
            unique: false,
            options: {
              min: 2,
              max: 2,
              pattern: "^[a-z]{2}$"
            }
          },
          {
            system: false,
            id: "0thpzn2m",
            name: "iso639_2",
            type: "text",
            required: true,
            presentable: false,
            unique: false,
            options: {
              min: 3,
              max: 3,
              pattern: "^[a-z]{3}$"
            }
          },
          {
            system: false,
            id: "hbcragsc",
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
          }
        ],
        indexes: [
          "CREATE UNIQUE INDEX `idx_6xzkbzg` ON `language` (`iso639_1`)",
          "CREATE UNIQUE INDEX `idx_iSXjn4U` ON `language` (`iso639_2`)"
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "jy3sl1h9e3s75iv",
        created: "2023-10-21 13:11:09.031Z",
        updated: "2023-10-23 07:06:13.268Z",
        name: "country",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "5dpn0wug",
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
            id: "t9ytnyxx",
            name: "alpha2",
            type: "text",
            required: true,
            presentable: true,
            unique: false,
            options: {
              min: 2,
              max: 2,
              pattern: "^[A-Z]{3}$"
            }
          },
          {
            system: false,
            id: "whe8bobw",
            name: "alpha3",
            type: "text",
            required: true,
            presentable: false,
            unique: false,
            options: {
              min: 3,
              max: 3,
              pattern: "^[A-Z]{3}$"
            }
          }
        ],
        indexes: [
          "CREATE UNIQUE INDEX `idx_azmWrLt` ON `country` (`alpha2`)",
          "CREATE UNIQUE INDEX `idx_OR5qu2e` ON `country` (`alpha3`)"
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "e93j13i5ggt4v3m",
        created: "2023-10-21 13:56:03.878Z",
        updated: "2023-10-23 07:06:13.268Z",
        name: "movieStaff",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "p0fyct4n",
            name: "movie",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "pilsr6ab0pna2sm",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "rtflza8q",
            name: "role",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "0d22acftfgyyqh8",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "1hqb4puq",
            name: "person",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "4k1ujkjd1im5r9v",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "hevkhe3x",
            name: "priority",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: null,
              max: null,
              noDecimal: true
            }
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "0d22acftfgyyqh8",
        created: "2023-10-21 14:01:20.404Z",
        updated: "2023-10-23 07:06:13.268Z",
        name: "role",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "ilhxtm2l",
            name: "name",
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
            id: "p2dgi88c",
            name: "jellyfin",
            type: "select",
            required: false,
            presentable: false,
            unique: false,
            options: {
              maxSelect: 1,
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
            }
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "xti0ufphifzbhc2",
        created: "2023-10-23 06:03:01.145Z",
        updated: "2023-10-23 07:06:13.269Z",
        name: "tag",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "aex1ne3e",
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
            id: "paykhmqo",
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
          }
        ],
        indexes: ["CREATE UNIQUE INDEX `idx_qKALrls` ON `tag` (`name`)"],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "cretk9g5ap96ug6",
        created: "2023-10-24 07:36:48.322Z",
        updated: "2023-10-25 03:05:20.387Z",
        name: "tvSeries",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "uigzpmpr",
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
            id: "wea1c5pk",
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
            id: "bjbn25pj",
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
            id: "butbhcy7",
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
            id: "t4c9upvr",
            name: "tagline",
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
            id: "pujskecz",
            name: "firstAirDate",
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
            id: "uzdug97h",
            name: "lastAirDate",
            type: "date",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: "",
              max: ""
            }
          },
          {
            system: false,
            id: "k5yd6esa",
            name: "contentRatings",
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
            id: "2e2x4goo",
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
            id: "punldxxl",
            name: "homepage",
            type: "url",
            required: false,
            presentable: false,
            unique: false,
            options: {
              exceptDomains: [],
              onlyDomains: []
            }
          },
          {
            system: false,
            id: "g5xicgtj",
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
            id: "fncqo41q",
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
            id: "b14r52kc",
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
            id: "btdh0m8h",
            name: "studios",
            type: "relation",
            required: false,
            presentable: false,
            unique: false,
            options: {
              collectionId: "ypmkakeu5o2le0y",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: null,
              displayFields: null
            }
          },
          {
            system: false,
            id: "f8eredty",
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
            id: "vrtwe12t",
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
            id: "v9ndqdfg",
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
            id: "3lp9vyyi",
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
            id: "2vcazam0",
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
            id: "5uqhhmsb",
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
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "fgd2hx5s9ztjvho",
        created: "2023-10-24 08:18:58.049Z",
        updated: "2023-10-25 03:05:27.794Z",
        name: "tvSeason",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "hmfev1ut",
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
            id: "wabmavfs",
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
            id: "meloulwd",
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
            id: "avn8keeo",
            name: "tagline",
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
            id: "xlijz8dk",
            name: "airDate",
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
            id: "7udeyphj",
            name: "contentRatings",
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
            id: "cdp9e7yb",
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
            id: "ejptqzcl",
            name: "homepage",
            type: "url",
            required: false,
            presentable: false,
            unique: false,
            options: {
              exceptDomains: [],
              onlyDomains: []
            }
          },
          {
            system: false,
            id: "loraszcj",
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
            id: "ucotwf1n",
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
            id: "o99hnugc",
            name: "studios",
            type: "relation",
            required: false,
            presentable: false,
            unique: false,
            options: {
              collectionId: "ypmkakeu5o2le0y",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: null,
              displayFields: null
            }
          },
          {
            system: false,
            id: "7vzbj9nl",
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
            id: "w98ohlxu",
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
            id: "w8rgfose",
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
            id: "e079yfdc",
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
            id: "souyqgph",
            name: "order",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: 0,
              max: null,
              noDecimal: false
            }
          },
          {
            system: false,
            id: "xcqonvq9",
            name: "tvSeries",
            type: "relation",
            required: true,
            presentable: false,
            unique: false,
            options: {
              collectionId: "cretk9g5ap96ug6",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          }
        ],
        indexes: [
          "CREATE UNIQUE INDEX `idx_Vsogsim` ON `tvSeason` (\n  `tvSeries`,\n  `order`\n)"
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "pg97numhn968ygk",
        created: "2023-10-24 08:19:22.903Z",
        updated: "2023-10-24 08:19:22.903Z",
        name: "tvSeasonStaff",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "1alfemzk",
            name: "tvSeason",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "fgd2hx5s9ztjvho",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "2gxfk1cu",
            name: "role",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "0d22acftfgyyqh8",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "wiylaxsr",
            name: "person",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "4k1ujkjd1im5r9v",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "ycrgmzuu",
            name: "priority",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: null,
              max: null,
              noDecimal: true
            }
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "5af1xgjziu4c2mr",
        created: "2023-10-24 08:24:40.716Z",
        updated: "2023-10-24 08:24:40.716Z",
        name: "tvSeriesStaff",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "32jkadbg",
            name: "tvSeries",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "cretk9g5ap96ug6",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "vkiracqk",
            name: "role",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "0d22acftfgyyqh8",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "7o2lam70",
            name: "person",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "4k1ujkjd1im5r9v",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "exihuria",
            name: "priority",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: null,
              max: null,
              noDecimal: true
            }
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "7etq46kixjljzng",
        created: "2023-10-24 08:27:29.470Z",
        updated: "2023-10-25 03:05:35.178Z",
        name: "tvEpisode",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "e6si7vip",
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
            id: "cwkfv1wf",
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
            id: "ubbw1zsr",
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
            id: "2xfgfkra",
            name: "airDate",
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
            id: "6zu9gdpo",
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
            id: "qe8sq2sq",
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
            id: "urjwvdas",
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
            id: "lb3w7inq",
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
            id: "e0mqu2mn",
            name: "backdrop",
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
            id: "pfa0hiwy",
            name: "banners",
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
            id: "mwxailzq",
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
            id: "jpd7yjth",
            name: "order",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: 0,
              max: null,
              noDecimal: false
            }
          },
          {
            system: false,
            id: "fwkiqmge",
            name: "tvSeason",
            type: "relation",
            required: true,
            presentable: false,
            unique: false,
            options: {
              collectionId: "fgd2hx5s9ztjvho",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          }
        ],
        indexes: [
          "CREATE UNIQUE INDEX `idx_V8H3r2U` ON `tvEpisode` (\n  `tvSeason`,\n  `order`\n)"
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "kt8vb9lbmity66u",
        created: "2023-10-24 08:28:30.584Z",
        updated: "2023-10-24 08:28:30.584Z",
        name: "tvEpisodeStaff",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "tjvbqpvx",
            name: "tvEpisode",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "7etq46kixjljzng",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "zdvw38vd",
            name: "role",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "0d22acftfgyyqh8",
              cascadeDelete: false,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "cmtzmo2a",
            name: "person",
            type: "relation",
            required: true,
            presentable: true,
            unique: false,
            options: {
              collectionId: "4k1ujkjd1im5r9v",
              cascadeDelete: true,
              minSelect: null,
              maxSelect: 1,
              displayFields: null
            }
          },
          {
            system: false,
            id: "tapzmfaw",
            name: "priority",
            type: "number",
            required: false,
            presentable: false,
            unique: false,
            options: {
              min: null,
              max: null,
              noDecimal: true
            }
          }
        ],
        indexes: [],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: null,
        updateRule: null,
        deleteRule: null,
        options: {}
      },
      {
        id: "_pb_users_auth_",
        created: "2023-10-25 02:11:43.943Z",
        updated: "2023-10-25 02:11:43.968Z",
        name: "user",
        type: "auth",
        system: false,
        schema: [
          {
            system: false,
            id: "users_name",
            name: "name",
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
            id: "users_avatar",
            name: "avatar",
            type: "file",
            required: false,
            presentable: false,
            unique: false,
            options: {
              maxSelect: 1,
              maxSize: 5242880,
              mimeTypes: [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp"
              ],
              thumbs: null,
              protected: false
            }
          }
        ],
        indexes: [],
        listRule: "id = @request.auth.id",
        viewRule: "id = @request.auth.id",
        createRule: "",
        updateRule: "id = @request.auth.id",
        deleteRule: "id = @request.auth.id",
        options: {
          allowEmailAuth: true,
          allowOAuth2Auth: true,
          allowUsernameAuth: true,
          exceptEmailDomains: null,
          manageRule: null,
          minPasswordLength: 8,
          onlyEmailDomains: null,
          requireEmail: false
        }
      }
    ];

    const collections = snapshot.map(item => new Collection(item));

    return Dao(db).importCollections(collections, true, null);
  },
  () => null
);
