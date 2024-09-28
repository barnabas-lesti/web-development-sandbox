// @ts-check

/* eslint-disable no-console */

import { exec } from "child_process";
import fs from "node:fs";
import path from "path";

import mitosisConfig from "../mitosis.config.cjs";

const MITOSIS_BUILD_SCRIPT = "mitosis build --c mitosis.config.cjs";
const BUILD_DIRECTORY = "dist";
const TARGETS = mitosisConfig.targets;
const TARGETS_DIRECTORY = "targets";
const TARGET_FILE_REPLACE_TOKEN = ".target";

(async () => {
  await runMitosisBuild();
  await copyTargetConfigFiles();
})();

/**
 * Runs the Mitosis build script asynchronously.
 * @returns {Promise<void>} Promise of the result.
 */
export function runMitosisBuild() {
  return new Promise((resolve, reject) => {
    exec(MITOSIS_BUILD_SCRIPT, (error, stdout, stderr) => {
      // Run Mitosis build
      if (stderr) {
        reject(stderr);
        return;
      }

      if (error) {
        reject(error);
        return;
      }

      console.log(stdout);
      resolve();
    });
  });
}

/**
 * Copies target configurations to build folder.
 * @returns {Promise<void>} Promise of the result.
 */
function copyTargetConfigFiles() {
  return new Promise((resolve, reject) => {
    for (const target of TARGETS) {
      const sourceFolder = path.resolve(process.cwd(), TARGETS_DIRECTORY, target);
      const destinationFolder = path.resolve(process.cwd(), BUILD_DIRECTORY, target);

      if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
      }

      try {
        const fileNames = fs.readdirSync(sourceFolder);
        for (const fileName of fileNames) {
          const sourceFilePath = path.join(sourceFolder, fileName);
          const destinationFilePath = path.join(destinationFolder, fileName.replace(TARGET_FILE_REPLACE_TOKEN, ""));

          fs.copyFileSync(sourceFilePath, destinationFilePath);
        }

        console.log(`Copied "${target}" target configurations to build folder.`);
      } catch (error) {
        reject(error);
        break;
      }
    }

    resolve();
  });
}
