import styled from 'styled-components';

interface IStyledFlex {
	direction?: string;
}

export const Flex = styled.div<IStyledFlex>`
	display: flex;
	align-items: center;
	justify-content: center;
`;
