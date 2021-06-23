import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          quote: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde",
          id: 0
        },
        {
          quote:
            "To live is the rarest thing in the world. Most people exist, that is all.",
          author: "Oscar Wilde",
          id: 1
        },
        {
          quote: "True friends stab you in the front.",
          author: "Oscar Wilde",
          id: 2
        },
        {
          quote: "Women are made to be Loved, not understood.",
          author: "Oscar Wilde",
          id: 3
        },
        {
          quote: "Be the change that you wish to see in the world.",
          author: "Mahatma Gandhi",
          id: 4
        },
        {
          quote:
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          author: "Mahatma Gandhi",
          id: 5
        },
        {
          quote: "No one can make you feel inferior without your consent.",
          author: "Eleanor Roosevelt",
          id: 6
        },
        {
          quote:
            "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
          author: "Eleanor Roosevelt",
          id: 7
        },
        {
          quote:
            "Do what you feel in your heart to be right - for you'll be criticized anyway.",
          author: "Eleanor Roosevelt",
          id: 8
        },
        {
          quote: "Do one thing every day that scares you.",
          author: "Eleanor Roosevelt",
          id: 9
        },
        {
          quote:
            "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
          author: "Martin Luther King",
          id: 10
        },
        {
          quote:
            "Our lives begin to end the day we become silent about things that matter.",
          author: "Martin Luther King",
          id: 11
        },
        {
          quote:
            "In the end, we will remember not the words of our enemies, but the silence of our friends.",
          author: "Martin Luther King",
          id: 12
        },
        {
          quote: "Injustice anywhere is a threat to justice everywhere.",
          author: "Martin Luther King",
          id: 13
        },
        {
          quote: "The time is always right to do what is right.",
          author: "Martin Luther King",
          id: 14
        },
        {
          quote:
            "Life's most persistent and urgent question is, 'What are you doing for others?",
          author: "Martin Luther King",
          id: 15
        },
        {
          quote:
            "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
          author: "Albert Einstein",
          id: 16
        },
        {
          quote:
            "I have not failed. I've just found 10,000 ways that won't work.",
          author: "Thomas A. Edison",
          id: 17
        }
      ],
      displayQuote: "",
      displayAuthor: "",
      displayed: false
    };
  }

  getNext = () => {
    const random = Math.floor(Math.random() * this.state.quotes.length);
    const nextQ = this.state.quotes.find((item) => item.id === random);
    this.setState({
      displayQuote: nextQ.quote,
      displayAuthor: nextQ.author,
      displayed: true
    });
  };

  render() {
    const { displayQuote, displayAuthor, quotes, displayed } = this.state;
    return (
      <div className="container">
        <div className="quote">
          <p>"{displayed === false ? quotes[0].quote : displayQuote}"</p>
          <p className="author">
            -{displayed === false ? quotes[0].author : displayAuthor}
          </p>
        </div>
        <button onClick={this.getNext}>Next quote</button>
      </div>
    );
  }
}

export default App;
