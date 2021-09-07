# Table of contents

# Install nvm
- FOllowing this step:
  * Before installing nvm, run this in terminal: touch ~/.bash_profile
  * After, run this in terminal:
  ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash ```
  * **Important**... - DO NOT forget to Restart your terminal **OR** use command source ```~/.nvm/nvm.sh``` _(this will refresh the available commands in your system path)._
  * In the terminal, use command nvm --version and you should see the version.
More? Find here: [Instruction](https://heynode.com/tutorial/install-nodejs-locally-nvm/)
- CHeck nvm version:
  - ```command -v nvm```

# USAGE
- Use nvm to install the latest LTS release of Node.js:
  ```nvm install --lts```
- Expected:
  ```
   # Output
   Installing latest LTS version.
   Downloading and installing node v10.16.3...
   Downloading https://nodejs.org/dist/v10.16.3/node-v10.16.3-darwin-x64.tar.xz...
   ######################################################################## 100.0%
   Computing checksum with sha256sum
   Checksums matched!
   Now using node v10.16.3 (npm v6.9.0)
   Creating default alias: default -> lts/* (-> v10.16.3)
  ```  



