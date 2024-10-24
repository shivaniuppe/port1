import React from 'react';

function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <iframe
                src="/Users/shivaniuppe/Desktop/portfolio/public/Resume.pdf"
                title="Shivani Uppe Resume"
                style={{ width: '100%', height: '500px' }}>
            </iframe>
            <a href="/Users/shivaniuppe/Desktop/portfolio/public/Resume.pdf" download>Download Resume</a>
        </div>
    );
}

export default Resume;
