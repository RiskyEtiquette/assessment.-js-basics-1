/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition = "Git is a system which saves and tracks changes made to any set of files, It is often used for coders to collaborate and sync any progress or changes that are made to a file";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = "GitHub is a website and service that hosts and tracks the changes of projects using Git, an open-source version control system. Learn how GitHub works, what it offers, and how it differs from other version control systems and social networking platforms.";
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
var gitInitDefinition = "git init is a command that creates a new, empty Git repository or reinitializes an existing one. It creates a hidden directory called .git that stores the metadata, objects, and refs that Git uses and creates as part of the project's history.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = "git clone is a command that creates a copy of an existing repository or branch within a repository. It downloads all the files, directories, history, and refs from the remote repository to the local machine.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
var gitStatusDefinition = "git status is a command that shows the state of the working directory and the staging area. It displays the paths that have differences between the index file and the current HEAD commit, the paths that have differences between the working tree and the index file, and the paths in the working tree that are not tracked by Git or ignored by .gitignore.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
var gitAddDefinition = "git add is a command that adds new or changed files in the working directory to the staging area, marking them for inclusion in the next commit. It allows you to select the files or segments of code that you want to commit.";
var gitAddCode = "git add .";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
var gitCommitDefinition = "git commit is a command that records the staged changes as a new snapshot in the project's history. It creates a new commit object with a unique identifier, a message, and metadata such as the author, timestamp, and parent commit.";
var gitCommitCode = "git commit -m \"initial commit\""; // using var keyword and double quotes


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

var gitPushDefinition = "git push is a command that uploads the local repository content to a remote repository. It transfers the local commits to the remote branch, making them accessible to other collaborators or updating the remote repository with the local changes.";
