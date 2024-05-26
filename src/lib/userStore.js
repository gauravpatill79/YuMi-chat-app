///this file is state storage to avoid prop driling
import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading :true,
  fetchUserInfo: async (uid) =>{
    if(!uid) return set({currentUser : null ,isLoading:false});

    try {
        const docRef = doc(db,"users",uid);
        console.log("hi");
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        console.log("hi1");
        console.log(docSnap);
        if(docSnap.exists()){
          set({currentUser : docSnap.data(),  isLoading:false});
        }else{
          console.log("else");
            set({currentUser : null,  isLoading:false});
    
        }
    } catch (error) {
        console.log(error);
        return set({currentUser : null ,isLoading:false});
    }
  }
}))