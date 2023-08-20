import './style.css';
import { useEffect, useState } from 'react';
import { Button, Input, Label, TextAreaInput } from '../../Components';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export const ToDoForm = ({ handleGoBack, isAddForm, id }) => {
  const [isError, setIsError] = useState(false);
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!isAddForm && id) {
      const getToDoAsync = async () => {
        try {
          const { author, note, title } = await apiClient.getToDo(id);
          setAuthor(author);
          setNote(note);
          setTitle(title);
          setIsError(false);
        } catch (error) {
          setIsError(true);
        }
      };
      getToDoAsync();
    }
  }, [id, isAddForm]);

  const getApiPromiseForSubmit = () => {
    if (isAddForm) {
      return apiClient.addToDo({ author, note, title });
    } else {
      return apiClient.updateToDo(id, { author, note, title });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await getApiPromiseForSubmit();
      console.log(data);
      handleGoBack();
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <div className="todo-form-container">
      <p>{isAddForm ? 'Dodawanie' : 'Edycja'} zadania</p>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={'title'}>Tytuł</Label>
        <Input
          onChange={(element) => setTitle(element.target.value)}
          id={'title'}
          value={title}
          placeholder={'Kupić parasol na balkon'}
        />
        {isAddForm && (
          <>
            <Label htmlFor={'author'}>Autor</Label>
            <Input
              onChange={(element) => setAuthor(element.target.value)}
              id={'author'}
              value={author}
              placeholder={'Marta'}
            />
          </>
        )}
        <Label htmlFor={'note'}>Treść</Label>
        <TextAreaInput
          onChange={(element) => setNote(element.target.value)}
          id={'note'}
          value={note}
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
          <Button type="submit">{isAddForm ? 'Dodaj' : 'Zapisz'}</Button>
        </div>
      </form>
    </div>
  );
};
