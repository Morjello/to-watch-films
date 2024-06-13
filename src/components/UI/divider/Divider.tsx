import styled from 'styled-components';

interface DividerProps {
	height?: number;
	heightMob?: number;
}
export const Divider = styled.div<DividerProps>`
	height: ${({ height = 8 }) => height}px;

	// Медиа запрос
	@media ${({ theme }) => theme.media.large} {
		height: ${({ heightMob = 4 }) => heightMob}px;
	}
`;
