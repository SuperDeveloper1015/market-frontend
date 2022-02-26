import React, {useEffect} from 'react';
import {Layout} from 'components/Layout';
import {AllMedia} from 'components/AllMedia';
import {ZeroState} from 'components/ZeroState';
import {useMedia} from 'contexts/Media.context';

const IndexPage = () => {
  const [{allMetadata}, , loadMedia] = useMedia();

  useEffect(() => loadMedia(), []);

  return (
    <Layout title={'RBH Marketplace'}>
      <div className="container mx-auto" style={{maxWidth: 1024}}>
        <div className="my-12 grid md:grid-cols-2 sm:grid-cols-1 gap-16">
          <div className="my-auto">
            <h1 className="text-4xl font-bold">A Decentralized NFT Mareketplace</h1>
            <p className="my-3">Discover the community-driven NFT marketplace centered around the distribution of unique art in the form of NFTs.</p>
            <p className="my-3 flex">
              <span className="mr-2">Get Started</span>
              <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </p>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"/>
          </div>
          <div>
            <img
                className="w-100 h-auto"
                src="/nft.png"
                alt="RBH NFT Logo"
              />
          </div>
        </div>
        <div className="my-12 mx-auto">
          <h1 className="text-4xl font-bold text-center">Trade NFT Arts Without Glitch</h1>
          <div className="flex justify-between flex-wrap my-12">
            <div style={{width: 300}}>
              <svg className="h-12 w-12 text-green-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
              <p className="text-2xl font-bold my-3">Trasparent Market</p>
              <p className="text-gray-400">A transparent market with no glitch, built with love on Binance smart chain</p>
            </div>
            <div style={{width: 300}}>
              <svg className="h-12 w-12 text-green-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 12l2 2l4 -4" />  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /></svg>
              <p className="text-2xl font-bold my-3">Verified Artists</p>
              <p className="text-gray-400">Trusted and verified NFT Artist from all over the world brought together</p>
            </div>
            <div style={{width: 300}}>
              <svg className="h-12 w-12 text-green-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />  <line x1="1" y1="10" x2="23" y2="10" /></svg>
              <p className="text-2xl font-bold my-3">Smooth Transaction</p>
              <p className="text-gray-400">Involve in a smooth NFT trae like never before with our swapping network</p>
            </div>
          </div>
        </div>
        <div className="my-24 mx-auto">
          <h1 className="text-4xl font-bold text-center my-12">NFT Marketplace</h1>
          {allMetadata.length > 0 ? (
            <AllMedia media={allMetadata} />
          ) : (
            <ZeroState title="No minted NFTs." hint="Why not try minting some?" />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
