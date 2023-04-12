function createEmployeeRecord(employeeArr) {
    return {
      firstName: employeeArr[0],
      familyName: employeeArr[1],
      title: employeeArr[2],
      payPerHour: employeeArr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrayOfArrays) {
      return arrayOfArrays.map(createEmployeeRecord);
    }
  
  function createTimeInEvent(dateStamp) {
      const [date, time] = dateStamp.split(' ');
    
      const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date
      };
      
      this.timeInEvents.push(timeInEvent);
      return this;
    }
    
    function createTimeOutEvent(dateTimeStr) {
      let dateTime = dateTimeStr.split(" ");
      let date = dateTime[0];
      let hour = parseInt(dateTime[1]);
    
      this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: hour
      });
    
      return this;
    }
    
    function hoursWorkedOnDate(date) {
      const timeInEvent = this.timeInEvents.find(event => event.date === date)
      const timeOutEvent = this.timeOutEvents.find(event => event.date === date)
    
      const timeIn = timeInEvent.hour
      const timeOut = timeOutEvent.hour
    
      const hoursWorked = (timeOut - timeIn) / 100
    
      return hoursWorked
    }
    
    function wagesEarnedOnDate(date) {
      const hoursWorked = hoursWorkedOnDate.call(this, date)
      const payRate = this.payPerHour
      const wagesEarned = hoursWorked * payRate
    
      return wagesEarned
    }
    
    function findEmployeeByFirstName(employees, firstName) {
        return employees.find(employee => employee.firstName === firstName)
      }
      
    function calculatePayroll(employees) {
        const totalWages = employees.reduce((total, employee) => {
          return total + allWagesFor.call(employee)
        }, 0)
        return totalWages
      }
  
  

  
//Use the function below to help you 

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

