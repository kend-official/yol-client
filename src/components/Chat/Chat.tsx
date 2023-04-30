import MessageCard from "components/CardMessage";
import InputMessage from "components/InputMessage";
import ShareLink from "components/ShareLink";
import { MessageContainer, Wrapper } from "./styled";

export default function Chat() {
  return (
    <Wrapper>
      <ShareLink />
      <MessageContainer>
        <MessageCard UserMessage={false} />
      </MessageContainer>

      <InputMessage />
    </Wrapper>
  );
}
