import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
} from "@ionic/react";
import { ContentContainer } from "./styled";

export default function ShareLink() {
  const handelCopyToClipboard = () => {
    copyToClipboard("dsfdsf");
  };

  return (
    <IonCard
      style={{
        height: "max-content",
        position: "fixed",
        width: "200px",
        right: "0px",
        top: "0px",
        overflow: "auto",
      }}
    >
      <IonCardHeader>
        <IonCardTitle>Share with people</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <ContentContainer>
          <IonChip color="success" onClick={() => handelCopyToClipboard()}>
            <p>copy</p>
          </IonChip>
          <a href="https://create-react-app.dev/">
            https://create-react-app.dev/
          </a>
        </ContentContainer>
      </IonCardContent>
    </IonCard>
  );
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
