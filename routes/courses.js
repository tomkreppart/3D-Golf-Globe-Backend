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

router.get('/:id', (req, res, next) => {
  knex('courses')
    .where({id: req.params.id})
    .first()
    .then(courses => res.json(courses))
    .catch(err => next(err))
})

module.exports = router;
