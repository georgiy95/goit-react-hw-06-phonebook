import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './ContactsList/ContactsList';
import { Input } from './Input/Input';

const App = () => {
  return (
    <div className="app">
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Contacts>
          <Input />
        </Contacts>
      </Section>
    </div>
  );
};

export default App;
