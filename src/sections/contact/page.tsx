import FormContact from '@/components/FormContact'
import { BodyContact, ContainerItens, TopSections, Line } from './contactStyles'

export default function Contact() {
  return (
    <BodyContact id="contact">
      <ContainerItens>
        <TopSections>
          <h1>Entre em contato</h1>
          <Line />
          <p>
            Gostaria de trocar ideias, iniciar um projeto ou simplesmente
            conversar?
          </p>
          <p>
            Estou sempre em busca de novas oportunidades, desafios e
            colaborações. Se você tem uma ideia, uma pergunta ou precisa de
            ajuda com algo, ficarei muito feliz em ouvir você! Não importa se é
            uma proposta formal ou apenas uma curiosidade, estou aqui para
            ajudar e explorar novas possibilidades.
          </p>
          <p>
            Minha caixa de entrada está aberta para discutir projetos,
            compartilhar conhecimentos ou até mesmo para bater um papo sobre
            tecnologia e inovação. Preencha o formulário abaixo com seus dados e
            uma breve mensagem sobre o que você gostaria de conversar, e
            entrarei em contato o mais rápido possível.
          </p>
        </TopSections>

        <FormContact />
      </ContainerItens>
    </BodyContact>
  )
}
