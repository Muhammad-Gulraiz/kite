"use strict";
class calculator {
    constructor(n1, n, n2, answer) {
        this.answer = 0;
        this.n1 = n1;
        this.n = n;
        this.n2 = n2;
        this.answer = answer;
    }
    add(n1, n2) {
        return this.answer = n1 + n2;
    }
    sub(n1, n2) {
        return this.answer = n1 - n2;
    }
    mul(n1, n2) {
        return this.answer = n1 * n2;
    }
    div(n1, n2) {
        return this.answer = n1 / n2;
    }
    pow(n1, n2) {
        return this.answer = Math.pow(n1, n2);
    }
    log10(n) {
        return this.answer = Math.log10(n);
    }
    sqrt(n) {
        return this.answer = Math.sqrt(n);
    }
    sin(n) {
        return this.answer = Math.sin(n);
    }
    asin(n) {
        return this.answer = Math.asin(n);
    }
    cos(n) {
        return this.answer = Math.cos(n);
    }
    acos(n) {
        return this.answer = Math.acos(n);
    }
    tan(n) {
        return this.answer = Math.tan(n);
    }
    atan(n) {
        return this.answer = Math.atan(n);
    }
}
const calculator1 = new calculator(0, 0, 0, 0);
calculator1.pow(2, 3);
console.log(calculator1);
