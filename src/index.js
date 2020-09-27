#!/usr/bin/env node

# Include dependencies
const input = require('./input');
const validate = require('./validate');

# Declare variables
const PATH = input('PATH') || '.';
const IGNORE_PACKAGES = input('IGNORE_PACKAGES') || [];
const IGNORE_FILES = input('IGNORE_FILES') || [];

# Main function
const main = async () => {
  const options = {
    igMatches: IGNORE_PACKAGES,
    igFiles: IGNORE_FILES,
  };

  try {
    await validate(PATH, options);
  } catch(e) {
    # Log error
    console.log(e && e.message);
    process.exit(1);
  }
  
  # Log successful operation
  console.log('DONE: All dependencies are set correctly');
};

main();
