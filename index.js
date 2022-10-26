// const testFolder = './markdown/administration';
const fetch = require('node-fetch');
const fs = require('fs');
const { marked } = require('marked');


// fs.readdirSync(testFolder).forEach(file => {
//     file.blob()
//     marked.parse()
// //   console.log(file);
// });



fetch("./markdown/administration/functions.md")      // The path to the raw Markdown file
.then(response => response.blob())  // Unwrap to a blob...
.then(blob => blob.text())          // ...then to raw text...
.then(markdown => {                 // ...then pass the raw text into marked.parse
  const html = marked.parse(markdown);
  console.log(html)
});