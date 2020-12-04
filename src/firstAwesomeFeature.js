const firstAwesomeFeature = "> This is your first awesome feature! 😎 <";

function runFirstAwesomeFeature() {
  return new Promise((resolve) => {
    console.log("> Running your first awesome feature...");

    setTimeout(() => {
      console.log(firstAwesomeFeature);
      return resolve();
    }, 5000);
  });
}

function closeFirstAwesomeFeature() {
  return new Promise((resolve) => {
    console.log("> Closing your first awesome feature...");

    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

async function start() {
  await runFirstAwesomeFeature();
  await closeFirstAwesomeFeature();

  console.log("> This ended. Bye bye! 👋");
}

export default start;
