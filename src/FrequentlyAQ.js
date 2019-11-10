import React from 'react';

export default function FrequentlyAQ() {
    return (
        <div className="faq text-center">
            <h2 className="p-2 text-red">FAQ</h2>
            <div className="flex-container">
                <div>
                    <p className="p-3 text-center text-red">QUESTION</p>
                    <p className="p-5 text-left">Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.</p>
                </div>
                <div>
                    <p className="p-3 text-center text-red">QUESTION</p>
                    <p className="p-5 text-left">Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.</p>
                </div>
            </div>
            <button type="button" className="btn btn-outline-dark text-center">Read More</button>
        </div>
    )
}