import styled from 'styled-components';

interface DividerProps {
	height?: number;
	heightMob?: number;
}
export const Divider = styled.div<DividerProps>`
	height: ${({ height = 1 }) => height}px;
	border-bottom: 1px solid grey;

	// Медиа запрос
	@media ${({ theme }) => theme.media.large} {
		height: ${({ heightMob = 4 }) => heightMob}px;
	}
`;
