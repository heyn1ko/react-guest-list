// Creating a new guest (aka POST /guests)
import './App.js';

const baseUrl = 'http://localhost:4000';

export async function createNewGuest(newGuest) {
  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: newGuest.firstName,
      lastName: newGuest.lastName,
    }),
  });
  const createdGuest = await response.json();
  return createdGuest;
}
