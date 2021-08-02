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

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: content;
    background-color: rgba(13, 111, 210, 0.7);
    padding: 0 64px 64px 64px;
    border-radius: 16px;
    color: #fff;

    .search {
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 2px;
        border-radius: 8px 0 0 8px;

        img {
          width: 24px;
          height: 24px;
        }

        input {
          height: 24px;
          border-radius: 8px;
          width: 300px;
          border: none;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 28px;
          outline: 0;
          margin: 0 8px;

          ::placeholder {
            font-family: 'Rajdhani', sans-serif;
            font-weight: 600;
            font-size: 26px;
          }
        }
      }

      button {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 18px;
        padding: 2px 8px;
        color: #fff;
        border-radius: 0 8px 8px 0;
        outline: 0;
        border: 1px solid rgba(13, 111, 210, 0.7);
        height: 28px;
        background-color: rgba(13, 111, 210, 0.3);
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

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
        font-size: 50px;
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
          justify-content: center;
          gap: 32px;
          width: 400px;
          p {
            font-weight: 400;
            font-size: 28px;
            font-family: 'Inter', sans-serif;
          }
        }
      }

      .weather {
        h2 {
          font-weight: 400;
          text-align: center;
          font-size: 32px;
          font-family: 'Inter', sans-serif;
          margin: 70px 0 0 0;
        }
      }
    }
  }

  @media (max-width: 860px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'mobile';
    background-color: rgba(22, 112, 201, 0.2);

    .container {
      border-radius: none;
      padding: 12px 32px 32px 32px;
      grid-area: mobile;

      .search {
        label {
          input {
            width: 200px;
          }
        }
      }

      .content {
        flex-direction: column;

        .left-content {
          margin-bottom: 10px;

          p {
            font-size: 26px;
          }
        }
        .right-content {
          h2 {
            font-size: 32px;
            font-weight: bold;
          }
          .min-max {
            p {
              font-size: 26px;
            }
          }

          .weather {
            h2 {
              margin-top: 30px;
              font-size: 28px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;
