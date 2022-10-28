/* let alcoholic = () => {
fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
.then (response => response.json())
.then (data => {

        document.querySelector("#drink1").innerHTML = data.drinks[2].strDrink;
        document.querySelector("#drinkpic1").src = data.drinks[2].strDrinkThumb;
        document.querySelector("#drink2").innerHTML = data.drinks[5].strDrink;
        document.querySelector("#drinkpic2").src = data.drinks[5].strDrinkThumb;
        document.querySelector("#drink3").innerHTML = data.drinks[6].strDrink;
        document.querySelector("#drinkpic3").src = data.drinks[6].strDrinkThumb;
        document.querySelector("#drink4").innerHTML = data.drinks[8].strDrink;
        document.querySelector("#drinkpic4").src = data.drinks[8].strDrinkThumb;
        document.querySelector("#drink5").innerHTML = data.drinks[9].strDrink;
        document.querySelector("#drinkpic5").src = data.drinks[9].strDrinkThumb;
        document.querySelector("#drink6").innerHTML = data.drinks[12].strDrink;
        document.querySelector("#drinkpic6").src = data.drinks[12].strDrinkThumb;
        document.querySelector("#drink7").innerHTML = data.drinks[13].strDrink;
        document.querySelector("#drinkpic7").src = data.drinks[13].strDrinkThumb;
        document.querySelector("#drink8").innerHTML = data.drinks[14].strDrink;
        document.querySelector("#drinkpic8").src = data.drinks[14].strDrinkThumb;
        document.querySelector("#drink9").innerHTML = data.drinks[48].strDrink;
        document.querySelector("#drinkpic9").src = data.drinks[48].strDrinkThumb;

    })
}
alcoholic() */
