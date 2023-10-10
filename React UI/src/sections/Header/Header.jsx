import './Header.css';

const Header = (props) => {
    return (
        <header>
            <>{props.children}</>
            <h1 className='text-center'>Ouss<span style={{color:'steelblue'}}>React</span> <br/>
            <span className='master'>MASTERING REACT</span></h1>
        </header>
    );
};

export default Header;
