// the hello world program
console.log('Hello World');



function validateEmail(email) {
    return email.includes ("@") && email.includes (".");
}
console.log(validateEmail("test@example.com"));//true

let feedback=[];



function addFeedback(message) {
    feedback.push(message);
    return feedback;

}
console.log(addfeedback("great Website!"));//[Great website!]

const prices=[300,400,450,500];

function getTotalPrice() {
    return prices.reduce((total,price)=>toal+price,0);
}
console.log('Toal price: $${getTotalrice()}');
