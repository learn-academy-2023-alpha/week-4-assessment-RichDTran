// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
//PSEUDOCODE : Hello, welcome to my pseudocode... today we will create a function called "shuffle" this function will take an array that removes the first item from the array and shuffles the remaining content. To do this we can use .reverse the array then use .pop to remove the first item which is now the last item of the array. Then use the expect.arrayContaining(array) method to shuffle the array left over!

//**UPDATED PSEUDOCODE: Welcome back, after confiding in my cowrokers/peers they recommended an easier method called .shift() which removed the first element in the array and explained the expect.arrayContaining(array) belongs into my test and not function as well to create NOT to equal expect.  Thank you for reading, see you on the next pseudocode!

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
const shuffle = (array) => {
  array.shift()
    return array
  
  }



describe("shuffle", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(shuffle(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining([
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]))
    expect(shuffle(colors2)).not.toEqual(expect.arrayContaining([
      "chartreuse"
    ]))
  })
})
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

//PSEUDOCODE: 
//Welcome back to some more Pseudocode I hope you enjoyed the first one! In this major event we will be creating a function called voteTracker. voteTracker will take in sets of numbers in the form of upVotes and downVotes parameters where the function will poerform upVotes-downVotes=tallied votes.

const voteTracker = (upVotes, downVotes) => {
  return upVotes - downVotes
}
*******This is the original with various different tries when it wasnt working so there are more but this was the original. I thought it was straight forward but was wondering why isnt this working.

//**PSEUDOCODE UPDATE: Well i wish i could say i did this myself but i didnt :( What was missing for me is that i CANNOT access the object contents like upvotes and downvotes WITHOUT going through the object its self. */
// a) Create a test with expect statements for each of the variables provided.

// const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
// const voteTracker = (object) => {
//   return object.upVotes - object.downVotes
// }

// describe("voteTracker", () => {
//   it("object that contains up votes and down votes and returns the end tally.", () => {
//     expect(voteTracker(votes1)).toEqual(11)
//     expect(voteTracker(votes2)).toEqual(-31)
//   })
// })

//PSEUDOCODE: Create a function called arrayMerge. This function i will use would be .splice which has the ability to replace and add existing removing elements which is perfect for these two arrays. But to return only only one array i would use concat.
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// const arrayMerge= (array1, array2) => {
//   const newArray = array1.splice(3, 1, []).concat(array2.splice(0, 1, []))
//   return arrayMerge()
//   }

//   console.log(arrayMerge(dataArray1, dataArray2))


// describe("arrayMerge", () => {
//   it("returns one array with no duplicate values.", () => {
//     expect(arrayMerge(votes1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })

//** I tried removing the "duplicates by using splice while concatting the arrays but need further research of what to do next." */