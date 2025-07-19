using System;
using System.Collections.Generic;

namespace mvc.Models {
    static class SampleData {
        public static List<Employee> Employees = new List<Employee>() {
            new Employee {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Position = "CEO",
                State = "California",
                BirthDate = new DateTime(1963, 3, 16)
            },
            new Employee {
                ID = 2,
                FirstName = "Olivia",
                LastName = "Peyton",
                Position = "Sales Assistant",
                State = "California",
                BirthDate = new DateTime(1981, 6, 3)
            },
            new Employee {
                ID = 3,
                FirstName = "Robert",
                LastName = "Reagan",
                Position = "CMO",
                State = "Arkansas",
                BirthDate = new DateTime(1974, 9, 7)
            }
        };
    }
}
