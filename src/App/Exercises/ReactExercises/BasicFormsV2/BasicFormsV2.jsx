import React from 'react';
import './style.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaValidationRegex = {
  phone: /^\d{9}$/,
  password: {
    smallLetters: /[a-z]/,
    bigLetters: /[A-Z]/,
    numbers: /[0-9]/,
  },
};

const schemaValidationValues = {
  password: {
    min: 8,
  },
};

const schemaValidationMessage = {
  required: 'Pole jest wymagane',
  boolean: 'To pole musi być zaznaczone lub nie',

  email: 'Wpisz poprawny adres email',
  phone: 'Wpisz poprawny numer telefonu',
  password: {
    min: `Hasło musi mieć minimum ${schemaValidationValues.password.min} znaków`,
    smallLetters: 'Hasło musi zawierać małe litery',
    bigLetters: 'Hasło musi zawierać duże litery',
    numbers: 'Hasło musi zawierać cyfry',
    confirmPassword: 'Hasła muszą być takie same',
  },
};

const schema = yup.object({
  // Zamówienie produktu
  productType: yup.string().required(schemaValidationMessage.required),
  paymentMethod: yup.string().required(schemaValidationMessage.required),
  isEnvChecked: yup.boolean(schemaValidationMessage.boolean),
  isGithubChecked: yup.boolean(schemaValidationMessage.boolean),
  isAdditionalDataChecked: yup.boolean(schemaValidationMessage.boolean),

  // Dane do realizacji zamówienia
  name: yup.string().required(schemaValidationMessage.required),
  nickname: yup.string().required(schemaValidationMessage.required),
  address: yup.string().required(schemaValidationMessage.required),
  email: yup
    .string()
    .email(schemaValidationMessage.email)
    .required(schemaValidationMessage.required),
  phone: yup
    .string()
    .matches(schemaValidationRegex.phone, schemaValidationMessage.phone)
    .required(schemaValidationMessage.required),
  description: yup.string(),

  // Zakładanie konta
  isCreatedAccountChecked: yup.boolean(schemaValidationMessage.boolean),
  password: yup
    .string()
    .required(schemaValidationMessage.required)
    .min(
      schemaValidationValues.password.min,
      schemaValidationMessage.password.min
    )
    .matches(
      schemaValidationRegex.password.smallLetters,
      schemaValidationMessage.password.smallLetters
    )
    .matches(
      schemaValidationRegex.password.bigLetters,
      schemaValidationMessage.password.bigLetters
    )
    .matches(
      schemaValidationRegex.password.numbers,
      schemaValidationMessage.password.numbers
    ),
  confirmPassword: yup
    .string()
    .required(schemaValidationMessage.required)
    .oneOf(
      [yup.ref('password')],
      schemaValidationMessage.password.confirmPassword
    ),

  // Zgody i newsletter
  isTermsChecked: yup
    .boolean(schemaValidationMessage.boolean)
    .oneOf([true], schemaValidationMessage.required),
  isNewsletterChecked: yup.boolean(schemaValidationMessage.boolean),
});

export function BasicFormsV2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('submit');
  };

  console.log(errors);

  return (
    <div>
      <MasterHeader value="Formularz zamówienia" />
      <form
        className="shopping-form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Zamówienie produktu */}
        <div className="form-input-container">
          <h2>Zamówienie produktu</h2>
          <div className="form-input-container">
            <label htmlFor="productType">Wybierz produkt*</label>
            <select
              className="form-input"
              {...register('productType')}
              name="productType"
            >
              <option value="frontend">kurs front-end</option>
              <option value="backend">kurs back-end</option>
              <option value="ux_ui">kurs UX/UI</option>
            </select>
            {errors.productType && <p>{errors.productType.message}</p>}
          </div>

          <div className="form-input-container">
            <label>Wybierz formę płatności*</label>
            <div>
              <div className="checkbox-container">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  value="blik"
                />
                <span>blik</span>
              </div>

              <div className="checkbox-container">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  value="paypal"
                />
                <span>paypal</span>
              </div>

              <div className="checkbox-container">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  value="transaction"
                />
                <span>przelew tradycyjny</span>
              </div>
              {errors.paymentMethod && (
                <p className="form-error-mess">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-input-container form--spacing">
            <label htmlFor="orderInformations">
              Opcje dodatkowe do zamówienia
            </label>
            <div>
              <div className="checkbox-container">
                <input
                  {...register('isEnvChecked')}
                  name="orderInformations"
                  type="checkbox"
                  className="check-box"
                />
                <span>ustawienie środowiska</span>
              </div>

              <div className="checkbox-container">
                <input
                  {...register('isGithubChecked')}
                  name="orderInformations"
                  type="checkbox"
                  className="check-box"
                />
                <span>intro do github</span>
              </div>

              <div className="checkbox-container">
                <input
                  {...register('isAdditionalDataChecked')}
                  name="orderInformations"
                  type="checkbox"
                  className="check-box"
                />
                <span>materiały dodatkowe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dane do realizacji zamówienia */}
        <div>
          <h2>Dane do realizacji zamówienia</h2>
          <div className="form-input-container">
            <label htmlFor="name">Imię i nazwisko*</label>
            <input
              {...register('name')}
              name="name"
              type="text"
              placeholder="Wpisz swoje imię i nazwisko"
              className={`form-delivery-data ${
                errors.name ? 'input-error' : ''
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="form-error-mess">{errors.name.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="nickname">Twój pseudonim*</label>
            <input
              {...register('nickname')}
              name="nickname"
              type="text"
              placeholder="Wpisz swój pseudonim"
              className="form-delivery-data"
              aria-invalid={errors.nickname ? 'true' : 'false'}
            />
            {errors.nickname && (
              <p className="form-error-mess">{errors.nickname.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="address">Adres do wysyłki*</label>
            <input
              {...register('address')}
              name="address"
              className="form-delivery-data"
              type="text"
              placeholder="Wpisz adres na jaki mamy wysłać zamówienie"
              aria-invalid={errors.address ? 'true' : 'false'}
            />
            {errors.address && (
              <p className="form-error-mess">{errors.address.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="email">Adres email*</label>
            <input
              {...register('email')}
              name="email"
              className="form-delivery-data"
              type="email"
              placeholder="Wpisz swój adres email"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="form-error-mess">{errors.email.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="phone">Numer kontaktowy*</label>
            <input
              {...register('phone')}
              name="phone"
              type="tel"
              className="form-delivery-data"
              placeholder="Wpisz swój numer telefonu"
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <p className="form-error-mess">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
            <textarea
              {...register('description')}
              name="description"
              className="form-delivery-data"
              placeholder="Jeśli masz jakieś uwagi wpisz je tutaj..."
              aria-invalid={errors.description ? 'true' : 'false'}
            />
            {errors.description && (
              <p className="form-error-mess">{errors.description.message}</p>
            )}
          </div>
        </div>

        {/* Zakładanie konta */}
        <div className="form-input-container">
          <h2>Zakładnie konta</h2>
          <div className="form-input-container">
            <label htmlFor="createAccount">
              Chce założyć konto razem z zamówieniem
            </label>
            <div>
              <div className="checkbox-container">
                <input
                  {...register('isCreatedAccountChecked')}
                  name="createAccount"
                  type="checkbox"
                  className="check-box"
                />
                <span>zakładam konto</span>
              </div>
            </div>
          </div>

          <div className="form-input-container">
            <label htmlFor="password">Moje hasło*</label>
            <input
              {...register('password')}
              name="password"
              type="password"
              className="password-box"
              placeholder="dasd13eas1231asd!@##"
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <p className="form-error-mess">{errors.password.message}</p>
            )}
          </div>

          <div className="form-input-container">
            <label htmlFor="confirmPassword">Powtórz hasło*</label>
            <input
              {...register('confirmPassword')}
              name="confirmPassword"
              type="password"
              className="password-box"
              placeholder="dasd13eas1231asd!@##"
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            />
            {errors.confirmPassword && (
              <p className="form-error-mess">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Zgody i newsletter */}
        <div className="form-input-container">
          <h2>Zgody i newsletter</h2>
          <div className="form-input-container">
            <label htmlFor="terms">
              Realizując zamówienie, akceptujesz regulamin naszego sklepu*
            </label>
            <div>
              <div className="checkbox-container">
                <input
                  {...register('isTermsChecked')}
                  name="terms"
                  type="checkbox"
                  className="check-box"
                  aria-invalid={errors.isTermsChecked ? 'true' : 'false'}
                />
                <span>akceptuję regulamin*</span>
                {errors.isTermsChecked && (
                  <p className="form-error-mess">
                    {errors.isTermsChecked.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="form-input-container form--spacing">
            <label htmlFor="newsletter">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </label>
            <div>
              <div className="checkbox-container">
                <input
                  {...register('isNewsletterChecked')}
                  name="newsletter"
                  type="checkbox"
                  className="check-box"
                />
                <span>zapisuje się na listę mailingową</span>
              </div>
            </div>
          </div>
        </div>
        <button className="form-button" type="submit">
          Składam zamówienie
        </button>
      </form>
    </div>
  );
}
