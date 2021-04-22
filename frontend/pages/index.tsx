import Link from 'next/link';
import {
  Container,
  ContainerWrapper,
  CardLogo,
  Title,
  Buttons,
  SelectButton,
  SelectionWrapper,
  Logo,
} from './styled';

import CreditcardLogo from '../public/icons/undraw_Credit_card_payments_re_qboh.svg';

export default function Home() {
  return (
    <Container>
      <ContainerWrapper>
        <CardLogo>
          <Logo />
        </CardLogo>
        <SelectionWrapper>
          <Title>Escolha sua operacão</Title>
          <Buttons>
            <Link href="/transaction">
              <SelectButton color="#54a1a3">
                Transaction
              </SelectButton>
            </Link>
            <Link href="/transaction">
              <SelectButton color="#3ac4a6">
                Balance
              </SelectButton>
            </Link>
          </Buttons>
        </SelectionWrapper>
      </ContainerWrapper>
    </Container>
  );
}
