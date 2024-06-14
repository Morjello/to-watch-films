import { useForm } from 'react-hook-form';
import {
	StyledSearchContainer,
	StyledSearchForm,
	StyledSearchInput,
} from './StyledSearchForm';
import { ButtonSize, SubmitButton } from '../UI/Buttons/Buttons';

interface IFormInput {
	search: string;
}

const SearchForm = () => {
	const { register, handleSubmit } = useForm<IFormInput>();

	// const onSubmit = (data: { search: string }) => {
	//   searchParamsStore.setSearchParams(data.search);
	//   moviesStore.getMovies(data.search);
	// };

	return (
		<StyledSearchForm
			action="search"
			// onSubmit={handleSubmit(onSubmit)}
		>
			<StyledSearchContainer>
				<StyledSearchInput
					type="search"
					placeholder="Фильм"
					id="search"
					{...register('search')}
				/>
				<SubmitButton size={ButtonSize.MD}>Найти</SubmitButton>
			</StyledSearchContainer>
		</StyledSearchForm>
	);
};

export default SearchForm;
