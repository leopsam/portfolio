'use client'
import styled from 'styled-components'
import Image from 'next/image'
import javaScript from './../../public/images/javascript.png'

export function Stacks() {
  return (
    <BodyStacks id="stacks">
      <h1>Minhas Stacks</h1>
      <ContainerAlignment>
        <ContainerStacks>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
          <Stack>
            <Image src={javaScript} width={40} height={40} alt="" />
            <h2>JavaScript</h2>
          </Stack>
        </ContainerStacks>
      </ContainerAlignment>
    </BodyStacks>
  )
}
const BodyStacks = styled.div`
  height: 100vh;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0px 30px 0px;
  }
`
const ContainerAlignment = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
`
const ContainerStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 60vw;
`
const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 200px;
  margin: 5px;
  img {
    margin: 5px;
  }
  h2 {
    margin: 5px;
    font-family: var(--font-bai-jamjuree);
    font-size: 16px;
  }
`
