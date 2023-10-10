import { useState } from 'react'
import {Header, Container, Aside, Footer} from './sections';
import { Navbar, Counter, Cards } from './components';

const App = () => {
    
    const [mydiv, setMydiv] = useState('');

    const getDiv = (div) => {
        setMydiv(div);
    }
    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <Container>
                <Counter />
                <Cards mydiv={getDiv}/>
                <Aside data={mydiv}/>
            </Container>

            <Footer />
        </>
    )
}
export default App