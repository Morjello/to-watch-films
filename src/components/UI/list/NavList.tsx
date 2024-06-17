import { ReactNode } from 'react';

interface NavListProps<T> {
	items: T[];
	renderItems: (item: T) => ReactNode;
}

function NavList<T>({ items, renderItems }: NavListProps<T>) {
	return <div>{items.map(renderItems)}</div>;
}

export default NavList;
