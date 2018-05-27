//Looping a triangle
var hashTriangle = "";

for(counter=1; counter<=7; counter++){
hashTriangle += "#";
console.log(hashTriangle);

}
/*FizzBuzz
print #'s 1-100*/
let i = 0;
for (i =1; i<=100; i++)
{
console.log(i);
}

/*Fizz/FizzBuzz
Fizz= #'s divisible by 3
Buzz= #'s divisible by 5
*/
for(i = 1; i<=100; i++)
{
if (i%3 == 0)
{
console.log("Fizz");
}
else if (i%5 ==0)
{
console.log("Buzz");
}
else
{
console.log(i);
}
}
//FizzBuzz, Fizz, or Buzz
for(i = 1; i<=100; i++)
{
if(i%3==0 && i%5==0)
{
console.log("FizzBuzz");
}
else if (i%3 == 0)
{
console.log("Fizz");
}
else if (i%5 ==0)
{
console.log("Buzz");
}
else
{
console.log(i);
}
}
//ChessBoard
var board = "";
var evenRow = "# # # # ";
var oddRow = " # # # #";

for ( var i = 0; i < 8; i++ ) {

    if ( i%2 == 0 )
    {
      console.log(evenRow);
    }
    else
    {
      console.log(oddRow);
    }
}

console.log(board);
