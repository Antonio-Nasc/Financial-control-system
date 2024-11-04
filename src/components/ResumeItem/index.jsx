/* eslint-disable react/prop-types */
import * as C from './styles';
const ResumeItem = ({ title, Icon, value }) => {
    const getColor = (title) => {
        if (title === 'Entradas') return 'green';
        if (title === 'Saídas') return 'red';
        return 'black';
    };
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total color={getColor(title)}>{value}</C.Total>
        </C.Container>
    )
}
export default ResumeItem;