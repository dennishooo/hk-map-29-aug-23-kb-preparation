import prompts from "prompts";

async function main() {
  let total = 0;
  const response = await prompts({
    type: "list",
    name: "value",
    message: "Enter a list of numbers:",
    initial: "",
    separator: ",",
  });

  for (let num of response.value) {
    total += parseInt(num);
  }

  console.log(`The sum of the numbers is: ${total}`);
}

main();
