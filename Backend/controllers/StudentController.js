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
module.exports = {
    getAllStudents, // Export the function so it can be used in other files
};