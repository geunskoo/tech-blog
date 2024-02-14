require(`dotenv`).config({ path: './credential.env' });
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */

const postPrefix = '/';

exports.onCreateNode = async ({ node, actions, getNode, cache }) => {
  const { createNodeField } = actions

  const viewCountList = await cache.get('viewCount');

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const totalCount = (viewCountList.filter((item) => item.path === value)[0] || { totalCount: 0 }).totalCount;
    createNodeField({ name: 'viewCount', node, value: parseInt(totalCount) });
    createNodeField({ name: `slug`, node, value });
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      category: [String]
      type: String
    }

    type Fields {
      viewCount: Int
      slug: String
    }
  `)
}


const getViewCount = async () => {
  let analyticsResult = [];
  try {
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: JSON.parse(process.env.ANALYTICS_CREDENTIALS),
    });

    analyticsResult = await analyticsDataClient.runReport({
      property: `properties/${process.env.ANALYTICS_PROPERTY_ID}`,
      dateRanges: [{ startDate: '2022-01-01', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: `${postPrefix}`,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }

  // analytics data arrange
  return (
    analyticsResult
      .filter((item) => item !== null && item.rows)
      .map((item) => {
        return item.rows.map((row) => {
          return {
            path: row.dimensionValues[0].value,
            totalCount: row.metricValues[0].value,
          };
        });
      })[0] || []
  );
};

exports.onPluginInit = async ({ cache }) => {
  await cache.set('viewCount', await getViewCount());
};


