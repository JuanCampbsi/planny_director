import * as React from 'react';
import * as S from './styles';
import { toPng, toBlob } from 'html-to-image';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import Button from '../Button';
import { jsPDF } from "jspdf";
import { itemsIsChartValueContent, setGraphicsImages, setIsOpenOrDisableModalSucessOrError } from '../../../../dataflow/reducers/StateList';
interface Props {
  titleMenssage?: string;
  SubTitleMenssage?: string;
  sucess?: boolean;
  error?: boolean;
  isOpen?: boolean;
  children?: React.ReactNode;
  closeModal: any;
  submitFunction: any;
  data: any[];
  setFile: any;
  setIsErroMenssage: any
  setIsSucessMenssage: any
  setIsSpinnerModalEditOpen: any
  setIsSpinnerModalEdit: any
}

const ChartModal = ({ isOpen, sucess, error, closeModal, titleMenssage, SubTitleMenssage, submitFunction, data, setFile, setIsSucessMenssage, setIsErroMenssage, setIsSpinnerModalEditOpen, setIsSpinnerModalEdit, children, ...rest }: Props) => {
  const dispatch = useDispatch();
  const images = useAppSelector(state => state.state.graphicsImages)

  console.log('data', data)
  const handleGenerateImg = async () => {
    let array: any[] = []

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'px',

    })

    data.forEach((item, index) => {

      toPng(document.getElementById(`charts${index}`))
        .then(function (dataUrl) {

          array.push(dataUrl)

          setTimeout(() => {

            if (index === (array.length - 1)) {
              console.log('dentro do if', array.length === data.length, array, data)
              array.forEach((image, index2) => {
                console.log(index2)
                if (index2 > 0 && (index2 % 2 === 0)) {
                  doc.addPage()
                }
                const width = doc.internal.pageSize.getWidth();
                const height = doc.internal.pageSize.getHeight();
                if (index2 === 0) {
                  doc.addImage(image, 70, 60, 300, 230)
                } else if (index2 % 2 !== 0) {
                  doc.addImage(image, 70, 320, 300, 230)
                } else {
                  doc.addImage(image, 70, 60, 300, 230)
                }
                //doc.addImage(image, 60, 60, 200, 150)
                doc.setFont('Segoe UI');
              })

              setTimeout(() => {
                const blob = new Blob([doc.output('blob')], { type: 'application/pdf' });
                console.log(blob)
                setFile(blob)

                setTimeout(() => { submitFunction(blob) }, 200)

                //     const url = window.URL || window.webkitURL;
                // const linkCreated = url.createObjectURL(blob);
                // //window.open(linkCreated)
                // const link = document.createElement('a');
                // link.href = linkCreated;
                // link.download = `Plano Diretor - Consolidado`;
                // link.click();
                // link.remove();

              }, 200)
            }
          }, 500)



        }).catch(err => console.log('Alguma coisa deu errado' + "index" + index));
    })


  }

  const handleSumit = () => {
    dispatch(setIsOpenOrDisableModalSucessOrError(true))

    setIsErroMenssage(false)
    setIsSucessMenssage(false)
    setIsSpinnerModalEditOpen(false)
    setIsSpinnerModalEdit(false)
    dispatch(itemsIsChartValueContent(true))
    void handleGenerateImg()
  }
  return (
    <>
      <S.Container>
        <S.ContainerSpinner>
          <S.Box>
            <S.Title>{titleMenssage}</S.Title>
            <S.SubTitle>{SubTitleMenssage}</S.SubTitle>

            <S.ChildrenContainer>
              {children}
            </S.ChildrenContainer>
            {/* <button onClick={handleGenerateImg} >gerar img</button> */}
            <S.WrapperButton >
              <Button
                backgroundButton={'var(--amarelo-vale)'}
                hoverButton={'#CFA53D'}
                widthButton={'9.625rem'}
                heightButton={'2.625rem'}
                funcAction={() => closeModal(false)}
              >
                Voltar
              </Button>
              <Button
                backgroundButton={'#007E7A'}
                hoverButton={'#007e7ac2'}
                widthButton={'9.625rem'}
                heightButton={'2.625rem'}
                funcAction={() => handleSumit()}
              >
                Enviar
              </Button>
            </S.WrapperButton>

          </S.Box>
        </S.ContainerSpinner>
      </S.Container>
    </>
  );
};

export default ChartModal;
