const path = require('path');
process.chdir(path.join(__dirname, 'smoke/template'));

describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test');
});
//process.chdir() 方法用于修改 Node.js 进程的当前工作目录，但它并不直接影响 require 方法的行为。require 方法在加载模块时会根据模块标识符解析出文件的绝对路径，而不受当前工作目录的影响
//process.chdir() 方法主要用于更改当前工作目录以影响后续的文件操作，比如使用相对路径读取、写入文件等操作。但对于 require 方法来说，它会使用模块标识符来查找和加载模块，与当前工作目录无关。
