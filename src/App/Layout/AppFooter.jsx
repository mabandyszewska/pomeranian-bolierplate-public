import './styles/footer.css';

const email = 'bandyszewska.marta@gmail.com';
const name = 'Marta Bandyszewska';

export function AppFooter() {
  return (
    <footer>
      <div className="footer-content">
        The project has received funding from the European Union from the
        European Development Fund within the framework of the "Invest in
        Pomerania 2020" grant project.
      </div>
      <div className="footer-address">
        <a href={`${name}`}>{` ${name}`}</a>
        <a href={`mailto:${email}`}>{`${email}`}</a>
      </div>
    </footer>
  );
}
