const os = require('os')

// 显示 cpu 信息
console.log(os.cpus());

// 显示内存大小
console.log(os.totalmem() / 1000 / 1000 / 1000);