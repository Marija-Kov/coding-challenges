// JUNE 2022

function likes(names) {
  //takes in array of names
  //if array is empty, return: "no one likes this"
  //if arr.length is 1, return: arr[0] + " " + "likes this"
  //if arr.length is 2, return: arr[0] + " " +  "and" + " " + arr[1] + " " + "like this"
  //if arr. length is 3, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + arr[2] + " " + "like this"
  //if arr.length is 4+, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + (arr.length-2) + " " + "others like this"

  //some questions:
  //will the array contain only strings?
  //how do I handle the non-string values in the array? Filter them out? Replace them?


  if (names.length === 0){
      console.log('no one likes this')
  } else if (names.length === 1) {
      console.log(`${names[0]} likes this`)
  } else if (names.length === 2){
      console.log(`${names[0]} and ${names[1]} like this`);
  } else if (names.length === 3){
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  } else if (names.length > 3){
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
  }

}

// likes([])
// likes(["keech"]);
// likes(["keech", "poozh"]);
// likes(["keech", "poozh", "cecee"]);
// likes(["keech", "poozh", "cecee", "pij", "chook", "woo"]);

document.addEventListener('click', e => {
 console.log(`you clicked on the ${e.target.tagName} element`);
 console.log(`${e.clientX}px away from the left edge of the body element of the page (clientX)`);
 console.log(`${e.pageX}px away from the left edge of the body element of the page (pageX)`);
 console.log(`${e.screenX}px away from the left edge of your screen (screenX)`);
 console.log(
   `${e.offsetX}px away from the left edge of the ${e.target.tagName}(offsetX)`
 );
})
    

