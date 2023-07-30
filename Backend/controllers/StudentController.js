// module.exports={
//     get : (req, res)=> {
//         res.send("User: Sewmi Thimaya");
//     },
// }
// const data = {
//     students: require('../models/Student'),
//     setEmployees: function (data) { this.student = data }
// }
let Student = require("../models/Student");
const getAllStudents = (req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    })
}

const addStudent = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const newStudent = new Student({
        name,
        age,
        gender
    })
    //then->js promise||like if else condition
    newStudent.save().then(() => {
        res.json("Student Added");
    }).catch((err) => {
        console.log(err);
    })
}

const getStudent = async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
        .then((student) => {
            res.status(200).send({status: "User fetched", student});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
}
// //update student - can use put/post methods
const updateStudent = async (req, res) => {
    let userId = req.params.id;
    const {name, age, gender} = req.body;        //destructure

    const updateStudent = {
        name,
        age,
        gender
    }
    //use findone() to use nic or any other id instead of id
    const update = await Student.findByIdAndUpdate(userId, updateStudent)     //await- expect promise
        .then(() => {
            res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data"});
        })
}
const deleteStudent = async (req, res) => {
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
}


module.exports = {
    getAllStudents, // Export the function so it can be used in other files
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent
};