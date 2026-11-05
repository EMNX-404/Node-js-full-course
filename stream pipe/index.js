//readable writable example

const fs = require("fs");

const readable = fs.createReadStream("video.mp4");

const writeable = fs.createWriteStream("video-copy.mp4");

readable.pipe(writable);

//pipe show directly short version listen show process 

//using listen for seeing all chunks 

const fs = require ("fs");

const readable = fs.createReadStream("video.mp4");

readable.on("data", (chunk)=> {
    console.log("received a chuck" , chunk.length);
});

//server example 
//The cool part is that res is itself a writable stream.

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    const video = fs.createReadStream("video.mp4");

    video.pipe(res);
});

server.listen(3000);