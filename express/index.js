const express = require("express");

const router = express.Router();
router.get("/example", (req, res, next) => {
    console.log("Date:", Date.now());
    res.json({ result: "ok" });
});

const app = express();
app.use("/router", router);

app.get("/", (req, res, next) => {
    console.log("First middleware");
    next();
}, (req, res, next) => {
    console.log("Second middleware");
    next();
});

app.get("/", (req, res) => {
    console.log("Third middleware");
    console.log(req.ip);
    res.send({ result: "ok" });
});

// error path
app.get("/error", (req, res, next) => {
    next(new Error("errorrrrrr"))
});

app.get("/test", (req, res) => {
    console.log(req.query)
    res.json(req.query);
});

app.listen(8000, () => {
    console.log("Server listening on port 8000");
});
