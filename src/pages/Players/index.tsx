import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import api from '../../services/api';
import apiDotaPlayer from '../../services/apiDotaPlayer';

import personImg from '../../assets/person.png';

import {
  Container,
  PlayersContent,
  Title,
  CardContent,
  CardPlayer,
  CardAvatar,
  CardNickName,
  CardNickNameText,
  StyledPaginateContainer,
} from './styles';

export interface ICardPlayer {
  account_id?: string;
  name: string;
  avatarfull?: string;
}

const PER_PAGE = 10;

const Players: React.FC = () => {
  const [players, setPlayers] = useState<ICardPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadPlayers = async (): Promise<void> => {
      const response = await apiDotaPlayer.get('');
      setPlayers(response.data);
      setLoading(false);
    };

    loadPlayers();
  }, []);

  const handlePageClick = ({ selected: selectedPage }: any) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = players
    .slice(offset, offset + PER_PAGE)
    .map(({ account_id, name, avatarfull }) => (
      <CardPlayer key={account_id}>
        <CardAvatar>
          <img src={avatarfull} alt={name} />
        </CardAvatar>
        <CardNickName>
          <CardNickNameText>
            {name}
          </CardNickNameText>
        </CardNickName>
      </CardPlayer>
    ));

  const pageCount = Math.ceil(players.length / PER_PAGE);

  return (
    <>
      <Container>
        <PlayersContent>
          <Title>Players</Title>

          <CardContent>
            {currentPageData}
          </CardContent>

        </PlayersContent>

        { loading === false ? (
          <StyledPaginateContainer>
            <ReactPaginate
              previousLabel="←"
              nextLabel="→"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              previousLinkClassName="pagination__link"
              nextLinkClassName="pagination__link"
              disabledClassName="pagination__link--disabled"
              activeClassName="pagination__link--active"
            />
          </StyledPaginateContainer>
        ) : (
          <Title>Carregando...</Title>
        )}
      </Container>
    </>
  );
};

export default Players;
