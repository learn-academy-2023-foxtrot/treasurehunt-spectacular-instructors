# 💰 React Treasure Hunt Game

#### Overview

Treasure Hunt is the first project that students create at LEARN. During Jumpstart, treasure hunt is done with HTML, CSS, and JavaScript. While this is a perfectly acceptable tech stack, using React allows for more advanced and dynamic code structures.

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

#### Learning Objectives

- can create a logic component to handle the gameplay
- can pass data and behavior from a parent component to a nested component with props
- can break down a complex problem to create a desired outcome

#### Additional Resources

- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name
- Add additional team members via GitHub handle
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game, and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 📚 User Stories
- Look at the tools that are provided, components
- console.log()

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
  - branch name: grid
  - imported the Square component
  - passed board as props to the Square component
  - Since board is an array, use .map() to iterate across each value in the array and return the value inside a square.
  - increase the font size and center it on App.css
  - use flexbox to create a 3X3 grid

- As a user, when I click on one of the question marks, an alert appears with the index position of that question mark in the array.
- branch name: alert
- create a function that will send an alert message with the index position of that question mark in the array
- Pseudocode:
  - function name: handleClick
  - input: index (number), selectedIndex
  - output: index (number)
  - process: use alert() to show the index of the selected square
  - place function on App.js, the container component

  - function expression
  ```js
    const handleClick = (selectedIndex) => {
      // return something
      alert(selectedIndex)
    }
  ```

  - function call
  - perform function call through an onClick attribute placed on each square on Square.js
  - the argument will be the index of that square (functional props)

- branch name: emoji

- As a user, when I click on one of the question marks, a tree emoji appears instead of the alert.
  - Pseudode: (continuation of process on handleClick)
  - reference the selected square using its index and reassign the value
  - use the setter function `setBoard` to update the value of the state variable `board` by using the spread operator `...` to copy the values
  - Because it only copies values, we will encapsulate the spread operator with `[]` to create an array
  - emoji: 🏖️ will be used for default emoji

- As a user, if I select the winning square, the question mark will become a treasure emoji. 
  - Pseudocode: (continuation of process on handleClick)
    - use conditional statements to provide a ☀️ for the treasure, 🏖️ will be used for default emoji
    - the treasure index will be randomly created using the Math.floor() and Math.random()
    - use setter function and spread operator as reference on the tree emoji usr story

***Additional Notes***
- Because the Math operators will create a new number each time a square is clicked, we will store the the value as a state variable `treasure`

- If I select the losing square, the question mark will become a bomb emoji.


- As a user, I can click on a “Play Again” button that will restart the game.
- As a user, I can see a counter that shows how many guesses are remaining. The counter starts at five and decrements by one every time I click on a square that is neither the treasure nor the bomb.
- As a user, I can see a message stating that I won the game by selecting the square that contains the treasure.
- As a user, I can see a message stating that I lost the game by selecting the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
