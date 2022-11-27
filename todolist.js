var myDIV=document.querySelector('myDIV');
var title=document.getElementsByClassName('title')[0];
var myUL=document.querySelector('.myUL ');
var button=document.getElementsByClassName('button');


//console.log(myUL);

function addTask(){
  var newTask=title.value
  
  var li=document.createElement('li') 
  li.className='collection'
  li.innerHTML=`${newTask}<button onClick="removeTask()">删除</button>`
  myUL.appendChild(li)
}

function removeTask(e){
 // var collection=document.querySelector('.collection')
  // myUL.removeChild(collection)
  let event=e||window.event;
 // console.log(event)
 // console.dir(event.target)
  let button=event.target
  let parent=button.parentNode
  //console.log(parent)
  myUL.removeChild(parent)
}








