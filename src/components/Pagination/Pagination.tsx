import { FC } from 'react';

interface PaginationProps {
	currentPage: number;
	totalItems: any;
	itemsPerPage: number;
	onPageChange: (newPage: number) => void;
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	return (
		<div>
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index}
					onClick={() => onPageChange(index + 1)}
					disabled={currentPage === index + 1}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default Pagination;
