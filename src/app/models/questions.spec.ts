import { Palaute } from './questions';

describe('Palaute', () => {
  it('should create an instance', () => {
    const palauteInstance = new Palaute('Kysymys 1', 'Vastaus 1');
    expect(palauteInstance).toBeTruthy();
  });
});