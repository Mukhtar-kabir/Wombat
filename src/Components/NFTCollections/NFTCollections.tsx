import React from 'react';
import NFTCard from '../NFTCards/NFTCards';
import "./NFTCollections.css"

// Define the props interface for NFTCollections component
interface NFTCollectionsProps {
  nfts: any[]; // Array of NFTs
}

// NFTCollections functional component
const NFTCollections: React.FC<NFTCollectionsProps> = ({ nfts }) => {
  // If there are no NFTs, render a message indicating so
  if (!nfts) {
    return <div>No NFTs found.</div>;
  }

  // Render the NFT collections
  return (
    <div className="nft-collections">
      {/* Map through each NFT collection */}
      {nfts.map((nft, index) => (
        <div key={index}>
          {/* Render the name of the NFT collection */}
          <h2>{nft.collection.name}</h2>
          <img src={`https://ipfs.io/ipfs/${nft.collection.img}`} alt="" />
          <p>{nft.template_mint}</p>
          {/* Render the NFT cards for the current collection */}
          <div className="nft-cards">
            {/* Map through each asset in the collection */}
            {nft.assets && nft.assets.map((asset: any, idx: number) => (
              // Render the NFTCard component for each asset
              <NFTCard key={idx} nft={asset} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCollections; // Export the NFTCollections component
