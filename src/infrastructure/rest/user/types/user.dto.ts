import { type UserRoleEnum } from './user-role.enum';

export class UserDto {
  name!: string;
  email!: string;
  role!: UserRoleEnum;
  active!: boolean;

  constructor (data?: UserDto) {
    if (data instanceof UserDto) {
      this.name = data.name;
      this.email = data.email;
      this.role = data.role;
      this.active = data.active;
    }
  }
};
