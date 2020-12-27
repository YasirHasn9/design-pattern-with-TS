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

#------
concurrent compilation and execution
Now, our project is going to be about sorting and our work is not gonna be on the browser.
we need a way to the run the complied file which is easy we can use the node command line in the terminal and happy days
run the terminal
<strong>
node + "./path of the file"
</strong>
again this is a waste of time and also we have other people work their ass off to make easier for use
let's create a .json file and install 2 packages <bold>nodemon</bold> & <bold>concurrently</bold>

<bold>nodemon</bold>: is responsible to execute our code in index.js
<bold>concurrently</bold> is responsible to compiled our code in index.ts

now, we should configure the package.json
"script": {
"start:build:"tsc -w" to compile the ts files
"start:run: "nodemon build/index.js" to run the code
"start" : "concurrently npm:start:\*" run 2 script at the same time node and ts code
}

##--------
sometime , we have more than one type, in this case we are gonna use the |
so our function/methods will return one of the types we are gonna deal with but we don't know which one. in this case, ts provide something called a type guard
function sort(collection: number[] | string){
here we have 2 types and we dont know which one the client is going to use. Here it comes the type of the life guard
if(collection instanceof Array ){
do something
instanceof works with every other types rather than the once that the typeof is working with
}

    if(typeof collection === "string"){
        do something
        note
        typeof works with string , number , boolean and symbol
    }

}

don't forget what the | is doing under the hood, it is taking the 2 types and looking for something to common in their properties and compare them if it find at least one common area.
