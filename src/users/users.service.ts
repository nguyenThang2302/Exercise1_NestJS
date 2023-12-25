import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      name: 'John',
      position: 'Backend Engineer',
      mentor: 'Harry',
    },
    {
      name: 'Jenny',
      position: 'Frontend Engineer',
      mentor: 'Hamilton',
    },
    {
      name: 'Bob',
      position: 'Devops Engineer',
      mentor: 'Barry',
    },
  ];

  create(user: User) {
    this.users.push(user);
  }

  getAll() {
    return this.users;
  }
}
