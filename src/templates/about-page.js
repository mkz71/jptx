import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styles from '../styles/contact.module.css';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    <section className={styles.contactMap}>
    <div className="columns">
          <div className="column is-offset-1">
    <iframe title="JPTX"
          // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1832.3607919142291!2d-71.11337344770747!3d42.29981707083238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee435d0858e82079!2sOriental%20House%20Restaurant!5e0!3m2!1sen!2suk!4v1570423244005!5m2!1sen!2suk'
          src='https://maps.google.com/maps?q=3704%20washington%20st&t=&z=13&ie=UTF8&iwloc=&output=embed'
          // width='500'
          // height='4000'
          // frameBorder='0'
          // style={{ width: '100%', height: '100%', border: 0 }}
          // allowFullScreen
    />
    </div>
    </div>
    </section>
    </Layout>
    
  )
}



AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
