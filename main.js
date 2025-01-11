let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + ' - '
    
    //innerText will not be a correct way to get spaces in between the numbers , we can use textContent instead. 
    // this is a way to set the element to 0 after we press save btn
    
    saveEl.textContent += countStr 

    countEl.textContent = 0
    count = 0  


    console.log (count)
}
