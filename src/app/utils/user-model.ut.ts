import {toUserModel} from './to-user-model';

describe('user model', () => {
  it('should convert from server data', function () {
    expect(toUserModel({username: 'a', age: '10'}).age).toEqual(10);
  });
});
