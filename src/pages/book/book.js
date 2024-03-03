import * as React from "react";
import "./book.css";

import { graphql } from "gatsby"
import Seo from "../../components/core-component/seo.js"
import BookList from "../../components/section-component/book-list/book-list.js";

const BookPage = ({ data }) => {

  const books = data.allMarkdownRemark.nodes;

  let groupedBooksbyYear = {};
  books.forEach(book => {
    const dateTime = book.frontmatter.date;
    const year = dateTime.substring(0, 4);
    
    if (!groupedBooksbyYear[year]){
      groupedBooksbyYear[year] = [];
    }

    groupedBooksbyYear[year].push(book);
  });

  return  (
    <div className="book-wrapper">
       <ol>
        {Object.keys(groupedBooksbyYear).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => { 
          const books = groupedBooksbyYear[key];
          return (
            <BookList key={index} books={books} year={key}/>
          )
          })}
       </ol>
    </div>
  )
}

export default BookPage

export const Head = () => <Seo title="Book" />

export const pageQuery = graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "book" } } }
        ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY, MM/DD")
            title
            type
            description
            category
            thumbnail{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
        }
      }
    }
`
