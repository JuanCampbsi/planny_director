import styled from 'styled-components';
export const Container = styled.div `
  width: 100%;
  padding: 4.625rem 8.4375rem 6.125rem 8.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerEdit = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerSpinner = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffab 0% 0% no-repeat padding-box;
  z-index: 999;
`;
export const Spinner = styled.div `
  border: 5px solid #007e7ab3;
  border-top: 5px #ffba0e solid;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
export const WrapperContainer = styled.div `
  width: 68.5rem;
  min-height: ${({ minHeight }) => (!!minHeight ? minHeight : '55.0625rem')};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.125rem 0.25rem #0000001a;
  opacity: 1;
`;
export const TopBarContainer = styled.div `
  display: flex;
  align-items: center;
`;
export const TopBar = styled.img `
  display: flex;
  align-items: center;
  position: relative;
  width: 68.5rem;
  height: 3.75rem;
`;
export const TitleView = styled.h1 `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 1.125rem/1.5rem Segoe UI;
  position: absolute;
  z-index: 3;
  margin-left: 2.1875rem;
`;
export const TitleErroMenssage = styled.span `
  font-size: 12px;
  font-weight: 400;
  color: #a80000;
  font: normal normal Segoe UI;
  padding-top: 5px;
`;
export const WrapperInput = styled.div `
  margin: 30px 30px 30px 30px;
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
`;
export const WrapperInputLabel = styled.div `
  display: flex;
  flex-direction: column;
`;
export const WrapperContainerRichText = styled.div.attrs({
    className: 'RichText',
}) `
  z-index: 1;
  .e-control input.e-input,
  .e-control .e-input-group input,
  .e-control .e-input-group input.e-input,
  .e-control .e-input-group.e-control-wrapper input,
  .e-control .e-input-group.e-control-wrapper input.e-input,
  .e-control .e-float-input input,
  .e-control .e-float-input.e-control-wrapper input,
  .e-control.e-input-group input,
  .e-control.e-input-group input.e-input,
  .e-control.e-input-group.e-control-wrapper input,
  .e-control.e-input-group.e-control-wrapper input.e-input,
  .e-control.e-float-input input,
  .e-control.e-float-input.e-control-wrapper input {
    box-sizing: content-box;
    display: none;
  }

  .e-richtexteditor .e-linkheader,
  .e-richtexteditor .e-audioheader,
  .e-richtexteditor .e-videoheader,
  .e-richtexteditor .e-video-url-wrap {
    display: none;
  }
`;
export const WrapperInputLabelFile = styled.div `
  display: flex;
  align-items: center;
  color: var(--cinza-escuro);
  background: setColor(white);
  transition: 0.4s ease;
  font-size: 0.75em;
  font-weight: regular;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57px;
    height: 42px;
    background-color: rgb(0 123 119 / 71%);
    border: none;

    img {
      width: 30px;
      height: 30px;
    }
  }

  input[type='file']::-webkit-file-upload-button {
    visibility: hidden;
    padding: 0;
    height: 42px;
    width: 0;
  }
`;
export const BoxIconUpload = styled.button ``;
export const UploadInput = styled.input `
  position: relative;
  background: #f9f9f9;
  border: 0.0625rem solid #e6e6e6;
  font-size: 12.5px;
  padding: 0 20px 0 5px;
  z-index: 1;
  width: 271px;
  height: 42px;

  cursor: pointer;
`;
export const LabelInput = styled.label `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  font: normal normal 600 0.75rem;
  opacity: 1;
`;
export const SeparatorInput = styled.div `
  margin-top: 0.375rem;
  margin-bottom: 0.875rem;
  width: 1.875rem;
  height: 0rem;
  border-bottom: 0.125rem solid var(--amarelo-vale);
  opacity: 1;
`;
export const Separator = styled.div `
  margin-top: ${({ marginTopButton }) => (!!marginTopButton ? marginTopButton : '2.5rem')};
  width: 100%;
  height: 0rem;
  border-bottom: 0.125rem solid #e6e6e66e;
`;
export const WrapperButton = styled.div `
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
`;
export const WrapperButtonEditRouter = styled.div `
  display: flex;
  justify-content: flex-end;
  /* gap: 20px; */
  width: 100%;
`;
export const WrapperPeoplePick = styled.div `
  div .ms-BasePicker-text {
    border: 0.0625rem solid #e6e6e6;
    width: 327px;
    display: flex;
    flex-wrap: wrap;
    min-height: 42px;
    max-height: 471px;
    ::after {
      border: 0.0625rem solid #e6e6e6;
    }
  }

  input .ms-BasePicker-input input-158 {
    min-height: 42px;
    max-height: 471px;
  }
`;
export const TextArea = styled.textarea `
  width: 327px;
  max-width: calc(68.5rem - 4.21875rem);
  height: 142px;
  padding: 0.8125rem 1.25rem 0.8125rem 0.9375rem;
  position: relative;
  /* background: #f9f9f9; */
  border: 0.0625rem solid #e6e6e6;
  outline: none;
`;
export const InputText = styled.input `
  width: 327px;
  height: 2.625rem;
  padding: 0.8125rem 1.25rem 0.8125rem 0.9375rem;
  position: relative;
  /* background: #f9f9f9; */
  border: 0.0625rem solid #e6e6e6;
  outline: none;
`;
export const ChartContainer = styled.div `
  /* width: 100%; */
`;
export const ChartBox = styled.div `
  width: 100%;
  //border: solid 1px var(--amarelo-vale);
  padding: 8px;
  margin: auto 0;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
export const ChartBoxPrint = styled.div `
  width: 100%;
`;
export const ChartTitle = styled.p `
  font-size: 18px;
  font-weight: 700;
  margin-left: 44px;
  color: var(--verde-vale);
`;
export const Table = styled.div `
  width: 100%;
  height: 150px;
  border: 0.0625rem solid #e6e6e6;
`;
export const TableColumnNames = styled.div `
  width: 100%;
  display: flex;
`;
export const CollumnInput = styled.input `
  width: 129.3px;
  height: 20px;
  border: solid red 1px;
  padding-left: 10px;
  outline: none;
`;
export const TableValues = styled.div `
  width: 100%;
  display: flex;
`;
export const CollumnValue = styled.input `
  width: 129.3px;
  height: 20px;
  border: solid blue 1px;
  padding-left: 10px;
  outline: none;
`;
export const BtnBox = styled.div `
  width: 20.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ButtonExemple = styled.button `
  padding: 4px;
  cursor: pointer;
`;
export const WrapperFilterEdit = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
//# sourceMappingURL=styles.js.map