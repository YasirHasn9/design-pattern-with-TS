# design-pattern-with-TS

To compile the index.ts to index.js , all we have to do is to run this command in the terminal
tsc + the path of the file

But this is not a good practice because we want to separate where the ts files are and
where the compiled files are
note , we should never play with the folder where the compiled files are

#----------
create 2 files
src/ --> contains all the ts files
build/ --> contains all the compiled files

now , we have a problem need to be fixed which is how could we communicate the 2 files in 2 separate folder ?
luckily, ts has a configuration file where there are a lot of options we can find there
2 of these options are where is the ts and where we compiled them
create a tsconfig.json file by running in the root file
tsc --init

in this file will find 2 properties
"outDir": where is the compiled file
"rootDir": where the ts file
now run the terminal
#-----------

software developer/engineers don't like to repeat themselves because we don't wanna run
tsc every time in the terminal. So the ts there is a flag we can put after the tsc in the terminal
to watch the changes the ts files and compiled them every time for us
