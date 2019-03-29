var f = require('fs');

var text = process.argv[2]; 
var ledgerContents = -1;
var result = -1;
var operations;
var total=0;
var luckyNum = 7;

f.readFile('bankLedger.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
   ledgerContents = (data).split(',');
   var ledgerTotal = ledgerContents[ledgerContents.length-1];

   total = parseInt(ledgerTotal.substring(2,ledgerTotal.length));
   console.log(total);

   bankAction();
   result = parseInt(operations[process.argv[2]](parseInt(process.argv[3])));
   console.log(result);
 })

function bankAction(){
    operations = {
        total : function(){
            return total;
        },
        deposit : function(num){
            var newTotal = total+num;
            f.appendFile('bankLedger.txt', `\n+${num} ,T ${newTotal}` ,function(err){
                if(err) console.log(err);
            });
            return newTotal
        },
        withdraw : function(num){
            var newTotal = total-num;
            f.appendFile('bankLedger.txt', `\n-${num} ,T ${newTotal}` ,function(err){
                if(err) console.log(err);
            });
            return newTotal
        },
        lotto : function(){
            var randomNum = Math.floor(Math.random()*10);
            if(randomNum==luckyNum){
                var newTotal = total+100;
                f.appendFile('bankLedger.txt', `\n'LUCKY'+100 ,T ${newTotal}` ,function(err){
                    if(err) console.log(err);
                });
            }else{
                var newTotal = total-20;
                f.appendFile('bankLedger.txt', `\n'SUCKS FOR YOU'-20 ,T ${newTotal}` ,function(err){
                    if(err) console.log(err);
                });
            }
            return newTotal;
        }
    }  
}


//Grab data from bankLedger.txt and put into var ledgerContents
//Manipulate ledgerContents into operatable data
//perform oeprtaion with bankAction() return result
//Log result


// f.appendFile("./bankLedger.txt", text, function(err) {

//     // If an error was experienced we will log it.
//     if (err) {
//       console.log(err);
//     }
  
//     // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//     else {
//       console.log("Content Added!");
//     }
  
//   });