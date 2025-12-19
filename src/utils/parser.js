const fs = require('fs');
const path = require('path');
const { parse } = require('xml2js');

function parseXml(xmlString) {
  const parser = new parse();
  return parser.parseString(xmlString, (err, result) => {
    if (err) {
      throw err;
    }
    return result;
  });
}

function parseXmlFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return parseXml(fileContent);
}

module.exports = parseXmlFile;