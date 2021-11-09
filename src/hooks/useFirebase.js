import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const[user,setUsers]=useState({});
    const[error,setError]=useState('');
    const[isLoading,setLoading]=useState(true);
   

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

     const signInUsingGoogle=()=>{
       setLoading(true);
       
       return signInWithPopup(auth, googleProvider)
        
     }

     
    // Creating new user using email& password

     const createUser=(email,password,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {  
            const user =result.user; 
            setUsers(user) ;      
            
            setError('');
            updateName(name);
            alert("Registration Complete,Refresh Now")
          })
          
          .catch((error) => {
            
            const errorMessage = error.message;
            setError(errorMessage);
            

          });
         

          
        
     }
    // Login With email & password
     const handleUserLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setError('');
           
          })
          .finally(()=>setLoading(false))
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
      };

      const updateName=(name)=>{
          
        updateProfile(auth.currentUser,{displayName: name}) 
          .then((result) => {
            
          })
      }
    //  to oberserve users state
    useEffect(()=>{
       const unsubsribed= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUsers(user)
            
            } else {
              setUsers({})
            }
            setLoading(false)
          });
          return ()=> unsubsribed;
    },[auth])
     const logOut=()=>{
        setLoading(true)
         signOut(auth)
         .then(()=>{})
         .finally(()=>setLoading(false))
     }

    return {
        user,
        signInUsingGoogle,
        createUser,
        handleUserLogin,
        logOut,
        error,
        updateName,
        isLoading

        
    }
}

export default useFirebase;