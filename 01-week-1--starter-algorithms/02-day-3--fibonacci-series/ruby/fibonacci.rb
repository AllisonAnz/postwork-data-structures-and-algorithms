def fibonacci(num)
  # type your code in here
    series = [0]
    count = 0
    
    until count > num 
      series.push(count + series.last())
      count += 1
    end
      return series.last() 
    
end
      

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
