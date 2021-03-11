import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmationModal from './ConfirmationModal.js';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);

        // Defaulting any null descriptions
        let desc = this.props.description ?? "";

        this.state = {
            description: desc
        }

        // Trimming long descriptions and adding trailing elipses
        if (desc.length > 140) {
            this.state.description = desc.substring(0,140) + "...";
        }
        this.handleConfirmation = this.handleConfirmation.bind(this);
    }

    handleConfirmation(id) {
        this.props.handleConfirmation(this.props.id, event);
    }

    render() {
        const link = "/recipe?id=" + this.props.id;
        const image_style = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: "0.75rem",
            borderTopRightRadius: "0.75rem",
            width: "100%",
            height: "16rem",
            backgroundImage: "url(" + this.props.image_path + ")",
        }

        return (
            <div className="relative h-auto w-full p-4 md:p-0 mx-auto flex flex-col items-center md:mt-0 md:transition md:duration-300 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105">
                <div className="absolute w-full h-full bottom-0 right-0 md:transition-opacity md:duration-500 md:ease-out opacity-0 md:hover:opacity-100">
                    <div className="absolute w-20 h-10 bg-black top-0 right-0 rounded-tr-xl rounded-bl-xl flex items-center justify-evenly bg-opacity-70">
                        <button className="pointer-events-none sm:pointer-events-auto bg-transparent p-0 hover:bg-transparent">
                            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                        <button className="pointer-events-none sm:pointer-events-auto bg-transparent p-0 hover:bg-transparent" onClick={ this.handleConfirmation }>
                            <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <a className="block h-full w-full" href={link}></a>
                </div>
                <div style={ image_style }></div>
                <div className="w-full h-60 flex flex-col justify-between shadow-md rounded-bl-xl rounded-br-xl p-6 bg-white">
                    <div className="h-1/3 pl-2 pr-2">
                        <div className="text-xl font-semibold text-black">{ this.props.name }</div>
                        <p className="text-sm font-medium text-gray-500">{ this.state.description }</p>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex items-center justify-evenly w-full mt-5 mb-3">
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500 font-semibold">Cook Time</p>
                                <div className="flex items-center">
                                    <svg className="text-purple-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-gray-500 mx-1">{ this.props.cook_time } Min</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500 font-semibold">Prep Time</p>
                                <div className="flex items-center">
                                    <svg className="text-purple-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-gray-500 mx-1">{ this.props.prep_time } Min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeCard;
