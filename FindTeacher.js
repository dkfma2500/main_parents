import React from 'react';
import './FindTeacher.css';

const FindTeacher = () => {
    const teachers = [
        { id: 1, name: 'John Smith', subject: 'Mathematics', experience: '10 years' },
        { id: 2, name: 'Jane Doe', subject: 'English', experience: '8 years' },
        { id: 3, name: 'Emily Johnson', subject: 'Science', experience: '5 years' },
    ];

    return (
        <div className="find-teacher">
            <h2>강사 찾기</h2>
            <div className="teacher-list">
                {teachers.map(teacher => (
                    <div key={teacher.id} className="teacher-card">
                        <h3>{teacher.name}</h3>
                        <p>Subject: {teacher.subject}</p>
                        <p>Experience: {teacher.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindTeacher;