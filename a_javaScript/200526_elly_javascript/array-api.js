console.log('연결');

//1. make a string out of an array
const fruits1 = ['apple', 'banana', 'orange'];
const separatorNo = fruits1.join(); 
const separator1 = fruits1.join(0);
const separator2 = fruits1.join(', and '); 
console.log(separatorNo); //apple,banana,orange
console.log(separator1); //apple0banana0orange
console.log(separator2); //apple, and banana, and orange

//2. make an array out of a string
const fruits2 = 'apple, kiwi, banana, cherry';
const mySplit1 = fruits2.split();
const mySplit2 = fruits2.split(",");
const mySplit3 = fruits2.split(" ");
const splitLimit = fruits2.split(",", 2);
console.log(mySplit1); //["apple, kiwi, banana, cherry"]
console.log(mySplit2); //["apple", "kiwi", "banana", "cherry"]
console.log(mySplit3); //["apple,", "kiwi,", "banana,", "cherry,"]
console.log(splitLimit); //["apple", "kiwi"]

//3. make this array look like this.: [5, 4, 3, 2, 1]
const array1 = [1, 2, 3, 4, 5];
const myReverse = array1.reverse();
console.log(myReverse); //[5, 4, 3, 2, 1]
console.log(array1); //[5, 4, 3, 2, 1]

console.clear();

//4. make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const mySlice1 = array2.slice(2);
const mySlice2 = array2.slice(2, 5);
console.log(mySlice1); //[3, 4, 5]
console.log(mySlice2); //[3, 4, 5]
console.log(array2); //[1, 2, 3, 4, 5]
const mySplice = array2.splice(0, 2);
console.log(mySplice); //[1, 2]
console.log(array2); //[3, 4, 5]





//5~11=============
class student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new student('A', 29, true, 45),
  new student('B', 28, false, 80),
  new student('C', 30, true, 90),
  new student('D', 40, false, 66),
  new student('E', 18, true, 84),
];
console.clear();
// 5. find a student with the score 90
const studentFind = students.find(function(value, index){
  console.log(value, index);
  //5명의 학생이 있기 때문에 5번 호출된다.
});
const score66 = students.find(function(student, index){
  return student.score === 66;
});
console.log(score66); //student{name:"D",age: 40, enrolled: false, score: 66}
//arrow 함수 = return, ;, {} 생략 
const score90 = students.find((student) => student.score === 90);
console.log(score90); //student{name:"C",age: 30, enrolled: true, score: 90}

console.clear();
//6. make an array of enrolled students
const enrolled = students.filter((student) => student.enrolled);
console.log(enrolled); //[student, student, student]


console.clear();

//7. make an array containing only the students` scores 
//result should be: [45, 80, 90, 66, 88]

const myStudent = students.map((student) => student);
const scores = students.map((student) => student.score);
const scoresTimes = students.map((student) => student.score + 100);
console.log(myStudent);//[student, student, student, student, student]
console.log(scores);//[45, 80, 90, 66, 84]
console.log(scoresTimes);//[145, 180, 190, 166, 184]


//8. check if there is a student with the score lower than 50
const lower50 = students.some((student) => student.score < 50);
console.log(lower50); //true
const everyNo = students.every((student) => student.score < 50);
console.log(everyNo); //false
const everyYes = !students.every((student) => student.score >= 50);
console.log(everyYes); //true

console.clear();

//9. compute students` average score
const totalScore = students.reduce((prev, curr) => {
  console.log("---");
  console.log(prev);
  console.log(curr);
  return prev + curr.score;
}, 0);
console.log(totalScore); //365
console.log(students.length);
const aveScore = totalScore / students.length;

console.clear();
console.log(aveScore);


const averageScore = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(averageScore / students.length);


console.clear();
//10. make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'

//map 사용해서 새로운 배열 생성
const allScore1 = students.map((student) => student.score);
console.log(allScore1); //[45, 80, 90, 66, 84]

//join 사용해서 string으로 변경
const allScore2 = students.map((student) => student.score).join();
console.log(allScore2); // 45, 80, 90, 66, 84

//filter사용해서 50점 이상만 가져오기
const allScore3 = students
.map((student) => student.score)
.filter((score) => score >= 50)
.join();
console.log(allScore3); //80, 90, 66, 84

//11. do Q10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'

