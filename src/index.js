import * as readline from 'node:readline';
import { getHomeDir, getCurrentDir, setCurrentDir, getArgValue } from './utils.js';

import { help } from './help.js';
import { up } from './up.js';
import { list } from './ls.js';
import { addFile } from './addfile.js';
import { deleteFile } from './deleteFile.js'
import { renameFile } from './renameFile.js';
import { copyFile } from './copyFile.js';
import { moveFile } from './moveFile.js';
import { readFile } from './readFile.js';
import { cd } from './cd.js';
import { os } from './os.js';
import { hash } from './hash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentDir = setCurrentDir(getHomeDir());

const argsArray = process.argv.slice(2);
const username = argsArray.length > 0 ? getArgValue(argsArray) : 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDir}`);

rl.on('line', async (input) => {
  const inputArray = input.split(' ');
  const command = inputArray[0];
  const attributes = inputArray.slice(1);

  switch (command) {
    case '.exit': {
      rl.close();
      break;
    }
    case 'help': {
      await help();
      break;
    }
    case 'up': {
      await up();
      break;
    }
    case 'cd': {
      await cd(currentDir, attributes);
      break;
    }
    case 'ls': {
      await list(currentDir);
      break;
    }
    case 'cat': {
      await readFile(attributes);
      break;
    }
    case 'add': {
      await addFile(currentDir, attributes);
      break;
    }
    case 'rn': {
      await renameFile(attributes);
      break;
    }
    case 'cp': {
      await copyFile(attributes);
      break;
    }
    case 'mv': {
      await moveFile(attributes);
      break;
    }
    case 'rm': {
      await deleteFile(attributes);
      break;
    }
    case 'os': {
      await os(attributes);
      break;
    }
    case 'hash': {
      await hash(attributes);
      break;
    }
    case 'compress': {
      await compress(attributes);
      break;
    }
    case 'decompress': {
      await decompress(attributes);
      break;
    }
    default: console.log(`Invalid input! Try again :)`);
  }
  
  if (command !== '.exit') {
    currentDir = getCurrentDir();
    console.log(`\nYou are currently in ${currentDir}`);
  }
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`);
});

