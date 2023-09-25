import React, { useState } from 'react';
import getGuestListFromAPI from './API';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);

  //
  // CREATE GUEST AND CLEAR INPUTS AFTERWARDS
  const createGuest = () => {
    const guest = {
      firstName: firstName,
      lastName: lastName,
      attending: false,
    };
    setGuestList([...guestList, guest]);
    setFirstName('');
    setLastName('');
  };
  //
  // CREATE GUEST BY PRESSING ENTER
  const handleLastNameKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      createGuest();
    }
  };
  //
  // REMOVES A GUEST
  const removeGuest = (index) => {
    const newGuestList = [...guestList];
    newGuestList.splice(index, 1);
    setGuestList(newGuestList);
  };
  //
  // REMOVES ALL GUESTS
  const removeAllGuests = () => {
    const newGuestList = guestList.filter(() => {
      return i.id !== guestList.id;
    });
    setGuestList(newGuestList);
    console.log(guestList);
  };
  //
  // ALTERS THE ATTENDING STATUS
  const toggleAttending = (index) => {
    const updatedGuests = guestList.map((guest, i) =>
      i === index ? { ...guest, attending: !guest.attending } : guest,
    );
    setGuestList(updatedGuests);
  };

  return (
    <>
      <h1>GUEST LIST</h1>
      <h2>Please Add Your Details and Press Enter</h2>
      <label htmlFor="firstName">First name</label>

      <input
        type="text"
        value={firstName}
        required={true}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        value={lastName}
        required={true}
        onKeyDown={handleLastNameKeyDown}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="button" onClick={createGuest}>
        Submit
      </button>
      <ul>
        {guestList.map((guest, index) => (
          <div key={index} data-test-id="guest">
            <li>
              {guest.firstName} {guest.lastName}
              <br />
              <label>
                Attending:
                <input
                  type="checkbox"
                  checked={guest.attending}
                  onChange={() => toggleAttending(index)}
                  aria-label={`${guest.firstName} ${guest.lastName} ${
                    guest.attending ? 'attending' : 'not attending'
                  }`}
                />
              </label>
              <button type="button" onClick={() => removeGuest(index)}>
                Remove{' '}
              </button>
            </li>
          </div>
        ))}
      </ul>
      <button type="button" onClick={removeAllGuests}>
        Remove All Guests
      </button>
    </>
  );
}
