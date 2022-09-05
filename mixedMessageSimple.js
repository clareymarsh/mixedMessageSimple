let friend = ["Lucy", "Mark", "Charlie", "Katie"]; 
let duration = [7, 10]; 
let location = ["Paris", "Rome", "Queenstown", "Bali", "Lisbon"]


let random = arr => {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i] 
}

const holidayGen = () => {
    let friend1 = random(friend); 
    let duration1 = random(duration);
    let location1 = random(location); 
    return(`Thank you for using the Holiday generator, time to start packing for your trip with ${friend1} to ${location1} for ${duration1} days!`)
    }

console.log(holidayGen())



  




