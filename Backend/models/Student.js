const mongoose = require('mongoose');       //import mongoose package

const schema = mongoose.Schema;   //schema= template for the mongodb document

const studentSchema = new schema({
    name: {
        type: String,  //datatype
        required: true      //backend validation. if the name doesn't have a value it won't execute
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const Student = mongoose.model("Student", studentSchema);

module.exports =  Student;
