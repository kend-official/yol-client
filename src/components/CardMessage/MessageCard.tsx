import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
} from "@ionic/react";

export default function MessageCard() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Venshar</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </IonCardContent>
    </IonCard>
  );
}
