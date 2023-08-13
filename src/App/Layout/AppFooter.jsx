import './styles/footer.css';

const email = 'marta.bandyszewska@pomeranian.it';
const phone = '+48-509-793-401';

export function AppFooter() {
  return (
    <footer>
      <div>
        The project has received funding from the European Union from the
        European Development Fund.
      </div>
      <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
      <div>
        Regional within the framework of the Invest in Pomerania 2020 grant
        project.
      </div>
      <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
    </footer>
  );
}
