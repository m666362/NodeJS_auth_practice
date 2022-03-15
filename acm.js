// process.stdin.resume();         
// process.stdin.setEncoding("ascii"); 
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;            
// });

// process.stdin.on("end", function () {
//    processData(_input);         
// });

// function processData(input) {

//     console.log(input)        // => 5

//     input = input.split("\n");

//     console.log(input)        
// } 
const LinkedList = require('./linkedList');
const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
console.log(JSON.stringify(ll));