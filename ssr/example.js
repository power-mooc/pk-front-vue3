import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

const server = http.createServer((req, res) => {
  // node 10.12.0
  if (req.url === '/client.js') {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filename = path.join(__dirname, 'client.js');
    fs.readFile(filename, 'utf-8', (err, data) => {
      console.log(data);
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('not Fount');
      } else {
        res.writeHead(200, { 'Content-type': 'application/javascript' });
        res.end(data);
      }
    });
  }
  if (req.url === '/') {
    const app = createSSRApp({
      data: () => ({ count: 2 }),
      template: `<button @click="count++">{{count}}</button>`
    });

    renderToString(app).then((html) => {
      res.end(`
        <!doctype html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>Vite App</title>
              <script type="importmap">
                {
                  "imports": {
                    "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
                  }
                }
              </script>
              <script type="module" src="/client.js"></script>
            </head>
            <body>
              <div id="app">
              </div>
            </body>
          </html>
`);
    });
  }
});

server.listen(3000, () => {
  console.log('server is running at 3000');
});
