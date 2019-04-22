import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../model/user';

export class InMemUserService implements InMemoryDbService {
  createDb() {
    const users: Array<User> = [
      {
        id: 1,
        name: 'Arturo',
        lastName: 'Campos',
        email: 'arturo.campos@gorillalogic.com',
        role: 'Senior Web Developer',
      },
      {
        id: 2,
        name: 'Mariano',
        lastName: 'Alvarez',
        email: 'mariano.alvarez@gorillalogic.com',
        role: 'Senior Web Developer',
      },
      {
        id: 3,
        name: 'Alfredo',
        lastName: 'Bonilla',
        email: 'alfredo.bonilla@gorillalogic.com',
        role: 'Senior Web Developer',
      },
      {
        id: 4,
        name: 'Gerardo',
        lastName: 'Falcon',
        email: 'gerardo.falcon@gorillalogic.com',
        role: 'Senior Software Engineer',
      }
    ];
    return { users };
  }
}
