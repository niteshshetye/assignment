
export const getUserFromLocalStorage = () => {
    try{
        const {user} = JSON.parse(localStorage.getItem('persist:root'))
        const {currentUser} = JSON.parse(user);
        return currentUser 
    }catch(error){
        return null
    }
}