import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse(){
    const [searchText, setSearchText] = useState("");
    const noteList = useSelector((store)=>store.NOTE.noteList);
    const filteredList = noteList.filter((note)=>{
        const containsTitle =note.title.toUpperCase().includes(searchText.trim().toUpperCase());
        const containsContent =note.content.toUpperCase().includes(searchText.trim().toUpperCase());

        return containsTitle || containsContent;
    })
    return<div>
        <SearchBar
         
            placeholder={"Search your notes..."}
            onTextChange={setSearchText}
         />
         {
            noteList.length === 0 &&(
                <div className="d-flex justify-content-center mt-5">
                    <span>
                        Vous n'avez pas de note voulez vous en <Link to={"/note/new"}>creer une?</Link>
                    </span>
                </div>
            )
         }
        <NoteList  noteList={filteredList}/>
    </div>
}