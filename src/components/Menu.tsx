import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bagHandleOutline, bagHandleSharp, bookmarkOutline, cart, heartOutline, heartSharp, homeSharp, logIn, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'בית',
    url: '/page/home',
    iosIcon: homeSharp,
    mdIcon: homeSharp
  },
  {
    title: 'כניסה',
    url: '/page/login',
    iosIcon: logIn,
    mdIcon: logIn
  },
  {
    title: 'הרשמה',
    url: '/page/signUp',
    iosIcon: logIn,
    mdIcon: logIn
  },
  {
    title: 'קטלוג מוצרים',
    url: '/page/Archived',
    iosIcon: bagHandleSharp,
    mdIcon: bagHandleSharp
  },
  {
    title: 'עגלת קניות',
    url: '/page/cart',
    iosIcon: cart,
    mdIcon: cart
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
