function nextBigger(n){
    n = Array.from(n.toString())
    let nArray = [n[n.length - 1]]
    
    for (let i = n.length - 2; i > -1; i--){ //Check back to front
      nArray.push(n[i])
      nArray = nArray.sort((a,b) => b - a)
      
      if (nArray[0] != n[i])
        //If number is not the biggest number, it means that it can be incremented with 
        //the current numbers
        {
          const nChange = nArray[0]
          const unShift = nArray[nArray.findIndex((x) => x == n[i]) - 1]
          
          //Making the next biggest number that this bigger than the current to be first
          //and orginizing the rest of the numbers to be orgiinzed from least to greatest
          nArray[nArray.findIndex((x) => x == n[i]) - 1] = nChange
          nArray = nArray.slice(1).sort((a,b) => a - b)
          nArray.unshift(unShift)
          
          return Number(n.slice(0, i).join('') + nArray.join(''))
        }
    }
    return -1
  }