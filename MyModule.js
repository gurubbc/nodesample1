function hello(x1, y1)
{
    console.log("Hello1 from a function hello "+x1);
    console.log("Hello1 from a function hello "+y1);

    var sum=parseInt(x1)+parseInt(y1);
    console.log("Sum is "+sum)
}

exports.sayHello=hello;