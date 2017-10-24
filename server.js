const express = require('express');
const fs = require('fs');
const dirTree = require('directory-tree');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const dir = '/home/baldvegeta/Desktop/hello';
const Tree  = dirTree(dir);

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Send request to <a href="http://localhost:3000/data">http://localhost:4040/data</a></h1>')
});

app.get('/data', (req, res) => {
    res.status(200).json(Tree);
});

app.post('/filedata', (req, res) => {
    const { path, name } = req.body;
    fs.readFile(path, (err, data) => {
        let fdata = data.toString();
        if(err) {
            res.status(404).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            path,
            name,
            fdata
        });
    });
});

app.get('/themes', (req, res) => {
    fs.readdir('./node_modules/brace/theme', (err, files) => {
        const themes = files.map(file => {
            return path.basename(file, path.extname(file));
        });

       res.status(200).json({
           themes
       });
    });
});

app.get('/modes', (req, res) => {
    fs.readdir('./node_modules/brace/mode', (err, files) => {
        const themes = files.map(file => {
            return path.basename(file, path.extname(file));
        });

       res.status(200).json({
           themes
       });
    });
});

app.listen(4040, () => {
    console.log('Listening At Port : 4040');
});