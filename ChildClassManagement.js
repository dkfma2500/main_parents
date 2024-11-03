import React, { useState } from 'react';
import './ChildClassManagement.css';

const ChildClassManagement = () => {
    const [classes, setClasses] = useState([
        { id: 1, subject: 'Math', date: '2024-11-05', status: 'Completed' },
        { id: 2, subject: 'English', date: '2024-11-10', status: 'Upcoming' },
        { id: 3, subject: 'Science', date: '2024-11-15', status: 'Upcoming' },
    ]);

    return (
        <div className="child-class-management">
            <h2>자녀 수업 관리</h2>
            <div className="class-list">
                {classes.map((classItem) => (
                    <div key={classItem.id} className="class-card">
                        <h3>{classItem.subject}</h3>
                        <p>날짜: {classItem.date}</p>
                        <p>상태: {classItem.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChildClassManagement;
