var Principal = 5000;
var Rate = 4;
var Time = 2;
var CPT = 3;

 var RCPT = Rate/CPT;
 var x = (1 + RCPT);
 var e = CPT * Time;
 var y = Math.pow(x,e);
 var compoundInterest = Principal * y;
 console.log(compoundInterest);