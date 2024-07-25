import React from 'react';
import './App.scss';

import StartScreen from "../src/layouts/start_screen/StartScreen";
import {BrowserRouter} from "react-router-dom";
import HowItWork from "../src/layouts/how_it_work/HowItWork";
import ThirdBlock from "./layouts/third_block/ThirdBlock";
import Reviews from "../src/layouts/reviews/Reviews";
import Questions from "../src/layouts/questions/Questions";
import Notes from "../src/layouts/notes/Notes";
import ContactForm from "../src/layouts/contact_form/ContactForm";
import Footer from "../src/layouts/footer/Footer";


function App() {
    return (
        <BrowserRouter>
            <div className={'app_container'}>
                <StartScreen/>
                <HowItWork/>
                <ThirdBlock/>
                <Reviews/>
                <Questions/>
                <Notes/>
                <ContactForm/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
