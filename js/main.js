/*
This function is called when the calculate button is clicked
Basically this is trhe validate function which is true than It calls the Process_cal function
*/
function Calculate(){
    var s_name = document.getElementById("s_name").value; 
    var s_branch = document.getElementById("s_branch").value; 
    var html_m = document.getElementById("html_m").value; 
    var css_m = document.getElementById("css_m").value; 
    var js_m = document.getElementById("js_m").value; 
    
    //If any field is blank show warning
    if(css_m == "" || js_m == "" || html_m == "" || s_branch == "" || s_name == ""){
        alert("Please Fill the Required Fields");
    }else{
       if(html_m > 100 || css_m > 100 || js_m > 100){
            alert("Enter Mark between 0 and 100");
       }else{
           Process_cal(s_name,s_branch,parseInt(html_m),parseInt(css_m),parseInt(js_m));
       }
    }
}

/*
This is the main function called if validation passed
*/
function Process_cal(s_name,s_branch,html_m,css_m,js_m){
    //var percentage_m = (parseInt(html_m) + parseInt(css_m) + parseInt(js_m));
    var percentage_m = (((html_m + css_m + js_m)/300)*100).toFixed(2);
    document.getElementById("name_s1").innerHTML = s_name.toUpperCase();
    document.getElementById("branch_s").innerHTML = s_branch.toUpperCase();
    document.getElementById("percentage_s").innerHTML = percentage_m + "%";
    document.getElementById("html_m_r").innerHTML = html_m;
    document.getElementById("css_m_r").innerHTML = css_m;
    document.getElementById("js_m_r").innerHTML = js_m;
    document.getElementById("tot_m_r").innerHTML = (html_m + css_m + js_m);
    if(html_m < 35 || css_m < 35 || js_m < 35){
        document.getElementById("grade_s").innerHTML = "FAIL";
    }else{
       if(percentage_m >= 35 && percentage_m < 50){
           document.getElementById("grade_s").innerHTML = "C";
       }
    if(percentage_m >= 50 && percentage_m < 65){
           document.getElementById("grade_s").innerHTML = "B";
       }
        if(percentage_m >= 65 && percentage_m < 80){
           document.getElementById("grade_s").innerHTML = "A";
       }
    if(percentage_m >= 80 && percentage_m < 100){
           document.getElementById("grade_s").innerHTML = "E";
       }
    }
    document.getElementById("result").style.display = "block";
}