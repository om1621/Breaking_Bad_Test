import React , {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import '../css/test.css';
import loader from '../img/loading.gif'
import store from '../store/index'
import {createSectionAction, createLoadingStateAction} from "../actions/index"

function Test({charId}) {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [count , setCount] = useState([0 , 0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let score = count.reduce((x , y ) => (x + y));

        let str = "";
        if(score === 2)
        {
            str +=  "Real Breaking Bad Fan! \n"
        }
        else if(score === 1)
        {
            str +=  "Half Breaking Bad Fan :) \n"
        }
        else if(score === 0)
        {
            str += "You need a Revision! \n"
        }

        str +=  "Score: " + score + '/2'

        alert(str);

       
    }

    const radioOnChange = (e , name) => {

        let ans = e.target.value;
        if(name === 0)
        {
            ans = parseInt(ans);
        }

        const currentCount = count;
        if(ans === answers[name]){
            currentCount[name] = 1; 
        }
        else
        {
            currentCount[name] = 0;
        }

        setCount(currentCount);
        
    }

    const goBack = (e) => {
        e.preventDefault();
        store.dispatch(createSectionAction(-1));
    }

    useEffect(() => {

        const loadChar = async () => {
            const charObject = await axios('https://www.breakingbadapi.com/api/characters/' + charId);
            let ans = [];
            ans.push(charObject.data[0].appearance.length);
            ans.push(charObject.data[0].status);
            console.log(ans);
            setAnswers(ans);
            store.dispatch(createLoadingStateAction(false));

        }

        const loadQuestion = async () => {
            let que = await axios('api/questions');
            setQuestions(que.data);
            
        }

        loadChar();
        loadQuestion();

    }, [charId]);


    return ( store.getState().loading ? <div className="test-grid loader"><img src={loader} alt="loader" /></div> : <div className="test-grid row black-bg">
        <form className="choice-form" onSubmit={handleSubmit}>
            { questions.map((question, index) => (
               <fieldset class="form-group" key={index}>
                <div class="row question-div">
                  
                  <div className="col-sm-12 question-box">
                    <p className="question">
                    {index + 1}. {question.que}
                    </p>
                  </div>

                  <div class="col-sm-12 option-box">

                    { question.options.map((option, i) => (
                        <div class="form-check option" key={i}>
                            <input class="form-check-input" type="radio" name={index} id={i} value={option} onChange={ (e) => radioOnChange(e , index)}></input>
                            <label class="form-check-label" for={i}>
                                {option}
                            </label>
                       </div>
                    ))}
                   
                 </div>

               </div>
             </fieldset>
            ))}

            <div className="row btns p-4">
                <div class="col-sm-6">
                    <button type="submit" className="btn btn-primary">
                        SUBMIT
                    </button>
                </div>
                <div class="col-sm-6">
                    <button className="btn btn-primary" onClick={goBack}>
                      GO BACK
                    </button>
                </div>
            </div>
        </form>  
    </div>);
}

export default Test;
