function sumsCalc(string){
    let firstArray = []
    let sum;
    firstArray = string.split(',')
    console.log(firstArray)
    let oldString;
    let newArray = []
    let secondString;
    let thirdArray = []
    let finalSum =[]
    let finalArray = []

if(firstArray.length === 1 ){
    oldString = firstArray.join()
    newArray = oldString.split(" ")
    if(newArray[1] === "+"){
        sum = parseInt(newArray[0]) + parseInt(newArray[2])

    } else if (newArray[1] === '-') {
        sum = parseInt(newArray[0]) - parseInt(newArray[2])

    } else if (newArray[1]=== 'x'){
        sum = parseInt(newArray[0]) * parseInt(newArray[2])
       
    } else if (newArray[1]=== '/'){
        sum = parseInt(newArray[0]) / parseInt(newArray[2]) 
    }
    return `${string} = ${sum}`
}  else if (firstArray.length > 1){
    secondString = firstArray.join()
    thirdArray = secondString.split(",")
    thirdArray.forEach(function(item){
        
        finalSum = item.split(" ")
        console.log(finalSum)
        sum = parseInt(finalSum[0]) + parseInt(finalSum[2])
        console.log(sum)
        finalArray.push(`${item} = ${sum}`)
        
    })
    return finalArray
}
    
}