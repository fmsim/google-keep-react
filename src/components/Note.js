import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const RemoveNoteClick = () => {
        props.deletenote(props.id);
    };
    return(
    <>
        <div className='noteDiv'>
            <h1 className='title'> {props.title} </h1>
            <p className='textnote'> - {props.content} </p>
            <Button className='addbtn' onClick={RemoveNoteClick}><DeleteOutlineIcon className='addIcon'/></Button>
        </div>
    </>
    );
}

export default Note;