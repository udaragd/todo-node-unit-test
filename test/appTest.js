const assert = require('chai').assert;
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;

describe('Test Appplication for unit testing', function () {
    describe('sayHello function unit testing', function () {
        it('[sayHello()] function should return hello', function () {
            let result = sayHello();
            assert.equal(result, 'hello');
        });

        it('[sayHello()] function should return type string', function () {
            let result = sayHello();
            assert.typeOf(result, 'string');
        });
    });

    describe('addNumbers function unit test', function () {
        it('[addNumbers()] function should return above 5', function () {
            let result = addNumbers(5, 5);
            assert.isAbove(result, 5);
        });
        it('[addNumbers()] function should return type number', function () {
            let result = addNumbers(5, 5);
            assert.typeOf(result, 'number');
        });
    });


}); 
