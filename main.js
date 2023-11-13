
const cursor = document.querySelector('.cursor')
const container2 = document.querySelector('.container2')

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

let timeout;
document.onmousemove = function(e){
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
  cursor.style.transform = 'scale(20)';
  container2.style.display = 'block';

  clearTimeout(timeout);
  timeout = setTimeout(function(){
    cursor.style.transform = 'scale(1)';
    container2.style.display = 'none';
  }, 700);
}

