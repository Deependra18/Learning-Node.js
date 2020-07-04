//for the file system
const fs=require('fs');
// for coloring the console text
const chalk=require('chalk');

const getNode=()=> "Your Notes...";

const addNote=(title,body)=>{
    const notes=loadNote();
    const duplicate=notes.find((note)=>{
        return note.title===title;
    })
    
 if(!duplicate)
  {
    notes.push({
        title:title,
        body:body
    });
    saveNote(notes);
    console.log(chalk.green.inverse('New Note added!'));
  }
  else{
      console.log(chalk.red.inverse('Note title taken!'));
  }
}


const saveNote=(notes)=>
{
    // stringify takes object and  converts the object to the json string
    const json=JSON.stringify(notes);
    fs.writeFileSync('note.txt',json);
}


const loadNote=()=>{
    // if try block will throw an error then it will directly terminate the code and run the catch block
   try{
   const databuffer= fs.readFileSync('note.txt');
   return JSON.parse(databuffer.toString());
   }
   catch(e)
   {
       return [];
   }
}


const removeNote=(title)=>{
    const notes=loadNote();
   const array=notes.filter((note)=>{
        return note.title!==title;
    })
  if(notes.length>array.length)
    {
        console.log(chalk.green.inverse('note has been removed!'));
        saveNote(array);
    }
    else
    {
        console.log(chalk.red.inverse('Note not found'));
    } 
}


const listNotes=()=>{
    const notes=loadNote();

    if(notes.lengh==0)
    {
        console.log(chalk.red.inverse("Data Not Found"));
    }
    else
     {
         console.log('Your Notes');
        //  for( let i=0;i<notes.length;i++)
        //    console.log(i+1,chalk.green.inverse(notes[i].title));
        notes.forEach((note)=>{
            console.log(note.title);
        })
     }
}



const readNote=(title)=>{
    const notes=loadNote();
    //loadNote(); 
  const note=notes.find((note)=>{
        return note.title==title;
    });
    if(note)
    {
        console.log(chalk.green.inverse(note.title),note.body);
    }
    else
    console.log(chalk.red.inverse('Note not Found'));


}


//for exporing the function
module.exports={
     getNode:getNode,
     addNote:addNote,
     removeNote:removeNote,
     listNotes:listNotes,
     readNote:readNote,

}
