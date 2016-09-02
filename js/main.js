'use strict';
console.log('hello world from main js');


var calc = {
        add: function(a, b) {
            if (!isNaN(a) && !isNaN(b)) {
                return a + b;
            } else {
                console.log('Inputs are not numbers');
            }
        },
        sub: function(a, b) {
                if (!isNaN(a) && !isNaN(b)) {
                    return a - b;
                  } else {
                        console.log('Inputs are not numbers');
                    }
                },
                mpl: function(a, b) {
                        if (!isNaN(a) && !isNaN(b)) {
                            return a * b;
                        } else {
                            console.log('Inputs are not numbers');
                        }
                    },
                    div: function(a, b) {
                        if (!isNaN(a) && !isNaN(b)) {
                          if (b !== 0) {
                              return a / b
                          } else {
                              console.log('Divide by zero');
                          }} else {
                                console.log('Inputs are not numbers');
                            }
                        },
                        fac: function(n) {
                            if (!isNaN(n)) {
                                if ((n == 0) || (n == 1)) {
                                    return 1
                                } else {
                                    return n * calc.fac(n - 1);
                                }} else {
                                    console.log('Input is not a number');
                                }
                            }
                        };

/*
                        var a = 9,
                            b = 0;
                        console.log(calc.add(a, b));
                        console.log(calc.sub(a, b));
                        console.log(calc.mpl(a, b));
                        console.log(calc.div(a, b));
                        console.log(calc.fac(a));
*/
