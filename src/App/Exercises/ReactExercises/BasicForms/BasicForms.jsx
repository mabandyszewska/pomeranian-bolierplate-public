import React from 'react';
import './style.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';

export function BasicForms() {
  return (
    <div>
      <MasterHeader value="Formularz zamówienia" />
      <form className="shopping-form-container">
        <h2 className="shopping-form-heading">Zamówienie produktu</h2>
        <div className="form-input-container">
          <label htmlFor="product">Wybierz produkt*</label>
          <select className="form-input" id="product">
            <option value="kurs-frontned">Kurs Frontend Developer</option>
            <option value="kurs-backend">Kurs Backend Developer</option>
          </select>

          <label htmlFor="payment-method" className="form-paragraph-title">
            Wybierz formę płatności*
          </label>
          <div>
            <input
              name="blik"
              type="radio"
              id="payment-method"
              className="radio-box"
              value="blik"
            />
            <span>Blik</span>
          </div>
          <div>
            <input
              name="paypal"
              type="radio"
              id="payment-method"
              className="radio-box"
              value="paypal"
            />
            <span>PayPal</span>
          </div>
          <div>
            <input
              name="przelew-tradycyjny"
              type="radio"
              id="payment-method"
              className="radio-box"
              value="przelew-tradycyjny"
            />
            <span>Przelew tradycyjny</span>
          </div>

          <label htmlFor="additional-options" className="form-paragraph-title">
            Opcje dodatkowe do zamówienia
          </label>
          <div className="checkbox-container">
            <input
              name="ustawienie środowiska"
              type="checkbox"
              id="additional-options"
              className="check-box"
            />
            <span>Ustawienie środowiska</span>
          </div>
          <div className="checkbox-container">
            <input
              name="intro do GitGub"
              type="checkbox"
              id="additional-options"
              className="check-box"
            />
            <span>Intro do GitGub</span>
          </div>
          <div className="checkbox-container">
            <input
              name="materiały dodatkowe"
              type="checkbox"
              id="additional-options"
              className="check-box"
            />
            <span>Materiały dodatkowe</span>
          </div>
        </div>
        <h2 className="shopping-form-heading">Dane do zamówienia produktu</h2>
        <div className="form-input-container">
          <label htmlFor="form-delivery-fullname">Imię i nazwisko*</label>
          <input
            name="form-delivery-fullname"
            type="text"
            id="form-delivery-fullname"
            className="form-delivery-data"
            placeholder="wpisz swoje imię i nazwisko"
          />

          <label htmlFor="form-delivery-nick">Twój pseudonim*</label>
          <input
            name="form-delivery-nick"
            type="text"
            id="form-delivery-nick"
            className="form-delivery-data"
            placeholder="wpisz swój pseudonim"
          />

          <label htmlFor="form-delivery-adress">Adres do wysyłki*</label>
          <input
            name="form-delivery-adress"
            type="text"
            id="form-delivery-adress"
            className="form-delivery-data"
            placeholder="adres, na który mamy wysłac zamówienie"
          />

          <label htmlFor="form-delivery-email">Adres e-mail*</label>
          <input
            name="form-delivery-email"
            type="email"
            id="form-delivery-email"
            className="form-delivery-data"
            placeholder="jan.kowalski@gmail.com"
          />

          <label for="form-delivery-number">Numer kontaktowy*</label>
          <input
            name="form-delivery-number"
            type="tel"
            id="form-delivery-number"
            className="form-delivery-data"
            placeholder="+48 888 888 888"
          />

          <label for="form-delivery-remarks">
            Dodatkowe uwagi do zamówienia
          </label>
          <textarea
            name="form-delivery-remarks"
            type="text"
            id="form-delivery-remarks"
            className="form-delivery-data"
            placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
          />
          <h2 className="shopping-form-heading">Zakładanie konta</h2>
        </div>
        <div className="form-input-container">
          <label htmlFor="account">
            Chcę założyć konto razem z zamówieniem
          </label>
          <div className="checkbox-container">
            <input name="account" type="checkbox" className="check-box" />
            <span>zakładam konto</span>
          </div>

          <label htmlFor="password">Moje hasło</label>
          <input
            type="password"
            id="password"
            className="password-box"
            placeholder="56ggW457hh#$"
          />

          <label htmlFor="password">Powtórz hasło:</label>
          <input
            type="password"
            id="password"
            className="password-box"
            placeholder="56ggW457hh#$"
          />
        </div>
        <div className="form-input-container">
          <h2 className="shopping-form-heading">Zgody i newsletter</h2>
          <div>
            <p className="form-paragraph-title">
              Realizując zamówienia, akcptujesz regulamin naszego sklepu
            </p>
            <div className="checkbox-container">
              <input type="checkbox" id="rules" className="check-box" />
              <label htmlFor="rules">akceptuję regulamin*</label>
            </div>
          </div>
          <div>
            <p className="form-paragraph-title">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </p>
            <div className="checkbox-container">
              <input type="checkbox" id="newsletter" className="check-box" />
              <label htmlFor="newsletter">
                zapisuję się na listę mailingową
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="form-button">
          Składam zmówienie
        </button>
      </form>
    </div>
  );
}
