
const nodemon = require("nodemon");

let blogesData = [];
function bloges() {
  // let blognameinp = document.getElementById('blogTittle').value;
  // let blogConentinp = document.getElementById('blogContent').value;
  // let authorNameinp = document.getElementById('authorName').value;
  // let form = document.getElementById("form");
  // form.style.display = "none";
  
  // let blogD = {
  //   blognameinp,
  //   blogConentinp,
  //   authorNameinp
  // }
  // console.log(blogD);
  // window.localStorage.setItem("Blog", JSON.stringify(blogesData));
  // blogesData.push(blogD)





  // Dom Section

  let mainPage = document.querySelector('.mainPage');
  let mainBox = document.createElement("div");
  mainBox.setAttribute('class', 'mainBox')
  mainPage.append(mainBox);

  // console.log(mainPage);


  // div 

  let div = document.createElement('div');
  // div.innerText = blognameinp;
  div.setAttribute('class', 'blogTittle');
  mainBox.append(div);


  let para1 = document.createElement("p");
  para1.innerText = blogTittle;
  div.append(para1);

  let icon1 = document.createElement("div");
  icon1.setAttribute('class', 'icon')
  div.append(icon1);

  icon1.addEventListener('click', function () {
    let changeBlog = prompt("ente the change value");
    para1.innerText = changeBlog;
  });


  let blogdesc = document.createElement("div");
  // blogdesc.innerText = blogConentinp;
  blogdesc.setAttribute('class', 'decription');
  mainBox.append(blogdesc);

  let para2 = document.createElement("p");
  para2.innerText = blogdesc;
  blogdesc.append(para2);




  let icon2 = document.createElement("div");
  icon2.setAttribute('class', 'icon');
  blogdesc.append(icon2);

  icon2.addEventListener('click', function () {
    let changeDesc = prompt("enter the change value");
    para2.innerText = changeDesc;
  });





  let other = document.createElement("div");
  // other.innerText = authorNameinp;
  other.setAttribute('class', 'autherName');
  mainBox.append(other);
  // console.log(other);

  let para3 = document.createElement("p");
  para3.innerText = Author;
  other.append(para3);

  // let icon3 = document.createElement("div");
  // icon3.setAttribute('class', 'icon');
  // other.append(icon3);


  // icon3.addEventListener('click', function () {
  //   let edit = prompt("enter the change value");
  //   para3.innerText = edit;
  // })

  // let btnBox = document.createElement("div");
  // btnBox.setAttribute('class', 'btnBox');
  // mainBox.append(btnBox);




  // let Edit = document.createElement("button");
  // Edit.innerText = "Edit All";
  // Edit.setAttribute('class', 'editBtn');
  // btnBox.append(Edit);

  // Edit.addEventListener('click', function () {
  //   let change1 = prompt("Enter The blog Title");
  //   para1.innerText = change1;
  //   let change2 = prompt("Enter the description");
  //   para2.innerText = change2;
  //   let change3 = prompt("Enter the autherName");
  //   para3.innerText = change3;
  // })



  // let DeleteBtn = document.createElement("button");
  // DeleteBtn.innerText = "Delete Blog"
  // DeleteBtn.setAttribute('class', 'Dbtn')
  // btnBox.append(DeleteBtn);

  // DeleteBtn.addEventListener('click', function () {
  //   mainBox.remove()
  // })




}

function panel() {
  let form = document.getElementById("form");
  form.style.display = "flex";
  // console.log("event fired")
}

function blLogout() {
  window.open("login.html")
}
function bloges() {
  console.log("event fired")

let blogTittle = document.getElementById("blogTittle").value;
let blogdesc = document.getElementById("blogContent").value;
let Author = document.getElementById("authorName").value;
try {
  const res = axios.post("http://localhost:3000/api/Blog", {
  blogTittle,
    blogdesc,
    Author
  })
  console.log(res)
}


catch (err) {
  console.log(err);
}
let form = document.getElementById("form");
  form.style.display = "none";
}


