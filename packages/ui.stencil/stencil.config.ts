import { type Config } from "@stencil/core";

export const config: Config = {
  namespace: "package",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
  ],
};
