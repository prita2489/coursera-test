var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(() => {
  for(let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0);
    if (firstLetter.toLowerCase() === "j" ){
      console.log("Good Bye "+ names[i]);      
    } else {
      console.log("Hello "+ names[i]);
    }
  }
})();
