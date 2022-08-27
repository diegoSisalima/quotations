
const Mybutton = ({indexRandom, colorRandom}) => {
    return (
        <button style={{backgroundColor: colorRandom}} onClick={indexRandom} ><i class='bx bx-shuffle bx-tada-hover'></i></button>
    );
}

export default Mybutton;