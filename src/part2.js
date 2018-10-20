let homeawayLoop = (range, multiples, words) => {
  for (var i = 0; i <= 100; i++)
    if (i >= range[0] && i <= range[1] && i % multiples[0] == 0 && i % multiples[1] == 0)
      console.log(`${i} ${words[0]} ${words[1]}`);
    else if (i >= range[0] && i <= range[1] && i % multiples[0] == 0)
      console.log(`${i} ${words[0]}`);
    else if (i >= range[0] && i <= range[1] && i % multiples[1] == 0)
      console.log(`${i} ${words[1]}`);
}

homeawayLoop([15, 90], [2,5],["Batty", "Beacon"]);