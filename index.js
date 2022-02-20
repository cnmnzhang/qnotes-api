const app = require("./server")
const db = require("./server/data/db")

db.connect();

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
})