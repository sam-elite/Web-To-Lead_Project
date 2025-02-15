function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");  //to access html elements in javascript
    let inputdate = document.querySelector(".inputdate");
    console.log('inputdate.value',inputdate.value);    //string -> Date(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); //Locale Date according to Salesforce 
    outputdate.value = formattedDate;
}

//for now the form is on local server. TO host is over web we are using GITHUB
//must have to github account and it is connected to your visualstudio code.