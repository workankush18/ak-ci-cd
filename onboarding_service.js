require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Onboarding service running test 1");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Onboarding service is running on port ${PORT}`);
});