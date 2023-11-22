/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio-container">
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile.png"
          width={100}
          height={100}
          quality={100}
          alt="Profile picture"
        />
      </div>
      <ul className="bio-description">
        {author?.name && (
          <li>
            {author.name}
          </li>
          )}
        {social?.github && (
          <li>
            <a href={`https://github.com/${social.github}`}>github</a>
          </li>
        )}
        {social?.instagram && (
          <li>
            <a href={`https://instagram.com/${social.instagram}`}>instagram</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Bio
