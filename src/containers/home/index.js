import React, { useState } from 'react';

import {
  ContainerList,
  Label,
  ListItems,
  Item
} from './styles';

import Container from '../../components/container';
import Header from '../../components/header';
import Search from '../../components/search';
import MovieImage from '../../components/movieImage';

const data = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
]

function Home({ navigation, route }) {

  const [ search, setSearch ] = useState('');
  const label = !!search ? `Buscando por: ${search}` : route.name;

  return (
    <Container>
      <Header menu />
      <Search
        placeholder={'Encontre um programa de TV ou Filme'}
        value={ search }
        onChangeText={ value => setSearch(value) }
      />
      <ContainerList>
        <Label>{ label }</Label>
        <ListItems
          data={ data }
          keyExtractor={ item => item.id }
          renderItem={({ item, index }) => (
            <Item index={ index } onPress={ () => navigation.navigate('Details') }>
              <MovieImage />
            </Item>
          )}
        />
      </ContainerList>
    </Container>
  );
};

export default Home;
