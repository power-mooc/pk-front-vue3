import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const app = createSSRApp({
      data: () => ({ count: 1 }),
      template: `<button @click="count++">{{count}}</button>`
    });

    renderToString(app).then((html) => {
      res.end(`
        <!doctype html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>Vite App</title>
            </head>
            <body>
              ${html}
            </body>
          </html>
`);
    });
  }
});

server.listen(3000, () => {
  console.log('server is running at 3000');
});
