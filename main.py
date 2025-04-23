numbers: List[number] = [8, 6, 7, 5, 3, 0, 9]
states: List[str] = ["Michigan", "California", "Missouri", "Washington", "Illinois", "Georgia"]

print("Numbers:")
print(numbers)
print("States:")
print(states)

def array_search(array: List[any], search_term: any):
    for i in range(len(array)):
        if array[i] == search_term:
            return i
    return -1

print("Searching for 3 in numbers:")
print(array_search(numbers, 3))  
print("Searching for 8 in numbers:")
print(array_search(numbers, 8))


print("Searching for Georgia:")
print(array_search(states, "Georgia"))  
print("Searching for New York:")
print(array_search(states, "New York")) 


states.sort()
print("Sorted states:")
print(states)


numbers.sort()
print("Sorted numbers (incorrect):")
print(numbers)

def compare_numbers(value1: number, value2: number):
    return value1 - value2

numbers.sort(compare_numbers)
print("Properly sorted numbers:")
print(numbers)