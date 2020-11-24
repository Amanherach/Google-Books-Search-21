import React from 'react'

function SearchResults(props) {
    
        return (
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="hide">Cover</th>
                            <th scope="col" className="hide">Title</th>
                            <th scope="col" className="hide">Author(s)</th>
                            <th scope="col" className="hide">Description</th>
                            <th scope="col" className="hide">Year</th>
                            <th scope="col" className="hide">#Pages</th>
                        </tr>
                    </thead>

                    <tbody>

                        {props.searchResults.map((book) => {
                        //   console.log(book.volumeInfo.imageLinks.thumbnail)
                            return (
                            <tr key={book.id}>
                                <td className="td">
                                <img className="cover" src={ book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "http://placekitten.com/125/200"} alt={book.volumeInfo.title}/>
                                </td>
                                <td className="hide">{book.volumeInfo.title}</td>
                                <td className="hide">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "N/A"}</td>
                                <td className="description hide"><div className="tableData">{book.volumeInfo.description}</div></td>
                                <td className="hide">{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.slice(0, 4) : "N/A"}</td>
                                <td className="hide">{book.volumeInfo.pageCount}</td>
                                <td className="td">
                                    <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-success list-button">
                                    View in Google Books
                                    </a>
                                    <button onClick={()=>props.handleBookSave(book)} className="btn btn-info list-button"
                                    >
                                    Save to My Saved Books
                                    </button>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
}


export default SearchResults