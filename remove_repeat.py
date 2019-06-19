```Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".```

def get_unique(str):
  arr = list(str)
  print(arr)
  unique = []
  for i in arr:
    if i not in unique:
      unique.append(i)
  print(''.join(unique))

get_unique('tree traversal')
