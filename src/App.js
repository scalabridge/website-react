import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import ImageCard from "./ImageCard";
import LargeImageCard from "./LargeImageCard";
import CodeOfConduct from "./CodeOfConduct";
import Sponsors from "./Sponsors";


function App() {
    return (
        <div>
            <Navbar/>
            <div className="parallax">
                <div className="centered">
                    <h1>SCALABRIDGE</h1>
                    <h3>Working Towards a Brighter Future</h3>
                </div>
            </div>

            <div className="main">
                <LargeImageCard/>
                <h2 className="p-2 text-center">WHAT WE DO</h2>
                <p className="p-2 text-center">Workshops & 12-Week Programs</p>
                <p className="p-5 text-center">ScalaBridge workshops are free and available for underrepresented minorities in tech. The program usually take students through the basics of programming in Scala, teaching students functional programming and Scala fundamentals. Currently, we have one-day long workshops and as well as 12-week programs across the globe.</p>
                <div className="flex-container">
                    <ImageCard topText="ADVOCACY" bottomText ="Helping The Community" image="card1.png" bgColor="#085255"/>
                    <ImageCard topText="SUPPORT" bottomText ="Reinforcing our Commitment" image="card2.png" bgColor="#A54440"/>
                    <ImageCard topText="EDUCATION" bottomText ="One Step at a Time" image="card3.png" bgColor="#E2ABA9"/>
                </div>
                <CodeOfConduct/>
                <Sponsors/>
            </div>
        </div>
    );
}

export default App;
