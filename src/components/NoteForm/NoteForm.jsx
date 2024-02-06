import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css"
import { PencilFill,TrashFill } from "react-bootstrap-icons"
import { useState } from "react";

export function NoteForm({isEditable= true, title,onClickTrash,onClickEdit,onSubmit, note}){
    const [formValues,setFormValues] =useState({
        title: note?.title || "", 
        content:note?.content || ""
    })
    function updateFormValues(e){
       setFormValues({...formValues, [e.target.name]:e.target.value});
    }
    const actionIcon =(
        <>
            <div className="col-1">{onClickEdit && <PencilFill onClick={onClickEdit} />}</div>
            <div className="col-1">{onClickTrash && <TrashFill onClick={onClickTrash} />}</div>
        </>
    );

    const titleInput =(<>
        <label className="form-label">Title</label>
        <input 
            type="text" 
            name="title"
            className="form-control"
            onChange={updateFormValues}
            value={formValues.title}     
            />

    </>);
    const contentInput =(<>
        <label className="form-label" row="5">Content</label>
        <textarea 
            name="content"
            type="text"
            className="form-control"
            onChange={updateFormValues}
            value={formValues.content}
        />
    </>);
    const submitButton =(<div className={s.submit_btn}>
        <ButtonPrimary onClick={()=>onSubmit(formValues)} >Submit</ButtonPrimary>
    </div>);

    return(
    <div className={s.container}>
        <div className="row justify-content-space-between">
            <div className="col-10"><h2 className="mb-3">{title}</h2> </div>
            {actionIcon}
        </div>
        <div className={`mb-3 ${s.title_input_container}`}>{isEditable && titleInput}</div>
        <div className={`mb-3 `}> { isEditable? contentInput: <pre> {note.content}</pre>}</div>
        {onSubmit && submitButton}

    </div>)

}