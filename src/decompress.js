import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { join, basename } from 'path';

export const decompress = async (input) => {
  try {
    if (input.length > 2) {
      throw new Error('Invalid command arguments!');
    }

    const pathToFile = input[0];
    const pathToDestination = input[1] ? input[1] : '';

    const filename = basename(pathToFile);
  
    await pipeline(
      createReadStream(pathToFile),
      createBrotliDecompress(),
      createWriteStream(join(pathToDestination, filename.slice(0, -3)))
    );

    console.log(pathToFile, 'successful decompressed.')

  }    
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};