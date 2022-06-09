import * as readline from 'node:readline';
import { getHomeDir, getArgValue } from './utils.js';
import { list } from './ls.js';
import { addFile } from './addfile.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const currentDir = getHomeDir();

const argsArray = process.argv.slice(2);
const username = argsArray.length > 0 ? getArgValue(argsArray) : 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDir}`);

rl.on('line', async (input) => {
  const command = input.split(' ')[0];
  const attribute = input.split(' ')[1];

  switch (command) {
    case '.exit': {
      rl.close();
      break;
    }
    case 'up': {
      break;
    }
    case 'cd': {
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
      await addFile(currentDir, attribute);
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
      break;
    }
    case 'os': {
      break;
    }
    case 'hash': {
      break;
    }
    case 'compress': {
      break;
    }
    case 'decompress': {
      break;
    }
    default: console.log(`Invalid input! Try again :)`);
  }
  if (command !== '.exit') {
    console.log(`\nYou are currently in ${currentDir}`);
  }
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`);
});

