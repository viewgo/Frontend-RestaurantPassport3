import styled from "styled-components";

export const Navbar = styled.div`
  max-width: 100%;
  padding: 0 12px;

  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  background: #23253a;
  color: #d5d5d7;

  div {
    margin: 0 16px;
    padding: 8px 0;
  }

  a {
    margin-left: 24px;
    color: #d5d5d7;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
