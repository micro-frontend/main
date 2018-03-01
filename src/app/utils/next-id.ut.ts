import {nextId} from './next-id';

describe('test', function () {
  it('should next-id', function () {
    expect(nextId()).toContain('appId');
  });
});
