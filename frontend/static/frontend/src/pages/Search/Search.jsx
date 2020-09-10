import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Typography from '@material-ui/core/Typography';

// Local
import AuthLayout from '../../components/AuthLayout';
import Heading from '../../components/Heading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import PageTitle from '../../components/PageTitle';
import SearchInput from '../../components/SearchInput';
import UserList from '../../components/UserList';

import useUI from '../../hooks/useUI';

import {
  getSearch,
  key,
  selectSearch,
  selectSearchString,
} from '../../redux/search';

const Search = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const searchString = useSelector(selectSearchString);

  const { loading, nextLoading } = useUI(key.search, key.searchNext);

  const handleNext = () => {
    dispatch(getSearch(searchString, search.next));
  };

  const render = () => {
    let rendered;
    if (search.results.length) {
      rendered = <UserList list={search.results} />;
    } else if (!loading) {
      rendered = (
        <Typography>
          No results found.
        </Typography>
      );
    }
    return rendered;
  };

  return (
    <>
      <PageTitle title="Home" />

      <AuthLayout>
        <Heading>
          <MobileMenu />
          <SearchInput />
        </Heading>
        {render()}
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={search.next}
        />
      </AuthLayout>
    </>
  );
};

export default Search;
