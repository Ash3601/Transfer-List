let buttonLeft = document.querySelector("#btn-left");
let buttonRight = document.querySelector("#btn-right");
let checkAllLeft = document.querySelector("#check-all-left");
let checkAllRight = document.querySelector("#check-all-right");

checkAllLeft.addEventListener("click", () => {
  let box1Div = document.querySelector(".box1");
  let allInputsLeft = box1Div.querySelectorAll("input[type=checkbox]");
  checkAllBoxes(allInputsLeft);
});

checkAllRight.addEventListener("click", () => {
  let box1Div = document.querySelector(".box2");
  let allInputsRight = box1Div.querySelectorAll("input[type=checkbox]");
  checkAllBoxes(allInputsRight);
});

function checkAllBoxes(list) {
  list.forEach((child) => {
    child.checked = !child.checked;
  });
}
function removeCheckedNodes(isLeft) {
  let checkedboxes = [];
  let checkBoxesDiv = document.querySelectorAll(".cbox");
  if (isLeft) {
    let checkboxes = document.querySelector("#checkboxes-left");
    checkBoxesDiv.forEach((child) => {
      [labelNode, inputNode] = child.childNodes;
      if (inputNode.checked) {
        inputNode.checked = false;
        checkedboxes.push(child);
        try {
          // child.checked
          checkboxes.removeChild(child);
        } catch (DOMException) {
          // alert('Please select the items appropriately');
          // continue;
          console.log("Child selected does not exist in the selected list");
        }
      }
    });
  } else {
    let checkboxes = document.querySelector("#checkboxes-right");
    checkBoxesDiv.forEach((child) => {
      [labelNode, inputNode] = child.childNodes;
      if (inputNode.checked) {
        inputNode.checked = false;

        checkedboxes.push(child);
        try {
          checkboxes.removeChild(child);
        } catch (DOMException) {
          console.log("Child selected does not exist in the selected list");
        }
      }
    });
  }
  return checkedboxes;
}

function appendChildToCheckboxes(children, isLeft) {
  if (isLeft) {
    let checkboxes = document.querySelector("#checkboxes-right");
    children.forEach((child) => {
      checkboxes.appendChild(child);
    });
  } else {
    let checkboxes = document.querySelector("#checkboxes-left");
    // checkedboxes.appendChild(child);
    children.forEach((child) => {
      checkboxes.appendChild(child);
    });
  }
}

buttonLeft.addEventListener("click", () => {
  let removedChildren = removeCheckedNodes(false);
  appendChildToCheckboxes(removedChildren, false);
});

buttonRight.addEventListener("click", () => {
  let removedChildren = removeCheckedNodes(true);
  appendChildToCheckboxes(removedChildren, true);
});
