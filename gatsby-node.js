require(`dotenv`).config({ path: './credential.env' });
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        pages: path.resolve(__dirname, "src/pages"),
      },
    },
  })
}

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
          frontmatter {
            type
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

  let posts = result.data.allMarkdownRemark.nodes


  if (posts.length > 0) {
    posts = posts.filter((post) => post.frontmatter.type === 'blog');
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

  /* bio 페이지 */
  createPage({
    path: '/bio/',
    component: path.resolve(`./src/pages/bio/bio.js`)
  });

  /* blog 페이지 */
  createPage({
    path: '/blog/',
    component: path.resolve(`./src/pages/blog/blog.js`)
  });

   /* book 페이지 */
   createPage({
    path: '/book/',
    component: path.resolve(`./src/pages/book/book.js`)
  });

    /* book 페이지 */
    createPage({
    path: '/byeond/',
    component: path.resolve(`./src/pages/byeond/byeond.js`)
  });
    
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */

const postPrefix = '/';

exports.onCreateNode = async ({ node, actions, getNode, cache }) => {
  const { createNodeField } = actions

  /*캐시에서 조회수를 가져옴 */
  const viewCountList = await cache.get('viewCount');

  if (node.internal.type === `MarkdownRemark`) {
    /*조회수 생성로직 추가 */
    const value = createFilePath({ node, getNode })
    const totalCount = (viewCountList.filter((item) => item.path === value)[0] || { totalCount: 0 }).totalCount;
    createNodeField({ name: 'viewCount', node, value: parseInt(totalCount) });

    /* slug 파일 생성 */
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
      score: String
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


