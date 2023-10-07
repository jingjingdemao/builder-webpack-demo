const path = require('path');
const { rimraf } = require('rimraf');
const webpack = require('webpack');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});

process.chdir(path.join(__dirname, 'template'));
//此时进入template目录 html-test-js中./dist是正常的

rimraf('./dist').then(() => {
  const prodConfig = require('../../lib/webpack.prod');
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      })
    );
    console.log('Webpack build success，test begining');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
// rimraf('./dist').then(() => {
//   const prodConfig = require('../../lib/webpack.prod');
//   webpack(prodConfig, (err, stats) => {
//     if (err) {
//       console.error(err);
//       process.exit(2);
//     }
//     console.log(
//       stats.toString({
//         colors: true,
//         modules: false,
//         children: false,
//       })
//     );
//   });
// });
