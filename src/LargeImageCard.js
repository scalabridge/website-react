import React from 'react';

function LargeImageCard() {
    return (<div className="large-card-container">
        <img src={process.env.PUBLIC_URL + "card-big.png"}/>
        <div className="large-card">
                <div>
                    <h2 className="text-white">WHO WE ARE</h2>
                    <p className="p-5 text-white"> Here at ScalaBridge, we are driven by a single goal; to do our part in
                        making the tech community a better place for all. We facilitate change in diversifying the tech industry.</p>
                    <button type="button" className="btn btn-outline-light">Get in Touch</button>
                </div>
        </div>
    </div>);
}

export default LargeImageCard;