// server.ts
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = process.env.PORT || 3e3;
app.use(express.json());
var distPath = path.resolve(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    maxAge: "1h",
    setHeaders: (res, filePath) => {
      if (filePath.includes("/assets/")) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    }
  }));
}
app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});
app.get("*", (_req, res) => {
  const indexPath = path.resolve(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`
      <!doctype html>
      <html>
        <head><title>THE 100</title></head>
        <body>
          <div style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1>THE 100</h1>
            <p>Application is starting or building assets. Please refresh in a few seconds.</p>
          </div>
        </body>
      </html>
    `);
  }
});
var server = app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`[THE 100] Production server listening on 0.0.0.0:${PORT}`);
});
var shutdown = (signal) => {
  console.log(`[THE 100] Received ${signal}, shutting down gracefully...`);
  server.close(() => {
    console.log("[THE 100] Closed out remaining connections.");
    process.exit(0);
  });
};
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
