# LogicUS installation in Ubuntu 20.04

## 1) VSCODE INSTALLATION

### a) Using snap: Search Visual Studio Code in Snap aplication and install or execute the instruction below in terminal:
    
    sudo snap install --classic code

### b) Using apt:  Execute in terminal de following instructions

    # Update repository index
    sudo apt update

    # Install HTTPs support to allow apt to get packages from Microsoft and others
    sudo apt install -y curl apt-transport-https

    # Download the GPG key of Microsoft and addi to apt-key repository
    curl -sSL https://packages.microsoft.com/keys/microsoft.asc -o microsoft.asc
    sudo apt-key add microsoft.asc

    # Add Microsoft repository to system
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"  | sudo tee /etc/apt/sources.list.d/vscode.list

    # Update repository index
    sudo apt update

    # Install vs-code
    sudo apt install -y code


You can launch VSCODE by clicking in the corresponding icon of aplication menu or directly from terminal by executing:

    code

Now, from extensions menu you can install *Elm* (*Elm Tooling*) extension.

## 2) NODEJS AND NPM INSTALLATION

We're going to install them from the terminal, by excuting the following commands:

    # Update repository index
	  sudo apt update
	
	  # Use apt for nodejs installation
	  sudo apt install nodejs
	
	  # Use apt for npm installation
	  sudo apt install npm

## 3) ELM INSTALLATION

We're going to install them from the terminal, by excuting the following commands:

    # Go to Downloads directory 
    cd Downloads/

    # Download the binary of Elm 19.1 for Linux
    curl -L -o elm.gz https://github.com/elm/compiler/releases/download/0.19.1/binary-for-linux-64-bit.gz

So now, A file with name `elm.gz` has to be created in Downloads directory. The binary is download compressed to decrease the download time. So we have to decompress it and install. In the same terminal (or other in the same directory, execute:

    #Decompress `elm.gz`
    gunzip elm.gz

    # Add permissions of execution to the file 
    chmod +x elm

Althoug we already can used we're going to do a final step to be able to execute elm from any directory by adding it to a directory included in the PATH.
    
    # move elm binary file to /usr/local/bin/
    sudo mv elm /usr/local/bin/

So we should be able to call elm directly from terminal, for example executing any of this commands:

    # Help of elm command
    elm --help
    
    # Elm REPL Console
    elm repl

## 4) INSTALL ELM-TEST AND ELM-FORMAT

We're going to install these aditional libraries to allow the error checking and automatical format while edition of elm files. In a terminal we execute:

    sudo npm install --global --unsafe-perm elm-test elm-format

## 5) INSTALL GICENTRE/LITVIS NOTEBOOK

The tool [gicentre/litvis](https://github.com/gicentre/litvis) is a tool developed for integrated Elm with Markdown so we can work with elm similarly of how we work with R in R-Markdown. For install it execute the following actions:

### A. Install prettier and prettier-plugin-elm

    sudo npm install --global --unsafe-perm prettier prettier-plugin-elm

### B. Install some VSCODE additional extensions for litvis:

    # Litvis functionalities
    markdown-preview-enhanced-with-litvis


    # Auto-format del código
    prettier - Code formatter
    
Also we have to do some final configurations to the installed extensions. Under File $\rightarrow$ Preferences $\rightarrow$ Settings, change the following from their default settings:

- Text Editor $\rightarrow$ Formatting: ensure Format On Save is ticked
- Extensions $\rightarrow$ Markdown Preview Enhanced with litvis: ensure Live Update is not ticked.
- Extensions $\rightarrow$ Prettier and ensure Prettier: Resolve Global Modules is ticked.

You should now be good to go! You can see some tutorials at [gicentre/litvis](https://github.com/gicentre/litvis).

***
