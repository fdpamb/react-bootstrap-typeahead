import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [{
    ignores: [
        "**/css",
        "**/dist",
        "**/es",
        "example/package-example.js",
        "example/public/prism.min.js",
        "**/flow-typed",
        "**/lib",
        "**/node_modules",
    ],
}, {

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        parser: babelParser,
    }

}];