import readline from "readline/promises";

import { fetchAlbumWithId } from "./api/fetch.js";

import { blue, correct, error, warning } from "./util/chalkColors.js";
import { getIdWithTitle } from "./util/helpers.js";
import { isBetween1and100, isNumber } from "./util/validation.js";

/** Main application function */

const main = async () => {
  // create readline interface to interact with console inputs/outputs
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const restart = () => {
    rl.close();
    main();
  }

  const shouldContinue = async () => {
    const answer = await rl.question(blue("Do you want to still keep searching albums? (y/n) "));

    // If answer matches y or yes, restart application
    // Else if answer matches n or no, kill process
    // Else should repeat until proper input
    if (answer.match(/^y(es)?$/i)) return restart();
    else if (answer.match(/^n(o)?$/i)) return process.exit(0);
    else return shouldContinue();
  }

  try {
    const answer = await rl.question(blue("Which picture album do you want to view? "));

    // If answer is empty, throw error
    if (!answer.length) throw new Error('Invalid input. Expected a non null input');
    // If answer is exit, exit the process
    if (answer === 'exit') return process.exit(0);
    // If answer is not a number, throw error
    if (!isNumber(answer)) throw new Error('Invalid input. Expected a valid number input');
    // When querying for an album out of range the api returns an empty array with a 200 status, so I'm using this validation check as an extra line of precaution
    if (!isBetween1and100(answer)) throw new Error('Enter an album in the available albums range (1 - 100)');

    // attempt to fetch for albums with album id
    const response = await fetchAlbumWithId(answer);

    // if response is bad throw error with response status
    if (!response.ok) throw new Error(response.status);

    const albums = await response.json();

    // check if array of albums has records
    // If it does not have records, log it doesn't have records and log the empty array
    // If it does have records, log the expected `[id] title` output for each record
    if (!albums.length) {
      console.warn(warning('The album you chose has no records!'));
    } else albums.forEach(record => console.log(correct(getIdWithTitle(record.id, record.title))));

    // Prompt for continuing to search albums
    shouldContinue();

  } catch (e) {
    console.error(error(`${e} ... Please try again!`));
    restart();
  }
}

main();

export default main;