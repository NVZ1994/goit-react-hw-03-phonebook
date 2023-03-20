import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className="Contact__list">
            {contacts.map(contact => (
                <li key={contact.id} className='Contact__item'>
                    <p className="Contact__item--text">{contact.name}:</p>
                    <p className="Contact__item--text">{contact.phone}</p>
                    <button className="Delete__btn" onClick={() => onDelete(contact.id)}>Delete contact</button>
                </li>
            )
            )}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    onDelete: PropTypes.func.isRequired,
}