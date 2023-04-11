const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
let Nickname = '';
let activity = '';
let music = '';
let food = '';
let meal = '';
let sport = '';
let superPower = '';


rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  Nickname = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              superPower = answer;
              console.log(`Profile: \n${Nickname} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower} at inopportune times.\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

