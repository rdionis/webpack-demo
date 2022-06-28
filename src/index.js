import _ from "lodash";

const component = () => {
    const element = document.createElement("div");
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack by Raquel"], " ");

    return element
}

document.body.appendChild(component())