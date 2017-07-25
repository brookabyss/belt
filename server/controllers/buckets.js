const mongoose = require("mongoose")
const User = mongoose.model("User")
const Bucket = mongoose.model("Bucket")

module.exports = {
    create:(req,res)=>{
            console.log("creating bucket list",req.body._tagged)
            let new_bucket = new Bucket({title: req.body.title, description: req.body.description, _creator: req.body._creator  })
            new_bucket._tagged.push(req.body._tagged)
					new_bucket.save()
						.then(() => {
                            Bucket.find({})
		                        .then(data => res.json(data))
	                            .catch(err => res.status(500).json(err))
						})
                        .catch(err => {
                            console.log("error creating bucket",err)
                            res.status(500).json(err)})
    },
    getBuckets: (req,res)=>{
        console.log("get buckets controller")
        Bucket.find({})
            .then(data => {
                

                res.json(data)

            })
            .catch(err => res.status(500).json(err))
    },
    
    updateBucket: (req,res)=>{
        console.log("update bucket controller")
        Bucket.findOne({_id : req.body._id}, function(err,bucket){
            if (err){
                console.log("bucket not found",err)
                res.status(500).json(err)
            }
            else{
                bucket.status=req.body.status
                bucket.title=req.body.title
                bucket.description=req.body.description
                bucket.save()
                .then(()=>{
                    res.json(true)
                })
                .catch(err=>{
                    console.log("bucket can't save",err)
                    res.status(500).json(err)
                })
            }
        })
    }
            
        
    }

