const firstAwesomeFeature = "> This is your first awesome feature! 😎 <";

function runfirstAwesomeFeature() {
  return new Promise((resolve) => {
    console.log("> Running your first awesome feature...");

    setTimeout(() => {
      console.log(firstAwesomeFeature);
      return resolve();
    }, 5000);
  });
}

function closefirstAwesomeFeature() {
  return new Promise((resolve) => {
    console.log("> Closing your first awesome feature...");

    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

async function start() {
  await runfirstAwesomeFeature();
  await closefirstAwesomeFeature();

  console.log("> This ended. Bye bye! 👋");
}

start();
