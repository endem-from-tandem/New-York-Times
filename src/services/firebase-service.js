import {fapp, auth, google_provider} from '../firebase'

export default class FirebaseService{
   echo = 'echo from FirebaseService'

   userLoginWithEmail(email, password){
      return auth.signInWithEmailAndPassword(email, password)
   }

   userSignUpWithEmail(email, password){
      return auth.createUserWithEmailAndPassword(email, password)
   }

   userSignWithGoogle(){
      return fapp.auth().signInWithPopup(google_provider)
  }

   updateUserAfterSignUp(form){
      const user = fapp.auth().currentUser;
      user.updateProfile({
         displayName: `${form.name} ${form.lastName} `,
       }).then(function() {
         // Update successful.
       }).catch(function(error) {
         // An error happened.
       });
       
   }

   userSignOut(){
     return fapp.auth().signOut()
  }
}