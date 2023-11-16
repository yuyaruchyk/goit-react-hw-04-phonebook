import { BtnDelete, List, Name } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <List key={item.id}>
            <Name>
              {item.name}: <span>{item.number}</span>
            </Name>
            <BtnDelete onClick={() => onDelete(item.id)}>Delete</BtnDelete>
          </List>
        );
      })}
    </ul>
  );
};
