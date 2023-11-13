//***************Browser Event *************/
//means browser announcement

//syntax to see event
//conitorEvents(document); // then go into page see

// event target is the top level interface .it has no any parent

// Node inherited by Event target and Element inherited by Node
//so all the properties of Event Target inherited to the Element

//***********Styntax of Event Listner *********************** */
// <event.target>.addEventListener(<event-to-listen-for> , <function-to-run where event happened )

//eg. document.addEventListener('click', function() {
//     console.log('I clicked on document');
// });

//ex2
/*
let content = document.querySelector('h1');
 
undefined
content;
<h1 class=​"flex items-center gap-x-2 text-3xl font-bold md:​text-4xl xl:​text-6xl aos-init" data-aos=​"fade-right">​…​</h1>​flex
content.addEventListener('click', function(){
    content.style.background = 'red';
}); 
  */

// Event listener is very powerful toolegh. it can store data even your courser points how much time you have spent
// on web site whixh section etc.
// eg.is code help website when we click anywere video start automatically
// listner gives action respect to event

//***Phases of even--->1) Capturing phase 2) At target phase 3)  Bubbling phase
// eg.
/*
section>
<div>
<p></p>
</div>
</section>
*/
//here let we want to go p then the way is firstly section tag, then div tag then paragraph this way is called as capturing event
//the paragraph p is called At targety phase while again back track is called Bubbling phase

//*****************To print event****************
const content = document.querySelector("#wrapper");

content.addEventListener("click", function (event) {
  console.log(event);
});

//************Prevent Default ************** */
// use to prevent default access eg. in case of anchor tag we want whenever user will not give concent still
// not the move or submit etc.

/*
let link = document.querySelectorAll('a');
 let thirdLink = link[3];

thirdLink.addEventListener('click', function(event){
  event.preventDefault();
  console.log('maza aaya');
});
*/

//*************create a div******** */
/*
let myDiv = document.createElement('div');

function paraStatus(event){
  console.log("This is a para ");
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<+100; i++){
  let newElement = document.createElement('p');
  newElement.textContent = 'This is para '+i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
*/ 

//**********individual Div ie. for individual para****** */

/*
let myDiv = document.createElement('div');

function paraStatus(event){
  console.log("para "+ event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<+100; i++){
  let newElement = document.createElement('p');
  newElement.textContent = 'This is para '+i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
   */



// let element = document.querySelector('#wrapper');
//   element.addEventListener('click', function(event){
//         console.log('span pr click kia hai '+ event.target.textContent);
//   });
//***Problem of thuis property is when we want to execute prop.
//only on span but still para also do this when we click evengive name span 
// wso to avoid this   */

//solution of this IE. TO FILTERING FOR PERTICULAR TAG
let element = document.querySelector('#wrapper');
  element.addEventListener('click', function(event){
     //to avoid this-->
     if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai '+ event.target.textContent);
     }
  });

