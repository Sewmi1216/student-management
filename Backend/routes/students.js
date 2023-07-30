const router = require("express").Router();
let Student = require("../models/Student");

const studentController = require("../controllers/StudentController");

router.route('/display')
    .get(studentController.getAllStudents);

router.route('/add')
    .post(studentController.addStudent);

router.route('/getStudent/:id')
    .get(studentController.getStudent);

router.route('/update/:id')
    .put(studentController.updateStudent);
router.route('/delete/:id')
    .delete(studentController.deleteStudent);



// router.get("/",controller.get);

// //add student
// router.route("/add").post((req, res) => {      //js arrow function
//     const name = req.body.name;
//     const age = Number(req.body.age);
//     const gender = req.body.gender;
//     const newStudent = new Student({
//         name,
//         age,
//         gender
//     })
//     //then->js promise||like if else condition
//     newStudent.save().then(() => {
//         res.json("Student Added");
//     }).catch((err) => {
//         console.log(err);
//     })
// })
//
// //view Students
// router.route("/display").get((req, res) => {
//     Student.find().then((students) => {
//         res.json(students);
//     }).catch((err) => {
//         console.log(err);
//     })
// })
// //view one Student
// router.route("/get/:id").get(async (req, res) => {
//     let userId =req.params.id;
//     const user = await Student.findById(userId)
//         .then((student) => {
//             res.status(200).send({status: "User fetched", student});
//     }).catch((err) => {
//         console.log(err.message);
//             res.status(500).send({status: "Error with get user", error:err.message});
//     })
// })
//
// //update student - can use put/post methods
// router.route("/update/:id").put(async (req, res) => {
//     let userId = req.params.id;
//     const {name, age, gender} = req.body;        //destructure
//
//     const updateStudent = {
//         name,
//         age,
//         gender
//     }
//     //use findone() to use nic or any other id instead of id
//     const update = await Student.findByIdAndUpdate(userId, updateStudent)     //await- expect promise
//         .then(() => {
//             res.status(200).send({status: "User updated"})
//         }).catch((err) => {
//             console.log(err);
//             res.status(500).send({status: "Error with updating data"});
//         })
// })
//
// router.route("/delete/:id").delete(async (req, res) => {
//     let userId = req.params.id;
//     await Student.findByIdAndDelete(userId).then(() => {
//         res.status(200).send({status: "User deleted"});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with delete user", error: err.message});
//     })
// })



module.exports = router;
