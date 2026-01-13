const os = require('os');

//user info
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

console.log(`the system uptime is  ${parseInt(os.uptime() / 3600)} hours ${parseInt((os.uptime() % 3600) / 60)} minutes ${parseInt(os.uptime() % 60)} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs)