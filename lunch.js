/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
*/


const whatToDoForLunch = function (hungry, availableTime) {
  if (!hungry) {
    console.log("Let's get back to work.");
    return;
  };

  if (availableTime < 0) {
    console.log("Time cannot be negative.");
    return;
  }

  if (hungry && availableTime < 20) {
    console.log("Let's pick something up and eat it in the lab.");
  } else if (hungry && availableTime <= 30) {
    console.log("Let's try a place nearby");
  } else {
    console.log("We're in a bootcamp, so we should reconsider how much time we actually have to spare.")
  }
};



