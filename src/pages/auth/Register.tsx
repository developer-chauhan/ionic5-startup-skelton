import React, { useState } from 'react';
import {
  IonContent, IonPage, IonRow, IonCol, IonIcon, IonTitle, IonToolbar,
IonItem, IonLabel, IonInput, IonButton, IonAlert, IonGrid} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import axios from "axios";
import { useHistory } from "react-router-dom";

function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
}

const Register: React.FC = () => {
  const history = useHistory();
  const [fname, setFname] = useState<string>("first name");
  const [lname, setLname] = useState<string>("last name");
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    if (!fname) {
        setMessage("Please enter a valid first first name");
        setIserror(true);
        return;
    }
    if (!lname) {
        setMessage("Please enter a valid first last name");
        setIserror(true);
        return;
    }
    if (!email) {
        setMessage("Please enter a valid email");
        setIserror(true);
        return;
    }
    if (validateEmail(email) === false) {
        setMessage("Your email is invalid");
        setIserror(true);
        return;
    }

    if (!password || password.length < 6) {
        setMessage("Please enter your password");
        setIserror(true);
        return;
    }

    const registerData = {
      "firstName": fname,
      "lastName": lname,
      "email": email,
      "password": password
    }

    const api = axios.create({
        baseURL: `http://localhost:3000/api/auth`
    })
    api.post("/register", registerData)
        .then(res => {             
            history.push("/login/");
         })
         .catch(error=>{
            setMessage("Auth failure! Please create an account");
            setIserror(true)
         })
  };
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>
          <IonRow>
            
          <IonCol>
            <IonIcon
                style={{ fontSize: "70px", color: "#0040ff" }}
                icon={personCircle}
              />
              <IonTitle>Register</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput
                type="text"
                value={fname}
                onIonChange={(e) => setFname(e.detail.value!)}
                >
            </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput
                type="text"
                value={lname}
                onIonChange={(e) => setLname(e.detail.value!)}
                >
            </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating"> Email</IonLabel>
            <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                >
            </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating"> Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                >
              </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>
                  By clicking LOGIN you agree to our <a href="#">Policy</a>
              </p>
              <IonButton expand="block" onClick={handleLogin}>Sign Up</IonButton>
              <p style={{ fontSize: "medium" }}>
                  Have an account? <a href="/login">Sign In</a>
              </p>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
