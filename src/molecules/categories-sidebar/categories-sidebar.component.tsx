import styled from 'styled-components';
import { theme } from '../../constants';
import { Text } from '@src/atoms';
import { useLocation, useNavigate, useParams } from 'react-router';
import { categories } from '@src/organisms';
import { useCallback, useEffect, useState } from 'react';

const SWrapper = styled.div`
  width: 275px;
  margin-right: 44px;
`;

const SListWrapper = styled.div`
  width: inherit;
  border: 1px solid ${theme.lightGray};
  border-radius: 10px;
  margin-right: 44px;
  position: fixed;
`;

const SText = styled.div<{ isActive: boolean }>`
  padding: 16px 32px;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `color: ${theme.mainColor};
  background: ${theme.mainColor}15;`}
  :hover {
    color: ${theme.mainColor};
    background: ${theme.mainColor}15;
  }
`;

export const getCategoryById = (id: string | undefined) => {
  return categories.find((category) => category.id === id);
};

type Category = typeof categories[0];

export const CategoriesSidebar = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const category = getCategoryById(id);

  const onClickHandler = useCallback(
    (id: string) => {
      navigate('/categories/' + id);
    },
    [navigate]
  );

  return (
    <SWrapper>
      <SListWrapper>
        {categories.map(({ id, title }) => {
          const isActive = id === category?.id;

          return (
            <SText
              isActive={isActive}
              key={id}
              onClick={() => onClickHandler(id)}
            >
              <Text.Body>{title}</Text.Body>
            </SText>
          );
        })}
      </SListWrapper>
    </SWrapper>
  );
};
