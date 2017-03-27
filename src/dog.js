// @flow

class Dog {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark() {
        return `Wah wah, I am ${this.name}`;
    }

    declareAge() {
        return `Hey ${this.name}, so you are ${this.age} years old`;
    }
}

export default Dog;