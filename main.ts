let numbers = [8, 6, 7, 5, 3, 0, 9]
let states = ["Michigan", "California", "Missouri", "Washington", "Illinois", "Georgia"]
console.log("Numbers:")
console.log(numbers)
console.log("States:")
console.log(states)
function array_search(array: any[], search_term: any): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search_term) {
            return i
        }
        
    }
    return -1
}

console.log("Searching for 3 in numbers:")
console.log(array_search(numbers, 3))
console.log("Searching for 8 in numbers:")
console.log(array_search(numbers, 8))
console.log("Searching for Georgia:")
console.log(array_search(states, "Georgia"))
console.log("Searching for New York:")
console.log(array_search(states, "New York"))
states.sort()
console.log("Sorted states:")
console.log(states)
numbers.sort()
console.log("Sorted numbers (incorrect):")
console.log(numbers)
numbers.sort(function compare_numbers(value1: number, value2: number): number {
    return value1 - value2
})
console.log("Properly sorted numbers:")
console.log(numbers)
