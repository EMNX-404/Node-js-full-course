const EventEmitter = requires("events"),
const myEmitter = new EventEmitter ;

//someone LOGIN

//litener

myEmitter.on("login" , (username) => {
    console.log(`${username} logged in!`);
});

//trigger

myEmitter.emit("login" , "Moon");

//when some one upload a file 

//listener

myEmitter.on("file uploaded" , (filename) => {
    console.log(`processing ${filename}....`);
});

//trigger

myEmitter.emit("file uploaded" , "notes.pdf")

//someone message

//listener

myEmitter.on("message", () => {
    console.log("Message received!");
});
//trigger

myEmitter.emit("message");