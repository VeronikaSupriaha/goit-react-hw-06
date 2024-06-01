import { IoIosPerson } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import css from './Contact.module.css';

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactTextContainer}>
        <div className={css.contactWrapper}>
          <IoIosPerson className={css.icon} />
          <p className={css.contactText}>{data.name}</p>
        </div>
        <div className={css.contactWrapper}>
          <MdOutlinePhoneIphone className={css.icon} />
          <p className={css.contactText}>{data.number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
}
