import Dexie from "dexie";

// all tasks are stored in same store, there is property status to indicate is task done.
const db = new Dexie("MyDatabase");
db.version(1).stores({
  tasks: "id, status, title, image, timestamp",
});

export default {
  // get all tasks
};
