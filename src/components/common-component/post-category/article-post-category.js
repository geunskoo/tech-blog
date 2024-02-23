import * as React from "react"
import "./article-post-category.css"

const ArticlePostCategory = ({ categorys }) => {

    return (
        <div className="article-post-category-wrapper">
            {categorys.map(category => (
                <div key={category} className="article-post-category">{category}</div>
            ))}
        </div>
    );
};

export default ArticlePostCategory