// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


class Calculator{
  constructor(a,b,op){
    this.a = a;
    this.b = b;
    this.op = op;
  }

  calculate(){
    switch(this.op){
    case "add":
      return this.add();
      break;
    case "sub":
      return this.sub();
    case "mul":
      return this.mul();
    case "div":
      return this.div();

    }
  }

  add(){
    return this.a+this.b;
  }

  sub(){
    return this.a-this.b;
  }

  mul(){
    return this.a*this.b;
  }

  div(){
    if(this.b===0) return "Error";
    return this.a/this.b;
  }
}


let a = new Calculator(4,2,"div");

console.log(a.calculate());
