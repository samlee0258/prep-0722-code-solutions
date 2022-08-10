var person = {
  firstName: 'Samuel',
  lastName: 'Lee',
  hobby: 'Gaming',
  job: 'Student',
  previousJob: 'Server'
};

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
var currentJob = person.job;
console.log('The person\'s current job is:', currentJob);
var pastJob = person.previousJob;
console.log('The person\'s previous job is:', pastJob);

console.log(person);
