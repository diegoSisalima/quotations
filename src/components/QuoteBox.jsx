import quotes from '../quotes.json'
import Mybutton from './Mybutton';

const QuoteBox = ({index, indexRandom, colorRandom}) => {
    return (
        <div className="App">

        <div className="card">
            <div className="header">
          
            <i className="bx bxs-quote-left" style={{color: colorRandom}}></i>
                <blockquote style={{color: colorRandom}}>{quotes[index].quote}</blockquote>
            </div>
            <cite style={{color: colorRandom}}>{quotes[index].author}</cite>
            <Mybutton indexRandom={indexRandom} colorRandom={colorRandom}/>
        </div>
        </div>

    );
};
export default QuoteBox;