import { useEffect, useRef } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({ children, className = '', delay = 0, y = 25 }) => {
  const domRef = useRef(null);

  useEffect(() => {
    // Scroll listener for smart parallax effect
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 1. Background Visuals Parallax
      const parallaxBgs = document.querySelectorAll(
        '.peb-hero-bg, .civil-hero-bg, .arch-hero-bg, .tensile-hero-bg, .roof-hero-bg, .hero-bg, .why-choose-bg, .cta-bg, .advantage-bg'
      );
      
      parallaxBgs.forEach((bg) => {
        const parent = bg.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        
        // Only run calculations if parent is visible in viewport to save performance
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const relativeOffset = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          // Interpolate translation value between -60px and 60px
          const translateValue = (relativeOffset - 0.5) * 120;
          bg.style.transform = `translate3d(0, ${translateValue}px, 0)`;
        }
      });

      // 2. Smart Floating Text Content Parallax
      const parallaxContents = document.querySelectorAll(
        '.peb-hero-content, .civil-hero-content, .arch-hero-content, .tensile-hero-content, .roof-hero-content, .hero-content'
      );

      parallaxContents.forEach((content) => {
        const rect = content.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Slow down the scroll speed of the text elements slightly for dynamic depth
          const relativeOffset = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          const translateValue = (relativeOffset - 0.5) * -40;
          content.style.transform = `translate3d(0, ${translateValue}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    // If it is the global root tracker (no children)
    if (!children) {
      const selectors = [
        'section > div',
        '.accordion-card',
        '.benefit-card',
        '.about-grid > div',
        '.contact-container > div',
        '.why-choose-grid > div',
        '.blog-card',
        '.career-card',
        '.app-card',
        '.why-choose-card'
      ];

      const elementsToReveal = document.querySelectorAll(selectors.join(', '));
      
      elementsToReveal.forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
        }
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      elementsToReveal.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener('scroll', handleParallax);
        elementsToReveal.forEach((el) => observer.unobserve(el));
      };
    } else {
      // Wrapper instance
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      if (domRef.current) {
        observer.observe(domRef.current);
      }

      return () => {
        window.removeEventListener('scroll', handleParallax);
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      };
    }
  }, [children]);

  if (!children) {
    return null;
  }

  const styles = {
    transitionDelay: `${delay}s`,
    transform: `translateY(${y}px)`
  };

  return (
    <div 
      ref={domRef} 
      className={`scroll-reveal ${className}`} 
      style={styles}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
