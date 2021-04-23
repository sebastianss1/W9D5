
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.innerText = string; 
    if (htmlElement.hasChildNodes()) {
        Array.from(htmlElement.children).forEach((child) => {
            htmlElement.removeChild(child)}); 
    };
    htmlElement.appendChild(p);

};

htmlGenerator('Party Time.', partyHeader);