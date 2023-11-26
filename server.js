// server.js
const express = require('express');
const serve = require('serve-static');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(serve(path.join(__dirname, 'build')));

app.post('/update-gpio', async (req, res) => {
  try {
    const { gpioName, value } = req.body;

    // Update the JSON file
    const filePath = path.join(__dirname, 'build', 'gpio.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    jsonData[gpioName] = value;

    await fs.writeFile(filePath, JSON.stringify(jsonData));

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating GPIO value:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});