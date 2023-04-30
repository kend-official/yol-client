import { InputChangeEventDetail, IonInput } from "@ionic/react";
import { FormEvent } from "react";

import { Container } from "./styled";
const StartChat: React.FC = () => {
  const handleChange = (event: FormEvent<HTMLIonInputElement>) => {};

  return (
    <Container>
      <strong>Ready to start secret chat?</strong>
      <p>start with enter group name</p>
      <IonInput
        style={{ width: "20%" }}
        autofocus={true}
        onInput={(e: FormEvent<HTMLIonInputElement>) => handleChange(e)}
        label="Group name"
        label-placement="floating"
        fill="outline"
        placeholder="Enter text"
      ></IonInput>
    </Container>
  );
};

export default StartChat;
