//------------------------------------- Solution 1 ----------------------------------------------

function feetToMile(num){
    if(num<0){
        return "Invalid Input"
    }
    else{
        return num*0.000189394
    }  
}

const ans1 = feetToMile(52800)
console.log("Mile for the given feet :",ans1)

//------------------------------------- Solution 2 ----------------------------------------------

function woodCalculator(chair, table, cot){
    
    chair = chair*1
    table = table*3
    cot = cot*5

    return wood = chair + table + cot

}

const ans2 = woodCalculator(7,1,1)
console.log("Wood will be needed",ans2,"cubic meter.")

//------------------------------------- Solution 3 ----------------------------------------------

function brickCalculator(num){
    if(num<0){
        return "Invalid input"
    }
    else if(num<=10){
        let first = num * 15 * 1000

        return first
    }
    else if(num<=20){
        let first = 10 * 15 * 1000
        let second = (num-10) * 12 * 1000

        return first + second
    }
    else{
        let first = 10 * 15 * 1000
        let second = 10 * 12 * 1000
        let third = (num-20) * 10 * 1000

        return first + second + third
    }
}

let ans3 = brickCalculator(-4)
console.log("number of bricks needed :",ans3) 
ans3 = brickCalculator(7)
console.log("number of bricks needed :",ans3) 
ans3 = brickCalculator(25)
console.log("number of bricks needed :",ans3) 


//------------------------------------- Solution 4 ----------------------------------------------

function tinyFriend(array){

    let element = '';

    for (let i = 0; i < array.length; i++) {
    
        if(i==0){
           element = array[i] 
        }
        else{
            if(array[i].length < element.length){
                element = array[i]
            }
        }
    }
    return element
}

const ans4 = tinyFriend(['talha','tousif','saquib','khaleed','Hazard','Tutu','Hogard'])
console.log("Shortest name in the friends' array :",ans4)