import React, { useState } from 'react';
import "./UserInputForm.css"

interface UserInputFormProps {
  fetchNFTs: (accountName: string) => Promise<void>;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ fetchNFTs }) => {
  const [accountName, setAccountName] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchNFTs(accountName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        EOS Account Name:
        <input 
          type="text" 
          value={accountName} 
          onChange={(e) => setAccountName(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Fetch NFTs</button>
    </form>
  );
};

export default UserInputForm;
