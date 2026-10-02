import { Aero, serveStatic, createEjsDriver } from 'aerojs';
import ejs from 'ejs';
import { registerWebRoutes } from './routes/web.js';
import { registerApiRoutes } from './routes/api.js';
import * as path from 'node:path';
import * as fs from 'node:fs';

// Ensure storage directory exists
const storageDir = path.resolve('storage');
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true });
}

const app = new Aero({
  port: Number(process.env.PORT || 3003),
  debug: process.env.APP_ENV !== 'production',
});

// Bind high-performance SQLite
const dbPath = path.resolve('storage/database.sqlite');
app.useSqlite(dbPath);

// Serve static assets (CSS, images, icons)
app.use(serveStatic({ root: 'public' }));

// Configure EJS template engine adapter
const ejsAdapter = {
  render(template: string, data?: Record<string, unknown>) {
    const filename = template.endsWith('.ejs') ? template : `${template}.ejs`;
    const fullPath = path.resolve('views', filename);
    return ejs.renderFile(fullPath, data || {});
  },
};
app.useViewEngine(createEjsDriver(ejsAdapter));

// Interactive OpenAPI / Swagger Documentation
app.useSwagger({
  title: 'AeroSaaS EJS Platform API',
  version: '1.0.0',
  description: 'REST API documentation for AeroSaaS EJS Edition',
  route: '/docs',
  specRoute: '/openapi.json',
});

// Register Application Routes
registerWebRoutes(app.router);
registerApiRoutes(app.router);

const port = Number(process.env.PORT || 3003);
app.listen(port, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 AeroSaaS (EJS) running at: http://localhost:${port}`);
  console.log(`📚 Interactive Swagger API Docs: http://localhost:${port}/docs`);
  console.log(`======================================================\n`);
});

export default app;
