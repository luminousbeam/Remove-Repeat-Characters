=begin
Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".
=end

string = "tree traversal"

string_array = string.split("").uniq

print string_array.join
