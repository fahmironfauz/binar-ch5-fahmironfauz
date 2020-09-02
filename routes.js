const route = require('express').Router()
const axios = require('axios')
const path = require('path')
const dir = '../public/static/'
const url =
'https://gist.githubusercontent.com/yogski/a2219de98c1814a3dd79733b33a0aabb/raw/d8f14fbe41d083d6c5d120da67f770458d00b469/users.json'

//Ascending users for users
const usersSorting = (arr) => {
arr.users.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()

    if (nameA < nameB) {
    return -1
    }
    if (nameA > nameB) {
    return 1
    }

    return 0
})
return arr
}

//Routes for users
route.get('/users', (req, res) => {
axios.get(url).then((response) => {
    let usersJson = usersSorting(response.data)
    res.json(usersJson)
})
})

//Routes for ch3
route.get('/ch3', (req, res) => {
res.sendFile(path.join(__dirname, dir + 'ch3/index.html'))
})

//Routes for ch4
route.get('/ch4', (req, res) => {
res.sendFile(path.join(__dirname, dir + 'ch4/index.html'))
})

//Routes when without endpoint /
route.get('*', (req, res) => {
res.json({
    info: 'Tolong sertakan endpoint-nya: /ch3, /ch4, /users',
})
})

module.exports = route

test
