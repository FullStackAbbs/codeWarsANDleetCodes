def digital_root(n):
    stringN = str(n)
    sum=0
    if n>9:
        for digit in stringN:
            num = int(digit)
            sum = sum + num
    if n<9:
        return n
    if sum > 9 and sum > 0 :
        return digital_root(sum)
    else:
        return sum
res=digital_root(7)
print(res)
# python jul10.py
