import './App.js';

const baseUrl = 'http://localhost:4000';
//
// GET API GUEST LIST
async function getFullGuestList(guestListFromApi) {
  const response = await fetch(`${baseUrl}/guests`);
  const allGuests = await response.json();
  console.log(guestListFromApi);
}
//
// CREATE A GUEST
export async function createNewGuestListInAPI(newGuest) {
  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: newGuest.firstName,
      lastName: newGuest.lastName,
      attending: false,
    }),
  });
  const newGuest = await response.json();
  return newGuest;
}
//
// UPDATE A GUEST
export async function updateNewGuestInApi(updatedGuest) {
  const response = await fetch(`${baseUrl}/guests/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });
  const updatedGuest = await response.json();
  return updatedGuest;
}

//
// DELETE A GUEST
export async function deleteAGuestInApi() {
  const response = await fetch(`${baseUrl}/guests/1`, {
    method: 'DELETE',
  });
  const deletedGuest = await response.json();
  return deletedGuest;
}

// await fetch(`${baseUrl}/guests`);
// const baseUrl = 'http://localhost:4000';

// useEffect(() => {
//   // fetch all guests
//   async function fetchGuests() {
//   try {
//   const response = await fetch( ${baseUrl}/guests');
//   const fetchData = await response.json ()}
//   setGuests (fetchData)}
//  catch (error)
// {console.error(error)}
//   }
// fetchGuests();
// },[])

//
//.
// get all guests from api

// async function getFullGuestList() {
//   const response = await fetch(`${baseUrl}/guests`);
//   const allGuests = await response.json();
//   setGuest(allGuests);
//   setLoading(false);
//   console.log('fetching guest list');
// }
//
//
// // fetch guest list
//   useEffect(() => {
//     getFullGuestList().catch(() =>
//       console.log('fetching all guests went wrong'),
//     );
//   }, []);
//   //
//   //
//   //ADD GUEST LIST FROM API
//   async function addNewGuest(e) {
//     e.preventDefault();
//     console.log('A');
//     const response = await fetch(`${baseUrl}/guests`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     });
//     console.log('B');
//     const createdGuest = await response.json();
//     console.log(createdGuest);
//     setGuest([...guest], createdGuest);
//     getFullGuestList().catch(() => console.log('adding new guest went wrong'));
//     setFirstName('');
//     setLastName('');
//   }
// //
// // TOGGLE ATTENDING/NOT ATTENDING
// async function changeAttendingStatus(id, value) {
//   const response = await fetch(`${baseUrl}/guests/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ attending: !value }),
//   });
//   const updatedGuest = await response.json();
//   const updatedGuestList = guest.filter((i) => {
//     return i.id !== updatedGuest.id;
//   });
//   setGuest([...guest], updatedGuestList);
//   getFullGuestList().catch(() =>
//     console.log('changing attending status went wrong'),
//   );
// }
//
//
