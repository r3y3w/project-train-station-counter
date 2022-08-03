// Grap the count-el element, and store it in a countEL variable
let countEL = document.getElementById("count-el") // pass in argumnets
let count = 0
function increment() {
    count++
    // et countEL's innerText to the count
    countEL.innerText = count
    }

// save() function logs out the count when it is called

function save() {
        console.log(count)
}

save()