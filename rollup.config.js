import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/card-mod-ui.js",
    format: "es",
    inlineDynamicImports: true,
    sourcemap: dev,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: dev,
    }),
    !dev &&
      terser({
        format: {
          comments: false,
        },
      }),
  ].filter(Boolean),
};
