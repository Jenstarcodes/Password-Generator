//Rationale for using let vs var: Since using loops and 'var' does not support block-level scope. To avoid access outside of block and unnecessary "bugs" thought 'let' may be a better choice since dealing with block scope.  

let len = 0;
let lowCase = false;
let upCase = false;
let num = false;
let specialC = false;
let password=[];
let numbers1=[0,1,2,3,4,5,6,7,8,9];
let lowCase1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upCase1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let specialC1 = ['!','@','#','$','%','^','&','*','()','-','+']


 //Declare variables
function getCriteria() //Declare function getCriteria
{
    lowCase = false;
 upCase = false;
  num = false;
 specialC = false;
    len = prompt("Password length"); //Call function to ask password length and store it inside length variable 
    while(!(len >=8 && len<=128)) //Check for length variable to have acceptable length
    { //While user does not enter acceptable length force them to re-enter
       
        len = prompt(" Incorrect.\nPassword length"); //Allow user to re-enter length of the password
    } 
getCharacterType();
createPassword();
}

function getCharacterType() //creation of function declaration
{ 
    while( lowCase == false && upCase == false && num == false && specialC == false) //If all values are false/incorrect then user is prompted to re-enter character type choices
   {
        let answer = prompt("Lowercase?(Y/N)"); //If user selects "Y/y" then the answer is selected for "true" as a variable
        if(answer == "Y" || answer == "y") //If user had selected "N/n" then the answer would be selected for "false" as a variable
        {
            
            lowCase = true;
        }
        answer = prompt("Uppercase?(Y/N)"); //If user selects "Y/y" then the answer is selected for "true" as a variable
        if(answer == "Y" || answer == "y") //If user had selected "N/n" then the answer would be selected for "false" as a variable
        {
            upCase = true;
        } 

        answer = prompt("Numeric?(Y/N)"); //If user selects "Y/y" then the answer is selected for "true" as a variable
        if(answer == "Y" || answer == "y") //If user had selected "N/n" then the answer would be selected for "false" as a variable
        {
            num = true;
        } 
        answer = prompt("Special Character?(Y/N)"); //If user selects "Y/y" then the answer is selected for "true" as a variable
        if(answer == "Y" || answer == "y") //If user had selected "N/n" then the answer would be selected for "false" as a variable
        {
            specialC = true;
        } 
   }
}
//function createPassword determines what password should be from user input using prompt() methosd
function createPassword()
{ 
    let temp = "" //temp is a "blank" string. For example if user selects lower case letters then all the possible loweer case letters included in previously defined array will be stored in "temp" string until a lower case letter(s) is randomly selected for password.
    let finalPassword = ""
    if(lowCase === true)
    {
        temp += lowCase1.toString()  //while temp is the "blank" string, tostring will become the permanent string of characters/symbols= password
    }
    if(upCase === true)
    {
        temp +=  upCase1.toString()
    } 
    if(num === true)
    {
        temp +=  numbers1.toString()
    }
    if(specialC === true)
    {
        temp +=  specialC1.toString()
    }  
    temp = temp.replace(/,/g,""); //expression that removes the commas, parentheses, etc out of the array
    for(let i = 0; i < len; i++)
    {
        let rnd = Math.floor(Math.random()*temp.length); // chooses random value from array
        finalPassword+=temp[rnd] // rnd= random
    } 
    let getText = document.getElementById("txt");
    getText.innerHTML = finalPassword;
    getText.innerText = finalPassword;
    finalPassword = ""; 
}

   
