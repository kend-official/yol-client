import MessageCard from "components/CardMessage";
import InputMessage from "components/InputMessage";
import { MessageContainer, Wrapper } from "./styled";

export default function Chat() {
  return (
    <Wrapper>
      <MessageContainer>
        <MessageCard />
      </MessageContainer>

      <InputMessage />
    </Wrapper>
  );
}
