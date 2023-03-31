import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 1rem;
  margin: 2% 2%;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const VideoIconStyle = styled.div`
  scale: 200%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.10rem;
  font-weight: 100;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 1rem;
  margin: 2% 2%;
`;

export const SearchIconStyle = styled.div`
  scale: 200%;
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  padding: 0.75rem;
  border-radius: 8px;
  background: #141414;
  border-color: #fff;
  color: #fff;
`;

export const MovieListWrapper = styled.div`
  margin: 2% 2%;
`;

export const MovieListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 1rem;
  padding: 1rem 0;
  `;

export const MovieListTitleSectionStyle = styled.div`
   display: flex;
   font-size: 1.5rem;
   font-weight: 100;
   `;

export const MovieItemStyle = styled.div`
  background: #141414;
  color: #fff;
  overflow: hidden;

  & img {
    scale: 105%;
    transition: .3s ease-in-out .3s;
  };

  &:hover img {
    transform: scale(1.10);
  }
`;

export const ModalStyle = styled.div`
  padding: 1rem;
  text-align: justify;
  line-height: 1.75rem;

  & button {
    scale: 200%;
    margin: 1rem 2rem 0 0;
    padding: 0px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s .3s;
  }

  &:hover button {
    transform: scale(1.10);
  }
`;