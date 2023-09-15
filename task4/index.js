const fs = require('fs');
const path = require('path');

const scaffoldDir = './frontend-scaffold';
const cssDir = path.join(scaffoldDir, 'css');
const jsDir = path.join(scaffoldDir, 'js');
const imagesDir = path.join(scaffoldDir, 'images');

// Create directories
fs.mkdirSync(scaffoldDir);
fs.mkdirSync(cssDir);
fs.mkdirSync(jsDir);
fs.mkdirSync(imagesDir);

// Create index.html file
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/style.css">
<title>Document</title>
</head>
<body>
<h1>Welcome</h1>
<script src="./js/script.js"></script>
</body>
</html>`;
fs.writeFileSync(path.join(scaffoldDir, 'index.html'), htmlContent);

// Create style.css file
const cssContent = `h1 {
  text-align: center;
}`;
fs.writeFileSync(path.join(cssDir, 'style.css'), cssContent);

// Create script.js file
const jsContent = `alert("Welcome");`;
fs.writeFileSync(path.join(jsDir, 'script.js'), jsContent);

// Log success message
console.log('Frontend scaffold created successfully!');
