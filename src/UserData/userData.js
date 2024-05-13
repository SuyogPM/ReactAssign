// let usersData = [];

// const addUser = (userData) => {
//   const newUser = { ...userData,id: genratedId()};
//   usersData.push(newUser);
//   console.log(usersData);
// };
// const getUsers = () =>{
//   return usersData;
// }
// const updateUser = (userId,updatedUserData) => {
//   const userIndex = usersData.findIndex((user) => user.id === userId);
//   if(userIndex !== -1){
//     usersData[userIndex] = {...usersData[userIndex],...updatedUserData};
//     console.log("updated user data :" ,usersData[userIndex]);
//   }
// };
// const deleteUser = (userId)=>{
//   usersData = usersData.filter((user)=> user.id !== userId);
//   console.log(usersData)
// };
// const genratedId = () =>{
//   return Math.floor(Math.random()*1000)+1;
// };

// export {addUser,getUsers,updateUser,deleteUser};