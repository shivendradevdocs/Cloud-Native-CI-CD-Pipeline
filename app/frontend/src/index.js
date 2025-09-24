const express = require('express');
const app = express();
const PORT = process.env.FRONTEND_PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Jenkins CI/CD Demo Frontend</title></head>
      <body>
        <h1>Jenkins CI/CD Demo</h1>
        <p>Frontend served from Express. Hit <a href="/api/hello">/api/hello</a> to see a message proxied from backend in later parts.</p>
      </body>
    </html>
  `);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from frontend (static)!' });
});

app.listen(PORT, () => {
  console.log(`Frontend listening on ${PORT}`);
});
