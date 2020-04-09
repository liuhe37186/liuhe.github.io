const markdown = require('markdown-it');

function markLoader(src) {
  const md = markdown({
    html: true,
    typographer: true,
  });
  const html = md.render(src);

  return (
    '<template>\n'
    + `<div class="markdown" style="text-align:left;padding-left:20%">${html}</div>\n`
    + '</template>\n'
  );
}
module.exports = markLoader;