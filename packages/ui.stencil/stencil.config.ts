import { type Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "package",
  plugins: [sass()],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
  ],
};
