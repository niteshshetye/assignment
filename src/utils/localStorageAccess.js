
export const getUserFromLocalStorage = () => {
    const {user} = JSON.parse(localStorage.getItem('persist:root'))
    const {currentUser} = JSON.parse(user);
    // const {accessToken} = currentUser 
    return currentUser;
}