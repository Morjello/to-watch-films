import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	StyledSearchContainer,
	StyledSearchForm,
	StyledSearchInput,
} from './StyledSearchForm';
import { ButtonSize, SubmitButton } from '../UI/Buttons/Buttons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchQuery } from '../../store/slices/searchQuerySlice';

interface IFormInput {
	search: string;
}

const SearchForm = () => {
	const dispatch = useAppDispatch();
	const { searchQuery } = useAppSelector((state) => state.searchQuery);

	const { register, handleSubmit, setValue } = useForm<IFormInput>({
		defaultValues: { search: searchQuery },
	});

	useEffect(() => {
		setValue('search', searchQuery);
	}, [searchQuery, setValue]);

	const onSubmit = ({ search }: IFormInput) => {
		dispatch(setSearchQuery(search));
	};

	return (
		<StyledSearchForm action="search" onSubmit={handleSubmit(onSubmit)}>
			<StyledSearchContainer>
				<StyledSearchInput
					type="search"
					placeholder="Название фильма"
					id="search"
					{...register('search')}
				/>
				<SubmitButton size={ButtonSize.MD}>Найти</SubmitButton>
			</StyledSearchContainer>
		</StyledSearchForm>
	);
};

export default React.memo(SearchForm);
