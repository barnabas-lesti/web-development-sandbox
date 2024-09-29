// @ts-check
/* eslint-disable no-console */

import { exec } from "child_process";

const ANGULAR_BUILD_COMMAND = "ng build";
const CLEAN_COMMAND = "rimraf dist/angular/package.json";

(async () => {
  const errors = [];

  try {
    await execAsync(ANGULAR_BUILD_COMMAND);
  } catch (error) {
    errors.push(error);
  }

  try {
    await execAsync(CLEAN_COMMAND);
  } catch (error) {
    errors.push(error);
  }

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(error);
    }
    throw new Error("Unexpected error(s) occurred.");
  }
})();

/**
 * Async wrapper of the node exec function.
 * @param {string} command Script to execute.
 * @returns {Promise<void>} Output of the execution.
 */
function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      if (stderr) {
        console.warn(stderr);
      }

      console.info(stdout);

      resolve();
    });
  });
}
