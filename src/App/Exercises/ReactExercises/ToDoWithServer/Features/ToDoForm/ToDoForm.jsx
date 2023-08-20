import { useState } from 'react';
import { Button, Input, Label, TextAreaInput } from '../../Components';
import './style.css';

export const ToDoForm = ({ handleGoBack }) => {
  const [isError, setIsError] = useState(false);
  const handleAdd = (event) => {
    event.preventDefault();
    const success = Math.random() > 0.5;
    if (success) {
      handleGoBack();
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="todo-form-container">
      <p>Dodawanie zadania</p>
      <form>
        <Label htmlFor={'title'}>Tytuł</Label>
        <Input id={'title'} placeholder={'Kupić parasol na balkon'} />
        <Label htmlFor={'author'}>Autor</Label>
        <Input id={'author'} placeholder={'Marta'} />
        <Label htmlFor={'note'}>Treść</Label>
        <TextAreaInput
          id={'note'}
          placeholder={
            'Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!'
          }
        />

        <p className="todo-form-error">
          {isError && 'Wystąpił błąd, spróbuj ponownie.'}
        </p>

        <div className="todo-form-btn">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit" onClick={handleAdd}>
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
};
