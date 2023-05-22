import PropType from 'prop-types';

export const ContactList = ({ contacts, onDeletContacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeletContacts(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: PropType.arrayOf(
    PropType.shape({
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
      id: PropType.string.isRequired,
    })
  ).isRequired,
  onDeletContacts: PropType.func.isRequired,
};
