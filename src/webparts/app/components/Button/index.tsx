import * as React from 'react';
import * as S from './styles';

interface IProps {
  funcAction?: (value: any) => void;
  widthButton?: string;
  heightButton?: string;
  marginTopButton?: string;
  marginBottomButton?: string;
  marginLeftButton?: string;
  marginRightButton?: string;
  paddingTopButton?: string;
  paddingBottomButton?: string;
  paddingRightButton?: string;
  paddingLeftButton?: string;
  titleColorButton?: string;
  backgroundButton?: string;
  hoverButton?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  funcAction,
  widthButton,
  heightButton,
  marginTopButton,
  marginBottomButton,
  marginLeftButton,
  marginRightButton,
  paddingTopButton,
  paddingBottomButton,
  paddingRightButton,
  paddingLeftButton,
  titleColorButton,
  backgroundButton,
  hoverButton,
  disabled,
  children,
  ...rest
}: IProps) => {
  return (
    <>
      <S.Container
        type="button"
        onClick={funcAction}
        widthButton={widthButton}
        heightButton={heightButton}
        marginTopButton={marginTopButton}
        marginBottomButton={marginBottomButton}
        marginLeftButton={marginLeftButton}
        marginRightButton={marginRightButton}
        paddingTopButton={paddingTopButton}
        paddingBottomButton={paddingBottomButton}
        paddingRightButton={paddingRightButton}
        paddingLeftButton={paddingLeftButton}
        backgroundButton={backgroundButton}
        titleColorButton={titleColorButton}
        hoverButton={hoverButton}
        disabled={disabled}
      >
        {children}
        <S.Title />
      </S.Container>
    </>
  );
};

export default Button;
