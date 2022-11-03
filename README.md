# Kuzzle Application

_An application running with [Kuzzle](https://github.com/kuzzleio/kuzzle)_

## Installation and run

Requirement:

- Node.js >= 14
- NPM >= 6
- Docker
- Docker-Compose

First, install [Kourou](https://github.com/kuzzleio/kourou), the Kuzzle CLI: `npm install -g kourou`

### Docker

First, you need then to install dependencies: `npm run docker npm install`

Then, start your application with `npm run docker:dev`

### Standalone

First, you need to start Kuzzle additional service: `npm run services`

Then, you need then to install dependencies: `npm install`

Finally, start your application with `npm run dev`

## Manipulating NPM through Docker

It's important to install NPM packages from inside the container to avoid Node.js mismatch errors.

Those errors may appear when

- the Node.js version installed on your computer is not the same as the one used in our Docker containers
- your computer use a different version of the GLIBC
- your computer use a different CPU architecture (e.g. MacOS use Darwin)

To prevent those errors, you can use the following commands

- `npm run docker` run any command into the container context (e.g. `npm run docker ls`)
- `npm run docker npm install` run a standard `npm install` (e.g. `npm run npm install axios`)
- `npm run docker npm rebuild` run a standard `npm rebuild`
- etc.

## Troubleshooting

### NODE_MODULE_VERSION mismatch

This message indicate that you may try to run your Kuzzle application with a different Node.js version from the one you used to build the application.

Try to rebuild dependencies from inside your Docker container with: `npm run docker npm rebuild`

**Symptoms:**

```
kiotp_node_2     | > kuzzle-iot-platform@1.0.0 dev /var/app
kiotp_node_2     | > NODE_ENV=development ergol start.ts -c ergol.config.json
kiotp_node_2     |
kiotp_node_2     | Debugger listening on ws://0.0.0.0:9229/58d23bb2-d8fb-4fc0-b328-df52eaa27273
kiotp_node_2     | For help, see: https://nodejs.org/en/docs/inspector
kiotp_node_2     | Error: The module '/var/app/node_modules/murmurhash-native/lib/Release/murmurhash.node'
kiotp_node_2     | was compiled against a different Node.js version using
kiotp_node_2     | NODE_MODULE_VERSION 93. This version of Node.js requires
kiotp_node_2     | NODE_MODULE_VERSION 83. Please try re-compiling or re-installing
kiotp_node_2     | the module (for instance, using `npm rebuild` or `npm install`).
```

# Interactive POI (Point of Interests) Map

In this challenge you will create an interactive map that displays markers representing Points of Interests.

Estimated time:

- Junior: 4 hours
- Middle: 3 hours
- Senior: 2 hours
- Liar: 1 hour

Technologies:

- Kuzzle Backend
- Kuzzle JS SDK
- Vue.js
- Typescript

## Goals

- Understand client need from basic spec
- Initialize Typescript project with separate backend and frontend
- Ability to find information in documentation
- Fetch data from Kuzzle API using the SDK
- Manage asynchronous and realtime flux of data
- Integrate a Map with Leaflet

Some key words that interests us: asynchronous, spinner, error handling, KISS, UI/UX, easter egg

## Description

_The description is intentionally vague._

Upon arrival of the user on the application, a map is displayed.

A click on the map opens a modal that asks for the name of the POI to add, the POI is then saved.

POIs are initially colored in yellow to indicate that you want to visit them.

Clicking on a yellow POI changes its color to green to indicate that it has been visited.

A click on a green POI deletes it.

BONUS: The map should be synchronized in real time using Kuzzle's realtime engine. This means that if I open two tabs and add a POI from one tab, it appears in the other tab simultaneously.

## Resources

_It's up to you to look deep into the documentation_

- [Run Kuzzle Backend](https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/)
- [Data Storage Guide](https://docs.kuzzle.io/core/2/guides/main-concepts/data-storage/)
- [Realtime Guide](https://docs.kuzzle.io/core/2/guides/main-concepts/realtime-engine/)
- [Javascript SDK](https://docs.kuzzle.io/sdk/js/7/)
- [Vue Leaflet (Map)](https://github.com/vue-leaflet/vue-leaflet)
