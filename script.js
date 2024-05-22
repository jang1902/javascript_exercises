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

function Ex7Function(){
    let age=Number(document.getElementById("input_age_ex7").value);
    let output="";
    if(age>0 && age<120){
        output="is age"
    }else output="not age"
    document.getElementById("result_ex7").innerHTML=output;
}

function Ex8Function(){
    let side=Number(document.getElementById("input_ex8").value)
    let area=Math.PI*side*side;
    document.getElementById("result_ex8").innerHTML="area of square is: "+area;
}

function Ex9Function(){
    let a=document.getElementById("input_a_ex9").value;
    let b=document.getElementById("input_b_ex9").value;
    let area=a*b;
    document.getElementById("result_ex9").innerHTML="area of rectangle is: "+area;
}

function Ex10Function(){
    let a=document.getElementById("input_a_ex10").value;
    let b=document.getElementById("input_b_ex10").value;
    let area=a*b*0.5;
    document.getElementById("result_ex10").innerHTML="area of triangle is: "+area;
}

function Ex11Function(){
    let a=document.getElementById("input_a_ex11").value;
    let b=document.getElementById("input_b_ex11").value; 
    let x=-1*b/a;
    document.getElementById("result_ex11").innerHTML="result x of "+a+"x+"+b+" is "+x;
}

function Ex12Function(){
    let a=Number(document.getElementById("input_a_ex12").value);
    let b=Number(document.getElementById("input_b_ex12").value); 
    let c=Number(document.getElementById("input_c_ex12").value); 

    let x1=0,x2=0;
    let delta=b*b-4*a*c
    if(delta<0) x1=x2="null"
    else if(delta==0) x1=x2=-b/2*a
    else {
        x1=(-b+Math.sqrt(delta))/2*a;
        x2=(-b-Math.sqrt(delta))/2*a;
    }
    console.log(delta);
    document.getElementById("result_ex12").innerHTML="result of "+a+"x²+"+b+"x+"+c+" is x1= "+x1+" and x2= "+x2;
}
function Ex13Function(){
    let a=document.getElementById("input_ex13").value;
    let fahrenheit=1.8*a +32;
    document.getElementById("result_ex13").innerHTML="°F: "+fahrenheit;
}
function Ex14Function(){
    let a=document.getElementById("input_ex14").value;
    let x=a*3.2808399;
    document.getElementById("result_ex14").innerHTML="Feet: "+x;
}
function Ex15Function(){
    let a=document.getElementById("input_a_ex15").value;
    let output="";
    if (a.toLowerCase() === 'true' || a.toLowerCase() === 'false') {
        output = "Boolean";
    } else if (!isNaN(a) && a.trim() !== "") {
        output = "Number";
    } else {
        output = "String";
    }
    document.getElementById("result_ex15").innerHTML="Data type of value is: "+output;
}