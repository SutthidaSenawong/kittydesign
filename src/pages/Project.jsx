import React, { useEffect } from 'react';
import vanlife from '../assets/vanlife.png';
import foodApp from '../assets/foodApp.png';
import travel from '../assets/travel-journal.png';
import movie from '../assets/movie-watchlist.png';

export default function Project() {
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
    <div className="project-container hidden">
      <div className="project-top">
        <div>
          <h1>My Project</h1>
          <p>vans rental website</p>
        </div>
        <img src={vanlife} />
      </div>

      <div className="project-2 hidden">
        <p>Food ordering app</p>
        <img src={foodApp} />
      </div>
      <div className="project-3 hidden">
        <p>Travel journal</p>
        <img src={travel} />
      </div>
      <div className="project-4 hidden">
        <p>Movie watchlist</p>
        <img src={movie} />
      </div>
    </div>
  );
}
