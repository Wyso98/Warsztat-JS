
const productInput = document.querySelector("#products");
const orderInput = document.querySelector("#orders");
const dropdownDiv = document.querySelector(".select__dropdown");
const inputSelect = document.querySelector(".select__input");
const listOfDropdownDiv = [...dropdownDiv.children];
const sumElementsLi = [...document.querySelector(".calc__summary").firstElementChild.children];
const priceArrayPackage = [10, 30, 60];
const firstCheckbox = document.querySelector("#accounting");
const secondCheckbox = document.querySelector("#terminal");
const totalPriceButton = document.querySelector("#total-price");

dropdownDiv.style.display= "none";

productInput.addEventListener("input", function (){
    if(Number.isInteger(Number(productInput.value )) && Number(productInput.value) >= 0){
        sumElementsLi[0].children[1].innerText = this.value + " * $0.5";
        sumElementsLi[0].lastElementChild.innerText = "$"+ Number(this.value) * 0.5;
    }else{
        alert("Podana właściwość jest błędna - liczby nie mogą być ułamkami lub być ujemne")
        productInput.value = "";
    }
});

orderInput.addEventListener("input", function (){
    if(Number.isInteger(Number(productInput.value )) && Number(productInput.value) >= 0){
        sumElementsLi[1].children[1].innerText = this.value + " * $0.25";
        sumElementsLi[1].lastElementChild.innerText = "$"+ Number(this.value) * 0.25;
    }else{
        alert("Podana właściwość jest błędna - liczby nie mogą być ułamkami lub być ujemne")
        productInput.value = "";
    }
})

inputSelect.addEventListener("click", function (event){
    if(dropdownDiv.style.display === "none"){
        dropdownDiv.style.display ="block";
    }else if(dropdownDiv.style.display ==="block"){
        dropdownDiv.style.display = "none"
    }
    inputSelect.classList.toggle("rotate");
})

listOfDropdownDiv.forEach(function (item, index){
    item.addEventListener("click",function(event){
        inputSelect.innerText = item.innerText;
        inputSelect.style.color = "black";
        dropdownDiv.style.display = "none"
        sumElementsLi[2].children[1].innerText= item.innerText;
        sumElementsLi[2].children[2].innerText= "$" + priceArrayPackage[index];
        inputSelect.classList.toggle("rotate");
    })
})

secondCheckbox.addEventListener("input", function (){
    if(secondCheckbox.checked){
        sumElementsLi[4].lastElementChild.innerText= "$10";
    }else if(!secondCheckbox.checked){
        sumElementsLi[4].lastElementChild.innerText= "$0"
    }
})

firstCheckbox.addEventListener("input", function (){
    if(firstCheckbox.checked){
        sumElementsLi[3].lastElementChild.innerText= "$30";
    }else if(!firstCheckbox.checked){
        sumElementsLi[3].lastElementChild.innerText= "$0"
    }
})

productInput.addEventListener("input",sumElements);
orderInput.addEventListener("input",sumElements);
listOfDropdownDiv.forEach(function (item){
    item.addEventListener("click",sumElements);
})
firstCheckbox.addEventListener("input",sumElements);
secondCheckbox.addEventListener("input",sumElements);

function sumElements(){
    let sum = 0;
    for(let i = 0; i < sumElementsLi.length; i++){
        sum += Number(sumElementsLi[i].lastElementChild.innerText.replace("$",""));
    }
    totalPriceButton.lastElementChild.innerText = "$" + sum;
};




