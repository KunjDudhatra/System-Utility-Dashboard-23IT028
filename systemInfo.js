console.log("23IT028");
const os = require('os');

function formatBytes(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${units[i]}`;
}

function getSystemInfo() {
    const osType = os.type();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const cpus = os.cpus();

    const systemInfo = {
        osType: osType,
        totalMemory: totalMemory,
        freeMemory: freeMemory,
        cpus: cpus.map(cpu => ({
            model: cpu.model,
            speed: cpu.speed,
        })),
    };
    return systemInfo;
}

console.log('Retrieving system information...');
const systemInfo = getSystemInfo();
console.log('System information retrieved:', systemInfo);
console.log("\n=== System Information ===");
console.log(`OS Type: ${systemInfo.osType}`);
console.log(`Total Memory: ${formatBytes(systemInfo.totalMemory)}`);
console.log(`Free Memory: ${formatBytes(systemInfo.freeMemory)}`);
console.log("CPU Information:");
systemInfo.cpus.forEach((cpu, index) => {
    console.log(`  CPU ${index + 1}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`);
});
console.log("===========================");
