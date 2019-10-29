// translateOneByOne - Should translate the circles one at a time from their random start position to their target.
// Log something out after each element has been moved

function functionMove(selector, xCoord, yCoord) {
    return moveElement(document.querySelector(selector), { x: xCoord, y: yCoord });
}

function translateOneByOne() {
    functionMove(".marks > li", 20, 300)
    .then(() => {
      console.log("Red circle has been moved");
    })
    .then(() => {
      return functionMove(".marks > li + li", 400, 300)
        .then(() => {
            console.log("Blue circle has been moved");
        });
    })
    .then(() => {
      return functionMove(".marks > li + li + li", 400, 20)
        .then(() => {
            console.log("Green circle has been moved");
        });
    });
}
//translateOneByOne();

// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target.
// Log out something after all elements have been moved

function translateAllAtOnce() {
  const greenCircle = functionMove(".marks > li + li + li", 400, 20);

  const blueCircle = functionMove(".marks > li + li", 400, 300);

  const redCircle = functionMove(".marks > li", 20, 300);

  Promise.all([greenCircle, blueCircle, redCircle]).then(() => {
    console.log("Green, blue and red circle has been moved at the same time");
  });
}
translateAllAtOnce();
