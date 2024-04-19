const express = require('express');

const db = require('d:/Four KHAI/Git/src/db');

const { users } = require('d:/Four KHAI/Git/src/db/schema');

const router = express.Router();


// handle get request for path /users

router.post('/users', async (request, response) => {

   const { body } = request;

   await db.insert(users).values(body);

   return response.sendStatus(201);

});

router.get('/users', async (request, response) => {

   const users = await db.query.users.findMany();

   return response.json(users);

});


module.exports = router;