const small = document.querySelectorAll(".cup-small");
const bigger_cup = document.getElementsByClassName(".cup");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
updateCup();
small.forEach((cup, indx)=> {
    cup.addEventListener('click', () => fill_cups(indx)) //listen for a 'click' on the one of the smaller cups, 
                                          //when that happens invoke the function that calls fill_cups(indx) 
                                          //which points to the index of the small cups;
})
function fill_cups(indx){
    if(small[indx].classList.contains('full') && !small[indx].nextElementSibling.classList.contains('fill')){ //unfill the smaller cup
        indx--;
    }
    small.forEach((cup, idx) => {
        if(idx <= indx){ //If current idx is less that or equal to the index that we click on.
            cup.classList.add('full');//If true, fill the cups prior to the 'clicked' cup.
        } else {
            cup.classList.remove('full');
        }
    })
    updateCup();
}
function updateCup(){
    const full_cups = document.querySelectorAll('.cup-small.full').length;//finds the total num of full cups
    const total_cups = small.length;

    if(full_cups === 0){
        percentage.style.visibility= 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${full_cups / total_cups * 240}px`;
        percentage.innerText = `${Math.floor(full_cups / total_cups * 100)}%`;
    }
    if(full_cups === total_cups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${3 - (250 * full_cups / 1000)}L`;
    }
}