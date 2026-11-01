import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default defineConfig([
  ...nextVitals,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // jsx-a11y is already registered by eslint-config-next, so only its rules are taken here
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  {
    rules: {
      "no-console": "error",
      "no-debugger": "error",
      "no-nested-ternary": "error",
      "react/no-array-index-key": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "import/no-cycle": "error",
    },
  },
  {
    files: ["**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
