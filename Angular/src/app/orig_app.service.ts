import { Injectable } from '@angular/core';

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    BirthDate: string;
    State: string;
}

let employees: Employee[] = [{
    "ID": 1,
    "Prefix": "Mr.",
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "State": "California",
    "BirthDate": "1964/03/16"
},
{
    "ID": 2,
    "Prefix": "Mrs.",
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Position": "Sales Assistant",
    "State": "California",
    "BirthDate": "1981/06/03"
},
{
    "ID": 3,
    "Prefix": "Mr.",
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Position": "CMO",
    "State": "Arkansas",
    "BirthDate": "1974/09/07"
}]

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
}