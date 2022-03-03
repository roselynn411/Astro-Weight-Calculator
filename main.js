// Write your JavaScript code here! 
var planets = [ 
  ['Pluto', 0.06], 
  ['Neptune', 1.148], 
  ['Uranus', 0.917], 
  ['Saturn', 1.139], 
  ['Jupiter', 2.640], 
  ['Mars', 0.3895], 
  ['Moon', 0.1655], 
  ['Earth', 1], 
  ['Venus', 0.9032], 
  ['Mercury', 0.377], 
  ['Sun', 27.9] 
];

  // We are going to solve this by breaking the problem into three parts. 
  // Programmers like automating things, we'll populate the HTML drop down options using code, 
  // instead of having to type out all the values. 
  // Create a function that does the some math and gives us the new weight. 
  // Then create a function that responds when the user clicks on the button. 

  // 1. Populate the dropdown element with the data found in the planets array. 
  // The value of each option should be the planet's name. 
  // Use the following built-in methods: 
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
  
  //load function every time i go on my page
  document.body.onload = populatePlanets;

function populatePlanets(){
  
  //running function on his element within our planet variable
  planets.forEach(planet => {
      //create an option element
      let options = document.createElement("option", {value : planet});
      let content = document.createTextNode(planet[0]);

      //add content to options
      options.appendChild(content);

      //var for planetSelection
      var planetSelection = document.getElementById('planets');

      //add the new content to the DOM as a child of planetSelection
      planetSelection.appendChild(options);
  });
}
//Here is the actual function
function calculateWeight(weight, planetName){
  //empty var that we will push new infor into
  let spaceWeight;
  let index;

  //loop through every planet
  for(let i=0; i<planets.length; i++){
      let planetInfo = planets[i]; //each element within planet is going to be saved in this var
     //our condition if each planet has a planet name then show me that planet 
      if (planetInfo.includes(planetName)){
          index = i;  
      } else continue; // if not continue
  }

  //The math for getting the space weight
  //saving individual planet in gravity
  let gravity = planets[index][1];
  //we have our planet & its weight multipled for our space weight 
  spaceWeight = gravity * weight;
  return spaceWeight;
}

//Event listeners , our action
function handleClickEvent(e) {
   // 3. Create a variable called userWeight and assign the value of the user's weight. 
      let userWeight = document.getElementById('user-weight').value;

   // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
      let options = document.getElementById('planets');
      let selIndex = options.selectedIndex; 
      let planetName = options[selIndex].value;

  // 5. Create a variable called result and assign the value of the new calculated weight. 
      let result = calculateWeight(userWeight, planetName);

  // 6. Write code to display the message shown in the screenshot. 
      let finalAns = document.getElementById('output');
      finalAns.innerText = `If you were on ${planetName}, you would weigh ${result}lbs!`;

}
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
      
  document.getElementById('calculate-button').addEventListener('click', handleClickEvent);