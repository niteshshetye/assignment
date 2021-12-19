### Redux toolkit 

# Install redux, react-redux, @reduxjs/toolkit packages

# STEP_1: Create Store
-> import {configureStore} from '@reduxjs/toolkit';
-> import userReducer from '../../reducer/userReducer'; // created in step no. 2
-> syntax

->  const store = configureStore({
        reducer:{
            user: userReducer, // the reducer which is imported pass it here from step no. 2
        },
    })

then 

-> import {Provider} from 'react-redux';

<Provider store={store}>
    <App />
</Provider>

# STEP_2: Create the Reducer
here in my case i create the user Reducer in userReducer.js file
### inside userReducer.js file
for that first i import 'createSlice' which help to create the reducer in redux-toolkit

-> import {createSlice} from '@reduxjs/toolkit';

then lets use it 

->  const userReducer = createSlice({
        name: 'user',
        initailState: {
            name: "",
            age: null,
            email: "",
        },
        reducers: {
            loginUser: (state, action) => {
                state.name = action.payload.name;
                state.age = action.payload.age;
                state.email = action.payload.email;
            },
            logoutUser: (state) => {
                state.name = "";
                state.age = null;
                state.email = "";
            }
        }
    });

now our reducer is also ready so lets export important things
first export the constant and export the reducer

->  export const {loginUser, logoutUser} = userSlice.acions;
->  export default userSlice.reducer; 

__now check the first step i have written which part is added after this implementation__


# Now our reducer and store ready 

### To use our state we use 'useSelector' from 'react-redux';

-> import {useSelector} from 'react-redux';

-> syntax

-> const state = useSelector(state => state.user) // this will written only the user state from the store  

### To Change the state we need an actions and to execute action we need the "useDispatch" from 'react-redux';
-> import {loginUser, logoutUser} from '../../reducers/userReducer';
-> import {useDispatch} from 'react-redux';

-> syntax

-> const dispatch = useDispatch();

and whenver in the logic need to dispatch the action just write 

// here user is action.payload the data inside user is comes from may be input feilds from login form  
-> dispatch(loginUser(user));


when need to login remember we not pass any action in reducer 
// just keep it empty here
-> dispatch(logoutUser());

