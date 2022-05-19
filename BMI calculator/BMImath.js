"using strict;"
//Marty De Alba Calclations for BMI 

    //make sure all inputs are present and valid, alert message if not
    //use if statement
    
function calcBMI(){
    //button clicked
    console.log("button clicked");
        
        
if (document.getElementById("feet").value == "" || 
    document.getElementById("inches").value == "" ||
    document.getElementById("weight").value == ""){
    window.alert("Enter all fields please.");
}
    else {
    //get height in feet, height in inches, weight from form and store in 3 variables
    //getting feet from text box and console log
    var feet = parseFloat(document.getElementById("feet").value);
    console.log("feet is " + feet);

    //getting inches from text box and console log
    var inches = parseFloat(document.getElementById("inches").value);
    console.log("inches is " + inches);

    //getting weight from text box and console log
    var weight = parseFloat(document.getElementById("weight").value);
    console.log("weight is " + weight);
    
    //convert height in feet and inches to total inches and store in another variable height
    //new variable height 1 foot = 12 inches 
    var height = feet * 12 + inches;
    console.log("height is " + height +" in inches");

    //calculate bmi using the formula, store in a variable called bmi
    //BMI = (weight * 703) / (height * height)
    var bmi = (weight * 703) / (height * height)
    console.log("Body Mass Index is " + bmi)

    //display bmi on the html page
    document.getElementById("bmi").innerHTML = "BMI: " + bmi;
    }
}
function reset(){
    //clear the text boxes and the sum
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmi").innerHTML = "";
}
