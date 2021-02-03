import React from 'react';

class CategoryCard extends React.Component {
    render() {
        return (
            <div className="w-full border-solid border-2 border-purple-200 mb-8">
                <div className="relative flex justify-center">
                    <h1 className="absolute -inset-y-4 bg-white pr-6 pl-6 text-xl font-bold text-purple-400">{this.props.header}</h1>
                </div>
                <div className="p-8">
                    {this.props.body}
                </div>
            </div>
        );
    }
}

export default CategoryCard;
