import { createReadStream } from 'fs';

export const readFile = async (input) => {
  const promis = new Promise((resolve, reject) => {
    try {
      if (input.length > 1) {
        throw new Error('Invalid command arguments!');
      }

      const pathToFile = input[0];
    
      const fileToCreateHash = createReadStream(pathToFile, { encoding:'utf-8' });

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
          console.log(data);
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