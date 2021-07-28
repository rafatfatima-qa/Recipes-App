
  const key = "f95879e078174472b6b4efda661f434d";
  const base = "https://api.spoonacular.com/recipes";
  const query = "pasta";



fetch(`${base}/complexSearch?apiKey=${key}&query=${query}`)
      .then( function (response){
             return response.json();
      }).then (function (recipesArray){
                    console.log('All recipes', recipesArray);
                    
                    let image0 = recipesArray.results[0].image;
                    let image1= recipesArray.results[1].image;
                    let image2 = recipesArray.results[2].image;
                    let image3 = recipesArray.results[3].image;
                    let image4 = recipesArray.results[4].image;
                    let image5 = recipesArray.results[5].image;
                    document.getElementsByClassName("recipe-card")[0].innerHTML = recipesArray.results[0].title;
                    document.getElementsByClassName("recipe-card")[0].style.backgroundImage = `url(${image0})`;

                    document.getElementsByClassName("recipe-card")[1].innerHTML = recipesArray.results[1].title;
                    document.getElementsByClassName("recipe-card")[1].style.backgroundImage = `url(${image1})`;

                    document.getElementsByClassName("recipe-card")[2].innerHTML = recipesArray.results[2].title;
                    document.getElementsByClassName("recipe-card")[2].style.backgroundImage = `url(${image2})`;

                    document.getElementsByClassName("recipe-card")[3].innerHTML = recipesArray.results[3].title;
                    document.getElementsByClassName("recipe-card")[3].style.backgroundImage = `url(${image3})`;

                    document.getElementsByClassName("recipe-card")[4].innerHTML = recipesArray.results[4].title;
                    document.getElementsByClassName("recipe-card")[4].style.backgroundImage = `url(${image4})`;

                    document.getElementsByClassName("recipe-card")[5].innerHTML = recipesArray.results[5].title;
                    document.getElementsByClassName("recipe-card")[5].style.backgroundImage = `url(${image5})`;
          });



            
      
      
      


   
  