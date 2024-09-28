// @ts-check

import { exec } from "child_process";
import { rimrafSync } from "rimraf";

exec("ng build", (error, stdout, stderr) => {
  if (error || stderr) {
    console.debug(error || stderr);
  }

  console.log(stdout);

  rimrafSync("dist/package.json");
});
