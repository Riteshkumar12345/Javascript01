//stack (primtive) , heap(non-primtive)

let userOne = {
    email : "ritesh@gmial.com",
    upi :"ritesh@ybl"
};
let userTwo  = userOne;
userTwo.email = "ritesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);

