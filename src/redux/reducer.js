import axios from 'axios';
import { ADD_USER, LOAD_All_USERS } from './actionTypes';

const initState = {
  users: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  ],

  posts: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  //   if (action.type === LOAD_All_USERS) {
  //     const newState = { ...state };
  //     axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
  //       newState.users = response.data;
  //     });
  //     console.log('NewState', newState);
  //     return newState;
  //   }
  //   if (action.type === ADD_USER) {
  //     const newState = { ...state };
  //     newState.users = [...newState.users, action.value];
  //     return newState;
  //   }
  //   return state;

  switch (action.type) {
    case LOAD_All_USERS:
      const newState = { ...state };
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          newState.users = response.data;
        });
      console.log('NewState', newState);
      return newState;

    case ADD_USER:
    //   const newState = { ...state };
    //   newState.users = [...newState.users, action.value];
      return {
          posts: [...state.posts],
          users: [...state.users, action.value]
      };
    default:
      return state;
  }
};

export default rootReducer;
