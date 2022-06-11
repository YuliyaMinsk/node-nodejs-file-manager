import { chdir } from 'node:process';

export const up = async () => {
  try {
    chdir('..');
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};