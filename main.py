numbers = [8, 6, 7, 5, 3, 0, 9]
states = ["Michigan",
    "California",
    "Missouri",
    "Washington",
    "Illinois",
    "Georgia"]
print("Numbers:")
print(numbers)
print("States:")
print(states)
def arraysearch(array: List[any], search: any):
    for a in range(len(array)):
        if array[a] == search:
            return a
    return 1

print("Searching for 3 in numbers:")
print(arraysearch(numbers, 3)) 
print("Searching for 8 in numbers:")
print(arraysearch(numbers, 8)) 

print("Searching for Illinois")
print(arraysearch(states, "Illinois"))  
print("Searching for Michigan")
print(arraysearch(states, "Michigan"))

states.sort()
print("Sorted states:")
print(states)

numbers.sort()
print("Sorted numbers?")
print(numbers)

def compare_numbers(value1: number, value2: number):
    return 0
numbers.sort(compare_numbers)