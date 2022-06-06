document.addListenerEvent("DOMContentLoaded", function(){
    const button = document.getElementById("notifliable")
    button.addListenerEvent('click', function(){
      console.log("Printing a Message!")
    })
  });