var emp1={empName:'Bhagyashri',location:'Pune',salary:12345.6};
var emp2={empName:'Sree Krishnan',location:'Chennai',salary:82828.2};
var emp3={empName:'Sanjay',location:'Mumbai',salary:9938822.2};
var emp4={empName:'Guru',location:'Bangalore',salary:2345.2};
var emp5={empName:'Amit',location:'Vadodara',salary:8282828.2};
var empArray=[emp1,emp2,emp3,emp4,emp5];
var biggestSalary=0;
var empTemp={};

for (var idx in empArray)
{
    emp=empArray[idx];    
    if (emp.salary > biggestSalary)
    {
        biggestSalary=emp.salary;
        empTemp=emp;
    }

}

console.log("The highest salary is "+biggestSalary);
console.log('The employee details about biggest salary holder is')
console.log(empTemp.empName+" lives in "+empTemp.location+" and gets a salary of Rs."+empTemp.salary)
