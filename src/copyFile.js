import { copyFile as copy } from 'fs/promises';
import { constants } from 'fs';
import { dirname } from 'path';

export const copyFile = async (input) => {
  try {
    if (input.length !== 2)  {
      throw new Error('Invalid command arguments!');
    }

    const pathToFile = input[0];
    const newPath = input[1];

    const oldPath = dirname(pathToFile);

    await copy(pathToFile, replaceString(oldPath, newPath, pathToFile), constants.COPYFILE_EXCL);
 
    console.log(pathToFile, 'was copied successfully');

  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
