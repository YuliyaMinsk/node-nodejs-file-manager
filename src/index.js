import * as readline from 'node:readline';
import { EventEmitter, errorMonitor } from 'node:events';
import { getArgValue } from './utils.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const argsArray = process.argv.slice(2);
const username = argsArray.length > 0 ? getArgValue(argsArray) : 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);

const event = new EventEmitter();
event.on('.exit', () => rl.close());

rl.on('line', (input) => {
  const command = input.split(' ')[0];
  switch (command) {
    case '.exit': {
      rl.close();
      break;
    }
    default: console.log(`Something goes wrong! Try again :)`);
  }
});

rl.on('SIGINT', () => rl.close());
rl.on('close', () => console.log(`Thank you for using File Manager, ${username}!`));
