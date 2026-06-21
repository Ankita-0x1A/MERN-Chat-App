# 1. Pass by Value
def change(x):
    x = x + 10
    print("Inside function:", x)

a = 5
change(a)
print("Outside function:", a)

# 2. Pass by Reference
def modify(lst):
    lst.append(100)
    print("Inside function:", lst)

my_list = [1, 2, 3]
modify(my_list)
print("Outside function:", my_list)

# Function Overloading
def add(a, b=0, c=0):
    return a + b + c

print(add(5))
print(add(5, 10))
print(add(5, 10, 15))

# Inheritance
class Animal:
    def speak(self):
        print("Animal makes sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.speak()   # inherited
d.bark()