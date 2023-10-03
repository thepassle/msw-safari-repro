import { http } from '@web/mocks/http.js';
import { registerMockRoutes } from '@web/mocks/browser.js';

registerMockRoutes(http.get('/api/foo', () => Response.json({foo: 'bar'})));

const r = await fetch('/api/foo').then(r => r.json());
console.log(r);