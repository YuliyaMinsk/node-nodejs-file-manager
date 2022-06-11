import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cwd } from 'node:process';


export const getHomeDir = () => {
  return process.env.HOME || process.env.USERPROFILE;
}

export const getCurrentDir = () => {
  return cwd();
}

export const getFilePath = (url, filename) => {
  const currentDir = dirname(fileURLToPath(url));
  const filePath = join(currentDir, filename);

  return filePath;
};

export const getArgValue = (argsArray, num = 0, charToCut = '=') => {
  const posOfChar = argsArray[num].search(charToCut);

  if (posOfChar !== -1) {
    return argsArray[num].slice(posOfChar + 1);
  }
}


