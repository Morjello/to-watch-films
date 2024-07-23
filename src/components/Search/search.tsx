import { useEffect, useState } from 'react';

import cn from 'classnames';

import { useAppDispatch } from '../../hooks/redux';
import useDebounce from '../../hooks/useDebounce';
import SearchIcon from '../../icons/Search';
import { searchSlice } from '../../store/reducers/SearchSlice';

import styles from './search.module.css';

interface SearchProps {
	className?: string;
}

const Search = ({ className }: SearchProps) => {
	const [searchValue, setSearchValue] = useState('');
	const [showError, setShowError] = useState(false);

	const { setSearchText } = searchSlice.actions;

	const dispatch = useAppDispatch();

	const debouncedSearchValue = useDebounce(searchValue, 1000);

	// const debouncedSetSearchText = (text: string) => {
	// 	if (text.length >= 3) {
	// 		dispatch(setSearchText(text.trim().toLowerCase()));
	// 	} else {
	// 		dispatch(setSearchText(''));
	// 	}
	// };

	//or this
	// useEffect(() => {
	//   if (debouncedSearchValue.length === 0 || debouncedSearchValue.length >= 3) {
	//     dispatch(setSearchText(debouncedSearchValue.trim().toLowerCase()));
	//   }
	// }, [debouncedSearchValue, dispatch, setSearchText]);

	useEffect(() => {
		if (
			debouncedSearchValue.length === 0 ||
			debouncedSearchValue.length >= 3
		) {
			dispatch(setSearchText(debouncedSearchValue.trim().toLowerCase()));
			setShowError(false);
		} else if (searchValue.length > 0 && searchValue.length < 3) {
			setShowError(true);
		}
	}, [debouncedSearchValue, dispatch, setSearchText, searchValue.length]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		if (e.target.value.length === 0) {
			dispatch(setSearchText(''));
			setShowError(false);
		}
	};

	return (
		<div className={cn(styles.search, className)}>
			<input
				className={styles.search__input}
				placeholder='Поиск...'
				type='text'
				onChange={handleInputChange}
			/>
			<SearchIcon className={styles.search__icon} />
			{showError && (
				<span className={styles.search__error}>
					Минимальная длина 3 символа
				</span>
			)}
		</div>
	);
};

export default Search;
