import { type Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "package",
  plugins: [sass({ injectGlobalPaths: ["src/styles/variables.scss"] })],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
  ],
};
