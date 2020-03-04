const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use('/', express.static(path.join(__dirname, './client')))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Getting');
    
})

app.post('/', (req, res) => {
    const data = JSON.parse(req.body.json_file);

    ///////////Generate CSV report//////////////
    const generateReport = data => {
        let report = '';
        let columnTitles = Object.keys(data);
        columnTitles.pop()
        let childrenValues = [];
        
        const findChildren = data => {
            var values = Object.values(data);
            values.pop();
            childrenValues.push(values); 

            if (data.children) {
                for (var i = 0; i < data.children.length; i++)
                findChildren(data.children[i]);
            }
        } 
        findChildren(data);  
        childrenValues = childrenValues.join('\n');
        columnTitles = columnTitles.join();
        report = columnTitles + '\n' + childrenValues;
        console.log(report)    
        return report;

    }
let generatedCSV = generateReport(data);
res.send(generatedCSV);


})
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


