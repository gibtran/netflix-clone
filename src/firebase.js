
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCPOxfRmHEoWd0gKfE5Y61fEChxO0n1rZ0",
  authDomain: "netflix-clone-dce0a.firebaseapp.com",
  projectId: "netflix-clone-dce0a",
  storageBucket: "netflix-clone-dce0a.firebasestorage.app",
  messagingSenderId: "965756288048",
  appId: "1:965756288048:web:7d0fe71138ec813b88c1f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//trả về Firebase Auth instance liên kết với app
const auth = getAuth(app)
//trả về một Firestore Database instance được liên kết với Firebase app
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        // tạo user mới trong Firebase Authentication
        const respone = await createUserWithEmailAndPassword(auth,email, password)
        //hàm Firebase Auth: createUserWithEmailAndPassword():
        //Tạo user mới trên Firebase
        //Trả về object chứa thông tin user
        const user = respone.user

        //Lưu thêm thông tin vào Firestore database: userid, name, authProvider + email, etc
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
} 

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout,}