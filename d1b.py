# This code is going to turn decimal to binary and vice versa

def dectobin(num):
    output = ''
    count = 0

    while num >= 0:
        if num == 0:
            count += 1
            if count == 2:
                break
        output += str(num%2)
        num = num//2

    output = int(output[::-1])
    return output


def bintodec(num): 
    len_num = len(str(num))
    output = 0 

    for i in str(num):
        len_num -= 1
        if int(i) == 0:
            continue
        else: 
            output += (int(i) * 2**(len_num))

    return output


# Here it calulates

while True:
    print("\nWhat to want to do? \n1) Decimal to binary\n2) Binary to Decimal")
    choice = input("> ").strip()

    if choice == 'exit':
        break

    ask_number = int(input("Enter the number: ").strip())

    if choice == '1':
        print(">",dectobin(ask_number))
    
    elif choice == '2':
        print(">",bintodec(ask_number))
    
    else: print("\nSorry, couldn't understand!!")