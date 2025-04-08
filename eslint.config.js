import jsRules from "@joshuaavalon/eslint-config-javascript";
import globals from "globals";

export default [
  { ignores: ["**/node_modules", "**/dist", ".next/*", "out/*"] },
  {
    ...jsRules,
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        migrate: false
      }
    },
    rules: {
      ...jsRules.rules,
      "no-undef": "off"
    }
  }
];
