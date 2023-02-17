    let input = '';
    let finalObj = {};
    const container = document.getElementById('container')
    const div = document.createElement('div');
    div.classList.add('object');
    
    container.appendChild(div);


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


const sortObject = (obj) => {
let sortedArray = [];
let sortedObj = {};
Object.keys(obj).forEach(key => {
    sortedArray.push([key, obj[key]])
})
    sortedArray.sort(function(a, b) {
    return a[1] - b[1];
});
    for (let i = 0; i <sortedArray.length; i++) {
        sortedObj[sortedArray[i]] = sortedArray[i];
    }
    return sortedObj;
}

const percentObject = (obj) => {
    let percentArray = [];
    let percentObj = {};
    Object.keys(obj).forEach(key => {
        percentArray.push([key, obj[key]])
    })
    let max = percentArray[-1][1];
    percentArray.forEach(item => item / max);
    return percentArray;
}

const selected = document.querySelector('button');
selected.addEventListener('click', (e) => {
    input = prompt("Throw some letters in")
    finalObj = sortObject(strObject(input));
    div.innerHTML = finalObj;
})


