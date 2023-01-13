import * as React from 'react';
import { useAppSelector } from '../../../../../../dataflow/hooks';
import * as S from './styles';
const Description = () => {
    const listInfoCentral = useAppSelector((state) => state.state.listInfoCentral);
    return (React.createElement(React.Fragment, null, !!listInfoCentral &&
        listInfoCentral.map((item) => (React.createElement(S.Container, null,
            React.createElement(S.WrapperDescription, { url: item.Background },
                React.createElement(S.WrapperLabelDescription, null,
                    React.createElement(S.TitleDescription, null, item.Title),
                    React.createElement(S.TextDescription, null, item.Conteudo))))))));
};
export default Description;
//# sourceMappingURL=index.js.map