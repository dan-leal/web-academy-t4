const lerArquivo = (arquivo) =>
  new Promise((resolve, reject) => {
    fs.readdir(arquivo, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

const createLink = (filename) => {
  return `<a href="/${filename}">${filename}</a><br>\n`;
};

var utils = module.exports();
