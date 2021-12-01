import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import api from './services/PixabayApi';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    result: [],
    pending: false,
    modalAtributes: [],
  };

  componentDidUpdate(pverProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) this.fetchImages();
  }

  fetchImages = () => {
    const { searchValue, page } = this.state;

    this.setState({ pending: true });

    api(searchValue, page)
      .then(response => {
        if (response.total === 0) toast.warn('Could not find images with that name');

        this.setState(prevState => ({
          result: [...prevState.result, ...response.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ pending: false }));
  };

  formHandler = value => {
    this.setState({
      searchValue: value,
      result: [],
      page: 1,
    });
  };

  pictureClickHandler = (url, tags) => {
    this.setState({ modalAtributes: [url, tags] });
    window.addEventListener('keydown', this.closeModal);
  };

  closeModal = e => {
    if (e.currentTarget === e.target) this.setState({ modalAtributes: [] });
    if (e.code === 'Escape') this.setState({ modalAtributes: [] });
    window.removeEventListener('keydown', this.closeModal);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formHandler} />
        <ImageGallery images={this.state.result} handler={this.pictureClickHandler} />

        {this.state.result.length > 0 && <Button text="Load more" onClick={this.fetchImages} />}

        {this.state.pending && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} className="Loader" />}

        {this.state.modalAtributes.length > 0 && (
          <Modal url={this.state.modalAtributes[0]} alt={this.state.modalAtributes[1]} onClick={this.closeModal} />
        )}

        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export default App;
