import { IonInput } from "@ionic/react";

import { Container } from "./styled";
const StartChat: React.FC = () => {
  return (
    <Container>
      <strong>Ready to start secret chat?</strong>
      <p>start with enter group name</p>
      <IonInput
        style={{ width: "20%" }}
        label="Group name"
        label-placement="floating"
        fill="outline"
        placeholder="Enter text"
      ></IonInput>
    </Container>
  );
};

export default StartChat;
