import React from 'react';
import './FinancialQuote.css'; // Import custom CSS for styling

function FinancialQuote() {
    return (
        <section className="financial-quote-container">
            <h2 className="quote-heading">Why Plan Your Finances?</h2>
            <p className="quote-text">"Financial planning is about more than just good spending habits and saving money;
               it's about creating possibilities for your future. Start today, and watch your efforts multiply
               exponentially over time."</p>
            <div className="visuals">
                {/* Use a relative path for images */}
                <img src="/saving.png" alt="Financial Growth" />
            </div>
        </section>
    );
}

export default FinancialQuote;
