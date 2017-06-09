const express = require('express')
const router = express.Router()
const knex = require('../db')

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('courses').select("*")
    .then(courses => {
      return knex('courses')
        .then(function (courses) {
            res.json(courses)
        })
        .catch((result) => {
            console.log("error results", result)
        });
    })
})

module.exports = router;
