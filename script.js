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

    let num1=document.getElementById("input_number1_ex5").value;
    let num2=document.getElementById("input_number2_ex5").value;
    let num3=document.getElementById("input_number3_ex5").value;
    let total =Number(num1) +Number(num2)+Number(num3);
    let output= total >=27 ? "Excellent":total<=25?"Good":"Very Good";
    console.log(total);
    document.getElementById("result_ex5").innerHTML=output;
}


function Ex6Function(){

    let a=Number(document.getElementById("input_a_ex6").value);
    let b=Number(document.getElementById("input_b_ex6").value);
    let c=Number(document.getElementById("input_c_ex6").value);
    let output="";
    if(a<=0 || b <=0 || c<=0){
        output="is not a triangle"
    }
    if(a+b>c && b+c>a && a+c>b){
        output="is a triangle"
    }else output ="is not a triangle"

    document.getElementById("result_ex6").innerHTML=output;
}
