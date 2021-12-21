import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <main>
      <h1>TEST</h1>
      {data.allFlotiqBlogPost.nodes.map(post => (
          post.tags.map(tag => (
              <p>{tag.tag_name}</p>
          ))
      ))}
    </main>
  )
}

const query = graphql`
    query IndexQuery {
        allFlotiqBlogPost(sort: {fields: publish_date, order: DESC}, limit: 10000) {
            nodes {
                tags {
                    id
                    tag
                    tag_name
                    description
                }
            }
        }
    }`;

export default IndexPage
