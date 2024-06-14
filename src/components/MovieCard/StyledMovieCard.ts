import styled from "styled-components";

export const StyledMovieCard = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 350px;
	border-radius: 6px;
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
`;

export const StyledImage = styled.img`
	cursor: pointer;
  height: 440px;
  max-width: 350px;
  border-radius: 15px 15px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
`
export const StyledCell = styled.div`
	padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color:${({theme}) => theme.colors.bgbth};
  border-radius: 0 0 15px 15px;
`