import { open } from 'fs/promises';
import { join } from 'path';

export const addFile = async (currentDir, fileName) => {
  let newFile = null;

  try {
    newFile = await open(join(currentDir, fileName), 'a');
    await newFile.close();
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};