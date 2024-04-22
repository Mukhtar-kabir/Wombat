import React from 'react';
import "./NFTCards.css";

// Define the props interface for NFTCard component
interface NFTCardProps {
  nft: any; // NFT object
}

// NFTCard functional component
const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  // Log the NFT object for debugging purposes
  console.log("NFT Object:", nft);

  // Render the NFTCard component
  return (
    <div className="nft-card">
      {/* Render the name of the NFT */}
      <h3>{nft.name}</h3>
      {/* Render the image of the NFT */}
      <img src={`https://ipfs.io/ipfs/${nft.img}`} alt={nft.data.name} />
      {/* Render the mint number of the NFT if available */}
      {nft.template_mint && <p>Mint Number: {nft.template_mint}</p>}
    </div>
  );
};

export default NFTCard; // Export the NFTCard component


