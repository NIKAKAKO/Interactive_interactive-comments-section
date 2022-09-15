import mydata from '/data.json' assert {type: 'json'};

let mbody = document.getElementById('mainbodyo');


drawplease();
function drawplease() {
    let htmlbody="";
    console.log(mydata);
    for (let i = 0; i < mydata.comments.length; i++) {
        
         htmlbody+=`<div class="comment">
        <div class="points" id="points${mydata.comments[i].id}">
          <div class="plusdiv"><button class="plus" >+</button></div>
          <div class="point">${mydata.comments[i].score}</div>
          <div class="minusdiv"><button class="minus" >-</button></div>
        </div>
        <div class="commentsection">
          <div class="topleft">
          <div class="thumb" style="background-image: url('${mydata.comments[i].user.image.png}');"></div>
          <div class="name">${mydata.comments[i].user.username}</div>
          <div class="date">${mydata.comments[i].createdAt}</div></div>
          <div class="reply" ><button class="replyb" id="reply${mydata.comments[i].id}"><img src="images/icon-reply.svg" alt=""> Reply </button></div>
          <div class="content">${mydata.comments[i].content}</div>
        </div>
        <div>
        
        </div>
        </div>        `

     console.log("movedi");
    } 
    mbody.innerHTML = htmlbody;
}
let reply = document.querySelectorAll('.replyb');
let plus = document.querySelectorAll('.plus');
console.log(reply);
reply.forEach(items => {
items.addEventListener("click", (event)=> {
    let id = parseInt(event.target.id.slice(5));
    mydata.comments.forEach(comment => {
        console.log(comment.id, id);
        if (comment.id ===id) {
            event.target.style.color="blue";

        }

})
    
    
    
    
    
    
    
    })})
let minus = document.querySelectorAll('.minus');
let point = document.querySelectorAll('.point');
addlisteners();
function addlisteners() {
    plus = document.querySelectorAll('.plus');
    minus = document.querySelectorAll('.minus');
    point = document.querySelectorAll('.point');
    plus.forEach(items => {
        items.addEventListener("click", (event) => {
            console.log("hinewhi");
            let id = parseInt(event.target.parentElement.parentElement.id.slice(6));
            mydata.comments.forEach(comment => {
                console.log(comment.id, id);
                if (comment.id ===id) {
            
                    comment.score += 1;
                }
            })
            console.log("hi");
            for (let i = 0; i < mydata.comments.length; i++) {
                console.log(point[i]);
                point[i].innerHTML=mydata.comments[i].score;
        
            }
        });
        
    })
    
    minus.forEach(items => {
        items.addEventListener("click", (event) => {
           
            let id = parseInt(event.target.parentElement.parentElement.id.slice(6));
            mydata.comments.forEach(comment => {
                console.log(comment.id, id);
                if (comment.id ===id) {
            
                    comment.score -= 1;
                }
            })
            console.log("hi");
            for (let i = 0; i < mydata.comments.length; i++) {
                console.log(point[i]);
                point[i].innerHTML=mydata.comments[i].score;
        
            }
        });
        
    })
}
let send = document.querySelector('.send');
let inputcomment = document.querySelector('.inputcomment');
let newcomment={};
let newcomm=document.querySelector('#newcomm');

    send.addEventListener("click", (event)=> {
        let text=inputcomment.value; 
       

        newcomment={
            "id": mydata.comments.length+1,
            "content":text ,
            "createdAt": "1 month ago",
            "score": 0,
            "user": {
              "image": { 
                "png": "./images/avatars/image-amyrobson.png",
                "webp": "./images/avatars/image-amyrobson.webp"
              },
              "username": "juliusomo"
            },
            "replies": []
          }
        mydata.comments.push(newcomment);
        let id=mydata.comments.length-1;
        console.log(id);
        console.log(mydata.comments);
        drawplease();
        addlisteners();
    })



