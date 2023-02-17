const strObject = (str) => {

    let newObject = {};
    for (let i = 0; i < str.length; i++) {
        if (newObject.hasOwnProperty(str[i])) {
            newObject[str[i]] += 1; 
        } else{
        newObject[str[i]] = 1;
        }
    }
    return newObject;
}


console.log(strObject('aslasdaweweffffswefa'));