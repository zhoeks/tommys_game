const strObject = (str) => {

    let newObject = new Object();
    for (let i = 0; i < str.length; i++) {
        newObject.str[i] = 1;
    }
    return newObject;
}


console.log(strObject('aslwef'));