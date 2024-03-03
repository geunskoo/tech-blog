import React from 'react';
import "./book-card.css";

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BookCard = ({ book }) => {

  const title = book.frontmatter.title;
  const thumbnail = getImage(book.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <Link className="book-card-wrapper" to={book.fields.slug} itemProp="url">
        <article className="book-card-article" itemScope itemType="http://schema.org/Article" >                      
            <GatsbyImage image={thumbnail} alt="thumbnail" style={{ zIndex: "1", borderRadius: "0.5rem", width: "130px", height: "195px", border: "solid 0.5px black",transform: "rotateY(-10deg) rotateX(15deg)", boxShadow: "6px 1px 0 0 var(--color-gray)"}}/>
        </article>
    </Link>
  );
};

export default BookCard;
