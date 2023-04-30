import styled from "@emotion/styled";

export const Container = styled.div(() => ({
  textAlign: "center",
  position: "absolute",
  left: "0",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",

  "& p": {
    fontSize: "16px",
    lineHeight: "22px",
    color: "#8c8c8c",
    margin: "0px",
  },

  "& a": {
    textDecoration: "none",
  },

  "& strong": {
    fontSize: "20px",
    lineHeight: "20px",
  },
}));
