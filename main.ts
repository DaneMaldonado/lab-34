let numbers = [8, 6, 7, 5, 3, 0, 9]
let states = ["Michigan", "California", "Missouri", "Washington", "Illinois", "Georgia"]
console.log("Numbers:")
console.log(numbers)
console.log("States:")
console.log(states)
function arraysearch(array: any[], search: any): number {
    for (let a = 0; a < array.length; a++) {
        if (array[a] == search) {
            return a
        }
        
    }
    return 1
}

console.log("Searching for 3 in numbers:")
console.log(arraysearch(numbers, 3))
console.log("Searching for 8 in numbers:")
console.log(arraysearch(numbers, 8))
console.log("Searching for Illinois")
console.log(arraysearch(states, "Illinois"))
console.log("Searching for Michigan")
console.log(arraysearch(states, "Michigan"))
states.sort()
console.log("Sorted states:")
console.log(states)
numbers.sort()
console.log("Sorted numbers (incorrect):")
console.log(numbers)
numbers.sort(function compare_numbers(value1: number, value2: number): number {
    return 0
})
