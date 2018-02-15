module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    if(process.argv[process.argv.length - 1] === 'cookbook') {
      config.entry.app = './src/cookbook.js';
    }
  }
};
