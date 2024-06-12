import { FC } from 'react';
import styled from 'styled-components';

interface StyledTitleProps {
	weight: 200 | 300 | 400 | 500 | 600 | 700;
}

const StyledTitle = styled.h1<StyledTitleProps>`
	font-weight: ${({ weight = 400 }) => weight};
`;

const Title: FC = (props) => {
	return <div></div>;
};

export default Title;
