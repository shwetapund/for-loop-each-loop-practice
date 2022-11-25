/*
const arr = ["sam", "ram", "shyam", "hari"]

arr.forEach(
    ()=>{
        console.log("A")
    }
)
****************************************************************
const student= ["sam", "ram", "shyam", "hari"]

student.forEach(
    (item, index)=>{
        console.log(item, index)
    }
)
******************************************************************
const student= ["sam", "ram", "shyam", "hari"]

student.forEach((item, index)=>{
    console.log("sending email to ",item)
})
*/

const student= ["sam", "ram", "shyam", "hari"]


student.forEach((student, index)=>{
    console.log("Sending email to " + student)
})

sendEmail("Sayli", -1)