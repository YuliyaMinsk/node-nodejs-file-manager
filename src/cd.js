import { chdir } from 'node:process';
import { join, isAbsolute } from 'path';

export const cd = async (currentDir, directory) => {
  try {
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