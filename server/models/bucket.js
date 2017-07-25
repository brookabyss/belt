const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BucketSchema = mongoose.Schema({
    title: {
        type:String,
        unique: [true, "Change your username"],
        required: [true, "username cannot be empty"],
        minlength:[5,"title too short"]
    },
    description: {
        type:String,
        unique: [true, "Change your username"],
        required: [true, "username cannot be empty"]
    },
    status:{type: Boolean,default: false},
    _creator:{type: Schema.Types.ObjectId, ref: 'User'},
    _tagged:[{type: Schema.Types.ObjectId, ref: 'User'}]

}, { timestamps: true})

mongoose.model("Bucket", BucketSchema)