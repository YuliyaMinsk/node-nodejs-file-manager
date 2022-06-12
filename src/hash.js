import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join, basename } from 'path';

export const hash = async (input) => {
  const promis = new Promise((resolve, reject) => {
    try {
      if (input.length > 1) {
        throw new Error('Invalid command arguments!');
      }

      const pathToFile = input[0];
    
      const fileToCreateHash = createReadStream(pathToFile);
      const hash = createHash('sha256');

      fileToCreateHash.on('error', (err) => {
        console.error('Operation failed. ' + err.message)
        resolve();
      });
      fileToCreateHash.on('end', () => {
        resolve();
      });
      fileToCreateHash.on('readable', () => {
        const data = fileToCreateHash.read();
        if (data) {
          hash.update(data);
        } else {
          console.log('hash: ' + hash.digest('hex'));
        }
      });

    }    
    catch(err) {
      console.error('Operation failed. ' + err.message);
      resolve();
    }
  });
  await promis;  
};
