import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components";
import '../styles/blog.css'
import {
    Product,
  } from "../layouts/Home";
  import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  
function BlogPost({ data }) {
    const post = data.contentfulBlogs
    return (
        <Layout>
            <div className="blogContainer"> 
                <div className="blogCont">
                    <h1 className="blogTitle">{post.title}</h1>
                    <img className="imgsrc" src={post.image.fluid.src} alt="no image" />
                    <p className="postprara">{documentToReactComponents(JSON.parse(post.description.raw))}</p>
                </div>
                    <Product /> 
            </div>
        </Layout>
    )
}
export const query = graphql`
query MyQusery ($slug: String!) {
    contentfulBlogs(slug: {eq: $slug}) {
      image {
        fluid {
          src
        }
    }
    title
      description {
        raw
      }
    }
  }
  
`
export default BlogPost