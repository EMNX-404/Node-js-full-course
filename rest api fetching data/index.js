const express = require('express');
const app = express();
const port = 3000;
//importing data
const user = require("./data.json");
//third party middleware
app.use(express.json());

//normal route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//get all user
app.get("/api/users/:id" , (req , res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) {
        return res.status(404).json({
            error : "user not found"
        })
    }
    res.json(user);
});

/////POST
app.post("/api/users", (req, res) => {
  const newUser ={
    id : users.length + 1,
 first_name : req.body.first_name,
  last_name : req.body.last_name,
  email : req.body.email
   };

   users.push(newUser);
   res.status(201).json({
    message : "user created",
    user :newUser,
   });
});

//put update
app.put("/api/users/:id" , (req , res) => {

      const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) {
        return res.status(404).json({
            error : "user not found"
        })
    }
    user.first_name= req.body.first_name,
    user.last_name= req.body.last_name,
    user.email= req.body.email,
    res.json({
      messsage : "user updated",
      user : user,
    });
})

//delete
// DELETE
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
    if(!user) {
        return res.status(404).json({
            error : "user not found"
        })
      }

const deletedUser = users.splice(userIndex, 1);

  res.json({
    message: "user deleted",
    user: deletedUser[0]
  });
});


//server running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});