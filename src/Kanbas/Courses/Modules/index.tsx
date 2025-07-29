import React from 'react';
import GreenTick from "./GreenTick";
import ModulesControls from "./ModulesControls";
import { HiOutlineDotsVertical } from "react-icons/hi"; // For ellipsis icon
import { FaPlus } from "react-icons/fa6"; // For plus icon
import { LuGripVertical } from 'react-icons/lu';


export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br />

      <ul className="list-group rounded-0">
        {/* Week 1 Module */}
        <li className="list-group-item p-0 mb-4 fs-5 border rounded-0 shadow-sm"> {/* Added shadow-sm and mb-4 for spacing */}
          {/* Week 1 Header */}
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center"> {/* Added d-flex, align-items-center, text-white */}
            <LuGripVertical className="me-2 text-white" style={{ fontSize: '1.2em' }} /> {/* Drag handle */}
            <span className="flex-grow-1 fw-bold">Week 1</span> {/* Module Title */}
            <div className="d-flex align-items-center ms-auto"> {/* ms-auto pushes content to the right */}
              <GreenTick /> {/* Green Checkmark */}
              <FaPlus className="ms-2 me-2 text-white" style={{ fontSize: '1.2em' }} /> {/* Plus icon */}
              <HiOutlineDotsVertical className="text-white" style={{ fontSize: '1.2em' }} /> {/* Ellipsis icon */}
            </div>
          </div>

          {/* Week 1 Lessons/Content */}
          <ul className="wd-lessons list-group list-group-flush rounded-0"> {/* list-group-flush removes borders */}
            {/* LEARNING OBJECTIVES */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2"> {/* d-flex for internal layout */}
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} /> {/* Drag handle */}
              <span className="wd-title flex-grow-1 fw-bold">LEARNING OBJECTIVES</span> {/* Title with flex-grow-1 */}
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* Introduction to the course */}
            <li className="wd-content-item list-group-item d-flex align-items-center py-2 ps-5"> {/* ps-5 for indentation */}
              <span className="flex-grow-1">Introduction to the course</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* Learn what is Web Development */}
            <li className="wd-content-item list-group-item d-flex align-items-center py-2 ps-5"> {/* ps-5 for indentation */}
              <span className="flex-grow-1">Learn what is Web Development</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* LESSON 1 */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2">
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} /> {/* Drag handle */}
              <span className="wd-title flex-grow-1 fw-bold">LESSON 1</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* LESSON 2 */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2">
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} /> {/* Drag handle */}
              <span className="wd-title flex-grow-1 fw-bold">LESSON 2</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

          </ul>
        </li>

        {/* Week 2 Module */}
        <li className="wd-module list-group-item p-0 fs-5 border rounded-0 shadow-sm"> {/* Added shadow-sm */}
          {/* Week 2 Header */}
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center">
            <LuGripVertical className="me-2 text-white" style={{ fontSize: '1.2em' }} /> {/* Drag handle */}
            <span className="flex-grow-1 fw-bold">Week 2</span>
            <div className="d-flex align-items-center ms-auto">
              <GreenTick />
              <FaPlus className="ms-2 me-2 text-white" style={{ fontSize: '1.2em' }} />
              <HiOutlineDotsVertical className="text-white" style={{ fontSize: '1.2em' }} />
            </div>
          </div>

          {/* Week 2 Lessons/Content */}
          <ul className="wd-lessons list-group list-group-flush rounded-0">
            {/* LEARNING OBJECTIVES */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2">
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} />
              <span className="wd-title flex-grow-1 fw-bold">LEARNING OBJECTIVES</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* LESSON 1 */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2">
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} />
              <span className="wd-title flex-grow-1 fw-bold">LESSON 1</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>

            {/* LESSON 2 */}
            <li className="wd-lesson list-group-item d-flex align-items-center py-2">
              <LuGripVertical className="me-2 text-secondary" style={{ fontSize: '1.2em' }} />
              <span className="wd-title flex-grow-1 fw-bold">LESSON 2</span>
              <div className="d-flex align-items-center">
                <GreenTick />
                <HiOutlineDotsVertical className="ms-2 text-secondary" style={{ fontSize: '1.2em' }} />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}