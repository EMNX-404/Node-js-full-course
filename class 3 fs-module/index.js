const fs = require("fs");

// fs.writeFile("example.txt","hello this is a content", (err)=> {
//     if (err) {
//         console.error("Error" , err);
// }
// else {
//     console.log("file craeted");
// }
// });

// fs.readFile("example.txt", "utf-8", (data ,err)=> {
//     if (err) {
//         console.error("Error" , err);
// }
// else {
//     console.log("data");
// }
// });

// fs.appendFile("example.txt", "\nthis is new line", (err)=> {
//     if (err) {
//         console.error("Error" , err);
// }
// else {
//     console.log("file updated");
// }
// });


fs.unlink("example.txt",  (err)=> {
    if (err) {
        console.error("Error" , err);
}
else {
    console.log("file deleted");
}
});