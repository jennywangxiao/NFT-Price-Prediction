import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const getInitialLabel = () => {
    const value = 'cryptopunk';
    return value;
  };
  const getInitialModel = () => {
    const value = 'lstm';
    return value;
  };
  const getInitialInterval = () => {
    const trainingInterval = '30';
    return trainingInterval;
  };

  const [nftLabel, setNftLabel] = useState(getInitialLabel)
  const [model, setModel] = useState(getInitialModel)
  const [trainingInterval, setTrainingInterval] = useState(getInitialInterval)

  useEffect(() => {
    handleDisplay(nftLabel,model,trainingInterval)
  },[nftLabel,model,trainingInterval])

  const handleDisplay = (nftLabel,model,trainingInterval) => {
    let output1;
    if (nftLabel === 'cryptopunk') {
      output1 = 'cryptopunk';
    }
    else if (nftLabel === 'artblocks') {
      output1 = 'artblocks';
    } 
    else {
      output1 = 'bayc';
    }
    let output2;
    if (model === 'lstm') {
      output2 = 'LSTM';
    }
    else if (model === 'attention') {
      output2 = 'Attention';
    } 
    else {
      output2 = 'BiLSTM';
    }
    let output3;
    if (trainingInterval === '30') {
      output3 = '30';
    }
    else if (trainingInterval === '60') {
      output3 = '60';
    } 
    else {
      output3 = '90';
    }
    var path
    // var a = './'+output1.toString()+'-'+output2.toString()+'-'+output3.toString()+'.png'
    // var img1 = <img src={path} />
    // path = require("./1-1-1.png")
    path = require('./figures/'+output1.toString()+'/AverageUSD/'+output2.toString()+'_'+output3.toString()+'.png')
    console.log(path)
    var img1 = document.createElement('img')
    img1.src = path
    var showDiv = document.getElementById('imagesDiv')
    showDiv.innerHTML = ''
    showDiv.appendChild(img1)
  }

  
  const handleNFT = (e) => {
    setNftLabel(e.target.value)
  };
  const handleModel = (e) => {
    setModel(e.target.value);
  };
  const handleInterval = (e) => {
    setTrainingInterval(e.target.value);
  };

  return (
    <div>
      <header className='header'
      style={{
        fontWeight: '400',
        fontSize: '30px',
        fontFamily: "Great Vibes",
        marginTop: '3em',
        marginLeft: '3em',
        background: '#fff',
        borderBottom: '1px solid lightgray'
      }}>
        Non-Fungible Token Price Prediction
      </header>
      <div className='Home'
      style={{
        color: 'hsl(0, 0%, 40%)',
        display: 'inline-block',
        fontSize: '20px',
        marginTop: '3em',
        marginLeft: '5em',
        innerHeight: '25em',
        lineHeight: '1.5'
      }}>
        <div style={{
          padding: '1em'
        }}>Welcome to see our NFT price prediction results.</div>
        <div>
          <div style={{
            paddingLeft: '1em',
            paddingTop: '0.6em',
            width: '8em',
            display: 'inline-block'
          }}>
            NFT:  
          </div>
          <div style={{
            display: 'inline-block'
          }}>
            <select value={nftLabel} onChange={handleNFT}>
              <option value='cryptopunk'>Cryptopunk</option>
              <option value="artblocks">Artblocks</option>
              <option value="bayc">BAYC</option>
            </select>
          </div>
        </div>
        <div>
          <div style={{
            paddingLeft: '1em',
            paddingTop: '0.6em',
            width: '8em',
            display: 'inline-block'
          }}>
            Model:  
            </div>
          <div style={{
            display: 'inline-block'
          }}>
            <select value={model} onChange={handleModel}>
              <option value='lstm'>LSTM</option>
              <option value="attention">LSTM-Attention</option>
              <option value="bi">Bi-LSTM</option>
            </select>
          </div>
        </div>
        <div>
          <div style={{
            paddingLeft: '1em',
            paddingTop: '0.6em',
            width: '8em',
            display: 'inline-block'
          }}>
            Training Interval:  
            </div>
          <div style={{
            display: 'inline-block'
          }}>
            <select value={trainingInterval} onChange={handleInterval}>
              <option value='30'>30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
        </div>

      <div id='imagesDiv' style={{
            paddingLeft: '1em',
            paddingTop: '0.6em',
          }}>
      </div>
      
    </div>
    <footer id='footer' style={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      height: '2em',
      marginTop:'2em',
      fontStyle: 'italic',
      }}>
      All rights reserved @2022 NFT-Price-Prediction
    </footer>
  </div>
  )
}