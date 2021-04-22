import styled from 'styled-components';
import Link from 'next/link';

import CreditcardLogo from '../public/icons/undraw_Credit_card_payments_re_qboh.svg';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  background-color: var(--wrapper-color);
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1280px; */

  display: flex;
`;

export const CardLogo = styled.div`
  width: 40%;
  max-width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--container-color);
`;

export const Logo = styled(CreditcardLogo)`
  scale: 0.75;
  max-width: 90%;
`;

export const SelectionWrapper = styled.aside`
  width: 55%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

`;

export const Buttons = styled.article`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: 2.2rem;
  margin: 0 2rem 4rem 2rem;
`;

export const SelectButton = styled.a`
  padding: 1rem 2rem;
  width: 10rem;

  text-align: center;
  border-radius: 0.5rem;
  text-decoration: none;
  background-color: ${(props) => props.color};
`;
