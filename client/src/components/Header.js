import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    max-width: 1580px;
    margin: auto;
    padding: 60px 0 0 0;
    
    * {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.10);
    }
`

const StyledButton = styled.button`
    background: var(--blue);
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px 30px;
    align-self: flex-end;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    outline: none;

    :disabled {
        background: grey;
        cursor: not-allowed;
    }
`

const Header = (props) => {
    return (
        <StyledHeader>
            <StyledButton onClick={props.splitUsersGroup} disabled={props.users.length === 117 ? false : true}>Dividir em 4 grupos</StyledButton>
        </StyledHeader>
    )
}

export default Header;