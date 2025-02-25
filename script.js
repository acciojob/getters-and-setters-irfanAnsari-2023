//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

	get age(){
		return this._age;
	}

	set age(age){
		this._age = age;
	}

	set name(name){
		this._name = name;
	}
	
}

class Student extends Person {
	study(){
		cosole.log(`&{this.name} is studying.`);
	}
	
}

class Teacher extends Person {
	teach(){
		console.log(`&{this.name} is teaching.`);
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
