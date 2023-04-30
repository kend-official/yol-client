import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
} from "@ionic/react";

type Props = {
  UserMessage: boolean;
  Sender?: string;
};

export default function MessageCard({ UserMessage, Sender }: Props) {
  return (
    <IonCard
      style={{
        background: UserMessage ? "#c7ecee" : "",
        color: UserMessage ? "#1e272e" : "",
      }}
    >
      <IonCardHeader>
        <IonCardSubtitle>{Sender ? Sender : "you"}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </IonCardContent>
    </IonCard>
  );
}
