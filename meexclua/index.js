"use strict";
/* function hello(person){
    return ""Ola, "" + person;
    }
    let user = ""Gama"";
    const msg = hello(user);
    console.log(msg)" */
function print() {
    var Estado;
    (function (Estado) {
        Estado[Estado["SP"] = 0] = "SP";
        Estado[Estado["SC"] = 1] = "SC";
        Estado[Estado["SE"] = 2] = "SE";
    })(Estado || (Estado = {}));
    var uf = Estado[3];
    console.log(uf);
}
print();
