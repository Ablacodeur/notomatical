import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NoteCreate } from 'pages/NoteCreate/NoteCreate';
import { Note } from 'pages/Note/Note';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { NoteBrowse } from 'pages/NoteBrowse/NoteBrowse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element ={<App />}>
        <Route path="/" element= {<NoteBrowse/>}></Route>
        <Route path="/note/new" element= {<NoteCreate />}></Route>
        <Route path="/note/:noteId" element= {<Note />}></Route>
       </Route>
       <Route path="*" element= {<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

