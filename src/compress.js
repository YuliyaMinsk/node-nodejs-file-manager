import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { join, basename } from 'path';

export const compress = async (input) => {
  try {
    if (input.length > 2) {
      throw new Error('Invalid command arguments!');
    }

    const pathToFile = input[0];
    const pathToDestination = input[1] ? input[1] : '';

    const filename = basename(pathToFile);
  
    await pipeline(
      createReadStream(pathToFile, { encoding: 'utf8' }),
      createBrotliCompress(),
      createWriteStream(join(pathToDestination, filename + '.br'))
    );

    console.log(pathToFile, 'successful compressed.')

  }    
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};