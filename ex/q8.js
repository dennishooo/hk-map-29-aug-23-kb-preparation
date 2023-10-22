import prompts from "prompts";

async function main() {
  let ans = Math.floor(Math.random() * 6 + 1);
  console.log(ans);
  let players = [];
  while (true) {
    const response = await prompts({
      type: "text",
      name: "player",
      message: "Enter player 1 name (enter nothing to stop): ",
    });

    if (response.player === "") break;
    players.push({ name: response.player, score: 0, guess: null });
  }
  console.log(
    `Here are the player names and their scores: ` + JSON.stringify(players)
  );

  for (let player of players) {
    const response = await prompts({
      type: "number",
      name: "guess",
      message: `${player.name}'s guess the number (1-6):`,
    });
    player.guess = response.guess;
    if (player.guess === ans) player.score++;
  }
  console.log("The scores: " + JSON.stringify(players));
}

main();
