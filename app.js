const loadData = () =>{
    const searchBox = document.getElementById('input-field');
    const searchText = searchBox.value;
    searchBox.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}

const displayData = (meals) =>{
    console.log(meals);
    const mainContainer = document.getElementById('showcase');
    mainContainer.textContent='';
    meals.forEach(meal => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
            <div onclick="iteamDetails(${meal.idMeal})" class="card h-100" data-toggle="modal" data-target="#exampleModalCenter">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        `;
        mainContainer.appendChild(newDiv);
    })
}

const iteamDetails = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMoreInfo(data.meals[0]));
}


const displayMoreInfo = meal =>{
    console.log(meal)
    const modalDiv = document.getElementById('modals');
        const modalcontainer = createElement('div');
        modalcontainer.classList.add('modal-content')
        modalcontainer.innerHTML = `
            // <div class="modal-header">
            //     <h5 class="modal-title" id="exampleModalLongTitle">${meal.strMeal}</h5>
            //     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //         <span aria-hidden="true">&times;</span>
            //     </button>
            // </div>
            // <div class="modal-body">
            // ...
            // </div>
        `;
    modalDiv.appendChild(modalcontainer);
}