import styled from "styled-components";

export const FHeader = styled.div`
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 10px;
  font-weight: bold;
`;
export const FLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-weight: bold;
    color: #fff;
  }
`;
