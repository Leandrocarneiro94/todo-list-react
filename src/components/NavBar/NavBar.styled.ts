import styled from 'styled-components'

const Nav = styled.nav`
    align-items: flex-end;
    background-color: var(--lightPurple);   
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 22.5rem; 
    overflow-y: auto;
`

const TitleWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;  
    padding: 2.6875rem 2.75rem 3.8125rem 4.1875rem;
`

const Title = styled.h2`
    color: var(--white);
    font-size: 2.25rem;
`
const AddCategoryButton = styled.button`
    background-color: transparent;
`;

export default { 
    Nav,
    TitleWrapper,
    Title,
    AddCategoryButton
}
