import { IonButton, IonIcon, IonInput } from "@ionic/react";
import { send } from "ionicons/icons";
import { InputContainer } from "./styled";

export default function InputMessage() {
  return (
    <InputContainer>
      <IonInput
        label="Message"
        labelPlacement="floating"
        fill="solid"
        placeholder="Enter text"
      ></IonInput>

      <IonButton>
        <IonIcon slot="icon-only" icon={send}></IonIcon>
      </IonButton>
    </InputContainer>
  );
}
