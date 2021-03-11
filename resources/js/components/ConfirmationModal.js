import React from 'react';

class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props);

        let color = "";
        switch (this.props.type) {
            case "submit":
                color = "bg-purple-600"
                break;
            case "danger":
                color = "bg-red-600"
                break;
            default:
                color = "bg-purple-600"
        }

        this.state = {
            color: color
        }
    }
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-opacity-50 bg-gray-700 z-10">
                <div className="w-96 bg-white rounded-xl shadow-md">
                    <div className="p-4 border-b">
                        <h1>{ this.props.header }</h1>
                    </div>
                    <div className="p-4">
                        <p>{ this.props.body }</p>
                    </div>
                    <div className="p-4 flex justify-end">
                        <button
                            className="mr-2 bg-gray-300 hover:bg-gray-400"
                            onClick={ this.props.handleConfirmation }
                        >Cancel</button>
                        <button className={ this.state.color } onClick={ this.props.handleSubmit }>{ this.props.primary_btn_msg }</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationModal;
