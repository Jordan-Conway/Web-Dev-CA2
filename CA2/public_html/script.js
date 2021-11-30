/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global readSingleFile */

function validate(){
    let form = document.searchMovies;
    console.log(form);
    let isValid = true;
    let noErrors = true;
    
    if(form.sName.value == "")
    {
        form.sName.style.border = "1px solid red";
        noErrors = false;
    }
    else
    {   
        form.sName.style.border = "1px solid white";
        document.getElementById("dName").innerHTML = form.sName.value;
    }
    
    if(form.sGenre.value == "")
    {
        form.sGenre.style.border = "1px solid red";
        noErrors = false;
    }
    else
    {
        form.sGenre.style.border = "1px solid white";
        document.getElementById("dGenre").innerHTML = form.sGenre.value;
    }
    
    if(form.sId.value == "" || isNaN(parseInt(form.sId.value)))
    {
        form.sId.style.border = "1px solid red";
        noErrors = false;
    }
    else
    {
        form.sId.style.border = "1px solid white";
        document.getElementById("dId").innerHTML = form.sId.value;
    }
    
    if(noErrors)
    {
        //return true;
        return false;
    }
    else
    {
        return false;
    }   
}

/**
function loadScript(){
    console.log("Script is working");
    
    let openFile = function(event){
        console.log("creating openFile");
        let input = 'bee.txt';
        
        let reader = new FileReader();
        console.log("File Reader class made");
        reader.onload = function(){
            let dataURL = reader.result;
            let output = document.getElementById('beeMovieScript');
            output.innerHTML = dataURL;
            console.log("Onload function made");
        };
        reader.readAsDataURL(input.files[0]);
        console.log("Script finished");
    };
}
**/
    
