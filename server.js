const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const registeredAddresses = new Set();

app.post('/register', (req, res) => {
    const { walletAddress } = req.body;
    if (!walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
        return res.json({ success: false, message: 'Invalid wallet address' });
    }

    if (registeredAddresses.has(walletAddress)) {
        return res.json({ success: false, message: 'Address already registered' });
    }

    registeredAddresses.add(walletAddress);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Airdrop app listening at http://localhost:${port}`);
});