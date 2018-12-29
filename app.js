const express = require('express');
const path = require('path');

const app = express();

let sentNumber = 0;

app.use((req, res, next) => {
    if(req.url === '/'){
        sentNumber++;
        console.log(`sent page ${sentNumber} times!`);
    }
    next();
})
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));