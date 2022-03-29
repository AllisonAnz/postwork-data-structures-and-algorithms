def recursive_count(num = 0)
  # type your code in here
  return if num >= 10 
  puts num 
  recursive_count(num + 1)
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# TEST 


# OPTIONAL
# Please add your pseudocode to this file

# create a base case 
#  return if num >= 10 
# print out the return (in this case the number)
# recursive call, increasing the number each time


# And a written explanation of your solution
# We start out with a number and we want to print out that number until 0 is reached 
# until 0 is reached print out the number until 0 
# recursively call the method 
