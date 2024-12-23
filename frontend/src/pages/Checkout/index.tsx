import { useLocation } from 'react-router-dom'
import {
  CheckoutContainer,
  ContainerSide,
  DeliveryCardContainer,
  DeliveryContainer,
  IconContainer,
  InfoCard,
  SubTitleContainer,
  TextAddress,
  TextContainer,
  TitleCart,
} from './styles'
import { Clock, CurrencyDollarSimple, MapPin } from 'phosphor-react'
import Lottie from 'lottie-react'
import Delivery from '../../assets/delivery.json'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContent'

export function Checkout() {
  const location = useLocation()
  const { removeAll } = useContext(CartContext)

  useEffect(() => {
    removeAll()
  }, [removeAll])

  return (
    <CheckoutContainer>
      <ContainerSide>
        <DeliveryContainer>
          <TextContainer>
            <TitleCart>Aoba! Pedido confirmado!</TitleCart>
            <SubTitleContainer>
              Agora é só aguardar que logo o café chegará até você
            </SubTitleContainer>
          </TextContainer>
          <DeliveryCardContainer>
            <InfoCard>
              <IconContainer $color="purple-main">
                <MapPin weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAddress>
                  Entrega em:{' '}
                  <b>
                    {location.state?.adress.rua},{' '}
                    {location.state?.adress.numero}
                  </b>
                </TextAddress>
                <TextAddress>
                  {location.state?.adress.bairro} -{' '}
                  {location.state.adress.complemento
                    ? location.state.adress.complemento
                    : null}{' '}
                  - {location.state?.adress.cidade}, {location.state?.adress.uf}
                </TextAddress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-main">
                <Clock weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAddress>Previsão de entrega:</TextAddress>
                <TextAddress>
                  <b>20 min - 30 min</b>
                </TextAddress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-dark">
                <CurrencyDollarSimple weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAddress>Pagamento na Entrega</TextAddress>
                <TextAddress>
                  <b>{location.state.methodPayment}</b>
                </TextAddress>
              </TextContainer>
            </InfoCard>
          </DeliveryCardContainer>
        </DeliveryContainer>
        <>
          <Lottie
            animationData={Delivery}
            loop={true}
            style={{ maxHeight: '284px', marginTop: '4rem', minWidth: '492px' }}
          />
        </>
      </ContainerSide>
    </CheckoutContainer>
  )
}
