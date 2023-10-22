import prompts from "prompts";

async function main() {
  let total = 0;
  while (true) {
    const response = await prompts({
      type: "number",
      name: "value",
      message: "Enter a number (enter 0 to stop):",
    });
    if (response.value != "0") total += response.value;
    if (response.value === 0) break;
  }
  console.log(`The sum of the numbers is: ${total}`);
}

main();
