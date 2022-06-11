import { chdir } from 'node:process';
import { join } from 'path';

export const cd = async (currentDir, directory) => {
  try {
    chdir(join(currentDir, directory));
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};