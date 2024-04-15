const express = require('express');
const app = express();

const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Hello from Express server running on port 5001!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
