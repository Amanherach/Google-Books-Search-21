import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API"

export default class SavedBook extends Component {
    state = {
        books: [],
    };
    componentDidMount() {
        this.bookApi()
    }
    bookApi(){
        axios.get("/api/books")
            .then((response) => {
               return this.setState({ books: response.data })});
    }

    handleButtonClick = (id) => {
        API.deleteBook(id)
            .then(this.bookApi())
        
    }

    render() {
        const { books } = this.state;
        return (
            <>
                <div className="table-div">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="hide">Cover</th>
                                <th scope="col" className="hide">Title</th>
                                <th scope="col" className="hide">Author(s)</th>
                                <th scope="col" className="hide">Description</th>
                                <th scope="col" className="hide"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item) => {
                                
                                return (
                                    <tr key={item._id}>
                                        <td><img className="cover" src={item.image} alt={item.title} /></td>
                                        <td className="hide td">{item.title}</td>
                                        <td className="hide td">{item.authors}</td>
                                        <td className="description hide td"><div className="tableData">{item.description}</div></td>
                                        <td className="td"><a className="btn btn-info list-button" href={item.link} target="_blank" rel="noopener noreferrer">Google Books</a>
                                        <button onClick={()=>this.handleButtonClick(item._id)} className="btn btn-primary list-button">Remove</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}