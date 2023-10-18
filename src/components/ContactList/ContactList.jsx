import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterReducer';
import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from 'redux/operation';

export const ContactList = () => {
  const [deleteContact] = useDeleteContactMutation();
  const { data, isFetching } = useGetAllContactsQuery();
  const filterValue = useSelector(selectFilter);

  const filteredContacts = () => {
    if (!data) {
      return [];
    }
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <ul>
      {isFetching === false &&
        filteredContacts().map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={async () => {
                  await deleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
