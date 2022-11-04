import { Backend } from "kuzzle";

const app = new Backend("map-interactions");

app
  .start()
  .then(() => {
    app.log.info("Application started");
  })
  .catch(console.error);


