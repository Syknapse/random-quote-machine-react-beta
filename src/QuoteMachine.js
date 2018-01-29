import React, { Component, Fragment } from 'react';

class QuoteMachine extends Component {

    constructor() {
        super();
        this.state = {
            currentQuote: {
                quote: '',
                author: ''
            },
            hasQuote: false
        }
        this.END_POINT = 'https://talaikis.com/api/quotes/random/'
    }

    getRandomQuote = event => {
        fetch(this.END_POINT)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
               if(data.quote && data.author) {
                   let { currentQuote } = this.state;
                   currentQuote.quote = data.quote;
                   currentQuote.author = data.author;
                   this.setState({ currentQuote }, () => {
                       if(this.state.hasQuote === false) {
                           this.setState({ hasQuote: true })
                       }
                   })
               }
               else {
                   return console.error('404 No quotes found!')
               }
            })
    }

    renderQuote = () => {
        const { author, quote } = this.state.currentQuote;
        return (
            <div>
                <p>{quote}</p>
                <p>{author}</p>
            </div>
        )
    }

    render(){
        const { hasQuote } = this.state;
        console.log(this.state);
        return (
            <Fragment>
                <h1>Quote Machine</h1>
                <button onClick={this.getRandomQuote}>
                    Get A Random Quote!!
                </button>
                <br />
                {hasQuote === true ?
                    this.renderQuote()
                    : 'no quote yet'}
            </Fragment>
        )
    }
}

export default QuoteMachine;