var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const ans = (array) =>{
    let bigname = array[0]
    for(let i = 0; i< array.length; i++)
    {
        if(array[i].length > bigname.length)
        {
            bigname = array[i]
        }
    }
    return bigname
}

const result = ans(friends)
console.log(result)