import React, { useState } from 'react';
import ClassicTab from './ClassicTab';
import OverUnderTab from './OverUnderTab';
import RangeTab from './RangeTab';
import './tab.css'
// Example components for each tab


const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <ClassicTab />;
            case 1:
                return <OverUnderTab />;
            case 2:
                return <RangeTab />;
            default:
                return null;
        }
    };

    return (
        <>
        <div className="tabs-container">
            <div className="tabs-header">
                <button className={`tab-button ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                    Classic
                </button>
                <button className={`tab-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                    Over/Under
                </button>
                <button className={`tab-button ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                    Range
                </button>
            </div>
         
        </div>
        <div className="tabs-content">
                {renderTabContent()}
            </div>
            </>
    );
};

export default Tab;
