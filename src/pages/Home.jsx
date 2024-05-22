import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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

    const hiddenElements = document.querySelectorAll('.hidden-home');
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
    <div className="home-container hidden-home">
      <div>
        <h1>
          <span>Empower Your Business.</span> <br />
          with a captivating website.
        </h1>
        <p>Let's unlock the full potential of your brand. Hello</p>
      </div>
      <Link to="/pricing" className="btn">
        Check the price
      </Link>
    </div>
  );
}
