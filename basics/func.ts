function add(n1: number, n2: number) {
    // ts infers return type as number
    return n1 + n2;
}

function printResult(num: number) {
    // ts infers return type as void here
    console.log("Result: " + num);
}

function printResultVoid(num: number): void {
    console.log("Result: " + num);
    //return type as void here means no return statement
}

function printResultUndef(num: number): undefined {
    console.log("Result: " + num);
    return;
    //return type as undefined here means return statement
}

printResult(add(34, 35));

function addHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addHandle(34, 35, (result) => {
    console.log(result);
    return result; // even void, we can return something
});
