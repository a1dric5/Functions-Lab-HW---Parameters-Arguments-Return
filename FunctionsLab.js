// 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter
let greetCustomer = (name) => {
    console.log("Welcome to the store " + name);
}

greetCustomer("Aldrich")

// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
let logPositiveOrNegative = (number) => { 
    if (number < 0) {
        console.log("Negative number"); 
    } else if (number !== 0 ) { 
        console.log("Positive number"); 
    } else { 
        console.log("Zero"); 
    }
}

logPositiveOrNegative(5)
  
// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
let returnIsPositive = (number) => {
    if (number === true) {
        console.log("Return is positive");
    } else ()
}
// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters

// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"

// 6. Make a variable called count.

// Write a function called addToCount that will add the number parameter to the count variable.
// Call addToCount 4 times with different numbers
// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true

// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]

// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students
// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined

// call this function 3 times with 6 strings.
// 10. Write a function called returnDataType that will return the datatype of the data parameter

// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8

// Call this function 2 times
// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 

// Write a function called fillClass that will loop until the class array has >= 15 students. Every loop one student should be put into the class array and taken out of the extraStudents array
 