
import { disconnect } from "process";
import React from "react";
import { LanguageServiceMode } from "typescript";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";


function App(props:any){
    return (
        <div className="app_wrapper">
            <Header/>
            <Nav/>
           
            <div className="app_content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs
                        dialogPage={props.state.dialogPage}
                        dispatch={props.dispatch} 
                    />}/>
                    <Route path="/" element={<Profile 
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        />}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </div>
            
        </div>
        
    )
    
 }
export default App;
