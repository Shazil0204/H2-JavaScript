function calculateBMI(){
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const weightValue = weight.value;
    const heightValue = height.value;
    
    const BMI = (weightValue/(heightValue * heightValue))

    let response;

    if (weightValue == '' && heightValue == ''){
        response = 'Please fill all the input fields. Thanks!';
    }
    else if (heightValue == ''){
        response = 'Please tell me your height';
    }
    else if (weightValue == ''){
        response = 'Please tell me your weight';
    }
    else {    
        // Creating an if statment for the return value regarding client BMI Number
        if (BMI < 16){
            response = 'How are you still ALIVE!!!';
        }
        else if (BMI > 16 && BMI < 18){
            response = 'body weight deficit';
        }
        else if (BMI > 18 && BMI < 24){
            response = 'norm';
        }
        else if (BMI > 24 && BMI < 30){
            response = 'weight over';
        }
        else if (BMI > 30 && BMI < 35){
            response = 'obesity first degreen'
        }
        else if (BMI > 35 && BMI < 40){
            response = 'obesity second degreen';
        }
        else if (BMI > 40){
            response = 'obesity third degreen';
        }
    }

    console.log(BMI);

    document.getElementById('returnValue').innerHTML = response;
}