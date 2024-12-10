import styled from 'styled-components'; 

const Container = styled.div`
    
`

const Title = styled.h1`
    color: #000;
    text-align: center;
    font-size: 50px;
`
const SubTitle = styled.h2`
    text-align: center;
    font-size: 30px;
`

const Text = styled.p`
    font-size: 26px;
    text-align: center;
`

const Image = styled.img`
    display: flex;
`

function HomePage(){
    return(
        <Container>
            <Title>Exame - Web Development</Title>
            <SubTitle>Enzo Motta RM555372</SubTitle>
            <Text>Este projeto foi criado para a avalição do curso de Web Dev</Text>
        </Container>
    )
}
export default HomePage
