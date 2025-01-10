function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      console.log("Loop is breaking");
      break; // Exit the loop when i is 5
    }
  }
  console.log("Loop has finished");
}