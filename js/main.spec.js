'use strict';
console.log('hello world from main.spec.js');

describe('Calculator module test', function() {
    it('should add two numbers', function() {
        //given
        var a = 1,
            b = 4,
            result;
        //when
        result = calc.add(a, b);
        //then
        expect(result).toBe(5);
    }),
    it('should inform that input is not a number', function() {
        //given
        var a = 'w',
            b = 'g',
            result;
        //when
        result = calc.add(a, b);
        //then
        expect(result).toBe(undefined);
    }),
    it('should substract two numbers', function() {
        //given
        var a = 4,
            b = 1,
            result;
        //when
        result = calc.sub(a, b);
        //then
        expect(result).toBe(3);
    }),
    it('should inform that input is not a number', function() {
        //given
        var a = 'w',
            b = 'g',
            result;
        //when
        result = calc.sub(a, b);
        //then
        expect(result).toBe(undefined);
    }),
    it('should multiply two numbers', function() {
        //given
        var a = 2,
            b = 4,
            result;
        //when
        result = calc.mpl(a, b);
        //then
        expect(result).toBe(8);
    }),
    it('should inform that input is not a number', function() {
        //given
        var a = 'w',
            b = 'g',
            result;
        //when
        result = calc.mpl(a, b);
        //then
        expect(result).toBe(undefined);
    }),
    it('should divide two numbers', function() {
        //given
        var a = 5,
            b = 2,
            result;
        //when
        result = calc.div(a, b);
        //then
        expect(result).toBe(2.5);
    }),
    it('should inform that input is not a number', function() {
        //given
        var a = 'w',
            b = 'g',
            result;
        //when
        result = calc.div(a, b);
        //then
        expect(result).toBe(undefined);
    }),
    it('should inform that division by zero', function() {
        //given
        var a = 2,
            b = 0,
            result;
        //when
        result = calc.div(a, b);
        //then
        expect(result).toBe(undefined);
    }),
    it('should get factorial of one number', function() {
        //given
        var n = 4,
            result;
        //when
        result = calc.fac(n);
        //then
        expect(result).toBe(24);
    }),
    it('should inform that input is not a number', function() {
        //given
        var n = 'w',
            result;
        //when
        result = calc.fac(n);
        //then
        expect(result).toBe(undefined);
    });
});
