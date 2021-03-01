import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import api from '../../services/api';
import apiDotaPlayer from '../../services/apiDotaPlayer';

import personImg from '../../assets/person.png';

import * as S from './styles';

// export interface ICardPlayer {
//   account_id?: string;
//   name: string;
//   avatarfull?: string;
// }

export interface ICardPlayer {
  id?: string;
  nickname: string;
  avatar_url?: string;
}

const PER_PAGE = 10;

const Players: React.FC = () => {
  const [players, setPlayers] = useState<ICardPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadPlayers = async (): Promise<void> => {
      // const response = await apiDotaPlayer.get('');
      const response = await api.get('/players');
      setPlayers(response.data.sort());
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
    .sort((a:any, b:any) => a.id - b.id)
    .map(({ id, nickname, avatar_url }) => (
      <S.CardPlayer key={id}>
        <S.CardAvatar>
          { avatar_url === null
            ? <img src={personImg} alt={nickname} />
            : <img src={avatar_url} alt={nickname} />}
        </S.CardAvatar>
        <S.CardNickName>
          <S.CardNickNameText>
            {nickname}
          </S.CardNickNameText>
        </S.CardNickName>
      </S.CardPlayer>
    ));

  const pageCount = Math.ceil(players.length / PER_PAGE);

  return (
    <>
      <S.Container>
        <S.PlayersContent>
          <S.Title>Players</S.Title>

          <S.CardContent>
            {currentPageData}
          </S.CardContent>

        </S.PlayersContent>

        { loading === false ? (
          <S.StyledPaginateContainer>
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
          </S.StyledPaginateContainer>
        ) : (
          <S.Title>Carregando...</S.Title>
        )}
      </S.Container>
    </>
  );
};

export default Players;
