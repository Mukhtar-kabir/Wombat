import React from 'react';
import NFTCard from '../NFTCards/NFTCards';
import "./NFTCollections.css"

interface NFTCollectionsProps {
  nfts: any[];
}

const NFTCollections: React.FC<NFTCollectionsProps> = ({ nfts }) => {
  if (!nfts) {
    return <div>No NFTs found.</div>;
  }

  return (
    <div className="nft-collections">
      {nfts.map((nft, index) => (
        <div key={index}>
          <h2>{nft.collection.name}</h2>
          <div className="nft-cards">
            {nft.assets && nft.assets.map((asset: any, idx: number) => (
              <NFTCard key={idx} nft={asset} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCollections;

 
