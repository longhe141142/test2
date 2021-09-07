# Table of contents
- [Install nvm](#install-nvm)
- [USAGE](#usage)
  * [Install LASTED release of NodeJS](#install-lasted-release-of-nodejs)
  * [List all node version available to install](#list-all-node-version-available-to-install)
  * [Install a specific version](#install-a-specific-version)
    + [Install a specific version:](#install-a-specific-version-)
    + [Install the latest release:](#install-the-latest-release-)
    + [Install an older LTS release by codename:](#install-an-older-lts-release-by-codename-)
    + [List installed versions](#list-installed-versions)
    + [Switch to another version](#switch-to-another-version)
      - [switch to specific version:](#switch-to-specific-version-)
      - [Switch to the latest installed version](#switch-to-the-latest-installed-version)
      - [Use the latest LTS version:](#use-the-latest-lts-version-)



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
## Install LASTED release of NodeJS
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
- Verify it worked, and that the version is correct:
  ```
  node --version
  # => v10.16.3
  which node
  # => /Users/joe/.nvm/versions/node/v10.16.3/bin/node
  ```
## List all node version available to install
- To see the entire list of Node.js versions available to install, enter the following:
  ```
  nvm ls-remote
  ```
## Install a specific version

### Install a specific version:
- Choose one specific node version and type(Example):
  ```
  nvm install 8.16.2
  ```
### Install the latest release:
```
nvm install node
```
### Install an older LTS release by codename:
```
nvm install carbon
# => Installs v8.16.2 the latest release of the Carbon LTS line.
```
### List installed versions
- You can see which versions of Node.js you have installed already, and therefore which ones you  can use with the nvm ls command:
```
nvm ls
```
### Switch to another version

#### switch to specific version:
- For a specific version provide a version number:
```
nvm use 10.16.3
# => Now using node v10.16.3 (npm v6.9.0)
```

#### Switch to the latest installed version

```
nvm use node
```
#### Use the latest LTS version:
```
nvm use --lts
```









  
  

    




  



