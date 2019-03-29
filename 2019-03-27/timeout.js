var company = {
    employees: [{
        name: "doug"
      },
      {
        name: "AJ"
      }
    ],
    getName: function(employee) {
      return employee.name
    },
    getNames: function() {
      return this.employees.map(this.getName)
    },
    delayedGetNames: function() {
      var fn = function() {
        var names = this.getNames();
        console.log(names);
      };
      
      setTimeout(fn.bind(this), 500);
    }
  }
  
  company.delayedGetNames();