// function print() {
//     console.log('Printing...');
// }
// OR
// const print = () => {
//     console.log('Printing...');
// }

const people = ['amit', 'shubham', 'vivek'];
// function iterate(people) {
//     people.forEach(function(element) {
//         console.log(element);
//     });
// }
// OR with arrow function
// const iterate = (people) => {
//     people.forEach((element) => {
//         console.log(element);
//     });
// }
// OR not need of () when passing single arg
// const iterate = people => {
//     people.forEach(element => {
//         console.log(element);
//     });
// }
// OR no need of {} when only single line in function body
const iterate = people => people.forEach(element => console.log(element));
// iterate(people);

// () is required when passing multiple arg
const print = (first_name, last_name) => console.log(first_name, last_name);
print('amit', 'shubham');