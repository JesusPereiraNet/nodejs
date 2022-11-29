const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//midleware
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  await res.status(200).send({ Message: "OK" });
});

//routes
app.use("/api/productos", require("./src/productos"));

//empezando el servidor
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
