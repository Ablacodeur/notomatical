import { useState } from "react";
import s from "./style.module.css"
import { Trash } from "react-bootstrap-icons"

export function TextCard({title,subtitle,content,onclickTrach,onClcik}){

    const [isCardHovered,setIsCardHovered]= useState(false);
    const [isTrashHovered,setIsTrashHovered]= useState(false);


    function onclickTrach_(e){
        onclickTrach();
        e.stopPropagation();
    }
    return(
      <div 
        className={`card  ${s.container}`} 
        onClick={onClcik}
        onMouseEnter={()=>setIsCardHovered(true)}
        onMouseLeave={()=>setIsCardHovered(false)}
        style={{ borderColor: isCardHovered? "#0d6efd" : "transparent" }}
        >
        <div className="card-body">
            <div className={s.title_row}>
            <h5 className="card-title">{title}</h5>
            <Trash 
            onClick={onclickTrach_} 
            onMouseEnter={()=>setIsTrashHovered(true)}
            onMouseLeave={()=>setIsTrashHovered(false)}
            style={{ color: isTrashHovered? "#FF7373" : "#B8B8B8" }}
    
            />
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className={`card-text ${s.text_content}`}>
            {content}
            </p>
        </div>


    </div>)
}