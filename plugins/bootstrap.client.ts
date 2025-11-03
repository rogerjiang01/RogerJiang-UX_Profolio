// plugins/bootstrap.client.ts
import { defineNuxtPlugin } from "#app";
// Import the bootstrap JS bundle at module level; this plugin file is
// already client-only because of the `.client.ts` suffix, so the import
// will only run in the browser. Using the bundle ensures Popper is included.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default defineNuxtPlugin(() => {
    // eslint-disable-next-line no-console
    console.log("Bootstrap JS imported (bootstrap.client.ts)");
});
