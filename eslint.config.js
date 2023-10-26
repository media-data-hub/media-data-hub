import globals from "globals";
import eslintJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const formatRules = {
  "line-comment-position": ["error", { position: "above" }]
};

const problemRules = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
      checkForEach: true
    }
  ],
  "constructor-super": ["error"],
  "for-direction": ["error"],
  "getter-return": ["error"],
  "no-async-promise-executor": ["error"],
  "no-class-assign": ["error"],
  "no-compare-neg-zero": ["error"],
  "no-cond-assign": ["error"],
  "no-const-assign": ["error"],
  "no-constant-binary-expression": ["error"],
  "no-constant-condition": ["error"],
  "no-constructor-return": ["error"],
  "no-control-regex": ["error"],
  "no-debugger": ["error"],
  "no-dupe-args": ["error"],
  "no-dupe-class-members": ["error"],
  "no-dupe-else-if": ["error"],
  "no-dupe-keys": ["error"],
  "no-duplicate-case": ["error"],
  "no-duplicate-imports": ["error"],
  "no-empty-character-class": ["error"],
  "no-empty-pattern": ["error"],
  "no-ex-assign": ["error"],
  "no-fallthrough": ["error"],
  "no-func-assign": ["error"],
  "no-import-assign": ["error"],
  "no-inner-declarations": ["error"],
  "no-invalid-regexp": ["error"],
  "no-irregular-whitespace": ["error"],
  "no-loss-of-precision": ["error"],
  "no-misleading-character-class": ["error"],
  "no-new-native-nonconstructor": ["error"],
  "no-obj-calls": ["error"],
  "no-promise-executor-return": ["error"],
  "no-prototype-builtins": ["error"],
  "no-self-assign": ["error"],
  "no-self-compare": ["error"],
  "no-setter-return": ["error"],
  "no-sparse-arrays": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-this-before-super": ["error"],
  "no-undef": ["error"],
  "no-unexpected-multiline": ["error"],
  "no-unmodified-loop-condition": ["error"],
  "no-unreachable": ["error"],
  "no-unreachable-loop": ["error"],
  "no-unsafe-finally": ["error"],
  "no-unsafe-negation": ["error"],
  "no-unsafe-optional-chaining": ["error"],
  "no-unused-private-class-members": ["error"],
  "no-unused-vars": ["error"],
  "no-use-before-define": ["error"],
  "no-useless-backreference": ["error"],
  // "require-atomic-updates": ["error"],
  "use-isnan": ["error"],
  "valid-typeof": ["error"]
};

const suggestionRules = {
  "accessor-pairs": ["error"],
  "arrow-body-style": [
    "error",
    "as-needed",
    { requireReturnForObjectLiteral: true }
  ],
  camelcase: ["error"],
  complexity: ["error"],
  "consistent-return": ["error"],
  curly: ["error", "all"],
  "default-case-last": ["error"],
  "default-param-last": ["error"],
  "dot-notation": ["error"],
  eqeqeq: ["error", "always"],
  "grouped-accessor-pairs": ["error"],
  // "guard-for-in": ["error"],
  "logical-assignment-operators": ["error", "always"],
  "max-depth": ["error"],
  // "multiline-comment-style": ["error", "starred-block"],
  "no-array-constructor": ["error"],
  "no-bitwise": ["error"],
  "no-caller": ["error"],
  "no-case-declarations": ["error"],
  "no-delete-var": ["error"],
  "no-div-regex": ["error"],
  "no-else-return": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-boolean-cast": ["error"],
  "no-extra-label": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-globals": ["error"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["error"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-label-var": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  // "no-mixed-operators": ["error"],
  "no-multi-assign": ["error"],
  "no-multi-str": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-object": ["error"],
  "no-new-wrappers": ["error"],
  "no-nonoctal-decimal-escape": ["error"],
  "no-octal": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-proto": ["error"],
  "no-redeclare": ["error"],
  "no-regex-spaces": ["error"],
  "no-return-assign": ["error"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-sequences": ["error"],
  "no-shadow-restricted-names": ["error"],
  "no-throw-literal": ["error"],
  "no-underscore-dangle": ["error"],
  "no-unneeded-ternary": ["error"],
  "no-unused-expressions": ["error"],
  "no-unused-labels": ["error"],
  "no-useless-call": ["error"],
  "no-useless-catch": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-escape": ["error"],
  "no-useless-rename": ["error"],
  "no-useless-return": ["error"],
  "no-var": ["error"],
  "no-void": ["error"],
  "no-with": ["error"],
  "object-shorthand": ["error", "always"],
  "one-var": ["error", "never"],
  "operator-assignment": ["error", "always"],
  "prefer-const": ["error"],
  "prefer-exponentiation-operator": ["error"],
  "prefer-named-capture-group": ["error"],
  "prefer-numeric-literals": ["error"],
  "prefer-object-has-own": ["error"],
  "prefer-object-spread": ["error"],
  "prefer-promise-reject-errors": ["error"],
  "prefer-regex-literals": ["error"],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "prefer-template": ["error"],
  "require-await": ["error"],
  "require-unicode-regexp": ["error"],
  "require-yield": ["error"],
  "sort-imports": ["error", { ignoreDeclarationSort: true }],
  "sort-vars": ["error"],
  "spaced-comment": ["error", "always", { markers: ["/"] }],
  "vars-on-top": ["error"],
  yoda: ["error"]
};

const jsRules = {
  ...prettierConfig.rules,
  ...formatRules,
  ...problemRules,
  ...suggestionRules,
  "prettier/prettier": [
    "error",
    {
      arrowParens: "avoid",
      trailingComma: "none"
    }
  ]
};

export default [
  { ignores: ["dist", "node_modules"] },
  eslintJs.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    plugins: { prettier: prettierPlugin },
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: jsRules
  },
  {
    files: ["**/pb_migrations/*.js"],
    rules: {
      "no-undef": ["off"]
    }
  }
];
