import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

export const hash = async (currentDir, fileName) => {
  const promis = new Promise((resolve, reject) => {
    try {
      if (fileName.length > 1) {
        throw new Error('Invalid command arguments!');
      }
    
      const fileToCreateHash = createReadStream(join(currentDir, fileName[0]));
      const hash = createHash('sha256');

      fileToCreateHash.on('error', (err) => {
        console.error('Operation failed1. ' + err.message)
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
      console.error('Operation failed2. ' + err.message);
      resolve();
    }
  });
  await promis;  
};
