const os = require('os');
const path = require('path');

//os module


console.log("OS Platform: " + os.platform());

console.log("OS Type: " + os.type());

console.log("OS Memory: " + os.totalmem());

console.log("OS Release: " + os.release());

console.log("CPU Architecture: " + os.arch());

console.log("Hostname: " + os.hostname());

console.log("Free Memory: " + os.freemem());

console.log("Current User: " + os.userInfo.username);

console.log("Home Directory: " + os.homedir());

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);


//path

const filePath = 'C:\\Users\\Teachers\\Desktop\\node.js\\class 2\\eman.txt';

// 1. basename()
console.log("Basename: " + path.basename(filePath));

// 2. dirname()
console.log("Directory Name: " + path.dirname(filePath));

// 3. extname()
console.log("Extension Name: " + path.extname(filePath));

// 4. isAbsolute()
console.log("Is Absolute: " + path.isAbsolute(filePath));

// 5. join()
console.log("Join: " + path.join('C:\\Users\\Teachers\\Desktop\\node.js\\class 2', 'eman.txt'));

// 6. normalize()
console.log("Normalize: " + path.normalize('C:\\Users\\Teachers\\Desktop\\node.js\\class 2\\..\\eman.txt'));

// 7. resolve()
console.log("Resolve: " + path.resolve('indxe.js'));

// 8. relative()
console.log(
    "Relative: " + path.relative(
        'C:\\Users\\Teachers\\Desktop\\node.js\\class 2',
        'C:\\Users\\Teachers\\Desktop\\node.js\\eman.txt'
    )
);

// 9. parse()
console.log("Parse: ");
console.log(path.parse(filePath));

// 10. format()
const pathObject = {
    dir: 'C:\\Users\\Teachers\\Desktop\\node.js\\class 2',
    name: 'emann',
    ext: '.txt'
};

console.log("Format: " + path.format(pathObject));

// 11. separator
console.log("Separator: " + path.sep);

// 12. delimiter
console.log("Delimiter: " + path.delimiter);

// 13. toNamespacedPath()
console.log("Namespaced Path: " + path.toNamespacedPath(filePath));




