import { readdir } from 'fs/promises';

export const list = async (currentDir) => {
  try {
    const files = await readdir(currentDir);
    for (const file of files) {
      console.log(file);
    }
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};