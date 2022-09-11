import PropTypes from 'prop-types';

import Arrow from '../../img/Vector.svg';

import styled from 'styled-components';

export default function Footer({ changePageNext, changePagePrev }) {
    return (
        <FooterEl>
            <div onClick={changePageNext} className="page">
                <img
                    src={Arrow}
                    alt="arrow"
                    style={{ marginRight: '30px' }}
                    width="18px"
                    height="36px"
                    stroke="#eee"
                    fill="transparent"
                    iconname="icon-prev"
                />
                Previous
            </div>

            <div onClick={changePagePrev} className="page">
                Next
                <img
                    src={Arrow}
                    alt="arrow"
                    style={{ marginLeft: '30px', transform: 'rotate(0.5turn)' }}
                    width="18px"
                    height="36px"
                    stroke="#eee"
                    fill="transparent"
                    iconname="icon-next"
                />
            </div>
        </FooterEl>
    );
}

const FooterEl = styled.div`
    width: 75%;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    @media screen and (min-width: 0px) {
        margin-left: 80px;
    }

    @media screen and (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        width: 450px;
    }

    @media screen and (min-width: 1000px) {
        width: 75%;
    }

    @media screen and (min-width: 1500px) {
        width: 75%;
    }
`;

Footer.propTypes = {
    changePageNext: PropTypes.func.isRequired,
    changePagePrev: PropTypes.func.isRequired,
};
