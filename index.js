console.log("working");

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ]

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.


let result = studentRecords.map( student => student.name.toUpperCase());
console.log(result);


// ['JOHN', 'BABA', 'YAGA', 'WICK']"

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let mark = studentRecords.filter( stu => stu.marks > 50);
console.log(mark);

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let show = studentRecords.filter((stu => stu.marks > 50) && (stu => stu.id > 120));
console.log(show);
 
// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sumTotal = studentRecords.reduce(((acc,curr) => acc+curr.marks),0);
console.log(sumTotal);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let get = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name);
console.log(get);

//  Question 6: This time we are required to print the sum of marks of the students with id > 120.

let sum = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc+curr.marks,0);
console.log(sum);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let total = studentRecords.map(function(stu){ 
    if(stu.marks < 50)
    {
        stu.marks += 15
    }
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(total);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let item = [ 
{name: 'Asha', class: 4, rollNo : 22 },
{name: 'Babli', class: 5, rollNo : 24 },
{name: 'Chahat', class: 6, rollNo : 26 },
{name: 'Diya', class: 7, rollNo : 28 },
{name: 'Eti', class: 8, rollNo : 30 },
{name: 'Fatima', class: 9, rollNo : 32 },
]
console.log(item);