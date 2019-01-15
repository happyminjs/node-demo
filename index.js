var name = 'world';

var s = `hello ${name}`;

console.log(s);
console.log(__dirname);
console.log(__filename);

const File = require('./module/fs');
var aa = File.read('./fs/a.txt');
// console.log(aa);