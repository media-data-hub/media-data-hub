/// <reference path="../pb_data/types.d.ts" />
migrate(
  db => {
    const iso639 = [
      {
        iso6391: "aa",
        iso6392: "aar",
        name: "Afaraf"
      },
      {
        iso6391: "ab",
        iso6392: "abk",
        name: "аҧсуа бызшәа, аҧсшәа"
      },
      {
        iso6391: "ae",
        iso6392: "ave",
        name: "avesta"
      },
      {
        iso6391: "af",
        iso6392: "afr",
        name: "Afrikaans"
      },
      {
        iso6391: "ak",
        iso6392: "aka",
        name: "Akan"
      },
      {
        iso6391: "am",
        iso6392: "amh",
        name: "አማርኛ"
      },
      {
        iso6391: "an",
        iso6392: "arg",
        name: "aragonés"
      },
      {
        iso6391: "ar",
        iso6392: "ara",
        name: "العربية"
      },
      {
        iso6391: "as",
        iso6392: "asm",
        name: "অসমীয়া"
      },
      {
        iso6391: "av",
        iso6392: "ava",
        name: "авар мацӀ, магӀарул мацӀ"
      },
      {
        iso6391: "ay",
        iso6392: "aym",
        name: "aymar aru"
      },
      {
        iso6391: "az",
        iso6392: "aze",
        name: "azərbaycan dili"
      },
      {
        iso6391: "ba",
        iso6392: "bak",
        name: "башҡорт теле"
      },
      {
        iso6391: "be",
        iso6392: "bel",
        name: "беларуская мова"
      },
      {
        iso6391: "bg",
        iso6392: "bul",
        name: "български език"
      },
      {
        iso6391: "bh",
        iso6392: "bih",
        name: "भोजपुरी"
      },
      {
        iso6391: "bi",
        iso6392: "bis",
        name: "Bislama"
      },
      {
        iso6391: "bm",
        iso6392: "bam",
        name: "bamanankan"
      },
      {
        iso6391: "bn",
        iso6392: "ben",
        name: "বাংলা"
      },
      {
        iso6391: "bo",
        iso6392: "bod",
        name: "བོད་ཡིག"
      },
      {
        iso6391: "br",
        iso6392: "bre",
        name: "brezhoneg"
      },
      {
        iso6391: "bs",
        iso6392: "bos",
        name: "bosanski jezik"
      },
      {
        iso6391: "ca",
        iso6392: "cat",
        name: "català"
      },
      {
        iso6391: "ce",
        iso6392: "che",
        name: "нохчийн мотт"
      },
      {
        iso6391: "ch",
        iso6392: "cha",
        name: "Chamoru"
      },
      {
        iso6391: "co",
        iso6392: "cos",
        name: "corsu, lingua corsa"
      },
      {
        iso6391: "cr",
        iso6392: "cre",
        name: "ᓀᐦᐃᔭᐍᐏᐣ"
      },
      {
        iso6391: "cs",
        iso6392: "ces",
        name: "čeština, český jazyk"
      },
      {
        iso6391: "cu",
        iso6392: "chu",
        name: "ѩзыкъ словѣньскъ"
      },
      {
        iso6391: "cv",
        iso6392: "chv",
        name: "чӑваш чӗлхи"
      },
      {
        iso6391: "cy",
        iso6392: "cym",
        name: "Cymraeg"
      },
      {
        iso6391: "da",
        iso6392: "dan",
        name: "dansk"
      },
      {
        iso6391: "de",
        iso6392: "deu",
        name: "Deutsch"
      },
      {
        iso6391: "dv",
        iso6392: "div",
        name: "ދިވެހި"
      },
      {
        iso6391: "dz",
        iso6392: "dzo",
        name: "རྫོང་ཁ"
      },
      {
        iso6391: "ee",
        iso6392: "ewe",
        name: "Eʋegbe"
      },
      {
        iso6391: "el",
        iso6392: "ell",
        name: "ελληνικά"
      },
      {
        iso6391: "en",
        iso6392: "eng",
        name: "English"
      },
      {
        iso6391: "eo",
        iso6392: "epo",
        name: "Esperanto"
      },
      {
        iso6391: "es",
        iso6392: "spa",
        name: "Español"
      },
      {
        iso6391: "et",
        iso6392: "est",
        name: "eesti, eesti keel"
      },
      {
        iso6391: "eu",
        iso6392: "eus",
        name: "euskara, euskera"
      },
      {
        iso6391: "fa",
        iso6392: "fas",
        name: "فارسی"
      },
      {
        iso6391: "ff",
        iso6392: "ful",
        name: "Fulfulde, Pulaar, Pular"
      },
      {
        iso6391: "fi",
        iso6392: "fin",
        name: "suomi, suomen kieli"
      },
      {
        iso6391: "fj",
        iso6392: "fij",
        name: "vosa Vakaviti"
      },
      {
        iso6391: "fo",
        iso6392: "fao",
        name: "føroyskt"
      },
      {
        iso6391: "fr",
        iso6392: "fra",
        name: "français, langue française"
      },
      {
        iso6391: "fy",
        iso6392: "fry",
        name: "Frysk"
      },
      {
        iso6391: "ga",
        iso6392: "gle",
        name: "Gaeilge"
      },
      {
        iso6391: "gd",
        iso6392: "gla",
        name: "Gàidhlig"
      },
      {
        iso6391: "gl",
        iso6392: "glg",
        name: "galego"
      },
      {
        iso6391: "gn",
        iso6392: "grn",
        name: "Avañe'ẽ"
      },
      {
        iso6391: "gu",
        iso6392: "guj",
        name: "ગુજરાતી"
      },
      {
        iso6391: "gv",
        iso6392: "glv",
        name: "Gaelg, Gailck"
      },
      {
        iso6391: "ha",
        iso6392: "hau",
        name: "(Hausa) هَوُسَ"
      },
      {
        iso6391: "he",
        iso6392: "heb",
        name: "עברית"
      },
      {
        iso6391: "hi",
        iso6392: "hin",
        name: "हिन्दी, हिंदी"
      },
      {
        iso6391: "ho",
        iso6392: "hmo",
        name: "Hiri Motu"
      },
      {
        iso6391: "hr",
        iso6392: "hrv",
        name: "hrvatski jezik"
      },
      {
        iso6391: "ht",
        iso6392: "hat",
        name: "Kreyòl ayisyen"
      },
      {
        iso6391: "hu",
        iso6392: "hun",
        name: "magyar"
      },
      {
        iso6391: "hy",
        iso6392: "hye",
        name: "Հայերեն"
      },
      {
        iso6391: "hz",
        iso6392: "her",
        name: "Otjiherero"
      },
      {
        iso6391: "ia",
        iso6392: "ina",
        name: "Interlingua"
      },
      {
        iso6391: "id",
        iso6392: "ind",
        name: "Bahasa Indonesia"
      },
      {
        iso6391: "ie",
        iso6392: "ile",
        name: "Originally called Occidental; then Interlingue after WWII"
      },
      {
        iso6391: "ig",
        iso6392: "ibo",
        name: "Asụsụ Igbo"
      },
      {
        iso6391: "ii",
        iso6392: "iii",
        name: "ꆈꌠ꒿ Nuosuhxop"
      },
      {
        iso6391: "ik",
        iso6392: "ipk",
        name: "Iñupiaq, Iñupiatun"
      },
      {
        iso6391: "io",
        iso6392: "ido",
        name: "Ido"
      },
      {
        iso6391: "is",
        iso6392: "isl",
        name: "Íslenska"
      },
      {
        iso6391: "it",
        iso6392: "ita",
        name: "Italiano"
      },
      {
        iso6391: "iu",
        iso6392: "iku",
        name: "ᐃᓄᒃᑎᑐᑦ"
      },
      {
        iso6391: "ja",
        iso6392: "jpn",
        name: "日本語"
      },
      {
        iso6391: "jv",
        iso6392: "jav",
        name: "ꦧꦱꦗꦮ, Basa Jawa"
      },
      {
        iso6391: "ka",
        iso6392: "kat",
        name: "ქართული"
      },
      {
        iso6391: "kg",
        iso6392: "kon",
        name: "Kikongo"
      },
      {
        iso6391: "ki",
        iso6392: "kik",
        name: "Gĩkũyũ"
      },
      {
        iso6391: "kj",
        iso6392: "kua",
        name: "Kuanyama"
      },
      {
        iso6391: "kk",
        iso6392: "kaz",
        name: "қазақ тілі"
      },
      {
        iso6391: "kl",
        iso6392: "kal",
        name: "kalaallisut, kalaallit oqaasii"
      },
      {
        iso6391: "km",
        iso6392: "khm",
        name: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ"
      },
      {
        iso6391: "kn",
        iso6392: "kan",
        name: "ಕನ್ನಡ"
      },
      {
        iso6391: "ko",
        iso6392: "kor",
        name: "한국어"
      },
      {
        iso6391: "kr",
        iso6392: "kau",
        name: "Kanuri"
      },
      {
        iso6391: "ks",
        iso6392: "kas",
        name: "कश्मीरी, كشميري‎"
      },
      {
        iso6391: "ku",
        iso6392: "kur",
        name: "Kurdî, كوردی‎"
      },
      {
        iso6391: "kv",
        iso6392: "kom",
        name: "коми кыв"
      },
      {
        iso6391: "kw",
        iso6392: "cor",
        name: "Kernewek"
      },
      {
        iso6391: "ky",
        iso6392: "kir",
        name: "Кыргызча, Кыргыз тили"
      },
      {
        iso6391: "la",
        iso6392: "lat",
        name: "latine, lingua latina"
      },
      {
        iso6391: "lb",
        iso6392: "ltz",
        name: "Lëtzebuergesch"
      },
      {
        iso6391: "lg",
        iso6392: "lug",
        name: "Luganda"
      },
      {
        iso6391: "li",
        iso6392: "lim",
        name: "Limburgs"
      },
      {
        iso6391: "ln",
        iso6392: "lin",
        name: "Lingála"
      },
      {
        iso6391: "lo",
        iso6392: "lao",
        name: "ພາສາລາວ"
      },
      {
        iso6391: "lt",
        iso6392: "lit",
        name: "lietuvių kalba"
      },
      {
        iso6391: "lu",
        iso6392: "lub",
        name: "Tshiluba"
      },
      {
        iso6391: "lv",
        iso6392: "lav",
        name: "latviešu valoda"
      },
      {
        iso6391: "mg",
        iso6392: "mlg",
        name: "fiteny malagasy"
      },
      {
        iso6391: "mh",
        iso6392: "mah",
        name: "Kajin M̧ajeļ"
      },
      {
        iso6391: "mi",
        iso6392: "mri",
        name: "te reo Māori"
      },
      {
        iso6391: "mk",
        iso6392: "mkd",
        name: "македонски јазик"
      },
      {
        iso6391: "ml",
        iso6392: "mal",
        name: "മലയാളം"
      },
      {
        iso6391: "mn",
        iso6392: "mon",
        name: "Монгол хэл"
      },
      {
        iso6391: "mr",
        iso6392: "mar",
        name: "मराठी"
      },
      {
        iso6391: "ms",
        iso6392: "msa",
        name: "bahasa Melayu, بهاس ملايو‎"
      },
      {
        iso6391: "mt",
        iso6392: "mlt",
        name: "Malti"
      },
      {
        iso6391: "my",
        iso6392: "mya",
        name: "ဗမာစာ"
      },
      {
        iso6391: "na",
        iso6392: "nau",
        name: "Dorerin Naoero"
      },
      {
        iso6391: "nb",
        iso6392: "nob",
        name: "Norsk bokmål"
      },
      {
        iso6391: "nd",
        iso6392: "nde",
        name: "isiNdebele"
      },
      {
        iso6391: "ne",
        iso6392: "nep",
        name: "नेपाली"
      },
      {
        iso6391: "ng",
        iso6392: "ndo",
        name: "Owambo"
      },
      {
        iso6391: "nl",
        iso6392: "nld",
        name: "Nederlands, Vlaams"
      },
      {
        iso6391: "nn",
        iso6392: "nno",
        name: "Norsk nynorsk"
      },
      {
        iso6391: "no",
        iso6392: "nor",
        name: "Norsk"
      },
      {
        iso6391: "nr",
        iso6392: "nbl",
        name: "isiNdebele"
      },
      {
        iso6391: "nv",
        iso6392: "nav",
        name: "Diné bizaad"
      },
      {
        iso6391: "ny",
        iso6392: "nya",
        name: "chiCheŵa, chinyanja"
      },
      {
        iso6391: "oc",
        iso6392: "oci",
        name: "occitan, lenga d'òc"
      },
      {
        iso6391: "oj",
        iso6392: "oji",
        name: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
      },
      {
        iso6391: "om",
        iso6392: "orm",
        name: "Afaan Oromoo"
      },
      {
        iso6391: "or",
        iso6392: "ori",
        name: "ଓଡ଼ିଆ"
      },
      {
        iso6391: "os",
        iso6392: "oss",
        name: "ирон æвзаг"
      },
      {
        iso6391: "pa",
        iso6392: "pan",
        name: "ਪੰਜਾਬੀ"
      },
      {
        iso6391: "pi",
        iso6392: "pli",
        name: "पाऴि"
      },
      {
        iso6391: "pl",
        iso6392: "pol",
        name: "język polski, polszczyzna"
      },
      {
        iso6391: "ps",
        iso6392: "pus",
        name: "پښتو"
      },
      {
        iso6391: "pt",
        iso6392: "por",
        name: "Português"
      },
      {
        iso6391: "qu",
        iso6392: "que",
        name: "Runa Simi, Kichwa"
      },
      {
        iso6391: "rm",
        iso6392: "roh",
        name: "rumantsch grischun"
      },
      {
        iso6391: "rn",
        iso6392: "run",
        name: "Ikirundi"
      },
      {
        iso6391: "ro",
        iso6392: "ron",
        name: "Română"
      },
      {
        iso6391: "ru",
        iso6392: "rus",
        name: "Русский"
      },
      {
        iso6391: "rw",
        iso6392: "kin",
        name: "Ikinyarwanda"
      },
      {
        iso6391: "sa",
        iso6392: "san",
        name: "संस्कृतम्"
      },
      {
        iso6391: "sc",
        iso6392: "srd",
        name: "sardu"
      },
      {
        iso6391: "sd",
        iso6392: "snd",
        name: "सिन्धी, سنڌي، سندھی‎"
      },
      {
        iso6391: "se",
        iso6392: "sme",
        name: "Davvisámegiella"
      },
      {
        iso6391: "sg",
        iso6392: "sag",
        name: "yângâ tî sängö"
      },
      {
        iso6391: "si",
        iso6392: "sin",
        name: "සිංහල"
      },
      {
        iso6391: "sk",
        iso6392: "slk",
        name: "slovenčina, slovenský jazyk"
      },
      {
        iso6391: "sl",
        iso6392: "slv",
        name: "slovenski jezik, slovenščina"
      },
      {
        iso6391: "sm",
        iso6392: "smo",
        name: "gagana fa'a Samoa"
      },
      {
        iso6391: "sn",
        iso6392: "sna",
        name: "chiShona"
      },
      {
        iso6391: "so",
        iso6392: "som",
        name: "Soomaaliga, af Soomaali"
      },
      {
        iso6391: "sq",
        iso6392: "sqi",
        name: "Shqip"
      },
      {
        iso6391: "sr",
        iso6392: "srp",
        name: "српски језик"
      },
      {
        iso6391: "ss",
        iso6392: "ssw",
        name: "SiSwati"
      },
      {
        iso6391: "st",
        iso6392: "sot",
        name: "Sesotho"
      },
      {
        iso6391: "su",
        iso6392: "sun",
        name: "Basa Sunda"
      },
      {
        iso6391: "sv",
        iso6392: "swe",
        name: "svenska"
      },
      {
        iso6391: "sw",
        iso6392: "swa",
        name: "Kiswahili"
      },
      {
        iso6391: "ta",
        iso6392: "tam",
        name: "தமிழ்"
      },
      {
        iso6391: "te",
        iso6392: "tel",
        name: "తెలుగు"
      },
      {
        iso6391: "tg",
        iso6392: "tgk",
        name: "тоҷикӣ, toçikī, تاجیکی‎"
      },
      {
        iso6391: "th",
        iso6392: "tha",
        name: "ไทย"
      },
      {
        iso6391: "ti",
        iso6392: "tir",
        name: "ትግርኛ"
      },
      {
        iso6391: "tk",
        iso6392: "tuk",
        name: "Türkmen, Түркмен"
      },
      {
        iso6391: "tl",
        iso6392: "tgl",
        name: "Wikang Tagalog"
      },
      {
        iso6391: "tn",
        iso6392: "tsn",
        name: "Setswana"
      },
      {
        iso6391: "to",
        iso6392: "ton",
        name: "faka Tonga"
      },
      {
        iso6391: "tr",
        iso6392: "tur",
        name: "Türkçe"
      },
      {
        iso6391: "ts",
        iso6392: "tso",
        name: "Xitsonga"
      },
      {
        iso6391: "tt",
        iso6392: "tat",
        name: "татар теле, tatar tele"
      },
      {
        iso6391: "tw",
        iso6392: "twi",
        name: "Twi"
      },
      {
        iso6391: "ty",
        iso6392: "tah",
        name: "Reo Tahiti"
      },
      {
        iso6391: "ug",
        iso6392: "uig",
        name: "ئۇيغۇرچە‎, Uyghurche"
      },
      {
        iso6391: "uk",
        iso6392: "ukr",
        name: "Українська"
      },
      {
        iso6391: "ur",
        iso6392: "urd",
        name: "اردو"
      },
      {
        iso6391: "uz",
        iso6392: "uzb",
        name: "Oʻzbek, Ўзбек, أۇزبېك‎"
      },
      {
        iso6391: "ve",
        iso6392: "ven",
        name: "Tshivenḓa"
      },
      {
        iso6391: "vi",
        iso6392: "vie",
        name: "Tiếng Việt"
      },
      {
        iso6391: "vo",
        iso6392: "vol",
        name: "Volapük"
      },
      {
        iso6391: "wa",
        iso6392: "wln",
        name: "walon"
      },
      {
        iso6391: "wo",
        iso6392: "wol",
        name: "Wollof"
      },
      {
        iso6391: "xh",
        iso6392: "xho",
        name: "isiXhosa"
      },
      {
        iso6391: "yi",
        iso6392: "yid",
        name: "ייִדיש"
      },
      {
        iso6391: "yo",
        iso6392: "yor",
        name: "Yorùbá"
      },
      {
        iso6391: "za",
        iso6392: "zha",
        name: "Saɯ cueŋƅ, Saw cuengh"
      },
      {
        iso6391: "zh",
        iso6392: "zho",
        name: "中文"
      },
      {
        iso6391: "zu",
        iso6392: "zul",
        name: "isiZulu"
      }
    ];
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("language");
    dao.runInTransaction(tx => {
      for (const entry of iso639) {
        const record = new Record(collection);
        record.set("iso639_1", entry.iso6391);
        record.set("iso639_2", entry.iso6392);
        record.set("name", entry.name);
        tx.saveRecord(record);
      }
    });
  },
  () => null
);
