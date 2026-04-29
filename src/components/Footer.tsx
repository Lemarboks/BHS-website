import { school } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <span>© 2026 {school.fullName} - modern redesign concept</span>
        <span><strong>{school.motto}</strong></span>
      </div>
    </footer>
  );
}
