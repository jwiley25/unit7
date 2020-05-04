import React, {Component} from 'react';
//We need to import withRouter in order to hava acces to the history props.
import { withRouter } from 'react-router-dom';


//Component that provide a search form for create a personal query. 
class SearchForm extends Component {

    state = {
        searchInput: ''
    }

    //This function change the searchInput state when the input change. 
    onSearchChange = e => {
        this.setState({ searchInput: e.target.value }); 
      }

    //Function that we use when the form is submited.
    handleSubmit = e => {
        e.preventDefault();
        let query = this.name.value;
        //Create a new performSearch(query) in App.js
        this.props.newSearch(this.state.searchInput);
        e.currentTarget.reset();
        let path = `search/${query}`;
        //We need the "withRouter" that let acces to history props. It lets to change the URL. 
        this.props.history.push(path); 
      }



    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" ref={ (input) => this.name = input } onChange={this.onSearchChange} name="search" placeholder="Search" required/>
                 <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                 </button>
            </form>
        );
    }


}


export default withRouter(SearchForm);