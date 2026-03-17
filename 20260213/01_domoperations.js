function addOperation(){
    // alert("Event fired")
    let divTag = document.createElement("div");
    let nameValue = document.getElementById("name").value
    let ageValue = document.getElementById("age").value
    let divTagContent = document.createTextNode(`Name is ${nameValue} and age is ${ageValue}`)
    divTag.appendChild(divTagContent)
    if(ageValue>=40){
        divTag.setAttribute("class","abc")
    } else {
        divTag.setAttribute("class","xyc")
    }

    document.getElementsByTagName("body")[0].appendChild(divTag)
    // document.getElementById("result").appendChild(divTag)
    document.getElementById("name").value=""
    document.getElementById("age").value=""
}