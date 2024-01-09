
(function (){
    let arraySize = null;
    const arrayInitializeBtnNode = document.getElementById("initialize-btn")
    const arrayContainerNode = document.querySelector(".array-container")

    function renderEmptyArray(size){
        const elementHtml = `<div class="element"></div>`
        arrayContainerNode.innerHTML = '';
        for(let index = 0; index < size; ++index){
            arrayContainerNode.innerHTML += elementHtml
        }
    }

    arrayInitializeBtnNode.addEventListener("click",()=>{
        arraySize = Number.parseInt(window.prompt("Enter array size :- "))
        console.log(arraySize);
        if(arraySize && arraySize > 0 && arraySize <= 10){
            renderEmptyArray(arraySize)
            arrayInitializeBtnNode.style.display = "none"
        }else{
            window.alert("Please enter array size in between 1 to 10")
        }
       
    })
})()