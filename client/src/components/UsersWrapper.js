import React from 'react';
import styled from 'styled-components';

const StyledUsersWrapper = styled.div`
    width: 100%;
    max-width: 1500px;
    background: var(--transparentBackground);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 40px;
    margin: 60px auto;

    > div {
        flex-grow: 1;
        flex: 1 1 30%;
        margin: 0 10px 30px 10px;
        display: flex;
        padding: 15px;
        align-items: center;
        justify-content: center;
    }
`

const UsersWrapper = ({ children }) => {
    return (
        <StyledUsersWrapper>
            {children}
        </StyledUsersWrapper>
    )
}

export default UsersWrapper;