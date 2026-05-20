import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 10000;
const distPath = path.join(process.cwd(), "dist");

app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});