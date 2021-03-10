import React from 'react';

class ConfirmationModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="fixed bg-fixed overflow-hidden top-0 left-0 h-full w-full flex items-center justify-center bg-opacity-50 bg-gray-700 z-10">
                <div className="w-96 bg-white rounded-xl shadow-md">
                    <div className="p-4 border-b">
                        <h1>Confirmation</h1>
                    </div>
                    <div className="p-4">
                        <p>Are you sure you want to save this recipe?</p>
                    </div>
                    <div className="p-4 flex justify-end">
                        <button
                            className="mr-2 bg-gray-300 hover:bg-gray-400"
                            onClick={ this.props.handleConfirmation }
                        >Cancel</button>
                        <button onClick={ this.props.handleSubmit }>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationModal;
