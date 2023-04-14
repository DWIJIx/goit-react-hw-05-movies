import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import {
  Div,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  //   Метод для записування даних в стейт при введенны в input
  const handleChange = event => {
    // console.log(event.currentTarget.value);
    // Перезаписуємо в стейт text
    setText(event.currentTarget.value);
  };

  //   Метод сабміну форми.
  const handleSubmit = event => {
    event.preventDefault();
    // Перевіряємо, чи по сабміту в форму щось введено
    if (text === '') {
      toast.error('You need to enter something');
      return;
    }
    // Предаємо новий text в App через функцію onSubmit (вона передана пропом onSubmit={changeText} )
    onSubmit(text);
    resetForm();
  };

  const resetForm = () => {
    setText('');
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="text"
          value={text}
          onChange={handleChange}
        />

        <SearchButton type="submit">
          <SearchButtonLabel>
            <BsSearch />
          </SearchButtonLabel>
        </SearchButton>
      </Form>
    </Div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
