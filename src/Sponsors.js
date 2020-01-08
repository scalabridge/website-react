import React from 'react';

function Sponsors() {
    const sponsorList = [
        {
            name: "twilio",
            src: "//logo.clearbit.com/twilio.org",
            link: "https://www.twilio.com/"
        },
        {
            name: "stripe",
            src: "//logo.clearbit.com/stripe.com",
            link: "https://stripe.com/"
        },
        {
            name: "lightbend",
            src: "//logo.clearbit.com/lightbend.com",
            link: "https://www.lightbend.com/"
        }
    ]

    return (<div className="text-center sponsor">
        <h1>SPONSORS</h1>
        <div>
            <div className="grid-wrapper">
                {sponsorList.map((sponsor, i) => (
                    <div key={i} className="grid-element">
                        <a href={sponsor.link} rel="noopener noreferrer" target="_blank">
                            <img src={`${sponsor.src}?size=100`} alt={`${sponsor.name}'s logo`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}

export default Sponsors;