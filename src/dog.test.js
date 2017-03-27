import Dog from './dog';

test('Dog.bark', () => {
    const testDog = new Dog('Test', 25);
    expect(testDog.bark()).toBe('Wah wah, I am Test');
});