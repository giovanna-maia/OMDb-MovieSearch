import React, { useEffect, useState, useContext } from "react";
import MovieListHeader from "./MovieListHeader";
import MovieList from "./MovieList";
import SearchInput from "./SearchInput";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { HeaderWrapper } from "./styles"

// Construção do Modal:
// (OK) - Separar a lista de filmes em conteúdos únicos (forEach? map? não sei), para posteriormente transformá-los em botões
// (OK) - Fazer uma nova lógica para requisitar a API, porque para os detalhes são passados parâmetros diferentes da função Container
// (OK) - Criar um novo componente para o modal e aí sim passar as propriedades de cada filme. Deixar a lógica no modal!
// (OK) - Itens do modal: Título, Ano, Rate, Gênero e Ratings

// Função favoritar:
// (OK) - Implementar o useContext para aplicar a feature de favoritar na aplicação toda
// (OK) - Função de acrescentar aos favoritos
// (OK) - Função de remover dos favoritos
// (OK) - Mostrar os favoritos em tela 
// - Alterar a feature de favoritar: está como botão, mas seria interessante deixar como checkbox (e aí acrescentar/remover ficaria no mesmo componente)
// - Salvar os favoritos num armazenamento local?

// Estilização:
// (OK) - Reset e css global
// - Deixar bonitinho, porque tá muito feio kkkk

// Correções extra:
// (OK) - A aplicação começa iniciando os filmes com título "undefined" porque não tem nada na array do usestate kkkkk
// - A aplicação não mostra um "not found" quando o título do filme é escrito errado
// - Separar o context em um componente diferente do App (eles estão juntos)



const Container = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const getAPIRequest = async (searchValue: string) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=75dd5c51`
      
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if(responseJson.Search) {
        setMovies(responseJson.Search)
      };
    };
  
    useEffect(() => {
      getAPIRequest(searchValue);
    }, [searchValue]);

    const {favorites} = useContext(FavoriteContext);

    return (
        <>
          <HeaderWrapper>
            <MovieListHeader />
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </HeaderWrapper>

          <div>
            <MovieList sectionHeader={'Search Result:'} movies={movies} />
          </div>

          <div>
            <MovieList sectionHeader={'My favorites:'} movies={favorites} />
          </div>
        </>
      );
}

export default Container;