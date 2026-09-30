import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const distPath = path.resolve(__dirname, 'dist');

// Serve static assets if dist directory exists
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    maxAge: '1h',
    setHeaders: (res, filePath) => {
      // Immutable cache for fingerprinted assets
      if (filePath.includes('/assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));
}

// Health check endpoint for Cloud Run
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('OK');
});

// Single Page Application (SPA) fallback
app.get('*', (_req: Request, res: Response) => {
  const indexPath = path.resolve(distPath, 'index.html');
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

const server = app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`[THE 100] Production server listening on 0.0.0.0:${PORT}`);
});

// Graceful shutdown on SIGTERM / SIGINT for Cloud Run
const shutdown = (signal: string) => {
  console.log(`[THE 100] Received ${signal}, shutting down gracefully...`);
  server.close(() => {
    console.log('[THE 100] Closed out remaining connections.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
