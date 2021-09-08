class character{
    constructor(_character,_timeAppear){
        this.character = _character
        this.timeAppear = _timeAppear
    }
}

let getNumberUniqueChar = (str) => {
    let newStr = sortAlphabets(str.toLowerCase())
    // console.log(newStr)
    let firstCharacter = new character(newStr.charAt(0),1)
    let AlphaBetArray = []
    AlphaBetArray.push(firstCharacter)
    let count = 0;
    for(let i =1;i<newStr.length;i++){
        if(newStr.charAt(i)===AlphaBetArray[count].character){
            AlphaBetArray[count].timeAppear+=1;
        }else{
            count++;
            let nextCharObj = new character(newStr.charAt(i),1)
            AlphaBetArray.push(nextCharObj)
        }
    }
    return resolveOutPut(AlphaBetArray)
}

let resolveOutPut = (arr) => {
    let resl = "";
    for(const val of arr){
        resl+= val.character+val.timeAppear
    }
    return resl
}

let sortAlphabets = function(text) {
    return text.split('').sort().join('').trim();
};

// console.log( getNumberUniqueChar("HellooooooWorrlddd!!"))

module.exports= {getNumberUniqueChar}
