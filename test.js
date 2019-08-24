/* /* function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}

function personFullName(person) {
    return person.first + ' ' + person.last;
}

function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}
 
function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    }
} */

function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}

Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
}

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
}

function lastNameCaps() {
    return this.last.toUpperCase();
}



String.prototype.reversed = function() {
    var r = '';
    for (let i = this.length-1; i >= 0; i--) {
        r += this[i];
    }
    return r;
}

Person.prototype.toString = function() {
    return '<Person: ' + this.fullName() + '>';
}

function trivialNew(constructor, ...args) {
    var o = {};
    constructor.apply(o, args);
    return o;
}


function parentFunc() {
    var a = 1;

    function nestedFunc() {
        var b = 4;
        return a + b;
    }
    return nestedFunc();
}

function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}
//console.log(i);
try {
    console.log(i);
} catch(e) {
    console.log(e);
}
console.log('H');