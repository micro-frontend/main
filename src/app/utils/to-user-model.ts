import {UserModel} from './user-model';

export function toUserModel(data): UserModel {
  const result = new UserModel();
  result.username = data.username;
  result.age = +data.age;
  return result;
}
