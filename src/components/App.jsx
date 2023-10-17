import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Input } from './Input/Input';

const App = () => {
  return (
    <div className="app">
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts"> 
      <Input />
        <ContactsList />
      </Section>
    </div>
  );
};

export default App;
