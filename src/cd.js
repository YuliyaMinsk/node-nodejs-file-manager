import { chdir } from 'node:process';
import { join, isAbsolute } from 'path';

export const cd = async (currentDir, input) => {
  try {
    if (input.length !== 1) {
      throw new Error('Invalid command arguments!');
    }

    const directory = input[0];

    if (isAbsolute(directory)) {
      chdir(join(directory));
    } else {
      chdir(join(currentDir, directory));
    }
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};