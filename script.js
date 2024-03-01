// {"status":true,
// "message":"successfully fetched all the categories",

// "data":[

// {"category_id":"1000",
// "category":"All"},

// {"category_id":"1001",
// "category":"Music"},

// {"category_id":"1003",
// "category":"Comedy"},

// {"category_id":"1005",
// "category":"Drawing"}]}

const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container')
let selectedCategory = 1000;
const fetchCatagories = ()=>{
    const url ='https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        data.forEach((card)=>{
            const newBtn = document.createElement ('button')
            newBtn.className = 'btn btn-ghost bg-slate-700 text-white text-lg'
            newBtn.innerText = card.category
            newBtn.addEventListener ('click',() =>fetchByCategories(card.category_id))
            btnContainer.appendChild(newBtn);
        })
    } )
}
const fetchByCategories =(categoryID)=> {
selectedCategory = categoryID;
const url =`https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
fetch(url)
.then((res) => res.json())
.then(({data}) => {
cardContainer.innerHTML = ``
data.forEach((video)=>{
const newCard = document.createElement ('div')
// newBtn.className = 'btn btn-ghost bg-slate-700 text-white text-lg'
newCard.innerHTML = `<div class="card w-60 bg-base-100 shadow-xl">
<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
<div class="card-body">
<h2 class="card-title">
Shoes!
<div class="badge badge-secondary">NEW</div>
</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions justify-end">
<div class="badge badge-outline">Fashion</div> 
<div class="badge badge-outline">Products</div>
</div>
</div>
</div>
`
// newBtn.addEventListener ('click',() =>fetchByCategories(card.category_id))
cardContainer.appendChild(newCard);
})
} )
}
fetchCatagories();
fetchByCategories(selectedCategory);