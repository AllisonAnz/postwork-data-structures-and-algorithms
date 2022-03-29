require 'set'

def find_first_duplicate(arr)
  uniques = Set.new 

  arr.each do |value| 
    return value if uniques.include?(value)
  end
    uniques.add(value)
  end
    -1 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# create empty set to hold values 
# iterate over array values
# if set includes value return value 
# if not, add it to the set 
# if no matches are found, return -1
# And a written explanation of your solution
