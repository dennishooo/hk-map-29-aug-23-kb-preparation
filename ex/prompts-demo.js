import prompts from "prompts";

// written in a more simplified way
// (async () => {
//   const response = await prompts({
//     type: 'number',
//     name: 'value',
//     message: 'How old are you?',
//     validate: value => value < 18 ? `Nightclub is 18+ only` : true
//   });

//   console.log(response); // => { value: 24 }
// })()

async function main() {
  console.log("will this be printed????");

  const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  });
  console.log("will this be printed???");
  console.log(response);
  console.log("will this be printed?");
}

main();
