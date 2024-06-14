import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	justify-items: center;
	gap: 37px 24px;
	list-style-type: none;
`;

interface ListProps<T> {
	items: T[];
	renderItems: (item: T) => ReactNode;
}

function List<T>({ items, renderItems }: ListProps<T>) {
	return <StyledList>{items.map(renderItems)}</StyledList>;
}

export default List;
