const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String
    },
    salary:{
        type: Number,
        required: true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

personSchema.pre('save', async function(next){
    const person = this;
    // Hash the password only if it has been modified (or is new)
    if(!person.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10)

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt)

        // Override the plain password with the hashed one 
        person.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

// use bcrypt to compare the provided password with the hashed password
personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    }catch(err){
        throw err;
    }
}
// the logic behind compare is password given by user is converted into hashed after adding salt which are extracted from hashed password
// and then compare with the stored password 

// Create person model
const Person = mongoose.model('person', personSchema);
module.exports = Person;

//comment added
