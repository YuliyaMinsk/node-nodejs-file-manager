import * as readline from 'node:readline';
import { getHomeDir, getCurrentDir, setCurrentDir, getArgValue } from './utils.js';

import { up } from './up.js';
import { list } from './ls.js';
import { addFile } from './addfile.js';
import { cd } from './cd.js';
import { os } from './os.js';
import { hash } from './hash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { deleteFile } from './delete.js'

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
      break;
    }
    case 'add': {
      await addFile(currentDir, attributes);
      break;
    }
    case 'rn': {
      break;
    }
    case 'cp': {
      break;
    }
    case 'mv': {
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

