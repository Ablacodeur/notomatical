import { Header } from 'components/Header/Header';
import s from "./style.module.css";
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { NoteAPI } from 'api/note-api';
import { useDispatch } from 'react-redux';
import { setNoteList } from 'store/note/note-slice';


export function App() {
  const dispatch = useDispatch()

  async function fetchAllNotes(){
    const NoteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(NoteList));
  };

  useEffect(()=>{
    fetchAllNotes();
  },[]);
  return (
  <div>
  <Header />
  <div className={s.outlet_container}>
  <Outlet></Outlet>
  </div>
  </div>
  );
}

