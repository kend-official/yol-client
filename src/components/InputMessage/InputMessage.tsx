import { IonButton, IonIcon, IonInput } from "@ionic/react";
import { send } from "ionicons/icons";
import { MutableRefObject, useRef } from "react";
import { InputContainer } from "./styled";
export default function InputMessage() {
  const RefInput = useRef<MutableRefObject<HTMLIonInputElement> | any>(null);
  const handelSubmit = () => {
    console.log(RefInput.current.value);
  };
  return (
    <InputContainer>
      <IonInput
        label="Message"
        labelPlacement="floating"
        ref={RefInput}
        fill="solid"
        placeholder="Enter text"
      ></IonInput>

      <IonButton onClick={() => handelSubmit()}>
        <IonIcon slot="icon-only" icon={send}></IonIcon>
      </IonButton>
    </InputContainer>
  );
}
