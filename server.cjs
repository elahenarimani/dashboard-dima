const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

// مسیر فایل JSON
const dataFilePath = path.join(__dirname, "chartData.json");

app.use(cors());
app.use(express.json());
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// خواندن دیتا از فایل
function readChart() {
  const data = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(data);
}

// نوشتن دیتا داخل فایل
function writeUsers(chart) {
  fs.writeFileSync(dataFilePath, JSON.stringify(chart, null, 2), "utf8");
}

// GET all chart
app.get("/chart", (req, res) => {
  try {
    const chart = readChart();
    res.json(chart);
    console.log(chart)
  } catch (error) {
    res.status(500).json({ message: "Error reading users", error });
  }
});





//to do 
const todoFilePath = path.join(__dirname, "toDoData.json");


function readTodos() {
  const data = fs.readFileSync(todoFilePath, "utf8");
  return JSON.parse(data);
}

function writeTodos(toDoData) {
  fs.writeFileSync(
    todoFilePath,
    JSON.stringify(toDoData, null, 2),
    "utf8"
  );
}
//get
app.get("/toDoData", (req, res) => {
  try {
    const toDoData = readTodos();
    res.json(toDoData);
  } catch (error) {
    res.status(500).json({
      message: "Error reading todos",
      error,
    });
  }
});

//post
app.post("/toDoData", (req, res) => {
  try {
    const toDoData = readTodos();

    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      done: false,
    };

    toDoData.push(newTodo);
    writeTodos(toDoData);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({
      message: "Error creating todo",
      error,
    });
  }
});



// app.post("/toDoData", (req, res) => {
//   try {
//     const todos = readTodos();
//     const newTodo = req.body;

//     if (!newTodo.title) {
//       return res.status(400).json({
//         message: "Task name is required",
//       });
//     }

//     const newId = todos.length
//       ? Math.max(...todos.map((u) => u.id)) + 1
//       : 1;

//     const userTodo = {
//       id: newId,
//       ...newTodo,
//     };

//     todos.push(userTodo);

//     writeTodos(todos);

//     res.status(201).json(userTodo);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error creating todo",
//       error,
//     });
//   }
// });


//delete
app.delete("/toDoData/:id", (req, res) => {
  try {
    const toDoData = readTodos();

    const todoId = Number(req.params.id);

    const filteredTodo = toDoData.filter(
      (todo) => todo.id !== todoId
    );

    if (filteredTodo.length === toDoData.length) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    writeTodos(filteredTodo);
    res.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting todo",
      error,
    });
  }
});



//POST 

app.post("/toDoData", (req, res) => {
  try {
    const todos = readTodos();
    const newTodo = req.body;

    if (!newTodo.title) {
      return res.status(400).json({
        message: "Task name is required",
      });
    }

    const newId = todos.length
      ? Math.max(...todos.map((u) => u.id)) + 1
      : 1;

    const userTodo = {
      id: newId,
      ...newTodo,
    };

    todos.push(userTodo);

    writeTodos(todos);

    res.status(201).json(userTodo);
  } catch (error) {
    res.status(500).json({
      message: "Error creating todo",
      error,
    });
  }
});

// app.post("/toDoData", (req, res) => {
//   try {
//     const todos = readTodos();
//     const newTodo = req.body;
//     if (!newTodo.title) {
//       return res.status(400).json({ message: "Task name is required" });
//     }

//     const newId = todos.length ? Math.max(...todos.map((u) => u.id)) + 1 : 1;

//     const userTodo = {
//       id: newId,
//       ...newTodo,
//     };
  


// GET user by id
// app.get("/users/:id", (req, res) => {
//   try {
//     const users = readUsers();
//     const user = users.find((u) => u.id === parseInt(req.params.id));

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error reading user", error });
//   }
// });

// POST create user
// app.post("/users", (req, res) => {
//   try {
//     const users = readUsers();
//     const newUser = req.body;
//     if (!newUser.name) {
//       return res.status(400).json({ message: "Name is required" });
//     }

//     const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

//     const userToAdd = {
//       id: newId,
//       ...newUser,
//     };

//     users.push(userToAdd);
//     writeUsers(users);

//     res.status(201).json(userToAdd);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating user", error });
//   }
// });

// PUT update user
// app.put("/users/:id", (req, res) => {
//   try {
//     const users = readUsers();
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex((u) => u.id === userId);

//     if (index === -1) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     users[index] = {
//       ...users[index],
//       ...req.body,
//       id: userId,
//     };

//     writeUsers(users);
//     res.json(users[index]);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// });

// DELETE user
// app.delete("/users/:id", (req, res) => {
//   try {
//     const users = readUsers();
//     const userId = parseInt(req.params.id);
//     const filteredUsers = users.filter((u) => u.id !== userId);

//     if (filteredUsers.length === users.length) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     writeUsers(filteredUsers);
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
