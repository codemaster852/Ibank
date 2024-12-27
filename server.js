const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// API to update user details
app.post('/update-user', (req, res) => {
  const { name, email, balance , phone_number} = req.body;

  // Read the HTML file
  const filePath = './public/mostafa.html';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading HTML file');
    }

    // Replace placeholders with new values
    const updatedData = data
      .replace(/<span id="name-display">.*?<\/span>/, `<span id="name-display">${name}</span>`)
      .replace(/<span id="email-display">.*?<\/span>/, `<span id="email-display">${email}</span>`)
      .replace(/<span id="balance-display">.*?<\/span>/, `<span id="balance-display">${balance}</span>`)
      .replace(/<span id="phone_number-display">.*?<\/span>/, `<span id="phone_number-display">${phone_number}</span>`)
      .replace(/<span id="birthdate-display">.*?<\/span>/, `<span id="birthdate-display">${birthdate}</span>`)
      .replace(/<span id="country-display">.*?<\/span>/, `<span id="country-display">${country}</span>`)
      .replace(/<span id="city-display">.*?<\/span>/, `<span id="city-display">${city}</span>`);

    // Write updated HTML back to the file
    fs.writeFile(filePath, updatedData, (err) => {
      if (err) {
        return res.status(500).send('Error writing HTML file');
      }
      res.send('User details updated successfully');
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
