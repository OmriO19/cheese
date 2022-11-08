mode_flag = false
more_flag = true

document.getElementById("more").hidden = true

document.getElementById("cheese_mode").addEventListener("click", function contactClickhandler(el) {
  mode_flag = !mode_flag
  if (mode_flag) {
    document.body.style.backgroundColor = "#FBDB65"
    document.body.style.color = "#e59500"
    document.getElementById("cheese_mode").innerHTML = "Dark Mode"
  } else {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "#FBDB65"
    document.getElementById("cheese_mode").innerHTML = "Cheese Mode"
  }
});

document.getElementById("more_cheese").addEventListener("click", function contactClickhandler(el) {
  if (more_flag) {
    document.getElementById("more_cheese").innerHTML = "Less Cheese"
    document.getElementById("more").hidden = false
  } else {
    document.getElementById("more_cheese").innerHTML = "More Cheese"
    document.getElementById("more").hidden = true

  }
  more_flag = !more_flag
});