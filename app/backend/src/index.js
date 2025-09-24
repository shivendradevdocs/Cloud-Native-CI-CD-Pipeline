const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', routes);

// health
app.get('/healthz', (req, res) => res.json({ status: 'ok' }));

// default
app.get('/', (req, res) => res.send('Jenkins CI/CD Demo Backend'));

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
  });
}

module.exports = app;
