const express= require("express");
const app= express();
const path=require("path");
const port =8080;

const {v4: uuidv4}=require('uuid');


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views") );
const methodOverride= require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

 app.get("/" , (req,res)=>{
    res.send("heyyy");
 });

const todoAppData = [
  {
    userId: 1,
    username: "alice",
    password: "alice123",
    todos: [
      {
        todoId: 101,
        title: "Buy groceries",
        description: "Milk, bread, fruits",
        completed: false
      },
      {
        todoId: 102,
        title: "Study",
        description: "Prepare for DSA exam",
        completed: true
      }
    ]
  },

  {
    userId: 2,
    username: "bob",
    password: "bob123",
    todos: [
      {
        todoId: 103,
        title: "Gym",
        description: "Leg workout",
        completed: false
      },
      {
        todoId: 104,
        title: "Assignment",
        description: "DBMS assignment",
        completed: false
      }
    ]
  },

  {
    userId: 3,
    username: "charlie",
    password: "charlie123",
    todos: [
      {
        todoId: 105,
        title: "Project",
        description: "To-Do app design",
        completed: false
      },
      {
        todoId: 106,
        title: "Meeting",
        description: "Team discussion",
        completed: true
      }
    ]
  },

  {
    userId: 4,
    username: "diana",
    password: "diana123",
    todos: [
      {
        todoId: 107,
        title: "Revision",
        description: "Maths chapter 5",
        completed: false
      },
      {
        todoId: 108,
        title: "Notes",
        description: "Make OS notes",
        completed: false
      }
    ]
  },

  {
    userId: 5,
    username: "ethan",
    password: "ethan123",
    todos: [
      {
        todoId: 109,
        title: "Reading",
        description: "Read Clean Code",
        completed: true
      },
      {
        todoId: 110,
        title: "Practice",
        description: "Java problems",
        completed: false
      }
    ]
  }
];
app.get("/users", (req,res) =>{
    res.render("index.ejs" , {todoAppData});
});

app.get("/login", (req,res) =>{
    res.render("login.ejs");

    });

app.post("/users/login", (req,res) =>{
      const {username,password}=req.body;
      const user =todoAppData.find((u) => u.username === username && u.password===password);
      if(user){
        res.redirect(`/login/user/${user.userId}`);
      }
      else{
        res.send("Invalid username or password");
      }
    });

app.get("/login/user/:userId", (req,res)=>{
    const {userId}=req.params;
    const user=todoAppData.find((u)=> u.userId === parseInt(userId));
    if(user){
        res.render("user.ejs", {user});
    }
    else{
        res.send("user not found");
    }
});

app.get("/Edit/:todoId", (req,res) =>{
  const {todoId}=req.params;
  let foundTodo=null;
  for(const user of todoAppData)
{
  const todo = user.todos.find((t) => t.todoId === parseInt(todoId));
  if(todo){
    foundTodo=todo;
    break;
  }
}
if(foundTodo){
  res.render("edit.ejs", {todo :foundTodo});
}
else{
  res.send(" no todo found");
}
});

app.patch("/users/edit/:todoId", (req,res)=>{
  const {todoId}= req.params;

  let titleUpdated= req.body.title;
  let descriptionUpdated= req.body.description;
      let todo=null;
   for(const user of todoAppData){
   todo= user.todos.find((t)=> t.todoId === parseInt(todoId) );
  if(todo){
    todo.title= titleUpdated;
    todo.description= descriptionUpdated;
    break;
  }
  
  }
  if(todo){
    res.redirect("/users");
  }
 else{
  res.send("todo not found");
 }
});

app.get("/user/:userId/show",(req,res)=>{
  const{userId}= req.params;
  const user = todoAppData.find((u)=> u.userId === parseInt(userId));
  if(user){
    res.render("show.ejs", {user});
  }
  else{
    res.send("user not found");
  }
});

 app.delete("/users/:todoId", (req,res)=>{
    const {todoId}=req.params;
    for(const user of todoAppData){
    const todoIndex= user.todos.findIndex((t) => t.todoId === parseInt(todoId));
    if(todoIndex !== -1){
      user.todos.splice(todoIndex, 1);
     break;  
    }
  }
   res.redirect("/users");
 });


app.listen(port, () => {
    console.log("server is running on port",{port});
});
