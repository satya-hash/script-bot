const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

// Path to the file you want to modify
const filePath = path.join('/', 'index.html');

// Initialize git
const git = simpleGit();

// Function to make a random change to the file
function makeRandomChange() {
  const randomText = `Random change: ${Math.random().toString(36).substring(2)}\n`;
  try {
    // Append the random text to the file
    fs.appendFileSync(filePath, randomText);
    console.log('File modified with:', randomText);
  } catch (err) {
    console.error('Error modifying the file:', err);
  }
}

// Function to commit and push the changes
async function commitAndPushChanges() {
  try {
    await git.add(filePath);
    await git.commit(`Random update: ${new Date().toISOString()}`);
    await git.push();
    console.log('Changes pushed to GitHub.');
  } catch (err) {
    console.error('Error with Git operations:', err);
  }
}

// Main function
async function main() {
  makeRandomChange();
  await commitAndPushChanges();
}

// Run the script
main().catch((err) => console.error('Error in script execution:', err));
