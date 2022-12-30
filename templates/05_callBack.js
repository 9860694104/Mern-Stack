function askforMoney(amount,callBack){
    console.log("I need cash of Rs." , amount);
    console.log("Sorry!!! Son I don't have Money Now.")
    console.log("I will give u money after I get my Salary");

         if(true)
         {
            setTimeout(function(){ 
                console.log("Mummy Got the salary after 3 Month");
                     setTimeout(function(){
                     callBack(null,amount); //function call
                    },2000);
            },3000);

         }
         else{
            callBack("First You Have to Complete your Study"); //function call
         }
}

//2nd Story::Purchase of Bike

function purchaseBike(amount,callBack){
    console.log(".............................");
    console.log("I arrived At Showroom");
    if(true){
        purchaseBike("Good");
    }else{
        purchaseBike("Bad");
    }

}


console.log("1::I asked Mummy for Money" );
console.log(".............................");



askforMoney(5000,function(err,success){ //CallBack Function
    if(err)
    {
    console.log("Mummy Told Me to wait for the Money:" ,err);
    }
    else{
         console.log("Finally I got Money:", success ,": After 5 Month");
         purchaseBike(success,function(err,success){
            if(err){
                console.log("Reason " , err);
            }
            else{
            //  console.log("I bought the Bike With:", success ,": After 5 Month");
            }
         });
    }
    
});

console.log(".............................");
console.log("I am Eating Food and Waiting for Money");
console.log(".............................");


