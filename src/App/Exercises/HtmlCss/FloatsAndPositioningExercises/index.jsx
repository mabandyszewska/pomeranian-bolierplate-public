import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import snowWolf from '../../../Images/snow-wolf.png';

export function FloatsAndPositioningExercises() {
  return (
    <div className="main-container">
      <MasterHeader value="BLOG &lt; ĆWICZENIE" />
      <div className="first-container">
        <p className="first-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="second-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="second-container">
        <p className="third-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>
      <div className="note-container">
        <p className="note-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <img src={snowWolf} alt="snow wolf" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </p>
      <div className="btn-container">
        <button className="btn-exercise">zapisz na później</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id doloribus
        sed laboriosam, dolore ipsa minus explicabo pariatur earum mollitia
        nobis magnam, fugit exercitationem! Omnis sapiente quia maxime eveniet
        consequatur perspiciatis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Amet debitis voluptatem vel cum unde minima veritatis
        culpa esse officia, ullam nemo atque iusto ducimus ad tempore
        dignissimos non architecto perferendis. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Reiciendis id quia quis eos molestias sit
        illum quaerat officia dolorum exercitationem sed ipsum blanditiis,
        veniam ducimus distinctio qui. Accusantium, aliquid exercitationem?
      </p>
      <div>
        <div className="square-one">1</div>
        <div className="square-two">2</div>
        <div className="square-three">3</div>
      </div>
    </div>
  );
}
