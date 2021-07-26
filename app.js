const api = {
  key: "f95879e078174472b6b4efda661f434d",
  base: "https://api.spoonacular.com/recipes/",
  query: "pasta"
};


fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f95879e078174472b6b4efda661f434d&query=pasta`)
      .then( function (response){
             return response.json();
      }).then (function (recipesArray){
                    console.log('All recipes', recipesArray);
                    document.getElementsByClassName("recipeTitle")[0].innerHTML = recipesArray.results[0].title;
                    document.getElementsByClassName("recipeTitle")[1].innerHTML = recipesArray.results[1].title;
                    document.getElementsByClassName("recipeTitle")[2].innerHTML = recipesArray.results[2].title;
                    document.getElementsByClassName("recipeTitle")[3].innerHTML = recipesArray.results[3].title;
                    document.getElementsByClassName("recipeTitle")[4].innerHTML = recipesArray.results[4].title;
                    document.getElementsByClassName("recipeTitle")[5].innerHTML = recipesArray.results[5].title;
          });



            
      
      
      


   
  