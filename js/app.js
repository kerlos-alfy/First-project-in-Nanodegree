//Start of the menu

let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container")
    .length;

for (i = 1; i < containerCount + 1; i++) {
    let item = "#section" + i + "titlle";
    let itemValue = document.querySelector(item);
    let itemText = itemValue.textContent;
    let newLine = document.createElement("li");
    let lineText = document.createTextNode(itemText);
    let listItem = "sample-nav-" + i;
    newLine.setAttribute("id", listItem);
    newLine.setAttribute("class", "nav-list-items");
    newLine.appendChild(lineText);
    unorderedList.appendChild(newLine);

    let itemTarget = document.getElementById("section" + i);
    let listTarget = document.getElementById(listItem);



    listTarget.addEventListener("click", function() {
        itemTarget.scrollIntoView({
            behavior: 'smooth'
        });
        //Added  smooth  scroll

        buttonToAdd.innerHTML =
            "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
    });
}


//Checks if section is active
function checkIfSectionInView() {
    let isInViewport = function(elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top <= 50 &&
            bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    for (i = 1; i < containerCount + 1; i++) {
        let sectionInFullView = document.getElementById("section" + i);

        window.addEventListener(
            "scroll",
            function(event) {
                if (isInViewport(sectionInFullView)) {
                    sectionInFullView.classList.add("yo-act-clas");
                } else {
                    sectionInFullView.classList.remove("yo-act-clas");
                }
            },
            false
        );
    }
}


// Make the nafebar not move when going down
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("header");
console.log(navbar)

var barr = header.offsetTop;
console.log(barr)

function myFunction() {
    if (window.pageYOffset >= barr) {
        navbar.classList.add("barr")
    } else {
        navbar.classList.remove("barr");
    }
}
checkIfSectionInView();




// End JS code