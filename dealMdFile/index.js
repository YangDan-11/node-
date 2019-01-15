const fs = require('fs');
const path = require('path');
var marked = require('marked');
var bs = require('browser-sync').create();


var target = path.join(__dirname, process.argv[2] || '../dealMdFile/README.md');
var filename = path.basename(target, path.extname(target)) + '.html';
var targetHtml = path.join(path.dirname(target), filename);

bs.init({
  server: path.dirname(target),
  index: filename,
  notify: false
});

bs.reload(filename);

var template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>{{{styles}}}</style>
</head>
<body>
  <article class="markdown">
    {{{body}}}
  </article>
</body>
</html>
`;

fs.readFile(path.join(__dirname, '../dealMdFile/markdown.css'), 'utf8', (error, css) => {
  if (error) throw error;
  template = template.replace('{{{styles}}}', css);
  var handler = (current, previous) => {
    fs.readFile(target, 'utf8', (error, content) => {
      var html = template.replace('{{{body}}}', marked(content));
      fs.writeFile(targetHtml, html, (error) => {
        if (!error) {
          console.log(`updated@${new Date()}`);
          bs.reload(filename);
        }
      });
    });
  };
  handler();
  fs.watchFile(target, { interval: 100 }, handler);
});