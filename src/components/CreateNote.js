import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [textboxVis , settextboxVis] = useState(false);
    const [AddNote, setAddNote] = useState({
        title:'',
        content:''
    });

    const NoteChangeEvent = (event) => {
        
        const {name,value} = event.target;

        setAddNote((prevContent)=>{
            return{
                ...prevContent,
                [name]: value,
            };
        });
    };

    const AddNoteClick = () => {
        props.passnote(AddNote);
        setAddNote({
            title:'',
            content:''
        });
    }

    const showTextbox = () => {
        settextboxVis(true);
    }
    const hideTextbox = () => {
        settextboxVis(false);
    }
    return(
    <>
        <div className='CreateNote'>

            {textboxVis?<input type='text' name='title' value={AddNote.title} className='titleText' placeholder='Title' onChange={NoteChangeEvent} autoComplete="off"/>: null}
            <textarea rows='3' name='content' value={AddNote.content} className='noteText' placeholder='Write Here' onChange={NoteChangeEvent} onClick={showTextbox} onDoubleClick={hideTextbox}></textarea>
            {textboxVis?<Button className='addbtn' onClick={AddNoteClick}><AddIcon className='addIcon'/></Button>: null}
        </div>
    </>
    );
}

export default CreateNote;