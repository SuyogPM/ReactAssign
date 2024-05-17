
const generateRandomId = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const initialState = {
  usersData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUser = {
        ...action.payload,
        id: generateRandomId(),
      };
      return {
        ...state,
        usersData: [...state.usersData, newUser],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload.userData } : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        usersData: state.usersData.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
