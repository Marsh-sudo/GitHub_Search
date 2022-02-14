import { Repo } from './repo';

describe('Repo', () => {
  it('should create an instance', () => {
    expect(new Repo("","","",new Date(),"","")).toBeTruthy();
  });
});
