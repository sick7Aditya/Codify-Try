import { Link, useNavigate } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  const navigate = useNavigate();
  function goAbove() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function handleClick(lang) {
    localStorage.setItem('LangOuter', lang);
    goAbove();
    navigate(`/Components/CODEPART?lang=${lang}`);
  }
  return (
    <footer className="footer">
      <hr/>
      <div className="footer-container">
        <div className="footer-column">
          <h3><u>Codify.COM</u></h3><br />
          <ul>
            <li onClick={goAbove()}><Link to="/about" id="abt">About</Link></li>
            <li onClick={goAbove()}><Link to="/contact" id="con">Contact</Link></li>
          </ul><br />
          <h3><u>SOCIAL</u></h3>
          <ul className="icons">
            <li> <a href="https://www.linkedln.com"  target="_blank"> <i className="fa-brands fa-linkedin-in"></i> </a> </li>
            <li> <a href="https://www.facebook.com"  target="_blank"> <i className="fa-brands fa-square-facebook"></i> </a> </li>
            <li> <a href="https://www.instagram.com" target="_blank"> <i className="fa-brands fa-instagram"></i> </a> </li>
            <li> <a href="https://www.twitter.com"   target="_blank"> <i className="fa-brands fa-twitter"></i> </a> </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3><u>LANGUAGES</u></h3>
          <div className="language-column">
            <ul>
              <li><button className="footer-custom-btn" onClick={() => handleClick('javascript')}>JavaScript</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('python')}>Python</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('java')}>Java</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('c')}>C</button></li>
            </ul>
            <ul>
              <li><button className="footer-custom-btn" onClick={() => handleClick('cpp')}>C++</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('ruby')}>Ruby</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('kotlin')}>Kotlin</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('typescript')}>TypeScript</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <h3><u>MORE</u></h3>
          <ul>
            <li>
              <button className="footer-custom-btn" onClick={() => alert("Piston API is used.")}>API</button>
            </li>
            <li>
              <Link className="footer-custom-btn" to="/Components/Learn" onClick={goAbove}>Quiz</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <b>© 2025 Codify.COM</b>
      </div>
    </footer>
  );
}
