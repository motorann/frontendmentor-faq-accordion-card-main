let questions = document.getElementsByClassName("card-question");
let answers = document.getElementsByClassName("card-answer");
let box = document.querySelector(".box-illustration");
let click = false;

for (let [key,value] of Object.entries(questions)) {
  value.addEventListener("click", () => {
//text part (scroll answer and making bolder question)
    if(value.classList.contains("active")) {
      answers[key].style.maxHeight = null;
    } else {
      const scrollHeight = answers[key].scrollHeight;
      answers[key].style.maxHeight = `${scrollHeight}px`;
    }

        value.classList.toggle("active");
        // answers[key].classList.toggle("active");

// image part (box)
    if(window.getComputedStyle(box,null).display === "block" && window.innerWidth > 1045) {
      if(!click) {
        box.style.transform = `translate(-20px,-4px)`;
        click = !click;
       }
       else {
        box.style.transform = `translate(0)`;
        click = !click
      }
    }

// box.offsetLeft > -100
  });
};
