let captchchecked = false;  //we want user to submit only after he does captch check
function beforesubmit(event){
    if(captchchecked){
        let outputdate = document.querySelector(".outputdate");  //to access html elements in javascript
    let inputdate = document.querySelector(".inputdate");
    console.log('inputdate.value',inputdate.value);    //string -> Date(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); //Locale Date according to Salesforce 
    outputdate.value = formattedDate;
    } else{
        alert("Please check the reCAPTCHA box to submit the Lead");
        event.preventDefault();    //to stop the submition 
    }
    
}

//for now the form is on local server. TO host is over web we are using GITHUB
//must have to github account and it is connected to your visualstudio code.

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } }
     setInterval(timestamp, 500);

     function captchsuccess(){
        captchchecked =true;
     }