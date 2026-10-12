const express = require('express');
const swaggerUi = require("swagger-ui-express");
const openapi = require("./openapi.json");
const app = express();
app.use('/docs',swaggerUi.serve,swaggerUi.setup(openapi));
const port = 3000;

app.use(express.json());
const tasks = [
  { id: 1, title: "Learn JavaScript", done: true },
  { id: 2, title: "Learn Express", done: false },
  { id: 3, title: "Build a REST API", done: false },
];
//stage 1
app.get('/',(req,res)=>{
    res.status(200).json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

//stage 2
app.get('/tasks',(req,res)=>{
    res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
   if (Number.isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${req.params.id} not found`,
    });
  }

  res.status(200).json(task);
});

// stage 3
app.post("/tasks",(req,res)=>{
    const {title} = req.body;

    if(typeof title !== 'string' || title.trim() === ''){
        return res.status(400).json({error: "add a title"});
    }
const id = tasks.length === 0 ? 1 : Math.max(...tasks.map(task => task.id)) + 1;
    const newTask = {
    id,
    title: title.trim(),
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port,()=>{console.log(`app is running on port ${port}`);});
