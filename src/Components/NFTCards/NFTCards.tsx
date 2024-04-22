import React from 'react';
import "./NFTCards.css";

interface NFTCardProps {
  nft: any;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
    console.log("NFT Object:", nft);

  return (
    <div className="nft-card">
      <h3>{nft.name}</h3>
      <img src={`https://ipfs.io/ipfs/${nft.image}`} alt={nft.name} />
      {nft.template_mint && <p>Mint Number: {nft.template_mint}</p>}
    </div>
  );
};

export default NFTCard;


