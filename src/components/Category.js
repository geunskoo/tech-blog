import * as React from "react"

const Category = ({ categorys }) => {

    return (
        <div>
            {categorys.map(category => (
                <div key={category} className="category">{category}</div>
            ))}
        </div>
    );
};

export default Category