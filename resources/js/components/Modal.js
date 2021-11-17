import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#main');

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                >
                    <p>Modal text!</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        );
    }
}

const props = {};

ReactDOM.render(<Modal />, document.getElementById('main'))
