import React from 'react';
import './curriculatemplate.css';

const courses = [
    {
        name: 'Aerospace Engineering',
        subCourses: [
            'AEROSPACE ENGINEERING(B.TECH 4Y)',
            'AEROSPACE ENGINEERING (M.TECH DUAL 5Y)',
            'AEROSPACE ENGINEERING/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
            'AEROSPACE ENGINEERING/FINANCIAL ENGINEERING',
            'AEROSPACE ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
        ],
    },
    {
        name: 'Agricultural and Food Engineering',
        subCourses: [
            'AGRICULTURAL AND FOOD ENGG.(B.TECH 4Y)',
            'AGR. FOOD ENGG.FOOD PROCESS ENGG. (M.TECH DUAL 5Y)',
            'AGR. FOOD ENGG.FARM MACHINERY AND POWER(M.TECH DUAL 5Y)',
            'AGR. FOOD ENGG.AQUACULTURAL ENGG.(M.TECH DUAL 5Y)',
            'AGR. FOOD ENGG.AGRI SYSTEMS AND MGMT.(M.TECH DUAL 5Y)',
            'AGR. FOOD ENGG. LAND AND WATER RESOURCES ENGG.(M.TECH DUAL 5Y)',
           
           
        ],
    },
    {
        name: 'Bioscience and Biotechnology',
        subCourses: [
            'BIOTECH. AND BIOCHEMICAL ENGG. (B.TECH 4Y)',
            'BIOTECHNOLOGY AND BIOCHEM. ENGG. (M.TECH DUAL 5Y)',
            'CHEMICAL AND MOLECULAR BIOLOGY(2YR. M.SC.)',
            'BIOTECHNOLOGY AND BIOCHEMICAL ENGINEERING/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
            'BIOTECHNOLOGY AND BIOCHEMICAL ENGINEERING/FINANCIAL ENGINEERING',
            'BIOTECHNOLOGY AND BIOCHEMICAL ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
        ],
    },
    {
        name: 'Civil Engineering',
        subCourses: [
            ' CIVIL ENGG. (B.TECH 4Y)',
            ' CIVIL ENGG. STRUCTURAL ENGG. (M.TECH DUAL5Y)',
            ' CIVIL ENGG. TRANSPORTATION ENGG. (M.TECH DUAL5Y)',
            ' CIVIL ENGG. GEOTECHNICAL ENGG. (M.TECH DUAL5Y)',
            ' CIVIL ENGINEERING/FINANCIAL ENGINEERING',
            ' CIVIL ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
        ],
    },
   
    {
        name: 'Chemical Engineering',
        subCourses: [
            'CHEMICAL ENGG. (B.TECH 4Y)',
            'CHEMICAL ENGG.(M.TECH DUAL 5Y)',
            'CHEMICAL ENGINEERING/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
            'CHEMICAL ENGINEERING/FINANCIAL ENGINEERING',
            'CHEMICAL ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
            'CHEMICAL ENGINEERING/PETROLEUM ENGINEERING',
        ],
    },
    {
        name: 'Chemistry',
        subCourses: [
            'CHEMISTRY (M.SC. 5Y)',
            'CHEMISTRY (B.S.4Y)',
            'CHEMISTRY (BS-MS 5Y)',
            'CHEMISTRY (2YR. M.SC.)',
            'CHEMISTRY/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
        ],
    },
    {
        name: 'Computer Science and Engineering',
        subCourses: [
            'COMPUTER SCIENCE AND ENGG. (B.TECH 4Y)',
            'COMPUTER SCIENCE AND ENGG. (M.TECH DUAL 5Y)',
            'COMPUTER SCIENCE AND ENGINEERING/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
            'COMPUTER SCIENCE AND ENGINEERING/FINANCIAL ENGINEERING',
            'COMPUTER SCIENCE AND ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
        ],
    },
    {
        name: 'Education',
        subCourses: [
            ' ITEP MATHEMATICS (B.SC.-B.ED.)',
            ' ITEP CHEMISTRY SECONDARY STAGE II',
            ' ITEP ECONOMICS SECONDARY STAGE II',
            'ITEP PHYSICS (B.SC.-B.ED.)',
            ' ITEP CHEMISTRY (B.SC.-B.ED.)',
            ' ITEP ECONOMICS (B.SC.-B.ED.)',
            'ITEP PHYSICS SECONDARY STAGE OF II',
        ],
    },

    {
        name: 'Ocean Engg and Naval Architecture',
        subCourses: [
            ' OCEAN ENGG.AND NAVAL ARCH. (B.TECH 4Y)',
            ' OCEAN AND NAVAL ARCH / OCEAN ENGG. NAVAL ARCH. (M.TECH DUAL 5Y)',
            ' OCEAN ENGG. AND NAVAL ARCHITECTURE/FINANCIAL ENGINEERING',
            'OCEAN ENGG. AND NAVAL ARCHITECTURE/ENGINEERING ENTREPRENEURSHIP',
            
        ],
    },
    {
        name: 'Mathematics',
        subCourses: [
            'MATHEMATICS AND COMPUTING (M.SC. 5Y)',
            'MATHEMATICS AND COMPUTING (B.S.4Y)',
            'MATHEMATICS AND COMPUTING (BS-MS 5Y)',
            'MATHEMATICS(2YR. M.SC.)',
            'STATISTICS AND DATA SCIENCE (BS-MS 5Y)',
            'MATHEMATICS AND COMPUTING/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
        ],
    },
    {
        name: 'Mining Engineering',
        subCourses: [
            ' MINING ENGG.(B.TECH 4Y)',
            ' MINING.ENGG. (M.TECH DUAL 5Y)',
            ' MINING ENGINEERING/FINANCIAL ENGINEERING',
            ' MINING ENGINEERING/ENGINEERING ENTREPRENEURSHIP',
            '  MINING ENGINEERING/PETROLEUM ENGINEERING',
            ' MINING ENGINEERING SAFETY ENGG. (M.TECH DUAL 5Y)',
          
        ],
    },
    {
        name: 'Physics',
        subCourses: [
            'PHYSICS (M.SC. 5Y)',
            'PHYSICS (B.S.4Y)',
            'PHYSICS (BS-MS 5Y)',
            'PHYSICS(2YR. M.SC.)',
            'PHYSICS/ARTIFICIAL INTELLIGENCE MACHINE LEARNING AND APPLICATIONS',
        ],
    },

];

const Curriculatemplate = () => {
    return (
        <div className="curriculum-container">
            {courses.map((course, index) => (
                <div key={index} className="course-curriculum">
                    <h2 className="course-title-curriculum">{course.name}</h2>
                    <ul className="sub-course-list-curriculum">
                        {course.subCourses.map((subCourse, idx) => (
                            <li key={idx} className="sub-course-curriculum">
                                {subCourse}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Curriculatemplate;
