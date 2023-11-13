//*****************Windows */
//it is an global object created by browser it represent a browser window

//DOM--> Document Object Model
//when we convert all our html code into js document then it is called DOM

//BOM -->Browser Object Model

//**************Some methods ******** */

//document.getElementById('id name')---> To get the html code of any id

//document.getElementsByClassName------> To get multiple object

//document.getElementsByTagName

//**********************syntax*************************
// let content = document.querySelector('.Class_name')
// content;
//--->we will get this class containt ie. content.textContent and content.innerhtml and content.innertext

//*********************Update Properties **************/
// .innerHTML---> it get/set the HTML content
// .textContent --->it also shows as like text containt as HTML but the difference is HTML render all content so
// thats why create problem when eg. our website contain tag ie. <b> <br> etc then in case of .innerhtml try to
//render it as text. in case of .textContant show containt properly
//Note--> Those tag whose display property is hidden not show on innercontent

//************************Adding new element */
//eg. just adding empty tag
//  let newpara = document.createElement('p');
//  content.appendChild(newPara);
//always add at the last

//for adding tag with content
// let newpara = document.createElement("p");
//  newpara.textContent = 'I am Akshay';
//  content.appendChild(newpara);
 //Note- add only at last  

 //To add at any position 
 //.insertAdjacentHTML()
 //Note--> It has to be called with two arguments ie.
 //1-> Position in which you want to add
 //2-> HTML text you want to add 
// syntax
//atbegin, at end etc (see 26 minute of video)



//same for remove
//removechild


//********************Same for css editing  */
