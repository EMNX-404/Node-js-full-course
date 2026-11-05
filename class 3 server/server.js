const http = require("http");
const PORT = 1234;
const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.setHeader("Content-Type" , "text/html");
                res.write("<h1>welcome to node js server</h1>");
                res.end();
    }
});
server.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
});
