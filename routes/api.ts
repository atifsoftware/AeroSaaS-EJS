import type { Router } from 'aerojs';

export function registerApiRoutes(router: Router): void {
  router.group('/api/v1', (api) => {
    // Health Check
    api.get('/health', async (ctx) => {
      ctx.json({
        status: 'healthy',
        platform: 'AeroSaaS-Edge',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      });
    });

    // Public Stats API
    api.get('/stats', async (ctx) => {
      ctx.json({
        version: '1.0.0',
        edition: 'Edge.js Server-Side Rendered',
        engine: 'AeroJS High-Throughput Node.js Core',
      });
    });
  });
}
