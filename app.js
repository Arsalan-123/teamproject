function formSubmit() {

     let userName = document.getElementById('username');
     let email = document.getElementById('email');
     let password = document.getElementById('password');


     usernameVal = userName.value;
     emailVal = email.value;
     passwordVal = password.value;

     let createteamarr = [];
     let partteamarr = [];

     let signupData = {
          createteam: createteamarr,
          username: usernameVal,
          email: emailVal,
          password: passwordVal,
          partteam: partteamarr
     }

     if ((usernameVal.length && emailVal.length && passwordVal.length) > 0) {
          let check = localStorage.getItem("Name");
          if (check == null) {
               arr = [];
          }
          else {
               arr = JSON.parse(check);
          }
          arr.push(signupData);
          localStorage.setItem("Name", JSON.stringify(arr));
          window.location.href = "./index.html"
     } else {
          alert("please fill all field");
     }

}


//login 
function login() {
     let userEmail = document.getElementById('Email').value;
     let userPassword = document.getElementById('Password').value;
     let check = JSON.parse(localStorage.getItem("Name"));
     let flag = false;
     check.forEach((item, index) => {

          if (userEmail == item.email && userPassword == item.password) {
               flag = true;
               localStorage.setItem('userindex', index)
               window.location.href = "./teampage.html"
          }
     });
     if (flag == false) {
          alert('Please correct field');
     }

}


// team page
function team() {
     let userIndex = localStorage.getItem('userindex');
     let check = JSON.parse(localStorage.getItem("Name")) || [];


     let teamUsername = document.getElementById('exampleInputUser1').value;
     let teamUseremail = document.getElementById('exampleInputEmail1').value;
     let teamUserecategory = document.getElementById('selectteamcategory').value;


     // var a = (check[userIndex].createteam.push("ameen"));


     let teamdata = {
          teamUsername: teamUsername,
          teamUseremail: teamUseremail,
          teamUserecategory: teamUserecategory
     }

     check[userIndex].createteam.push(teamdata);
     localStorage.setItem("Name", JSON.stringify(check));

     // console.log(check[userIndex].createteam)

     // let mydata = check[userIndex].createteam[0]
     // console.log(mydata)

     teamShow();
}

function teamShow() {
     let userIndex = localStorage.getItem('userindex');
     let check = JSON.parse(localStorage.getItem("Name")) || [];
     let showHtml = document.getElementById('forteamshow');


     let html = '';


     //console.log(check[userIndex].createteam[0]);

     check[userIndex].createteam.forEach((item, index) => {

          console.log(item.teamUsername);
          html += `
          <div class="row">

          <div class="container">
        <fieldset class="scheduler-border  d-flex justify-content-arround">
            
            <div class="col-md-4">Team Name: ${item.teamUsername}</div>
            <div class="col-md-4">Team Email: ${item.teamUseremail}</div>
     <div class="container d-flex justify-content-arround">
     <i onclick="moveonsetting(${index})"  class="bi bi-gear-fill"></i>
     </div>
        </fieldset>
    </div>

  
              
          </div>
      </div>`



     })
     showHtml.innerHTML=html;
}
function moveonsetting(index){


sessionStorage.setItem("Teamindex",index)
window.location.href="./ownerview.html"

}


