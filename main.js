//card_component javscript file

//containers
const container = document.querySelector(".container");
const containerAfter = document.querySelector(".container_after");

//display id
const displaySelected = document.querySelector(".display_selected_id");

//spinner
const spinner = document.querySelector('.spinner')

//checkbox buttons
const checkInput = document.querySelectorAll(".checkbox_input");
const checkBox = document.querySelectorAll(".checkbox_label");

//sumbit button
const submitBtn = document.querySelector(".submit_btn");

//declearing integer which later will be our selected display
let number = 0;

checkBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    //giving integer value of current target's id
    number = event.target.htmlFor;
    //removing everysingle box class .selected
    removeSelected();
    //this will add class .selected to the button which was currently clicked
    box.classList.add("selected");
  });
});

//defined the fucntion which removes class .selected to the all the boxes
function removeSelected() {
  checkBox.forEach((box) => {
    box.classList.remove("selected");
  });
}
//submit button will flip the card
//container which was used to select the number will dissaper
//and container which is used to display what you have selected will appear
submitBtn.addEventListener("click", () => {
  //sets container to display = 'none'
  // container.style.display = "none";
  spinner.style.display = 'block'

  setTimeout(checkSubmit, 1000)
  //sets container to display = 'flex'
  // containerAfter.style.display = "flex";

  //displays number you have just selected
  // displaySelected.innerHTML = `You selected ${number} out of 5`;
});

function checkSubmit () {
  container.style.display = "none";
  spinner.style.display = 'none'
  //sets container to display = 'flex'
  containerAfter.style.display = "flex";

  //displays number you have just selected
  displaySelected.innerHTML = `You selected ${number} out of 5`;
}