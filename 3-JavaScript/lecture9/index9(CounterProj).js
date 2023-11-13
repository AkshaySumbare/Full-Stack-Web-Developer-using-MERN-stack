const countvalue = document.querySelector('#counter');

const increment = () =>{
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    //update value
    value = value+1;
    //set the value
    countvalue.innerText = value;
};


const decrement = () =>{
    //get the value from UI
    let value = parseInt(countvalue.innerText); // parsenInt used to convert string value into number
    //update value
    value = value-1;
    //set the value
    countvalue.innerText = value;
};