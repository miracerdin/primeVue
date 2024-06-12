import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    User,
} from "firebase/auth";
import { firebaseApp } from "./firebaseConfig";
import { UserModel } from "../../types";
import { FirebaseStorageError } from "./firebase-storage-error";

class AuthService {
    currentAuth = () => getAuth(firebaseApp);
    googleProvider = new GoogleAuthProvider();

    async createUser(model: UserModel) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                this.currentAuth(),
                model.email,
                model.password
            );
            const user = userCredential.user;

            if (user) await this.updateProfileDetail({ user, displayName: model.userName });

            return user;
        } catch (e) {
            return (e as Error).message;
        }
    }

    async updateProfileDetail(req: { user: User; displayName?: string; photoUrl?: string }) {
        try {
            await updateProfile(req.user, {
                displayName: req.displayName,
                photoURL: req.photoUrl,
            });
        } catch (e) {
            return (e as Error).message;
        }
    }

    async signIn(model: UserModel) {
        try {
            return await signInWithEmailAndPassword(
                this.currentAuth(),
                model.email,
                model.password
            );
        } catch (e) {
            const error = e as FirebaseStorageError;
            switch (error.code) {
                case "auth/invalid-email":
                    return "Invalid Email";
                case "auth/user-not-found":
                    return "No account with this email";
                case "auth/wrong-password":
                    return "Incorrect password";
                default:
                    return "Email or password was incorrect";
            }
        }
    }
    async signInWithGoogle() {
        try {
            const userCredential = await signInWithPopup(this.currentAuth(), this.googleProvider);
            return userCredential.user;
        } catch (e) {
            const error = e as FirebaseStorageError;
            switch (error.code) {
                case "auth/account-exists-with-different-credential":
                    return "An account already exists with the same email address but different sign-in credentials.";
                case "auth/popup-closed-by-user":
                    return "The popup was closed before completing the sign in.";
                default:
                    return "Google sign-in failed. Please try again.";
            }
        }
    }

    async signUpWithGoogle() {
        // Google sign-in and sign-up process are typically the same.
        // Firebase handles new user registration automatically.
        return this.signInWithGoogle();
    }

    async onAuthStateChanged(callback: (user: User | null) => void) {
        return this.currentAuth().onAuthStateChanged(callback);
    }
}

export const authService = new AuthService();
