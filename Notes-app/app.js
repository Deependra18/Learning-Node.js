// for importing the file
var notes=require('./check');
//for commands
const yargs=require('yargs');
//create add command 
yargs.command({
    //name of the command 
    command:"add",
    //description what this does
    describe:"add a new note",
    //describe the title and body property 
    builder:{
        title:{
            describe:"note title",
            //it means title is required
            demandOption:true,
            //title takes as string
            type:'string'
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:'string'
        }
    },
    //this code will run on using add command
    handler(argv)
    {
        notes.addNote(argv.title,argv.body);
    }
});

//create  remove command
yargs.command({

    command:'remove',
    describe:"remove a note",
    builder:{
        title:{
            describr:"remove title",
            demandOption:true,
            type:"string",
        },
    },
    handler(argv)
    {
        notes.removeNote(argv.title);
    }

})
yargs.command({
    command:'list',
    title:'list note',
    describe:"list of Notes",
    handler(argv){
        notes.listNotes();
    }
})


yargs.command(
    {
      command:"read",
      title:"read Note",
      describe:"reading Node",
      builder:{
         title:{
         describe:"reading Node",
         demandOption:true,
         type:'string',
         }
        },
         
      handler(argv){
         notes.readNote(argv.title);
      }
    })


//it will get ready of yargs for doing anything which is needed
yargs.parse();

     






