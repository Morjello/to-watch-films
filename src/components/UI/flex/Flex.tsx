import { FC } from 'react';
import styled from 'styled-components';

interface IStyledFlex {
	direction: string;
}

const StyledFlex = styled.div`
	display: flex;
	align-items: center;
`;

const Flex: FC = (props) => {
	return <StyledFlex {...props} />;
};

export default Flex;
