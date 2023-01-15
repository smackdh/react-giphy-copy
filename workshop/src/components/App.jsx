import React, { useState } from 'react';

import Gif from './Gif';
import SearchBar from './SearchBar';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const selectedGif = "z0vBKUUEERdNm";
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "zOvBKUUEERdNm", "gG6OcTSRWaSis"];
  const [gifIdSelected, setGifIdSelected] = useState("WuGSL4LFUMQU");
  const [giIdList, setGiIdList] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGiIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
