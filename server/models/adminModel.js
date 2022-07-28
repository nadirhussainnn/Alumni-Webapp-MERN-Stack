const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const validator=require('mongoose-unique-validator')

const adminSchema=mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true
    },
    fullName:{
        type:String,
    },
    password:{
        required:true,
        type:String
    },
    image:{
        type:String,
    }
})

adminSchema.plugin(validator)

adminSchema.pre('save',function(next){
    const user=this.user
    bcrypt.hash(user.password, 5, function(error, hash){

        user.password=hash;
        next()
    })
})

module.exports=mongoose.model('Admin', adminSchema)