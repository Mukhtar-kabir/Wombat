import { useState } from 'react';
import axios from 'axios';
import NFTCollections from "../NFTCollections/NFTCollections";
import UserInputForm from "../UserInputForm/UserInputForm";

function Main() {
    const [nfts, setNFTs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchNFTs = async (accountName: string) => {
        setLoading(true);
        try {
          const response = await axios.get(`https://eos.api.atomicassets.io/atomicassets/v1/assets?owner=${accountName}`);
          setNFTs(response.data.data);
        } catch (error) {
          setError('Error fetching NFTs. Please try again later.');
        } finally {
          setLoading(false);
        }
    };

  return (
    <div>
      <h1>Wombat Dungeon Master</h1>
      <UserInputForm fetchNFTs={fetchNFTs} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {nfts.length > 0 && <NFTCollections nfts={nfts} />}
    </div>
  )
}

export default Main
