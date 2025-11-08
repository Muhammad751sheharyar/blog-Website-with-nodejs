function panel() {
  let form = document.getElementById("form");
  form.style.display = "flex";
  // console.log("event fired")
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
  } catch (err) {
    console.log(err);
  }


  let mainPage = document.querySelector('.mainPage');
  let mainBox = document.createElement("div");
  // console.log(mainBox);
  mainBox.setAttribute('class', 'mainBox')
  mainPage.append(mainBox);


  let form = document.getElementById("form");
  form.style.display = "none";


  if (blogTittle && blogdesc && Author) {
    let div = document.createElement('div');
    // div.innerText = blognameinp;
    div.setAttribute('class', 'blogTittle');
    console.log(div)
    mainBox.append(div);
    alert("blog tittle is  axis")
    let para1 = document.createElement("p");
  para1.innerText = blogTittle;
  div.append(para1);
  
  let blogde = document.createElement("div");
  // blogdesc.innerText = blogConentinp;
  blogde.setAttribute('class', 'decription');
  mainBox.append(blogde);
  
  let para2 = document.createElement("p");
  para2.innerText = blogdesc;
  blogde.append(para2);
  
  
  let other = document.createElement("div");
  // other.innerText = authorNameinp;
  
  other.setAttribute('class', 'autherName')
  mainBox.append(other);
  console.log(other);
  
  let para3 = document.createElement("p");
  para3.innerText = Author;
  other.append(para3);
  
}else if(blogTittle==""  && Author==""){
  alert("blog tittle is not axis")
}else if(blogdesc==""){
  alert("blog Description is not axis")
}else if(Author==""){
  alert("blog Author Namae is not axis")
}
  


}


function blLogout() {
  window.open("login.html")
}