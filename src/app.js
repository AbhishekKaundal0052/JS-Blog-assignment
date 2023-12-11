class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
constructor(title, detail){
  this.title = title;
  this.detail = detail;
}
  addTitle(){
    var titleHead = document.createElement('h1');
    titleHead.setAttribute("id", "blog-title")
    console.log(titleHead);
    document.getElementById("card-text").appendChild(titleHead);
    titleHead.innerHTML += this.title;
    return titleHead;
  }
  addDescription(){
    var para = document.createElement('p');
    para.setAttribute("id", "blog-description");
    console.log(para);
    document.getElementById("card-text").appendChild(para);
    para.innerHTML += this.detail;
    return para;
}
}
// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()
let popup = document.getElementById('popupContact')
let click;
function helperAddPost(){
  if(click === 1){
  popup.style.display = "inline";
  return (click=0)}
  else{
  popup.style.display = "none";
  return (click=1);
}
}
function helperPost(){
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;
  let blog = new Blog(title,detail)
  blog.addTitle()
  blog.addDescription()
}