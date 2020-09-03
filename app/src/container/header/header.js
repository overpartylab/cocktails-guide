import React from 'react';
import PropTypes from 'prop-types';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { HeaderText, HeaderInfo, InfoItem, StyledAppBar, AppBarContainer } from './header.css.js';
import { StyledIcon } from '../style.css.js';

import COMMON_TEXT from '../../assets/wording/common.json';
import { LINK } from '../../config/contact';

const Header = ({ minwidth }) => {
    return (
        <StyledAppBar minwidth={minwidth} position="fixed">
            <AppBarContainer>
                <HeaderText>{COMMON_TEXT.title}</HeaderText>
                <HeaderInfo>
                    <InfoItem>
                        <StyledIcon href={LINK.INSTAGRAM} target="_blank" svgSize="2rem">
                            <InstagramIcon /> 
                        </StyledIcon>
                    </InfoItem>
                    <InfoItem>
                        <StyledIcon href={LINK.FACEBOOK} target="_blank" svgSize="2rem">
                            <FacebookIcon /> 
                        </StyledIcon>
                    </InfoItem>
                    <InfoItem>
                        <StyledIcon href={LINK.GITHUB} target="_blank" svgSize="2rem">
                            <GitHubIcon /> 
                        </StyledIcon>
                    </InfoItem>
                </HeaderInfo>
            </AppBarContainer>
        </StyledAppBar>
    );
};
Header.propTypes = {
    minwidth: PropTypes.number.isRequired
};

export default Header;
