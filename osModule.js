const os = require('os');
// console.log('memory',os.freemem())
// console.log('homeDir',os.homedir())
// console.log('platform',os.platform())
// console.log('type',os.type())

const path = require('path')
const home = path.basename('give payj') // will return the basename of path
const file = path.extname(__filename);
console.log('fileName',file)