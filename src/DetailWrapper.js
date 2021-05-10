import styled from 'styled-components'
// import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
width: 100%;
display: flex;
color: white;
justify-content: center;
align-items: center;
gap: 4rem;
height: 100%;
background: rgba(0, 0, 0, .4);
padding: 0 10%;
`
const PosterContainer = styled.div`
flex: 1 1 45%;
// text-align: center;
align-items: flex-end;
`
const Poster = styled.img`
height: 25rem;
border-radius: 7px;
`

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContentContainer = styled(FlexColumnContainer)`
justify-content: center;
gap: 5%;
height: 100%;
flex: 1 1 55%;
`



const Title = styled(FlexColumnContainer)`
gap: 2%;
`

const SubTitle = styled.h2`
font-style: italic;
font-size: 17px;
`

const Overview = styled.div`
line-height: 1;
font-size: 13px;
`
const PrimaryBtn = styled.button`
  background: white;
  border: none;
  border-radius: 7px;
  font-weight: bolder;
  
  
  :hover{
  cursor: pointer;
  font-weight: lighter;
  }
`

const LargePrimaryBtn = styled(PrimaryBtn)`
height: 3rem;
width: 10rem;
`
const GenerContainer = styled.div`
display: flex;
gap: .5rem;
`

const GenerBtn = styled(PrimaryBtn)`
height: 2rem;
width: 4rem;
`

export default function DetailWrapper(props){
    // const history = useHistory()
    // let handleOnClick = (name)=> history.push(`/movies/${name.toLowerCase()}`)
    let handleOnClick = ()=>{}
    return (
        <Wrapper>
            <PosterContainer><Poster src={`http://image.tmdb.org/t/p/w200/${props.detail.poster_path}`}/></PosterContainer>
            <ContentContainer>
                <Title>
                    <h1>{ props.detail.original_title }</h1>
                    <SubTitle>{ props.detail.tagline }</SubTitle>
                </Title>
                <FlexColumnContainer>
                    <Overview>{props.detail.overview}</Overview>
                    <GenerContainer>{props.detail.genres.map(({name})=><GenerBtn onClick={()=>handleOnClick(name)}>{name}</GenerBtn>)}</GenerContainer>
                    <LargePrimaryBtn>Watch now</LargePrimaryBtn>
                </FlexColumnContainer>
            </ContentContainer>
        </Wrapper>
    )
}