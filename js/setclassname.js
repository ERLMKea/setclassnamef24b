console.log("setclassnamef24b");

const pbSetStyle = document.getElementById("pbSetStyle");
const inpElementName = document.getElementById("elementName");
const inpStyleName = document.getElementById("styleName");


function setStyle() {
    const elmname = inpElementName.value;
    const elm = document.querySelector("." + elmname);
    console.log(elmname);
    console.log(elm);
    elm.className = inpStyleName.value;
}

function setClassNamexx() {
    const elmname = inpElementName.value;
    const elm = document.querySelector("." + elmname);
    const orgName = inpElementName.value;
    console.log(orgName);
    const nyStyle = inpStyleName.value;
    elm.className = '';
    elm.classList.add(orgName);
    elm.classList.add(nyStyle);
    console.log(elm.classList);

}

function setClassName(btn) {
    //first get the html element that we want to change
    const elm = document.querySelector("." + inpElementName.value);
    console.log(elm); //
    if (elm) {
        //Vi har fat i et html element.
        //nu burde der være 2 måder at få fat i oprindelige navn
        //mest oplagte er bare at tage fra inputfelt
        const orgName = inpElementName.value;
        //men du burde også kunne lade sig gøre at tage det fra selve elementet, altså første i classList
        const orgNameFraList = elm.classList.item(0);
        console.log(orgNameFraList);

        //Uanset så blanker vi classList
        elm.className = '';
        const styleName = inpStyleName.value; //henter stylename fra inputfelt
        elm.classList.add(orgName); //indsætter html navn i første element
        elm.classList.add(styleName); //indsætter style i andet element
        console.log(elm.classList)
    } else {
        alert(inpElementName.value + " html element findes ikke");
    }
}

pbSetStyle.addEventListener("click", setClassName);