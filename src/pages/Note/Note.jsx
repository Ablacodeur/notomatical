import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { deleteNote, updateNote } from "store/note/note-slice";

export function Note(){
    const {noteId}= useParams();
    const [isEditable, setIsEditable]= useState(false)
    const note = useSelector((store) =>store.NOTE.noteList.find((note)=>note.id === noteId));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function submit(formValues){
        const updatedNote = await (NoteAPI.updateById({
            ...formValues,
            id: note.id
        }));
        dispatch(updateNote(updatedNote));
        setIsEditable(false);
    }

    function deleteNote_(note){
        if(window.confirm("supprimer la note?")){
            NoteAPI.deleteById(note.id);
            dispatch(deleteNote(note));
            navigate("/")

        }
    }

    return<>
    {note && <NoteForm 
    onClickEdit={()=>setIsEditable(!isEditable)} 
    onClickTrash={()=>deleteNote_(note)} 
    isEditable={isEditable} 
    title={note.title} 
    note={note} 
    onSubmit={isEditable && submit} />}

    </>
}