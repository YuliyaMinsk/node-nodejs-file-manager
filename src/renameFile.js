import { rename } from 'fs/promises';
import { basename } from 'path';

export const renameFile = async (input) => {
  try {
    if (input.length !== 2)  {
      throw new Error('Invalid command arguments!');
    }

    const pathToFile = input[0];
    const newFileName = input[1];

    const filename = basename(pathToFile);

    await rename(pathToFile, replaceString(filename, newFileName, pathToFile));
 
    console.log(pathToFile, 'was renamed successfully');

  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
