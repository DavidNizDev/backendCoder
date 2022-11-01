const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

app.use(express.urlencoded({ extended: true }));

let storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, path.join(__dirname, "./uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Por favor suba un archivo");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
app.post("/uploadmultiple", upload.array("myFiles"), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Por favor suba un archivo");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});
app.listen(8000, () => console.log("Servidor ok"));
