const path = require("path")
const users = require ('../controllers/users')
const buckets = require ('../controllers/buckets')

// const users = require("./../controllers/users.js")

module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log('login Route hit!', req.body.name)
        users.login(req, res)
    })
    app.get('/get_users', (req, res) => {
        console.log('getUsersRoute hit!')
        users.getUsers(req, res)
    })
    app.post('/create_bucket', (req, res) => {
        console.log('new_bucket Route hit!')
        buckets.create(req, res)
    })
    app.get('/get_buckets', (req, res) => {
        console.log('getUsersRoute hit!')
        buckets.getBuckets(req, res)
    })
    app.get('/user/logout'), (req,res)=>{
        users.logout(req,res)
    }
     app.post('/update_bucket', (req, res) => {
        console.log('UpdateBucketRoute hit!')
        buckets.updateBucket(req, res)
    })





	
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
    })
    

}