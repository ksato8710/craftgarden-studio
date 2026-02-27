import * as esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWatch = process.argv.includes("--watch");

const sharedDir = path.resolve(__dirname, "../shared");

/** @type {import("esbuild").BuildOptions} */
const buildOptions = {
  entryPoints: [path.resolve(__dirname, "src/code.ts")],
  outfile: path.resolve(__dirname, "dist/code.js"),
  bundle: true,
  platform: "browser",
  format: "iife",
  target: "es2020",
  sourcemap: false,
  minify: false,
  alias: {
    "@shared": sharedDir,
  },
};

if (isWatch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log("[esbuild] Watching for changes...");
} else {
  await esbuild.build(buildOptions);
  console.log("[esbuild] Build complete: dist/code.js");
}
