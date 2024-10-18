# Web Development Sandbox

Sandbox monorepo to play around with frameworks and technologies.

## Prerequisites

- [NodeJS](https://nodejs.org/)
  - This will also install `npm`, make sure both are added to the `path` and available in terminal.
  - It is a good idea to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage NodeJS. It can easily help to switch NodeJS versions when working in multiple repositories.
- [Git](https://git-scm.com/)
  - To commit changes, can be skipped if you just want to check out the app.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Other IDE can be used of course, but there are added settings for VSCode in the project.
  - Once the project is opened in VSCode, install the recommended extensions.

## Development

Because the project is a monorepo and uses [Turborepo](https://turbo.build/repo/docs) we should only run scripts from the root. This way we can leverage the powerful caching of Turborepo. For example, if we want to build a workspace that depends on other workspaces built assets, running the `build` script will also build the dependencies in a hierarchical order. This dependency graph (and other monorepo related settings) are defined in the [turbo.json](./turbo.json) file.

1. Install required dependencies with `npm i`.
2. Start the desired workspace in development mode with for example `npm run dev -- --filter @wds/vue`.
   - Yes, the piping is interesting, but it's basically how we can pass arguments to an inner script when running npm.
   - For more information on filtering, check out the [docs on filtering with Turborepo](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-filters).

There are of course more scripts available, check out the [package.json](./package.json) for more information.

There can be cases when updates are made (example in tooling workspaces) and VSCode doesn't pick these up, we can then restart the extension host or reload the whole window if needed.
