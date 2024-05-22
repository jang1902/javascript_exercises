function Ex1Function(){
    let a=document.getElementById("input_a_ex1").value;
    let b=document.getElementById("input_b_ex1").value;
    let isDivisible=a%b;
    if(isDivisible==0){
        document.getElementById("result_ex1").innerHTML=a+" is divisible by "+b;
    }else{
        document.getElementById("result_ex1").innerHTML=a+" is NOT divisible by "+b;
    }
}

function Ex2Function(){
    let age=document.getElementById("input_age_ex2").value;
    if(age>=15){
        document.getElementById("result_ex2").innerHTML=age +" is eligible for tenth grade";
    }else{
        document.getElementById("result_ex2").innerHTML=age +" is NOT eligible for tenth grade";
    }
}

function Ex3Function(){
    let number=document.getElementById("input_ex3").value;
    let output= number >0 ? "> 0":number<0?"< 0":"= 0";
    document.getElementById("result_ex3").innerHTML=number +" "+ output;
}

function Ex4Function(){
    let num1=document.getElementById("input_number1_ex4").value;
    let num2=document.getElementById("input_number2_ex4").value;
    let num3=document.getElementById("input_number3_ex4").value;
    document.getElementById("result_ex4").innerHTML="Max is "+Math.max(num1,num2,num3);
}

function Ex5Function(){
    let num1=document.getElementById("input_number1_ex4").value;
    let num2=document.getElementById("input_number2_ex4").value;
    let num3=document.getElementById("input_number3_ex4").value;
    document.getElementById("result_ex4").innerHTML="Max is "+Math.max(num1,num2,num3);
}