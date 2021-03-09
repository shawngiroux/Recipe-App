import React from 'react';
import ReactDOM from 'react-dom';

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
    }
    render() {
        const link = "/recipe?id=" + this.props.id;

        return (
            <a className="h-auto w-full p-4 md:p-0 mx-auto flex flex-col items-center mt-10 md:mt-0 md:transition md:duration-300 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105" href={link}>
                <img className="h-64 w-full object-cover rounded-tl-xl shadow-md rounded-tr-xl" src={ this.props.image_path } alt=""></img>
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
            </a>
        );
    }
}

export default RecipeCard;
