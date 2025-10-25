**<h2>Node.JS API</h2>**

###

A **Node.js backend application** built with **Express.js**, ready to handle API requests, user management, and further CRUD operations.
Designed with clean architecture and modular code structure.

###

**<h2>Installation</h2>**

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

**<h2>File Structure</h2>**

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

**<h2>1️⃣- Start the Project</h2>**

###
```powershell
npm init -y
```

###

**<h2>2️⃣- Install Dependences</h2>**

###
```powershell
npm i express
```

Express is the framework for creating routes (`GET`, `POST`, `DELETE`, `PUT`/`PATCH`).

---

**<h2>3️⃣- Configure the Package.JSON</h2>**

###
```json
"type": "module",
```

###

**<h2>4️⃣- Create the Main File</h2>**

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

**<h2>Extra Tip</h2>**

###

You can change `PORT 3000` for `8000` || `5500` as an environment variable into `env`

###
```javascript
const PORT = process.env.PORT || 3000;
```

---
