function sumsCalc(string){
    let newArray = []
    let sum;
    newArray = string.split(' ')
    if(newArray[1] === "+"){
        console.log(newArray)
        sum = parseInt(newArray[0]) + parseInt(newArray[2])

    } else if (newArray[1] === '-') {
        sum = parseInt(newArray[0]) - parseInt(newArray[2])

    } else if (newArray[1]=== 'x'){
        sum = parseInt(newArray[0]) * parseInt(newArray[2])
       
    } else if (newArray[1]=== '/'){
        sum = parseInt(newArray[0]) / parseInt(newArray[2]) 
    }
    return `${string} = ${sum}`
}