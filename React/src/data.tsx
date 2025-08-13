export interface Employee {
  ID: number;
  Prefix: string;
  FirstName: string;
  LastName: string;
  Position: string;
  State: string;
  BirthDate: string;
}

export const employees: Employee[] = [
  {
    ID: 1,
    Prefix: 'Mr.',
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    State: 'California',
    BirthDate: '1964/03/16'
  },
  {
    ID: 2,
    Prefix: 'Mrs.',
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Position: 'Sales Assistant',
    State: 'California',
    BirthDate: '1981/06/03'
  },
  {
    ID: 3,
    Prefix: 'Mr.',
    FirstName: 'Robert',
    LastName: 'Reagan',
    Position: 'CMO',
    State: 'Arkansas',
    BirthDate: '1974/09/07'
  }
];
