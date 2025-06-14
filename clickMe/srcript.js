document.getElementId("testMessage").addEventListener("click", function(){
  this.textContent = "You clicked me, Neovim!";      // changes the text
  this.style.color = "#1976d2";     // changes the color to blue
  
});
