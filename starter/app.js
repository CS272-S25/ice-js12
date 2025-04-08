const courseDivNode = document.getElementById("course-list");

const COURSES = getCourseList();

// TODO #1 Insert many course components into the courseDivNode!

/**
 * Given some course data, returns a new HTML element.
 * @param {object} courseData the course data object
 * @returns an HTML element to be placed into the webpage
 */
function createCourseComponent(courseData) {
    const newColDivNode = document.createElement("div");
    newColDivNode.id = `course-${courseData.id}`;

    // TODO #2: Display responsively
    newColDivNode.className = "col";
    
    const newCardDivNode = document.createElement("div");
    newCardDivNode.className = "card m-2 p-2";

    const newStarNode = document.createElement("span");
    newStarNode.style.float = "right";
    newStarNode.className = "bi-star";
    // TODO #3 Add an event listener to the star to make it clickable!
    //         You can use the class name of bi-star-fill

    const newTitleNode = document.createElement("h2");
    newTitleNode.innerText = `${courseData.id}: ${courseData.name}`;

    const newCreditsNode = document.createElement("p");
    newCreditsNode.style.fontWeight = 200;
    newCreditsNode.innerText = `${courseData.credits} credits`;

    const newBadgesDivNode = document.createElement("div");
    newBadgesDivNode.style.display = "flex";
    // TODO #4 Add a badge for each one of the keywords
    //         https://getbootstrap.com/docs/5.3/components/badge/

    const newDescNode = document.createElement("p");
    newDescNode.innerText = courseData.description;

    const newReadMoreBtnNode = document.createElement("button");
    newReadMoreBtnNode.className = "btn btn-outline-secondary";
    newReadMoreBtnNode.innerText = "Read More";
    // EXTRA TODO Implement the button such that it toggles the amount
    //            of description that is being shown (e.g. 200 characters)
    //       HINT You will likely use an event listener here.

    newTitleNode.appendChild(newStarNode);

    newCardDivNode.appendChild(newTitleNode);
    newCardDivNode.appendChild(newCreditsNode);
    newCardDivNode.appendChild(newBadgesDivNode)
    newCardDivNode.appendChild(newDescNode);
    newCardDivNode.appendChild(newReadMoreBtnNode)

    newColDivNode.appendChild(newCardDivNode);

    return newColDivNode;
}
