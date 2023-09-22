import React, { useState } from 'react';
import { createNewGuest } from './API';

export default function GuestList() {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [userName, setUserName] = useState('');

  const guestList = [firstName, lastName];
  return (
    <>
      <h1>GUEST LIST</h1>
      <div data-test-id="guest">
        <h2>Please Add Your Details</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            First name
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
            />
          </label>
          <label>
            Last name
            <input
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
            />
          </label>
          <button
            onClick={() => {
              createNewGuest();
              setFirstName('');
              setLastName('');
            }}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
