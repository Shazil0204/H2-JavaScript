var balance =10500;
var cameraOn = true;
var amount = steal(balance, 1250);

function steal(balance, amount){
    cameraOn = false;
    if(amount < balance){
        balance = balance - amount;
        alert("Du er kriminel og du har lige stjålet " +amount +" og det må man ikke!!!!")
    }
        cameraOn= true;
        return amount;
}
