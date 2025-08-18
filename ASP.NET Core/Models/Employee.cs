using System;

namespace ASP_NET_Core.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
        public string State { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
