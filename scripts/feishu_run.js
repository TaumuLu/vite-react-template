import minimist from 'minimist'

import { send } from './feishu.js'

const argv = minimist(process.argv.slice(2))

// console.log('argv', argv)
// console.log('env', env)

send(argv.mode)
