const repeatString = function(str, num) {
    let text = "";
    for(let i=0; i<num; i++){
        text += str;
    }
    if(num<0) 
        return "ERROR";
    else return text;
};

// Do not edit below this line
module.exports = repeatString;
