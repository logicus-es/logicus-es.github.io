# LogicUS installation in Windows 10
## 1) INSTALL VSCODE 

From [Vscode home page](https://code.visualstudio.com) download executable *.exe* and install it.

Now, you should install Elm Tooling extension in VS CODE to more confortable work with elm VSCODE.

## 2) INSTALL NODEJS AND NPM

Go to [Node JS Downloads](https://nodejs.org/en/download) get *(.msi)* file and install it.

## 3) INSTALL ELM 

Go to [Elm Installation Guide](https://guide.elm-lang.org/install/elm.html) download Windows installer and install it. Download may be stopped because insegurity alert, ignore them, reactive the download and ignore windows alert on execution.


## 4) INSTALL ELM-TEST AND ELM-FORMAT

We're going to install these aditional libraries to allow the error checking and automatical format while edition of elm files. In a open *Node.js command promt* and execute:

    npm install --global --unsafe-perm elm-test elm-format

## 5) INSTALL GICENTRE/LITVIS NOTEBOOK

The tool [gicentre/litvis](https://github.com/gicentre/litvis) is a tool developed for integrated Elm with Markdown so we can work with elm similarly of how we work with R in R-Markdown. For install it execute the following actions:

### A. Install prettier and prettier-plugin-elm. 

In Node.js Command Prompt execute: 

    npm install --global --unsafe-perm prettier prettier-plugin-elm

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

