import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import JumboTron from "../components/JumboTron";

class Books extends Component {
  state = {
    result: {},
    search: "",
    results: [],
    image: ""
  };

  //Sets the default search upon page load
  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  //a function to run a search of the API based on customer input
  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
        //sets the array of results to state
        this.setState({ results: res.data.items });
        //sets the first result object to state
        this.setState({ result: res.data.items[0].volumeInfo });
        
        this.setState({ image: res.data.items[0].volumeInfo.imageLinks.thumbnail})
        this.setState({search: ""})
      }).catch((err) => console.log(err));
  };

  //
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleBookSave = (book) => {
    
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors.join(", "),
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    }).catch((err) => console.log(err));
  };
  //

  render() {
    
    const searchResults = this.state.results;
    
    const jumboImage = this.state.image;
    
    return (

      <div className="container">
        <Card heading="Search for a Book">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
        <JumboTron heading={this.state.result.title} jumboImage={jumboImage} author={this.state.result.authors}></JumboTron>
        <SearchResults searchResults={searchResults} handleBookSave={this.handleBookSave}/>
      </div>
    );
  }
}

export default Books;