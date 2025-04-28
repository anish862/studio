// server.js
const { exec } = require('child_process');
const path = require('path');

// Determine the correct path to the next CLI
const nextCliPath = path.join('node_modules', '.bin', 'next');

// Run the Next.js production server
const command = `${nextCliPath} start -p ${process.env.PORT || 3000}`;
const nextServerProcess = exec(command);

nextServerProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

nextServerProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

nextServerProcess.on('close', (code) => {
  console.log(`Next.js server process exited with code ${code}`);
});

console.log(`Starting Next.js server with command: ${command}`);
