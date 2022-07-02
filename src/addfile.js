import { open } from 'fs/promises';
import { join } from 'path';

export const addFile = async (currentDir, input) => {
  let newFile = null;

  try {
    if (input.length !== 1) {
      throw new Error('Invalid command arguments!');
    }

    const fileName = input[0];

    newFile = await open(join(currentDir, fileName), 'ax');
    await newFile.close();

    console.log(fileName, 'was created successfully');
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};