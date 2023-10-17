const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const _ = require('lodash');
const HttpErrors = require('http-errors');
const { Unauthorized, Conflict } = HttpErrors

const app = express()
app.use(bodyParser.json())

const allowedOrigins = ['http://localhost:8081', 'http://localhost:3001']

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

const SECRET_KEY = 'test key'

const getNextId = () => Number(_.uniqueId())

const state = {
  users: [
    { id: 1, username: 'admin', password: 'admin' },
  ],
}

app.post('/api/v1/signup', async (req, res) => {
  const { username, password } = req.body

  const user = state.users.find((u) => u.username === username)
  if (user) {
    res.status(409).send(new Conflict())
    return
  }

  const newUser = { id: getNextId(), username, password }
  const token = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: '1h' })
    state.users.push(newUser)
    res
      .status(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ token, username })
})

app.post('/api/v1/login', async (req, res) => {
  const { username, password } = req.body
  const user = state.users.find((u) => u.username === username)

  if (!user || user.password !== password) {
    res.status(401).send(new Unauthorized())
    return;
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' })
  res.send({ token, username })
})

const authenticate = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).send(new Unauthorized())
  }

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY)
    req.user = decodedToken
    next()
  } catch (error) {
    return res.status(401).send(new Unauthorized())
  }
}

app.get('/api/v1/auth', authenticate, (req, res) => {
  const user = state.users.find(({ id }) => id === req.user.userId)

  if (!user) {
    res.status(401).send(new Unauthorized())
    return
  }
  res.send({ valid: true })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
