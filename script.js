//Setting Fields to check Whether the Input Filled Correctly or Not
var nameCheck = false
var phoneCheck=false

//Containers
var usernameContainer = document.querySelector(".username")
var phoneContainer = document.querySelector(".phone")

//Selecting Icons
var usernameIcon = usernameContainer.querySelector("i")
var phoneIcon = phoneContainer.querySelector("i")

//Selecting Labels
var usernameLabel = usernameContainer.querySelector("label")
var phoneLabel=phoneContainer.querySelector("label")

//Selecting Input Box
var usernameInput = document.getElementById("username")
var phoneInput = document.getElementById("phone")

usernameInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = usernameInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        nameCheck=false
    }
    else{
        //Show Icon and Hide Label
        usernameIcon.style.visibility="visible"
        usernameLabel.style.visibility="hidden"
        nameCheck=true
    }


})



//Phone Input
phoneInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = phoneInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent="Please enter your Mobile Number"
        phoneCheck=false

    }
    else if(enteredValue.length!=10)
    {
        //Show Label and Hide Icon
        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent="Please enter 10 Digit Mobile Number"
        phoneCheck=false
    }
    else{
        //Show Icon and Hide Label
        phoneIcon.style.visibility="visible"
        phoneLabel.style.visibility="hidden"
        phoneCheck=true 
    }


})

//Selecting Submit Button
var submitInput = document.getElementById("submitButton")
var popup = document.querySelector(".popup")
submitInput.addEventListener("click",function(e){
    //Preventing Default Refresh
    e.preventDefault()

    if(nameCheck==true && phoneCheck==true)
    {
        popup.textContent="Form Submitted Successfully"
        popup.style.backgroundColor="blue"
        popup.style.top="10px"
        popup.style.opacity="1"
    }
    else{
        popup.textContent="Please Fill the Form"
        popup.style.backgroundColor="red"
        popup.style.top="10px"
        popup.style.opacity="1"
    }

    

    //Run this line after 3 Seconds
    //Set Timeout (What should happen, After How many milliseconds)

    setTimeout( 
        function()
        { 
            popup.style.top="-40px"
            popup.style.opacity="0"
        },2000 )

    

    


})