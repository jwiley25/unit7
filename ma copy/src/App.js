import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import apiKey from './config';
import axios from 'axios';

//Importing components
import Header from './components/Header';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import Loading from './components/Loading';

class App extends Component {

  state = {
    images: [],
    catsImages: [],
    dogsImages: [],
    birdsImages:[],
    newQuery: "",
    loading: true
  };
   
  //After the App component is mounted we search the photos for default cats, dogs and birds. 
  componentDidMount(){
    this.performSearch();
    this.performSearch("dogs");
    this.performSearch("birds");
  }
  
  //API request in order to get photo details data. Cats is by default. Using Axios.
  //https://www.flickr.com/services/api/explore/flickr.photos.search
  performSearch = async (query="cats") => {
    try{
      this.setState({loading: true})

      //Getting API request response in a async way. 
      let result = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`);
      console.log(result.data.photos.photo);

      //Seeting the state accordign the query. 
      if(query==="cats") {
        this.setState({
          catsImages: result.data.photos.photo,
          loading: false
        });
      } else if(query==="dogs") {
        this.setState({
          dogsImages: result.data.photos.photo,
          loading: false
        });
      } else if(query==="birds") {
        this.setState({
          birdsImages: result.data.photos.photo,
          loading: false
        }); 
      } else {
        this.setState({
          images: result.data.photos.photo,
          newQuery: query,
          loading: false
        });

      }

    } catch (error) {
      console.log('Error fetching and parsing data', error);
      }
    }


  render() {
    return(
      <BrowserRouter>
        <div className="container">
          {/*Adding the performSearch() to the SearchForm in the Header*/}
          <Header search={this.performSearch}/>

          <Switch>
            {/*App routes. The root path is redirected to cats */} 
            <Route exact path='/' render={() => <Redirect to='/cats'/>}/>
            <Route path='/cats' render={() => (this.state.loading) ? <Loading /> : <Gallery data={this.state.catsImages} /> } />
            <Route path='/dogs' render={() => (this.state.loading) ? <Loading /> : <Gallery data={this.state.dogsImages} /> } />
            <Route path='/birds' render={() => (this.state.loading) ? <Loading /> : <Gallery data={this.state.birdsImages} /> } />
            <Route path='/search/:query' render={() => (this.state.loading) ? <Loading /> : <Gallery data={this.state.images} /> } />
            {/*Not found Route Error*/}
            <Route component={NotFound}/>
          </Switch>

       </div>
      </BrowserRouter>

    );
  }
}

export default App;
