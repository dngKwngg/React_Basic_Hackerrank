import React from "react";

function Slides({ slides }) {
    const [activeStep, setActiveStep] = React.useState(0);

    const next = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const prev = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const restart = () => {
        setActiveStep(0);
    };

    const renderContent = () => {
        let slide = slides[activeStep];
        return (
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        );
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    onClick={restart}
                    data-testid="button-restart"
                    className="small outlined"
                    disabled={activeStep === 0}
                >
                    Restart
                </button>
                <button
                    onClick={prev}
                    data-testid="button-prev"
                    className="small"
                    disabled={activeStep === 0}
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    data-testid="button-next"
                    className="small"
                    disabled={activeStep === slides.length - 1}
                >
                    Next
                </button>
            </div>
            {renderContent()}
        </div>
    );
}

export default Slides;
