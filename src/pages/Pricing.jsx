import React, { useEffect } from 'react';
import logo from '../assets/kitty-logo.png';

export default function Pricing() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup function
    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-box hidden">
          <h2>Basic</h2>
          <h3>$40</h3>
          <ul>
            <li>Single page website</li>
            <li>Basic design</li>
            <li>Site set up</li>
            <li>Business Email</li>
          </ul>
          <div className="time-container">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>3 days delivery</p>
          </div>
        </div>
        <div className="pricing-box hidden">
          <h2>Standard</h2>
          <h3>$70</h3>
          <ul>
            <li>Multi-page(Upto 7 pages)</li>
            <li>Standard design</li>
            <li>Site set up</li>
            <li>Business Email</li>
          </ul>
          <div className="time-container">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>7 days delivery</p>
          </div>
        </div>
        <div className="pricing-box hidden">
          <h2>Premium</h2>
          <h3>$100</h3>
          <ul>
            <li>Multi-page(Upto 10 pages)</li>
            <li>Advance design</li>
            <li>Site set up</li>
            <li>Business Email</li>
          </ul>
          <div className="time-container">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>14 days delivery</p>
          </div>
        </div>
      </div>
      <div className="reason-container hidden">
        <h1>Why us ?</h1>
        <ul>
          <li>Unlimited Revisions</li>
          <li>Quality Website</li>
          <li>3 month free-of-cost bug support in our original work, if any</li>
          <li>We do the best for your project</li>
        </ul>
      </div>
    </>
  );
}
