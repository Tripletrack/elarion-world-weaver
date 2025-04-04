
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WorldPreview from '@/components/home/WorldPreview';
import FeaturedStory from '@/components/home/FeaturedStory';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WorldPreview />
      <FeaturedStory />
    </Layout>
  );
};

export default Index;
