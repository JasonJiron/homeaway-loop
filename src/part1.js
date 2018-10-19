let numbers = () => {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 4 == 0)
      console.log('HomeAway');
    else if (i % 3 == 0)
      console.log('Home');
    else if (i % 4 == 0)
      console.log('Away');
    else console.log(i);
  }
}

numbers();