export const myName = "Naw Naw";
export const ShowMyName = (newName = myName) => console.log(newName);
export const showMyNameUI = (newName = myName) => {
    const div = document.createElement("div")
    div.style.color = "white"
    div.style.backgroundColor = " black"
    div.style.position = "fixed"
    div.style.top ="top"
    div.style.right = right
    div.style.fonsize = 100 + "px"
    div.innerHTML = <h1>${newName}</h1>
};
