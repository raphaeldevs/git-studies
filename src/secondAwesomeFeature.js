function secondAwesomeFeature() {
  return ">> Yess!! This is your second AWESOME feature! 🥳 <<";
}

function runSecondAwesomeFeature() {
  return new Promise((resolve) => {
    const delay = (Math.random() * 6000) << 0;
    console.log("\n> Starting secondAwesomeFeature...");

    setTimeout(() => {
      console.log(secondAwesomeFeature());
      return resolve(delay);
    }, delay);
  });
}

async function start() {
  const timeToRunSecondAwesomeFeature = await runSecondAwesomeFeature();

  console.log(
    `\n> It's ended. ⏲️ \n> ✨ Done in ${
      timeToRunSecondAwesomeFeature / 1000
    }s.`
  );
  console.log("\nBye bye! 👋");
}

export default start;
