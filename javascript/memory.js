//stack (primtive) , heap(non-primtive)
//primitive vo hmesaha copy create karta h aur heap vo hmesha refernce deta h aur sume cange karne se original valur me change hota h lekin primtive me aisa nhi hota h
//primtive copy banta h jisse uske original value me change nhi hota h 
let userOne = {
    email : "ritesh@gmial.com",
    upi :"ritesh@ybl"
};
let userTwo  = userOne;
userTwo.email = "ritesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);

