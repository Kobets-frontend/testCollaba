const click = document.querySelector('#click');
const content = document.querySelector('#content');

click.addEventListener("click", function () {
  content.classList.toggle('content__hidden')
});



$(function () {
  $('select').styler();
});



let showDivButton = document.querySelector('.advertising__img'),
  hiddenBlock = $('.advertising__inner');
let is_open = false;
showDivButton.addEventListener('click', function () {
  let duration = 1 * 500;
  if (is_open) {
    is_open = false;
    return hiddenBlock.slideUp(duration);
  } else {
    is_open = true;
    return hiddenBlock.slideDown(duration);
  }
});


let myblock = document.querySelectorAll('.disappears');
myblock.forEach(block => block.addEventListener('click', removeBlock));

function removeBlock() {
  let block = this;
  block.style.opacity = 1;
  let blockId = setInterval(function () {
    if (block.style.opacity > 0) block.style.opacity -= .1;
    else {
      clearInterval(blockId);
      block.remove();
    }
  }, 60)
}


const buttonClick = document.querySelector('#button');
const toggleContent = document.querySelectorAll('.toggle input');

buttonClick.addEventListener("click", function () {
  toggleContent.forEach(e => {
    e.setAttribute('checked', '')
  })
});


const button = document.querySelector(".modal__btn-1")

function Toast() {
  const toast = document.querySelector(".toast")
  toast.classList.add("active")
  setTimeout(() => {
    toast.classList.remove("active")
  }, 1300)
  Toast.prototype.success = function () {
    Toast()
    toast.classList.add("success")
  }
  Toast.prototype.error = function () {
    Toast()
    toast.classList.add("error")
  }
}
button.onclick = () => {
  let toaster = new Toast();
  toaster.success()
}