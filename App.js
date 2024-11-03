import './App.css';
import React from 'react';
import FindTeacher from './FindTeacher';
import ChildClassManagement from './ChildClassManagement';
import TeacherReview from "./TeacherReview";

function App() {
    const [activeTab, setActiveTab] = React.useState('findTeacher');

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Learning Partners</h1>
            <div className="tab-menu">
                <button
                    className={`tab ${activeTab === 'findTeacher' ? 'active' : ''}`}
                    onClick={() => setActiveTab('findTeacher')}
                >
                    강사 찾기
                </button>
                <button
                    className={`tab ${activeTab === 'teacherReview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('teacherReview')}
                >
                    수업 리뷰
                </button>
                <button
                    className={`tab ${activeTab === 'childClass' ? 'active' : ''}`}
                    onClick={() => setActiveTab('childClass')}
                >
                    자녀 수업 관리
                </button>
            </div>
            {activeTab === 'findTeacher' && <FindTeacher />}
            {activeTab === 'teacherReview' && <TeacherReview />}
            {activeTab === 'childClass' && <ChildClassManagement />}
        </div>
    );
}

export default App;

