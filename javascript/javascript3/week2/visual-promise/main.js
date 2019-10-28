// translateOneByOne - Should translate the circles one at a time from their random start position to their target.
// Log something out after each element has been moved

function translateOneByOne() {
  moveElement(document.querySelector(".marks > li"), { x: 20, y: 300 })
    .then(() => {
      console.log("Red circle has been moved");
    })
    .then(() => {
      return moveElement(document.querySelector(".marks > li + li"), {
        x: 400,
        y: 300
      }).then(() => {
        console.log("Blue circle has been moved");
      });
    })
    .then(() => {
      return moveElement(document.querySelector(".marks > li + li + li"), {
        x: 400,
        y: 20
      }).then(() => {
        console.log("Green circle has been moved");
      });
    });
}
//translateOneByOne();

// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target.
// Log out something after all elements have been moved

function translateAllAtOnce() {
  moveElement(document.querySelector(".marks > li + li + li"), {
    x: 400,
    y: 20
  }).then(() => {
    console.log("Green circle has been moved");
  });

  moveElement(document.querySelector(".marks > li + li"), {
    x: 400,
    y: 300
  }).then(() => {
    console.log("Blue circle has been moved");
  });

  moveElement(document.querySelector(".marks > li"), { x: 20, y: 300 }).then(
    () => {
      console.log("Red circle has been moved");
    }
  );
}
translateAllAtOnce();
