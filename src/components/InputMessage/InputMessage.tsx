import { IonButton, IonIcon, IonInput } from "@ionic/react";
import { send } from "ionicons/icons";
import { MutableRefObject, useRef } from "react";
import { InputContainer } from "./styled";
export default function InputMessage() {
  const RefInput = useRef<MutableRefObject<HTMLIonInputElement> | any>(null);
  return (
    <InputContainer>
      <IonInput
        label="Message"
        labelPlacement="floating"
        ref={RefInput}
        fill="solid"
        placeholder="Enter text"
      ></IonInput>

      <IonButton>
        <IonIcon slot="icon-only" icon={send}></IonIcon>
      </IonButton>
    </InputContainer>
  );
}
