import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register" component={Register} exact={true} />
        <Route path="/forgot-password" component={ForgotPassword} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <IonTabs>
          <IonRouterOutlet>
           <Route exact path="/home">
             <Home />
           </Route>
           <Route exact path="/about">
             <About />
           </Route>
           <Route path="/contact">
             <Contact />
           </Route>
         <Route path="/register">
             <Register/>
         </Route>
          <Route path="/forgot-password">
             <ForgotPassword/>
           </Route>
           <Route path="/login">
            <Login />
           </Route>
           <Route exact path="/">
             <Redirect to="/login" />
           </Route>
         </IonRouterOutlet>
          <IonTabBar slot="bottom">
           <IonTabButton tab="home" href="/home">
            <IonIcon icon={triangle} />
             <IonLabel>Home</IonLabel>
           </IonTabButton>
           <IonTabButton tab="about" href="/about">
             <IonIcon icon={ellipse} />
             <IonLabel>About</IonLabel>
         </IonTabButton>
           <IonTabButton tab="contact" href="/contact">
            <IonIcon icon={square} />
            <IonLabel>Contact Us</IonLabel>
           </IonTabButton>
        </IonTabBar>
        </IonTabs>
        {/* <Route path="/home" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} /> */}
        
        {/* <Route path="/dashboard/:id" component={Dashboard} exact={true} /> */}
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  // <IonApp>
  //   <IonReactRouter>
  //     <IonTabs>
  //       <IonRouterOutlet>
  //         <Route exact path="/dashboard" render={(props) => {
  //             return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
  //           }}/>
  //         <Route exact path="/home">
  //           <Home />
  //         </Route>
  //         <Route exact path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/contact">
  //           <Contact />
  //         </Route>
  //       <Route path="/register">
  //           <Register/>
  //       </Route>
  //        <Route path="/forgot-password">
  //           <ForgotPassword/>
  //         </Route>
  //         <Route path="/login">
  //           <Login />
  //         </Route>
  //         <Route exact path="/">
  //           <Redirect to="/login" />
  //         </Route>
  //       </IonRouterOutlet>
  //       <IonTabBar slot="bottom">
  //         <IonTabButton tab="home" href="/home">
  //           <IonIcon icon={triangle} />
  //           <IonLabel>Home</IonLabel>
  //         </IonTabButton>
  //         <IonTabButton tab="about" href="/about">
  //           <IonIcon icon={ellipse} />
  //           <IonLabel>About</IonLabel>
  //         </IonTabButton>
  //         <IonTabButton tab="contact" href="/contact">
  //           <IonIcon icon={square} />
  //           <IonLabel>Contact Us</IonLabel>
  //         </IonTabButton>
  //       </IonTabBar>
  //     </IonTabs>
  //   </IonReactRouter>
  // </IonApp>
);


export default App;
