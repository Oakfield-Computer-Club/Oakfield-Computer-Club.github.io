import React from 'react';
import Banner from '../components/banner';
import About from '../components/about';
import Syllabus from '../components/syllabus';
import HowTo from '../components/how-to';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <main>
      <Banner />
      <About />
      <Syllabus />
      <HowTo />
    </main>
  </Layout>
);

export default IndexPage;
