const http = require("http");
const PORT = 3000;
const server = http.createServer((req , res) => {
    if (req.url === "/"){
        res.setHeader("Content-Type" , "text/plain");
        res.write("Home");
        res.end();
    }
      else if (req.url === "/about"){
        res.setHeader("Content-Type" , "text/plain");
        res.write("About");
        res.end();
    }

       else if (req.url === "/api/data"){
        FileSystem.readFile(`${__dirname}/jsondata/data.json`, "utf-8" , (err,data)=>{
            if(err) {
                res.writeHead(500,{"Content-Type" : "text/plain"});
                res.Write("internal server error ");

            } else{
                   res.writeHead(200,{"Content-Type" : "application/json"});
                res.end("data ");
            }
             
        })

       
    }
});