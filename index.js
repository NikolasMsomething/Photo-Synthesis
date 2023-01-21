const readline = require("readline/promises");

const { fetchAlbumWithId } = require("./api/fetch");

const { logIdWithTitle } = require("./util/helpers");
const { isArrayLengthy, isBetween1and100, isNumber } = require("./util/validation");

/** Main application function */

const main = async () => {
  // create readline interface to interact with console inputs/outputs
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const answer = await rl.question("Which picture album do you want to view? ");

    if (!isNumber(answer)) {
      throw new Error('Invalid input. Expected a valid number input');
    }

    // The API returns an empty array with a 200 status so I'm using this validation check as an extra line of precaution
    if (!isBetween1and100(answer)) {
      throw new Error('The album you are looking for is not available');
    }

    // attempt to fetch for albums with album id
    const response = await fetchAlbumWithId(answer);

    // if response is bad throw error with response status
    if (!response.ok) throw new Error(response.status);

    const albums = await response.json();

    // check if array of albums has records
    // if it does not have records, log it doesnt have records and log the empty array
    // if it does have records, log the expected `[id] title` output for each record
    if (!isArrayLengthy(albums)) {
      console.log('The album you chose has no records!');
    } else albums.forEach(record => logIdWithTitle(record.id, record.title));

    process.exit(0);
  } catch (error) {
    console.log(`${error} ... Please try again!`);
    rl.close();
    main();
  }
}

main();
