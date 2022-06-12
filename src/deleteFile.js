import { unlink } from 'fs/promises';

export const deleteFile = async (input) => {
  try {
    if (input.length > 1) {
      throw new Error('Invalid command arguments!');
    }

    const pathToFile = input[0];

    await unlink(pathToFile);
    console.log(pathToFile, 'was deleted successfully');

  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};