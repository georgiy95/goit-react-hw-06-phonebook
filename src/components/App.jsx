import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContactById } from 'redux/phonebook.slice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const onGetDataForm = data => {
    const hasName = contacts.some(it => it.name === data.name);
    if (hasName) {
      Notify.warning(`Contact "${data.name}" is already exist.`);
      return;
    }

    dispatch(addContact({ ...data, id: nanoid() }));
  };

  const deleteItem = deletedId => {
    dispatch(removeContactById(deletedId));
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={onGetDataForm} />
      </Section>
      <Section title="Contacts">
        <ContactsList contacts={contacts} onClickDelete={deleteItem} />
      </Section>
    </div>
  );
}

export default App;
