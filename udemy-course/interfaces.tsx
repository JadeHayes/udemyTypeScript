// let displayUser = (user: {firstName: string, lastName: string }) => {
//   console.log(user.firstName+ ' '+user.lastName);
// }

// this is an ugly way of doing it but we want to require a last name
// let myUser = {firstName:'John', lastName:'Doe'};
// displayUser(myUser);

// use an interface to require inputs and list their types
interface User extends Membership {
  firstName: string;
  lastName: string;
  email?: string;
}

interface Membership {
  type?: string;
}

let displayUser = (user: User) => {
  if (user.email){
    console.log(user.firstName+ ' '+user.lastName+' email: ' + user.email)
  } else {
    console.log(user.firstName+ ' '+user.lastName)
  }

  if(user.type) {
    console.log(user.firstName+ ' has a ' + user.type+ ' membership.')
  }
  }

let myUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@gmail.com',
  type: 'gold'
};

displayUser(myUser);

interface userFunc {
  (name: string, age:number): string
}

let getUser: userFunc;
getUser = (name:string, age: number): string => {
  return name + ' is '+ age + ' years old'
}

console.log(getUser('John', 30));