// HowItWorksSection.jsx
import React from 'react';
import './HowItWorksSection.css';

const StepCard = ({ stepNumber, title, description }) => {
  return (
    <div className="step-card">
      <div className="step-number">{stepNumber}</div>
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="how-it-works">
      <h2>How Trademark Engine Works</h2>
      <p>Get your trademark registered in just 3 easy steps using our simple online questionnaire.</p>
      <div className="steps-container">
        <StepCard stepNumber="1" title="Answer a Few Questions" description="Whether you prefer to handle your trademark filing on your own or want the expertise of an attorney, we have options to suit your needs. Simply fill out our short questionnaire to get started." />
        <StepCard stepNumber="2" title="Compile Application and Search" description="We create the official application for you. Plus, we'll conduct a search to reveal direct-hit conflicts." />
        <StepCard stepNumber="3" title="Application Filing" description="Your completed application will be filed with the U.S. Patent and Trademark Office (USPTO)." />
      </div>
      <div className="rating">
        <p>Trademark Engine is rated 4.5 out of 5 based on 31,500 reviews.</p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
