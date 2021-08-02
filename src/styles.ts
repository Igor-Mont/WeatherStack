import styled from 'styled-components';

export const MainGrid = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: rgba(22, 112, 201, 0.2);
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
  grid-template-rows: 1fr 600px 1fr;
  grid-template-areas:
    '. . .'
    '. content .'
    '. . .';
  align-items: center;
  justify-content: center;

  .content {
    height: 100%;
    display: flex;
    grid-area: content;
    background-color: rgba(13, 111, 210, 0.7);
    padding: 64px;
    border-radius: 16px;
    color: #fff;

    .left-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 32px;

      h1 {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 72px;
      }

      .img-weather {
        img {
          width: 180px;
          height: 180px;
        }
      }

      .more-infos {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 36px;
        }
      }
    }

    .right-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        h2 {
          font-weight: 500;
          font-size: 64px;
          font-family: 'Rajdhani', sans-serif;
        }

        p {
          font-weight: 500;
          font-size: 32px;
          font-family: 'Rajdhani', sans-serif;
        }

        .min-max {
          display: flex;
          gap: 32px;

          p {
            font-weight: 400;
            font-size: 32px;
            font-family: 'Inter', sans-serif;
          }
        }
      }

      .weather {
        h2 {
          font-weight: 400;
          font-size: 32px;
          font-family: 'Inter', sans-serif;
          margin-bottom: 70px;
        }
      }
    }
  }
`;
