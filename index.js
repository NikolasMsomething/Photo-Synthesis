import readline from "readline/promises";

import { fetchAlbumWithId } from "./api/fetch.js";

import { blue, error } from "./util/chalkColors.js";
import { logIdWithTitle } from "./util/helpers.js";
import { isBetween1and100, isNumber } from "./util/validation.js";

/** Main application function */

const main = async () => {
  // create readline interface to interact with console inputs/outputs
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const answer = await rl.question(blue("Which picture album do you want to view? "));

    // If answer is empty throw error
    if (!answer.length) throw new Error('Invalid input. Expected a non null input')
    // If answer is not a number throw error
    if (!isNumber(answer)) throw new Error('Invalid input. Expected a valid number input');
    // When querying for an album out of range the api returns an empty array with a 200 status, so I'm using this validation check as an extra line of precaution
    if (!isBetween1and100(answer)) throw new Error('The album you are looking for is not available');

    // attempt to fetch for albums with album id
    const response = await fetchAlbumWithId(answer);

    // if response is bad throw error with response status
    if (!response.ok) throw new Error(response.status);

    const albums = await response.json();

    // check if array of albums has records
    // If it does not have records, log it doesnt have records and log the empty array
    // If it does have records, log the expected `[id] title` output for each record
    if (!albums.length) {
      console.log('The album you chose has no records!');
    } else albums.forEach(record => logIdWithTitle(record.id, record.title));

    process.exit(0);
  } catch (e) {
    console.log(error(`${e} ... Please try again!`));
    rl.close();
    main();
  }
}

main();
