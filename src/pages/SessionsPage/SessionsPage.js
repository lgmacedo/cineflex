import styled from "styled-components"
import Session from "../../components/Session";

export default function SessionsPage() {
    const sessions = [{
        weekday: "Quinta-feira",
        date: "24/06/2021",
        showtimes: [
            {
                name: "15:00",
                id: 1
            },
            {
                name: "19:00",
                id: 2
            }
        ]
    },
    {
        weekday: "Quinta-feira",
        date: "24/06/2021",
        showtimes: [
            {
                name: "15:00",
                id: 1
            },
            {
                name: "22:00",
                id: 2
            }
        ]
    },
    {
        weekday: "Quinta-feira",
        date: "24/06/2021",
        showtimes: [
            {
                name: "15:00",
                id: 1
            },
            {
                name: "19:00",
                id: 2
            }
        ]
    },];
    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessions.map(session=>(
                    <Session weekday={session.weekday} date={session.date} showtimes={session.showtimes}/>
                ))}
            </div>

            <FooterContainer>
                <div>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
                </div>
                <div>
                    <p>Tudo em todo lugar ao mesmo tempo</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`