## Node.JS API | CRUD

###

A **Node.js backend application** built with **Express.js**, ready to handle API requests, user management, and further CRUD operations.
Designed with clean architecture and modular code structure.

###

## Installation

###

Clone this repository

###
```powershell
git clone https://github.com/Kauan19-hub/Serverless-NODE.JS.git
```

###
```powershell
cd Serverless-NODE.JS
```

###

## File Structure

###
```xml
├── node_modules/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   └── app.js
├── package.json
└── README.md
```

---

## Start the Project

###
```powershell
npm init -y
```

###

## Install Dependences

###
```powershell
npm i express
```

Express is the framework for creating routes (`GET`, `POST`, `DELETE`, `PUT`/`PATCH`).

---

## Configure the Package.JSON

###
```json
"type": "module",
```

###

## Create the Main File

###

`api.js`

###
```javascript
import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

//BASIC ROUTES
app.get('/', (req, res) => {
  res.send('API is running!');
});

app.post('/data', (req, res) => {
  res.json({ message: 'POST request received', data: req.body });
});

app.put('/data/:id', (req, res) => {
  res.json({ message: `PUT request received for ID ${req.params.id}`, data: req.body });
});

app.delete('/data/:id', (req, res) => {
  res.json({ message: `DELETE request received for ID ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

###

**<h2>5️⃣- Run the File</h2>**

###
```powershell
node api.js
npm i -D nodemon
npx nodemon api.js  ### AUTOMATIC RESTART ON EVERY CHANGE:
```

###

## Extra Tip

###

You can change `PORT 3000` for `8000` || `5500` as an environment variable into `env`

###
```javascript
const PORT = process.env.PORT || 3000;
```

---
